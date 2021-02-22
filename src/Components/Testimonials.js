import React, {useState} from 'react';
import {Carousel, CarouselIndicators, CarouselItem} from "reactstrap";

const items = [
    {}, {}, {}
];

const Testimonials = (props) => {
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
            key={item.src}
        >
            <h1 className='font-weight-bold text-white text-center'>Testimonials</h1>
            <img src="../images/vergul.png" alt="Error" className='d-block mx-auto'/>
            <div className='text-white text-center mt-3 px-5'>Your salon is meticulous and outstanding in the service that is provides. I always leave happy <br/>
            and refreshed after a manicure. The salon is absolutely clean and sanitary and you team is <br/>
            always ready to help make decision about nail art.</div>
            <img src="../images/CarouselPhoto.png" alt="Error" className='d-block mx-auto'/>
            <h5 className='font-family-semi-bold text-white text-center'>Amanda Smith</h5>
            <div className='text-center text-white font-family-light mb-4'>Client</div>
        </CarouselItem>
    ));

    return (
        <div id='testimonials' className='font-family-regular'>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
            </Carousel>
        </div>
    );
};

export default Testimonials;