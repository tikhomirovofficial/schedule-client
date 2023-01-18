import React, {FC} from 'react';
import {ICouple} from "../../types";

interface IScheduleGroupItemProps {
    couple: ICouple
    number: number
    isEmpty?: boolean
}
const ScheduleGroupItem: FC<IScheduleGroupItemProps> = ({couple, number, isEmpty}) => {
    return (
        <div className="shedule__group-item d-f al-center w-100p">
            <ul className="shedule__lesson w-100p">
                {
                    isEmpty ?
                        <>
                            <li className="shedule__lesson-top f-center-row gap-5">
                                <h4>{number}. {couple.title}</h4>
                                <p>
                                    {couple.location.building}.{couple.location.room}
                                </p>
                            </li>
                            <p className="shedule__lesson-teacher">{couple.teacher.last_name} {couple.teacher.first_name[0]}. {couple.teacher.middle_name[0]}</p>
                        </>
                        : null
                }
            </ul>
        </div>
    );
};

export default ScheduleGroupItem