import { NavLink } from "react-router-dom";
import styles from "../../styles.module.css";

interface NavLinkForPhoneComponentsProps {
  children: any;
  to: any;
}

const NavLinkForPhoneComponents: React.FC<NavLinkForPhoneComponentsProps> = ({
  children,
  to,
}) => {
  return (
    <NavLink
      style={{ padding: 10, borderRadius: 15 }}
      to={to}
      className={({ isActive }) =>
        isActive ? styles.linkforMobile : styles.defaultLink
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkForPhoneComponents;
