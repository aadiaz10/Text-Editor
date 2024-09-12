# Text-Editor
Module 19
deployed url: https://text-editor-jtzk.onrender.com
repo: https://github.com/aadiaz10/Text-Editor

Text Editor PWA
A Progressive Web Application (PWA) that functions as a text editor. It works offline, saves data in IndexedDB, and is installable on the user's device.

Features
Offline functionality: Works without an internet connection.
Data Persistence: Saves data using IndexedDB.
Installable: Users can install the app on their device.
PWA Compliant: Includes a service worker and a Web App Manifest.
Technologies Used
Node.js
Express
Webpack
IndexedDB (idb package)
Babel
Service Worker (Workbox)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/aadiaz10/Text-Editor

bash
Copy code
npm install
Build the app:

bash
Copy code
npm run build
Start the server:

bash
Copy code
npm start
Usage
Open the app in your browser at http://localhost:3000.
Type in the text editor and data will be saved automatically.
To install the app, click the "Install" button.
Deployment
The app is deployed using Render or any other hosting platform that supports
