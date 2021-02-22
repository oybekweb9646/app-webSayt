import React, {useState} from 'react';
import {Carousel, CarouselIndicators, CarouselItem} from "reactstrap";

const items = [
    {}, {}, {}
];

const MobileKarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src} className="text-center">
            <img src="../images/polni.png" width="300" alt=""/>
        </CarouselItem>
    ));

    return (
        <div id='testimonials2' className='font-family-regular'>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
            </Carousel>
            <div className="d-flex justify-content-center mt-5"><button className="btn text-center m-auto mt-3">Wiev all</button></div>
        </div>
    );
};




export default MobileKarousel;