import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

interface NavLinkComponentsProps {
  children: any;
  to: any;
}

const NavLinkComponents: React.FC<NavLinkComponentsProps> = ({
  children,
  to,
}) => {
  return (
    <NavLink
      style={{ padding: 10, borderRadius: 15 }}
      to={to}
      className={({ isActive }) =>
        isActive ? styles.link : styles.defaultLink
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkComponents;
