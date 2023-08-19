## 👀 Overview
The Facial Expression Recognition Bot is a web app designed to detect and interpret facial expressions in real-time. Using machine learning algorithms packaged in JS, the bot can identify a range of emotions across 7 categories.

## ❓ Problem Statement
Being able to detect a person's emotion in real-time could help in a wide range of situations. This is just a simple prototype to show how quickly it can be put together using pure JS on a single page app.

## 💿 Product Overview
The bot captures video feed from the user's webcam and processes each frame to identify facial landmarks. These landmarks are then fed into a pre-trained machine learning model which classifies the user's facial expression. The recognized expression is then displayed on the screen, both as a label on the video feed and as a text descriptor.

**Key Features**
- Real-time Video Feed: Accesses the user's webcam to capture live video.
- Face Detection: Identifies faces in the video feed.
- Expression Analysis: Recognizes and classifies facial expressions.
- Dynamic Feedback: Displays the recognized expression on the video feed and in a separate descriptor area.

## 🤖 Tech & Libraries Used

**Languages:**
HTML: Structure of the web application.
CSS: Styling and layout.
JavaScript: Client-side scripting for back-end real-time processing.

**Libraries:**
face-api.js: A powerful library built on top of TensorFlow.js, enabling the detection and classification of facial expressions.


## ⏯ Getting Started
Clone the repository or download the source code.
Navigate to the project directory and open index.html in a browser to run the application.
Grant permission to access the webcam.
