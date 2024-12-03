import Button from "./modules/Button";
import Hero from "./modules/Hero";
import styles from "./assets/SASS/pages/Home.module.scss";
import { RefObject, useEffect, useRef } from "react";
import Footer from "./modules/Footer";
import { NavLink } from "react-router";
function Documentation() {
  useEffect(() => {
    document.title = "G-Code | Home";
  }, []);
  return (
    <NavLink to="/documentation" end>
      <Button
        text="Documentation"
        href=""
        hslvalue="39, 53%, 52%"
        color="black"
        disabled={false}
      />
    </NavLink>
  );
}
function Designer() {
  return (
    <NavLink to="/designer" end>
      <Button
        text="Designer"
        href=""
        hslvalue="39, 53%, 52%"
        color="black"
        disabled={false}
      />
    </NavLink>
  );
}

function ButtonGroup(props: { useRef: RefObject<HTMLDivElement> }) {
  return (
    <>
      <Documentation />
      <Designer />
      <div
        onClick={() =>
          props.useRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <Button
          text="Learn More"
          href="#learn-more"
          hslvalue="204 100% 0%"
          color="white"
          disabled={false}
        />
      </div>
    </>
  );
}
function App() {
  const learnMore = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className={styles.gapper}>
        <Hero
          title="G-Code Manual"
          paragraph="Everything you need to know about G-Coding the BridgePort SX Series I, Two Axes Mill"
          background="https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNuYyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D"
          other={<ButtonGroup useRef={learnMore} />}
        />
        <div ref={learnMore}>
          <Hero
            title="Learning Resources"
            paragraph="Our documentation offers detailled pointers on where to begin with your g-code journey teaching you 
        multiple important commands, nuances, and more. "
            background="https://t3.ftcdn.net/jpg/02/63/47/98/360_F_263479896_zJFz0e7N4rgJEdQ3qW7LT1QJ6MGHTAmJ.jpg"
            other={<Documentation />}
          />
        </div>
        <Hero
          title="Designer (Currently In Progress)"
          paragraph="Create simple designs with our g-code creator. Either make a pre-built 
        item or create what your heart desires. This is meant for creating simple, quick, but amazing
        creations on the mill."
          background="https://3axis.co/user-images/pokqvjoj.jpg"
          other={<Designer />}
        />
      </div>
      <Footer />
    </>
  );
}
export default App;
