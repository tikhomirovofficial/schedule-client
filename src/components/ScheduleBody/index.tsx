import React, {FC} from 'react';
import ScrollButton from "../ScrollButton";
import {ScrollDirection} from "../../types/enums";
import {ISchedule} from "../../types";
import ScheduleGroup from "../ScheduleGroup";

interface IScheduleBodyProps {
    schedule: ISchedule
}
const ScheduleBody: FC<IScheduleBodyProps> = ({schedule}) => {
    return (
        <div className="shedule__body p-rel">
            <ScrollButton direction={ScrollDirection.Right}/>
            {/*<ScrollButton direction={ScrollDirection.Left}/>*/}
            <div className="shedule__body-items h-100p d-f gap-30 ">
                {
                    schedule.groups.map(group => (
                        <ScheduleGroup title={group.title} course={group.course} seq_number={group.seq_number} card_color={group.card_color} couples={group.couples} />
                    ))
                }
            </div>
        </div>
    );
};

export default ScheduleBody;