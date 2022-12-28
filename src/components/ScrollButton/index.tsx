import React, {FC} from 'react';
import {ScrollDirection} from "../../types/enums";


interface IScrollButtonProps {
    direction: ScrollDirection
}
const ScrollButton: FC<IScrollButtonProps> = ({direction}) => {
    const isPrev = direction === ScrollDirection.Left
    return (
        <div className={`schedule__scroll-block ${isPrev ? "schedule__scroll-prev": "schedule__scroll-next"} f-center-col p-abs h-100p`}>
            <div className="schedule__scroll-btn f-center-row scroll__btn-next">
                <img className={isPrev ? "schedule__scroll-left" : "schedule__scroll-right"} src="img/arrow-slide.svg" alt=""/>
            </div>
        </div>

    );
};

export default ScrollButton;