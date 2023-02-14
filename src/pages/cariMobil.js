import React, { useEffect } from "react";
import { useState } from "react";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil.js"
import "./index.css"

const PageCariMobil = () => {
    
 return (
    <div className="cariMobilPages">
      <SectionHeroBannerCariMobil /> <SectionFormCariMobil 
        
        />
    </div>
  );
};

export default PageCariMobil;
