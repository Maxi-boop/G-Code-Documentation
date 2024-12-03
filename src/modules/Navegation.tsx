import styles from "./../assets/SASS/module/Navegation.module.scss";
import logo from "./../assets/IMG/stuypulselogo.png";
import NavegationItem from "./NavegationItem";
/* interface Props {
  current: string;
} */

export default function Navegation(/*props: Props*/) {
  /*const [cursorOver, setCursorOver] = useState<Boolean[]>([false]);
  const updateCursorOverValue = (index: number, newValue: boolean) => {
    setCursorOver((prevValues: Boolean[]): Boolean[] => {
      let newItems: Boolean[] = [...prevValues];
      newItems[index] = newValue;
      return newItems;
    });
    console.log(cursorOver);
  }; */
  return (
    <div className={styles.navegationContainer}>
      <div className={styles.mobileNavegation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <nav className={styles.navegation}>
        <a href="https://stuypulse.com/" target="_blank">
          <img src={logo} alt="logo" width="32" height="32" />
        </a>
        <div className={styles.divider}></div>
        <NavegationItem
          automaticHighlight={false}
          navItem={"Home"}
          svgNAME={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              //fill="white"
              width="16"
              height="16"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          }
          navTo="/gcode/"
        />
        <div className={styles.divider}></div>
        <NavegationItem
          automaticHighlight={false}
          navItem={"Documentation"}
          svgNAME={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              //fill="currentcolor"
              className="bi bi-book-half"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
          }
          navTo="/gcode/documentation"
        />
        <div className={styles.divider}></div>
        <NavegationItem
          automaticHighlight={false}
          navItem={"Designer"}
          svgNAME={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              //fill="white"
              className="bi bi-magic"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z" />
            </svg>
          }
          navTo="/gcode/designer"
        />
      </nav>
    </div>
  );
}
