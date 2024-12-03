import { useEffect, useRef } from "react";
import styles from "./../assets/SASS/module/Button.module.scss";
interface Props {
  text: string;
  href: string;
  hslvalue: string;
  color: "black" | "white";
  disabled: boolean;
}
function Button(props: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let stylesA = {
    cursor: 'pointer',
  };
  if(props.disabled == true){
    stylesA.cursor = 'not-allowed';
  }

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.setProperty(
        "--hslvalue",
        `hsl(${props.hslvalue})`
      );
      buttonRef.current.style.setProperty("--color", props.color);
    }
  }, []);
  return (
    <a href={props.href}>
      <button disabled={props.disabled} id={styles.button} ref={buttonRef} style={stylesA}>
        {props.text}
      </button>
    </a>
  );
}
export default Button;
