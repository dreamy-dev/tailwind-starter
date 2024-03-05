import { useState, useMemo, useEffect } from "react";


import { useScrollImageSequenceFramerCanvas } from "../../hooks";

const createImage = (src) => {
  if (typeof document !== "undefined") {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }
};

const handleDrawCanvas = (
    img,
    ctx
  ) => {
    const canvas = ctx.canvas;
    const widthRatio = canvas.width / img.width;
    const heightRatio = canvas.height / img.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;
    // console.log(widthRatio, heightRatio);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerX,
      centerY,
      img.width * ratio,
      img.height * ratio
    );
  };

  const ImageSequence = ({ category }) => {
    const keyframes = useMemo(
      () =>
        [...new Array(299)].map((_, i) =>
          createImage(
            `/png-trains-carousel/Stadler_Carousel_${i
              .toString()
              .padStart(3, "0")}.png`
          )
        ),
      []
    );

    const [prevCategoryNumber, categoryNumberChange] = useState(category);
    console.log("prevCategoryNumber ", category, prevCategoryNumber);

  const [animationProgress, animationProgressChange] = useState(false);
  const [progress, canvasRef, renderImage] = useScrollImageSequenceFramerCanvas(
    {
      onDraw: handleDrawCanvas,
      keyframes: keyframes,
    }
  );

  let start;
  let done = false; 
let x = Number(prevCategoryNumber) / 3;
let c = Number(category) / 3;
const changeCarouselPositions = (timeStamp) => {
    const singleSlideProgress = 1 / 100;
    let count;
    if (start === undefined) {
      start = Number(prevCategoryNumber) / 3;
    }
    if (c > x) {
      const categoryDifference = Number(category) - Number(prevCategoryNumber);
      const progressDifference = categoryDifference / 3 + Number(prevCategoryNumber) / 3;
      count = start + singleSlideProgress; 
      renderImage(count)
      start = start + singleSlideProgress;
      if (start >= progressDifference) {
        done = true;
        categoryNumberChange(category)
      } else {
        if (!done) {
          window.requestAnimationFrame(changeCarouselPositions);
        }
      }
      console.log("elapsed ",prevCategoryNumber, category, progressDifference, count, start)
    }

    
    if (c < x) {
      const categoryDifference = Number(prevCategoryNumber) - Number(category);
      const progressDifference = Number(prevCategoryNumber) / 3 - categoryDifference / 3 ;
      count = start - singleSlideProgress; 
      renderImage(count)
      start = start - singleSlideProgress;
      if (start <= progressDifference) {
        done = true;
        categoryNumberChange(category)
      } else {
        if (!done) {
          window.requestAnimationFrame(changeCarouselPositions);
        }
      }
      console.log("elapsed ",prevCategoryNumber, category, progressDifference, count, start)
    }
    // const elapsed = timeStamp - start;
  
   
      // Math.min() is used here to make sure the element stops at exactly 200px
      // console.log("count", count)
     
     
      
   
  
    // if (elapsed < 4000) {
    //   // Stop the animation after 2 seconds
    //   previousTimeStamp = timeStamp;
      
    // }
    // let x = Number(prevCategoryNumber) / 3;
    // let c = Number(category) / 3;

    // let timeDifference = c - x;
    // const time = 500
    // var i = 0
    
    // let slideDifference = (timeDifference / 500) * 15;
    
   

    // if (slideDifference < 1) {
     
    //   // Stop the animation after 2 seconds
      
        
    // }
    // console.log("wtf", prevCategoryNumber, i);
    // if (i < 200) {
    //   // Stop the animation after 2 seconds
    //   i = i + slideDifference
    //   renderImage(i)
    //   window.requestAnimationFrame(changeCarouselPositions);
    // }
  }
  useEffect(() => {
    // console.log(
    //   "counter updated",
    //   animationProgress,
    //   category,
    //   prevCategoryNumber
    // );
    if (!animationProgress) {
      console.log("x c", x, c)
      if (x != c) {
      window.requestAnimationFrame(changeCarouselPositions);
    }
    }
  }, [category]);
  
  return (
    <section>
      <div>
        <canvas ref={canvasRef} className="block" />
      </div>
    </section>
  );
};

const TrainSequence = ({ selectedCategory }) => (
    <div className="overflow-clip">
      <ImageSequence category={selectedCategory} />
    </div>
  );
  
  export default TrainSequence;