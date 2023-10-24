import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          main
        </main>
      </div>
    </div>
  )
}

export default App

