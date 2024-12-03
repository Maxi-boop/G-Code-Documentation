import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./../assets/SASS/module/NavegationItem.module.scss";
interface Props {
  automaticHighlight: boolean;
  navItem: string;
  svgNAME: any | undefined;
  navTo: string;
}
function NavegationItem(props: Props) {
  const [cursorOver, setCursorOverValue] = useState<Boolean>(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setCursorOverValue(true)}
      onMouseLeave={() => setCursorOverValue(false)}
    >
      {props.automaticHighlight || cursorOver == true ? (
        <div
          className={`${styles.navegationBarHoverOver} ${styles.navegationBarSvgShow} ${styles.navegationBarArea}`}
        >
          <NavLink to={props.navTo} end>
            {props.navItem}
          </NavLink>
        </div>
      ) : (
        <div
          className={`${styles.navegationBarNotHoverOver} ${styles.navegationBarArea}`}
        >
          <NavLink to={props.navTo} end>
            {props.navItem}
          </NavLink>
        </div>
      )}
      {cursorOver == true ? (
        <div className={styles.svgShow}>{props.svgNAME}</div>
      ) : <div className={styles.svgHidden}>{props.svgNAME}</div>}
    </div>
  );
}
export default NavegationItem;
