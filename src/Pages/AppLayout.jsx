import { lazy } from "react";

const SideBar = lazy(() => import("../Component/SideBar"));
const Map = lazy(() => import("../Component/Map"));
const User = lazy(() => import("../Component/User"));

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
