# **React Native + Expo mobile App** 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

npx create-expo-app@latest <app_name>

app name  QuizBoxMobile3

Create **Quiz game** using the powerful combination of [React Native](https://reactnative.dev/), and additional tools like **Expo Router**, for a seamless, customizable, and modern development experience.

This challenge demonstrates how to build engaging visual of an interactive quiz game in your Expo project with a fully styled and routed application setup.

## **🌟 Features**

- **Expo Router Integration**: Navigate between screens with the robust, file-based routing system from Expo Router.

- **Customizable and Extendable**: Modify styles and interactions to match your needs.

## **🚀 Quick Start**

Clone this example or create a new project using the command below:

Installing:

```sh
npx create-expo-app blackbox-vision-challenge
```

### **Steps to Run the Example**

1. **Install Dependencies**  
   Navigate to your project directory and install required packages:

   ```sh
   cd your-project-name
   
   npm install 
   ```    

2. **Start the Development Server**  
   Launch the Expo development server:
   ```sh
   npx expo  (Recomended: to use with qr scanning, use option "--tunnel" to use Ngrok tunneling)
   ```
3. **Explore and Customize**  
   Navigate through the app using Expo Router and modify screens, components, styles, and routes.

## **📚 Tech Stack and Tools**

### **Expo Router**

- A file-based routing navigation system for Expo apps.
- Simplifies navigation with nested routes.

**Learn More**: [https://docs.expo.dev/router/introduction/](https://docs.expo.dev/router/introduction/)

**Learn More**:

## **🛠️ Customization Tips**

- **Routing**: Modify the routes or create additional screens in the `app/` directory using Expo Router.
- **Styling**: inline traditional for React Native
- **State Management**: Integrate tools like Redux for advanced global state handling.


**Challenge files Structure:**

```
📂 BLACKBOX-VISION-CHALLENGE
QuizBoxMobile3/
│-- 📂src
│   │-- 📂app/
│   │   │-- 📂(tabs)/                # Folder for the tab layout
│   │   │   │-- 📂question/          # Question screen
│   │   │   │   ├── index.tsx
│   │   │   │-- 📂results/           # Results screen
│   │   │   │   ├── index.tsx
│   │   │   ├── _layout.tsx            # # Tabs layout
│   │   │-- index.tsx                 # Main entry screen
│   │   │-- _layout.tsx               # Root layout (Stack navigation)
│   │-- 📂assets/                     # Static assets like images and fonts
│   │-- 📂components/                 # Reusable UI components
│   │-- 📂actions                     # Redux actions
│   │-- 📂store/                      # Redux config (reducers, slices, etc.).
│   │-- 📂types/                      # TypeScript  for typing
│   │-- 📂utils/                      # Utility functions
│-- global.css                  # global styles
│-- app.json                    # Expo configuration
│-- tsconfig.json               # TypeScript configuration
│-- babel.config.js             # Babel configuration
│-- metro.config.js             # Metro bundler configuration
│-- .env                        # environment variables
│-- .gitignore                  # Files to ignore in Git
│-- nativewind-env.d.ts         # NativeWind styles bridge between Tailwind and React Native
│-- tailwind.config             # TailWind config file
│-- README.md                   # Readme File for Instructions and documentation
```

**Necessary dependencies:**

You have to install Android SDK for andriod emulator, or Xcode ios emulator for macOS. and/or
you have to install Expo Go for android or ios in your mobile phone

1.- to start with Expo Go app  with web press(w), andriod(press a) or scanning  a Qr code(scan qr code after start Expo app with "npx expo start") , 

npx expo start --tunnel  (make sure to have granted permissions to Ngrok in your Antivirus or FireWall)

2.- to start with cleared cache

```bash
npx expo start --clear
```
to prebuild the andriod project

```bash 
npx expo prebuild
```
to build the android project folder and .apk installer
```bash
npx expo run:andriod  or npm expo run:ios
```


**App Screens Images**

<table>
  <tr>
    <td><img src="./src/assets/images/Captura%20de%20pantalla%202025-02-09%20211054.png" width="130"></td>
    <td><img src="./src/assets/images/Captura%20de%20pantalla%202025-02-09%20211108.png" width="130"></td>
    <td><img src="./src/assets/images/Captura%20de%20pantalla%202025-02-09%20211304.png" width="130"></td>
  </tr>
</table>
