import React, {FC, useCallback, useContext, useMemo} from 'react';
import ScrollButton from "../ScrollButton";
import {ScrollDirection} from "../../types/enums";
import {ISchedule} from "../../types";
import ScheduleGroup from "../ScheduleGroup";
import {ScheduleContext} from "../../App";
import {useAppDispatch, useAppSelector} from "../../store/hooks";


const ScheduleBody: FC = () => {
    // const {schedule, filter, fields} = useContext(ScheduleContext)
    const {filter, value, details} = useAppSelector(state => state.schedule)

    return (
        <div className="shedule__body p-rel">
            <ScrollButton direction={ScrollDirection.Right}/>
            {/*<ScrollButton direction={ScrollDirection.Left}/>*/}
            <div className="shedule__body-items h-100p d-f gap-30 ">
                {
                    value.groups.filter(group => group.course === details.courses[filter.curCourse] &&
                        group.title[0].toLowerCase() === details.letters[filter.curGroup].toLowerCase())
                        .map((group, index) => (
                            <ScheduleGroup key={Date.now() + index} title={group.title} course={group.course}
                                           seq_number={group.seq_number} card_color={group.card_color}
                                           couples={group.couples}/>
                        ))
                }
            </div>
        </div>
    );
};

export default ScheduleBody;