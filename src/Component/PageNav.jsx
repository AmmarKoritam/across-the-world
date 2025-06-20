import { NavLink } from "react-router-dom";

import Logo from "../Component/Logo";

import styles from "../Component/PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
