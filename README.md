# **React Native + Expo Mobile App** 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

npx create-expo-app@latest

app name  QuizBoxMobile
Install dependencies

```bash
npm install expo install react-redux @reduxjs/toolkit
```

```bash
npx expo install   expo install react-redux @reduxjs/toolkit
```

Create **Quiz game** using the powerful combination of [React Native](https://reactnative.dev/), [Expo DOM Components](https://docs.expo.dev/guides/dom-components/), and additional tools like **Expo Router**, **Tailwind CSS**, and **Nativewind** for a seamless, customizable, and modern development experience.

This example demonstrates how to build engaging visual workflows in your Expo project with a fully styled and routed application setup.

## **🌟 Features**

- **Interactive Flowcharts**: Leverage React Flow's versatile library to design and manage node-based workflows.
- **Cross-Platform Ready**: Use Expo DOM Components for seamless web-based Expo integration.
- **Expo Router Integration**: Navigate between screens with the robust, file-based routing system from Expo Router.
- **Tailwind CSS with Nativewind**: Style your components efficiently using Tailwind CSS and Nativewind for consistent design across platforms.
- **Customizable and Extendable**: Modify styles, nodes, edges, and interactions to match your needs.

## **🚀 Quick Start**

Clone this example or create a new project using the command below:

Installing:

```sh
npx create-expo-app -e with-react-flow
```

### **Steps to Run the Example**

1. **Install Dependencies**  
   Navigate to your project directory and install required packages:

   ```sh
   cd your-project-name
   yarn
   ```

2. **Start the Development Server**  
   Launch the Expo development server:
   ```sh
   npx expo
   ```
3. **Explore and Customize**  
   Navigate through the app using Expo Router and modify the provided flowchart components, styles, and routes.

## **📚 Tech Stack and Tools**

### **React Flow**

- Powerful library for building node-based workflows.
- Highly customizable and interactive.

**Learn More**: [https://reactflow.dev/docs/](https://reactflow.dev/docs/)

### **Expo DOM Components**

- Integrates React DOM APIs for web projects in Expo.
- Makes it easy to build web-compatible apps.

**Learn More**: [https://docs.expo.dev/guides/dom-components/](https://docs.expo.dev/guides/dom-components/)

### **Expo Router**

- A file-based routing system for Expo apps.
- Simplifies navigation with nested routes.

**Learn More**: [https://docs.expo.dev/router/introduction/](https://docs.expo.dev/router/introduction/)

### **Tailwind CSS & Nativewind**

- Tailwind CSS enables utility-first styling for rapid UI development.
- Nativewind bridges Tailwind with React Native for consistent styling across platforms.

**Learn More**:

- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- Nativewind: [https://www.nativewind.dev/](https://www.nativewind.dev/)

## **🛠️ Customization Tips**

- **Routing**: Modify the routes or create additional screens in the `app/` directory using Expo Router.
- **Styling**: Edit Tailwind classes or configure `tailwind.config.js` to customize themes.
- **Node Types**: Extend `nodeTypes` and `edgeTypes` in React Flow to create custom flowchart components.
- **State Management**: Integrate tools like Zustand or Redux for advanced state handling.


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

npm install axios html-entities react-redux @reduxjs/toolkit react-navigation @react-navigation/native @react-navigation/stack react-native-reanimated

npm install react-native-dotenv @types/react-native --save-dev
