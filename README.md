# RN Test Task

## How to use

**Step 1:**

Download or clone this repo by using the link below:

```
git clone https://github.com/akhilmorya/rn-test-task.git
```

**Step 2:**

Go to project root and execute the following command in console to get the required dependencies: 

```
npm install 
```

**Step 3:**

**For iOS only:**

```
cd ios && pod install
```

**Step 4:**

To run the app on device or simulator, execute the following command.

For android:
```
react-native run-android
```

For iOS:
```
react-native run-ios
```

## Commit & push ``

husky added in the package, To push the code on the repo you need execute the following command.

```
yarn validate
eslint --fix .
```
## Test Login credentials ``
```
email/password - admin1234/1234
email/password - guest1234/1234
```

## Note
Incase pod install doesn't work then please delete Podfile.lock from ios folder and then try again pod install