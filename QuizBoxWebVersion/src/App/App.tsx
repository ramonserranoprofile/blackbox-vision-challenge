// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from '../store'; // Asegúrate de que la ruta sea correcta
import Question from '../components/Question';
import Results from '../components/Results';
import logo from "../assets/logo.png";
import styles from "./App.module.scss";


function App() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="BlackBox Vision" src={logo} width={480} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Question />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </Provider>
    </main>
  );
}

export default App;  