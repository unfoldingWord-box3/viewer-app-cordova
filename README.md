
Create-React-App and Cordova making it possible to get a web app to run natively on Web/iOS/OSX/Android/Windows.

To get the dev server running:
1. Make sure you have node.js, npm, and cordova installed.
1. Run: `npm i` to install app dependencies.
1. Run: `npm start` to launch dev server and view in browser.

To get OSX native app to launch in dev mode:
1. Run: `npm run build` to compile and copy changes to platforms.
1. Run: `cordova run osx` to launch.

To get iOS native app to launch in X-Code:
1. Run: `npm run build` to compile and copy changes to platforms.
1. Open `./platforms/ios/` X-Code and run simulator.
