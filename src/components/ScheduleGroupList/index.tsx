import React, {FC} from 'react';
import ScheduleGroupItem from "../ScheduleGroupItem";
import {ICouple} from "../../types";

interface IScheduleGroupListProps {
    couples: ICouple[]
}
const MAX_COUPLES: number = 8
const ScheduleGroupList: FC<IScheduleGroupListProps> = ({couples}) => {
    return (
        <div className="shedule__group-list flex-column">
            {
                couples.map((item, index) => (
                    <ScheduleGroupItem key={Date.now()+index} couple={item} number={index + 1}/>
                ))
            }
            {
                MAX_COUPLES > couples.length ?
                Array(MAX_COUPLES - couples.length).fill(true).map((_, index) => (
                    <div key={Date.now() + index} className="shedule__group-item d-f al-center w-100p">
                        <ul className="shedule__lesson w-100p">

                        </ul>
                    </div>
                )) : null
            }

        </div>
    );
};

export default ScheduleGroupList;