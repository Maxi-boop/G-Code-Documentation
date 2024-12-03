import { useEffect, useRef } from "react";
import styles from "./../assets/SASS/module/Hero.module.scss";
interface Props {
  title: string;
  paragraph: string | undefined;
  background: string;
  other: any;
}
function Hero(props: Props) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.setProperty(
        "--background-image",
        `url(${props.background})`
      );
    }
  }, []);
  return (
    <article className={styles.heroContainer} ref={heroRef}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <div className={styles.header}>
            <h1>{props.title}</h1>
          </div>
          <div className={styles.paragraph}>
            <p>{props.paragraph}</p>
          </div>
          <div className={styles.other}>{props.other}</div>
        </div>
      </div>
    </article>
  );
}
export default Hero;
