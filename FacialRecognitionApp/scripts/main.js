async function setupWebcam() {
  const video = document.getElementById('video');

  // Get access to the webcam
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;

  return new Promise((resolve) => {
      video.onloadedmetadata = () => {
          resolve(video);
      };
  });
}

async function detectFace(video) {
  const canvas = faceapi.createCanvasFromMedia(video);
  // Position the canvas correctly relative to the video
  canvas.style.position = 'absolute';
  canvas.style.top = video.offsetTop + 'px';
  canvas.style.left = video.offsetLeft + 'px';

  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    // Draw the detections (like the bounding box) and landmarks as usual
    const context = canvas.getContext('2d');
    resizedDetections.forEach(result => {
        context.strokeStyle = 'red';  // Color of the bounding box
        context.lineWidth = 2;  // Width of the bounding box lines
        const { x, y, width, height } = result.detection.box;
        context.strokeRect(x, y, width, height);
    });


    // Now, customize and draw the expression label for each detected face
    resizedDetections.forEach(result => {
        const { x, y } = result.detection.box;
        const bestMatch = result.expressions.asSortedArray()[0];
        const text = `${bestMatch.expression} (${Math.round(bestMatch.probability * 100)}%)`;

        // Customize the label appearance
        const context = canvas.getContext('2d');
        context.font = '24px Arial';  // Adjust font size and family as needed
        context.fillStyle = 'white';  // Font color
        context.fillText(text, x, y > 30 ? y - 10 : 30);

        // Update the expressionText element with the detected expression
        const expressionTextElement = document.getElementById('expressionText');
expressionTextElement.textContent = bestMatch.expression.charAt(0).toUpperCase() + bestMatch.expression.slice(1);

        // Clear existing expression classes
        ['neutral', 'happy', 'surprised', 'disgusted', 'sad', 'angry'].forEach(cls => {
          expressionTextElement.classList.remove(cls);
      });

      // Set the class for the detected expression
      expressionTextElement.classList.add(bestMatch.expression);

    });

    // ... rest of the code inside setInterval ...

}, 100);

}

async function loadModels() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('./models');
  await faceapi.nets.faceRecognitionNet.loadFromUri('./models');
  await faceapi.nets.faceExpressionNet.loadFromUri('./models');
}

async function start() {
  await loadModels();
  const video = await setupWebcam();
  video.play();
  detectFace(video);
}

start();
