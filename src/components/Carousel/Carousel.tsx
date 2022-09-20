import React, {FC, useState} from 'react';
import {IMovie} from "../../types/IMovie";
import "./Carousel.scss"
import {CarouselItem} from "./CarouselItem/CarouselItem";
import {SliderButton} from "../UI/SliderButton/SliderButton";

type carouselProps = {
    movies: IMovie[] | undefined
}

const PAGE_WIDTH = 1030

export const Carousel: FC<carouselProps> = ({movies}) => {
    const [offset, setOffset] = useState(0)

    let MAX_OFFSET = 0
    if (movies?.length) {
        MAX_OFFSET = -(PAGE_WIDTH * Math.ceil(movies?.length / 5 - 1))
    }

    const showPrev = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const showNext = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - PAGE_WIDTH
            return Math.max(newOffset, MAX_OFFSET)
        })
    }

    return (
        <>
            {movies?.length &&
                <div className="carousel">
                    {offset !== 0 &&
                        <div className="carousel__prevBtn">
                            <SliderButton direction={"left"} onClick={showPrev}/>
                        </div>
                    }

                    {offset !== MAX_OFFSET &&
                        <div className="carousel__nextBtn">
                            <SliderButton direction={"right"} onClick={showNext}/>
                        </div>
                    }

                    <div className="carousel__window">
                        <div className="carousel__all-items-container"
                             style={{
                                 transform: `translateX(${offset}px)`,
                             }}>
                            {movies?.map(item => <CarouselItem item={item} key={item.id}/>)}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
