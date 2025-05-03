import { Outlet } from "react-router-dom";

import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./Sidebar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRight {new Date().getFullYear()} by Across the world Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
