import React, { useEffect } from "react";
import { useState } from "react";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil.js"
import "./index.css"

const PageCariMobil = () => {
    const [isBlur, setBlur] = useState(false)
    
    useEffect(() => {
        if(!isBlur) {
            console.log("bukan")
        } else {
            console.log("blur")
        }
    }, [isBlur])

 return (
    <div className="cariMobilPages">
      <SectionHeroBannerCariMobil /> <SectionFormCariMobil 
        onBlur={() => setBlur(!isBlur)} 
        ofBlur={() => setBlur(false)}
        />
    </div>
  );
};

export default PageCariMobil;
