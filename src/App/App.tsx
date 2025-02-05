import * as React from "react";
import Question from "../components/Question";
import Results from "../components/Results";
import logo from "../assets/logo.png";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="BlackBox Vision" src={logo} width={480} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>
      <section className={styles.content}>
        <Question />
        <Results />
      </section>
    </main>
  );
};

export default App;
