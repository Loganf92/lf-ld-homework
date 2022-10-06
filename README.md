# Logan Fraser's LaunchDarkly Homework Assignment

## App Description
This is a small React app designed to showcase the basic functionality of LaunchDarkly's Feature Flagging.

## Feature Flags
Feature Flags were implemented on several parts of the application.
In a real world example, a website may look at enhancing it's feature set and need a method to test these new releases.

By controlling the release of these new features with Feature Flags, developers will be able to understand the impact of the feature to the website in real time, and quickly turn it on/off as needed.



I have implemented several feature flags, utilising both Boolean and String variations.
The Dark Mode feature is currently only available for users with a 'gmail.com' email address 
![image](https://user-images.githubusercontent.com/9441912/194202787-ffae4689-e426-49c2-9382-85722180d732.png)


## Important Notes
After downloading the repository from Git, you will need to install dependencies for the application

### `npm install`

The LaunchDarkly Client Side ID and User Details need to be provided in the /src/App.js file
![image](https://user-images.githubusercontent.com/9441912/194202891-6bd9faa2-a97b-40c9-93a2-ccfef38e099e.png)


## Setup of LaunchDarkly

For this project, 4 Feature Flags need to be created in LaunchDarkly.

![image](https://user-images.githubusercontent.com/9441912/194204969-52c34736-5cd1-4872-950b-df47bb5fc96d.png)



### darkModeToggle
![image](https://user-images.githubusercontent.com/9441912/194204645-fe33f52a-8778-4769-b213-8745ad9cde46.png)
![image](https://user-images.githubusercontent.com/9441912/194206129-73317cd4-7737-482d-ab86-8b68d1a98f7c.png)


### linkedIn2
![image](https://user-images.githubusercontent.com/9441912/194205031-ad715501-6a90-4522-afe8-f4d686f3dede.png)
![image](https://user-images.githubusercontent.com/9441912/194206095-8fdd7070-500c-4fa4-a0f4-9c855d87dbac.png)


### bottomText
![image](https://user-images.githubusercontent.com/9441912/194205064-d5dc7e18-6303-4690-9166-fd24238023d2.png)
![image](https://user-images.githubusercontent.com/9441912/194206061-ef4046c2-4407-479c-8a52-95c116399fb3.png)


### imageSwitch
![image](https://user-images.githubusercontent.com/9441912/194205096-b6b31d15-e083-4e16-a1e1-f19dacf07743.png)
![image](https://user-images.githubusercontent.com/9441912/194206021-3698411c-562c-4dd8-98b0-ed23cb1e2060.png)




## App Screenshots

### Screenshot 1

Shows the base application with all feature flags off

![React_App_and_Feature_flags_and_W-A_BP_s_Tool_vs_People__1_](https://user-images.githubusercontent.com/9441912/194189639-cf5bc5de-a902-49c7-bdcb-b04f2a9641da.png)

### Screenshot 2

Shows the base application with all feature flags on

![Feature_flags_and_React_App_and_W-A_BP_s_Tool_vs_People__2_](https://user-images.githubusercontent.com/9441912/194189646-bc14ac7b-26a7-4a45-88bc-aca4a7cedb30.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
