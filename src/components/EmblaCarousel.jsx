import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoPlay";
import "./embla.css";

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ delay: 5000 }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
        useAutoplay(emblaApi);

    return (
        <div className="embla">
            <div className="embla__viewport card p-px" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                {/* <span>{index + 1}</span> */}
                                {/* {console.log(index)} */}
                                <img
                                    src={index}
                                    className="h-150 w-full object-cover"
                                ></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative h-full bottom-15">
                {/* embla__controls  */}
                <div className="flex gap-2 justify-end px-3">
                    {/* embla__buttons */}
                    <PrevButton
                        // className="backdrop-blur-lg"
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div className="relative h-full bottom-3">
                    <div className="flex gap-2 justify-start px-3">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={"w-[0.75rem] h-[0.75rem] card embla__dot".concat(
                                    index === selectedIndex
                                        ? " embla__dot--selected"
                                        : "",
                                )}
                            />
                        ))}
                    </div>
                </div>
                {/* <button
                    className="embla__play"
                    onClick={toggleAutoplay}
                    type="button"
                >
                    {autoplayIsPlaying ? "Stop" : "Start"}
                </button> */}
            </div>
        </div>
    );
};

export default EmblaCarousel;
