import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <header className={styles.header}>
        <img
          src="/white-logo.png"
          alt="Logo Domina"
          className={styles.logo}
        />
        <h2 className={styles.title}>USUARIOS</h2>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
