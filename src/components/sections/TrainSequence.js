import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
const images = [
    '/carousel_final_1728_webp/Stadler_Carousel_000.png',
    '/carousel_final_1728_webp/Stadler_Carousel_001.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_002.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_003.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_004.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_005.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_006.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_007.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_008.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_009.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_010.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_011.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_012.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_013.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_014.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_015.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_016.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_017.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_018.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_019.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_020.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_021.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_022.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_023.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_024.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_025.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_026.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_027.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_028.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_029.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_030.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_031.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_032.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_033.png',
    '/carousel_final_1728_webp/Stadler_Carousel_034.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_035.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_036.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_037.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_038.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_039.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_040.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_041.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_042.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_043.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_044.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_045.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_046.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_047.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_048.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_049.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_050.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_051.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_052.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_053.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_054.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_055.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_056.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_057.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_058.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_059.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_060.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_061.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_062.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_063.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_064.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_065.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_066.png',
    '/carousel_final_1728_webp/Stadler_Carousel_067.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_068.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_069.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_070.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_071.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_072.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_073.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_074.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_075.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_076.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_077.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_078.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_079.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_080.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_081.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_082.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_083.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_084.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_085.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_086.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_087.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_088.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_089.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_090.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_091.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_092.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_093.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_094.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_095.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_096.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_097.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_098.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_099.webp',
];

const onDraw = (img, ctx) => {
    const canvas = ctx.canvas;
    const widthRatio = canvas.width / img.width;
    const heightRatio = canvas.height / img.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;
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
    const [prevCategoryNumber, categoryNumberChange] = useState(category);
    const canvasRef = useRef(null);
    const progress = 0;

    console.log('progress', progress, category, prevCategoryNumber);

    // let imageWidth;
    // let imageFormat;

    const createImage = (src) => {
        // console.log('src', src);
        if (typeof document !== 'undefined') {
            const img = document.createElement('img');
            img.src = src;
            return img;
        }
    };

    const keyframes = useMemo(() => {
        return [...new Array(100)].map((_, i) => {
            // if (typeof window !== 'undefined') {
            //     imageWidth =
            //         window?.innerWidth > 1740
            //             ? 'carousel_final_1728_webp'
            //             : window?.innerWidth > 600
            //               ? 'carousel_final_1440_webp'
            //               : 'carousel_final_600_png';

            //     if (i === 0 || i === 34 || i === 67 || i === 99) {
            //         imageFormat = 'webp';
            //     } else {
            //         imageFormat = 'webp';
            //     }
            // } else {
            //     imageWidth = 'carousel_final_1728_webp';
            //     imageFormat = 'webp';
            // }

            return createImage(images[i]);
        });
    }, []);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height =
            window.innerWidth / 2.35 <
            window.innerHeight - window.innerHeight / 4
                ? window.innerWidth / 2.35
                : window.innerHeight - window.innerHeight / 4;
    }, []);

    const renderImage = useCallback(
        (progress) => {
            const constraint = (n, min = 0, max = keyframes.length - 1) =>
                Math.min(Math.max(n, min), max);
            console.log(
                'render image 183',
                progress,
                category,
                prevCategoryNumber
            );
            onDraw(
                keyframes[constraint(Math.round(keyframes.length * progress))],
                canvasRef.current.getContext('2d')
            );
        },
        [keyframes, onDraw]
    );

    useEffect(() => {
        resizeCanvas();
        const resizeCanvasAndRerender = () => {
            console.log(
                'resize canvas',
                progress,
                category,
                prevCategoryNumber
            );
            resizeCanvas();
            renderImage(progress);
        };
        window.addEventListener('resize', resizeCanvasAndRerender);
        return () => {
            window.removeEventListener('resize', resizeCanvasAndRerender);
        };
    }, [progress, renderImage, resizeCanvas]);

    useEffect(() => {
        keyframes[0].onload = () => {
            onDraw(keyframes[0], canvasRef.current.getContext('2d'));
        };
    }, [keyframes, onDraw]);

    useEffect(() => {
        onDraw(keyframes[0], canvasRef.current.getContext('2d'));
    }, []);

    useEffect(() => {
        //preloading image
        keyframes.forEach((image) => {
            const img = new Image();
            img.src = image;
            // console.log('image', image);
        });
    }, []);

    // const [lastOfClickedCategories, changeLastOfClickedCategories] = useState();

    const [animationProgress, animationProgressChange] = useState(false);

    let start;
    let done = false;

    // As Progress Value Goes from 0 to 1, the Progress between Categories Will Be 1/3
    // Previously Chosen Category
    let previousCategory = Number(prevCategoryNumber) / 3;
    // New Chosen Category
    let newCategory = Number(category) / 3;

    // Progress Value Equal to the Progress from Slide 0 to SLide 1
    const singleSlideProgress =
        1 / (100 / Math.abs(Number(category) - Number(prevCategoryNumber)));

    const changeCarouselPositions = () => {
        let count;
        if (start === undefined) {
            start = Number(prevCategoryNumber) / 3;
        }
        if (newCategory > previousCategory) {
            const categoryDifference =
                Number(category) - Number(prevCategoryNumber);
            const progressDifference =
                categoryDifference / 3 + Number(prevCategoryNumber) / 3;
            count = start + singleSlideProgress;
            renderImage(count);
            start = start + singleSlideProgress;
            if (start >= progressDifference) {
                done = true;
                animationProgressChange(false);
                categoryNumberChange(category);
            } else {
                // If animation is not yet finished, call the animation function again
                if (!done) {
                    window.requestAnimationFrame(changeCarouselPositions);
                }
            }
        }

        if (newCategory < previousCategory) {
            const categoryDifference =
                Number(prevCategoryNumber) - Number(category);
            const progressDifference =
                Number(prevCategoryNumber) / 3 - categoryDifference / 3;
            count = start - singleSlideProgress;
            renderImage(count);
            start = start - singleSlideProgress;
            if (start <= progressDifference) {
                done = true;
                animationProgressChange(false);
                categoryNumberChange(category);
            } else {
                if (!done) {
                    window.requestAnimationFrame(changeCarouselPositions);
                }
            }
        }
    };

    useEffect(() => {
        console.log(
            'category',
            category,
            prevCategoryNumber,
            previousCategory,
            newCategory
        );
        if (!animationProgress) {
            if (previousCategory != newCategory) {
                animationProgressChange(true);
                window.requestAnimationFrame(changeCarouselPositions);
            } else {
                // console.log(category, listOfClickedCategories)
            }
        } else {
            // Here the logic of
            // changeLastOfClickedCategories(category);
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

const TrainSequence = ({ selectedCategory }) => {
    console.log('selectedCategory', selectedCategory);
    return (
        <div className="overflow-clip">
            <ImageSequence category={selectedCategory} />
        </div>
    );
};

export default TrainSequence;
