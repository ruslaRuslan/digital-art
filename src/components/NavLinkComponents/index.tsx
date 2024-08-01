import { NavLink } from "react-router-dom";
import styles from "../../styles.module.css";
import cls from "classnames";

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
        cls(isActive ? styles.link : styles.defaultLink, "hoverEffect")
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkComponents;
