# Coins

![](./Coins.gif)

This repository contains the reimplementation of a coins tab of a Coins application. All of the UI components were not based on any UI library (except utility tools like snackbar and action sheet).

The project includes fully configured eslint, typescript and prettier rules, wrapped all together with husky git hooks to keep the code much cleaner.

## Used libraries

- React native 0.64.0
- React Context API
- Typescript 4.2.4
- Husky + lint-staged
- @coinpaprika/api-nodejs-client 1.2.0

### Additional

- react-native-safe-area-context 3.2.0
- react-native-snackbar 2.4.0
- react-native-svg 1.2.3
- @expo/react-native-action-sheet 3.9.0

## Known issues

- Image with an uri source doesn't work on iOS 14+
- Charts are facing the network issues
