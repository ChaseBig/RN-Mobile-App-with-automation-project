# React Native Mobile App with Mobile Automated Test Framework (Detox)

Installation Details: 

1) Clone repo

2) Install dependencies
`cd KnockProject`
`npm install` 
`yarn` 

3) Navigate to https://expo.io/tools#client to download a built version of Expo that Detox can use to hook into. 
  Click the “Download IPA” link. Expand the downloaded archive, then change the name of the folder to “Exponent.app”. Create a bin folder in the root of the project and then move “Exponent.app” into it.

4) Get the app running locally 
Run `yarn ios` to start the iOS simulator locally 

5) Open another terminal instance once the simulator has started
 - `cd KnockProject` again in this additional terminal
 - run `detox test` to kick off the e2e UI test suite
 
6) To run unit test suite
 - `yarn test` in the terminal instance that is not running the simulator.
 - ***NOTE*** Unit test suite is still WIP
 
 **NOTE**
 Expo apps do not support running the camera from the iOS simulator. If you download the Expo iOS app, you can run the app on your local iPhone device after making an account and publishing the project to your project list within the Expo app. Once you have the app running locally, you can access the camera feature. 
