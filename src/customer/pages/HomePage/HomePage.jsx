import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";

function HomePage() {
  return (
    <div>
      <MainCarousel />

      {/* Other Section */}
      <div className="py-20 px-5 lg:px-10 space-y-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dresses"}/>

    
      </div>
    </div>
  );
}

export default HomePage;
