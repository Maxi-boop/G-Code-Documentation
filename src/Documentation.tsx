import { useEffect } from "react";
import Button from "./modules/Button";
import Footer from "./modules/Footer";
import Hero from "./modules/Hero";

function Documentation() {
  useEffect(() => {
    document.title = "G-Code | Documentation";
  }, []);
  return (
    <>
      <Hero
        title="Documentation"
        paragraph="Documentation is currently being worked on! Please be patient as we set it up for our website! Thank you!"
        background="https://t3.ftcdn.net/jpg/06/18/28/28/360_F_618282848_naTmVhLpPWPO7R35W15ZL4H361vfFnCB.jpg"
        other={
          <Button
            text="Go to documentation (PRIVATE)"
            href="https://docs.google.com/document/d/1f7QpHuf37OtXqOxBodhSMgc-vVScvHCfAVDgCg6dXn4/edit?usp=sharing"
            hslvalue="39, 53%, 52%"
            color="black"
            disabled={false}
          />
        }
      />
      <Footer />
    </>
  );
}
export default Documentation;
