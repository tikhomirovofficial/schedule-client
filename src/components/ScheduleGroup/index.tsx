import React, {FC} from 'react';
import {IGroup} from "../../types";
import ScheduleGroupList from "../ScheduleGroupList";

const ScheduleGroup: FC<IGroup> = ({title, couples, card_color, course, seq_number}) => {
    return (
        <div className="shedule__group flex-column h-100p">
            <div style={{backgroundColor: card_color || "gray"}} className="shedule__group-header">
                {title}-{course}{seq_number}
            </div>
            <ScheduleGroupList couples={couples}/>
        </div>
    );
};

export default ScheduleGroup;