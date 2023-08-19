✨ Live demo: https://facialrecognitionapp.onrender.com/


## 👀 Overview
The Facial Expression Recognition Bot is a web app designed to detect and interpret facial expressions in real-time. Using machine learning algorithms built on top of TensorFlow JS, the bot can identify a range of emotions across 7 categories:
- angry
- disgusted
- fearful
- happy
- neutral
- sad
- surprised


## ❓ Problem Statement
Being able to detect a person's emotion in real-time could help in a wide range of situations. This is just a simple prototype to show how quickly it can be put together using pure JS on a single page app.

## 💿 Product Overview
The bot captures video feed from the user's webcam and processes each frame to identify facial landmarks. These landmarks are then fed into a pre-trained machine learning model which classifies the user's facial expression. The recognized expression is then displayed on the screen, both as a label on the video feed and as a text descriptor.

**Key Features**
- Real-time Video Feed: Accesses the user's webcam to capture live video.
- Face Detection: Identifies faces in the video feed.
- Expression Analysis: Recognizes and classifies facial expressions.
- Dynamic Feedback: Displays the recognized expression on the video feed and in a separate descriptor area.

## 🖥 Tech & Libraries Used

**Languages:**
HTML: Structure of the web application.
CSS: Styling and layout.
JavaScript: Client-side scripting for back-end real-time processing.

**Libraries:**
face-api.js: A powerful library built on top of TensorFlow.js, enabling the detection and classification of facial expressions.

## 🤖 Machine Learning algorithms used

1. **Tiny Face Detector**

**What**: This is a lightweight, real-time face detector, which is less accurate but faster than the SSD Mobilenet V1 face detector (also available in the library).

**How**: The Tiny Face Detector is based on a quantized MobileNetV1 architecture and employs depthwise separable convolutions. It reduces computational demand, making it suitable for real-time applications and devices with constrained resources.

2. **Face Landmark Detection**

**What**: After face detection, the library identifies facial landmarks, which are specific points on a face, such as the tip of the nose or the center of the eye.

**How**: This uses a pre-trained model to predict the positions of 68 or 5 (depending on the model chosen) points on the face that correspond to these landmarks.

3. **Facial Expression Recognition**

**What**: Recognizes and classifies facial expressions into different emotions.

**How**: This is achieved using a pre-trained model that has been trained on labeled datasets of faces displaying various expressions. The model outputs probability scores for each possible expression, and the highest score indicates the most likely expression.

4. **Face Recognition**

**What**: Distinguishes between different faces, assigning a unique descriptor to each face.

**How**: This uses a pre-trained model based on the FaceNet architecture. The model outputs a 128-dimensional descriptor for each detected face, which can be used to compare and distinguish between different faces.


**SSD Mobilenet V1 Face Detector**

Another face detection model available in the library, which is more accurate but computationally more intensive than the Tiny Face Detector is SSD Mobilenet V1.

This is based on the Single Shot MultiBox Detector (SSD) framework combined with the MobileNetV1 architecture. It predicts bounding boxes for faces in an image.
But considering we had to make detections in real time, we chose a ligher and faster model to make inference within a few miliseconds.


## ⏯ Getting Started
Clone the repository or download the source code.
Navigate to the project directory and open index.html in a browser to run the application.
Grant permission to access the webcam.
