# **React Flow with Expo DOM Components Example**

![React Flow with Expo DOM Components Example](https://github.com/user-attachments/assets/45459f24-3366-4ea8-809c-325d4b343f46)

Create **interactive flowcharts and diagrams** using the powerful combination of [React Flow](https://reactflow.dev/), [Expo DOM Components](https://docs.expo.dev/guides/dom-components/), and additional tools like **Expo Router**, **Tailwind CSS**, and **Nativewind** for a seamless, customizable, and modern development experience.

This example demonstrates how to build engaging visual workflows in your Expo project with a fully styled and routed application setup.

## **🌟 Features**

- **Interactive Flowcharts**: Leverage React Flow's versatile library to design and manage node-based workflows.
- **Cross-Platform Ready**: Use Expo DOM Components for seamless web-based Expo integration.
- **Expo Router Integration**: Navigate between screens with the robust, file-based routing system from Expo Router.
- **Tailwind CSS with Nativewind**: Style your components efficiently using Tailwind CSS and Nativewind for consistent design across platforms.
- **Customizable and Extendable**: Modify styles, nodes, edges, and interactions to match your needs.

## **🚀 Quick Start**

Clone this example or create a new project using the command below:

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

```
📂 QUIZBOXMOBILE3
├── app.json
├── babel.config.js
├── global.d.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── 📂 src
│   ├── global.css
│   ├── 📂 app
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   ├── 📂 components
│   │   ├── flow.css
│   │   ├── flow-chart.tsx
│   │   ├── flow-edge.tsx
│   │   ├── flow-node.tsx
│   ├── 📂 screens
│   │   ├── QuestionScreen.tsx
│   │   ├── ResultsScreen.tsx
│   ├── 📂 store
│   │   ├── index.ts
│   │   ├── reducers.ts
│   ├── 📂 actions
│   │   ├── index.ts
│   ├── 📂 assets
│   │   ├── logo.png
│   ├── App.tsx
```

npm install axios html-entities react-redux @reduxjs/toolkit react-navigation @react-navigation/native @react-navigation/stack
npm install react-native-dotenv --save-dev
npx expo install react-native-reanimated