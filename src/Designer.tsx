import { useEffect } from "react";
import Footer from "./modules/Footer";
import Hero from "./modules/Hero";

function Designer(){
    useEffect(( ) => {
        document.title = 'G-Code | Designer'
    },[])
    return(
        <>
            <Hero
                title="Designer"
                paragraph="Designer is currently being developed. It will be released by January, 2025. Hope you're excited!"
                background="https://wallpapercave.com/wp/wp10869032.jpg"
                other={null}
                />
                <Footer />
        </>
    );
}
export default Designer;