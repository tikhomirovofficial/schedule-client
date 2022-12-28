import React, {FC} from 'react';
import ScheduleGroupItem from "../ScheduleGroupItem";
import {ICouple} from "../../types";

interface IScheduleGroupListProps {
    couples: ICouple[]
}
const ScheduleGroupList: FC<IScheduleGroupListProps> = ({couples}) => {
    return (
        <div className="shedule__group-list flex-column">
            {
                couples.map((item, index) => (
                    <ScheduleGroupItem couple={item} number={index + 1}/>
                ))
            }
        </div>
    );
};

export default ScheduleGroupList;