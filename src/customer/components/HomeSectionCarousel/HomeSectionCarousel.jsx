import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Button } from "@mui/material";
import { mens_kurta } from "../../../Data/mens_kurta";
import "react-alice-carousel/lib/alice-carousel.css";
function HomeSectionCarousel({ data, sectionName }) {

  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex);
  const carouselRef = useRef(null);
  // console.log(data);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  function slidePrev() {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  }

  function slideNext() {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  }

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="relative shadow-sm px-4 lg:px-8 ">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          ref={carouselRef}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          responsive={responsive}
        />
      </div>
      {activeIndex !== items.length - 5 && (
        <Button
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      )}

      {activeIndex !== 0 && (
        <Button
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
          }}
          aria-label="previous"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      )}
    </div>
  );
}

export default HomeSectionCarousel;
