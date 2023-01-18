import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import ScheduleHeaderItem from "./ScheduleHeaderItem";

import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectCourse, selectGroup} from "../../store/slices/ScheduleSlice";


const ScheduleHeader: FC = () => {
    const dispatch = useAppDispatch()
    const {details, filter} = useAppSelector(state => state.schedule)

    return (
        <div className="shedule__header w-100p flex-row-betw">
            <div className="shedule__header-left d-f al-center">
                {details.courses.map((item, index) => (
                    <ScheduleHeaderItem key={Date.now() + index} indexItem={index} title={`${String(item)} Курс`} onSelectItem={() => dispatch(selectCourse(index))} isSelected={index === filter.curCourse} />
                ))}
            </div>
            <div className="shedule__header-right d-f al-center">
                {details.letters.map((item, index) => (
                    <ScheduleHeaderItem key={Date.now() + index} indexItem={index} title={`${item}`} onSelectItem={() => dispatch(selectGroup(index))} isSelected={index === filter.curGroup} />
                ))}
            </div>
        </div>
    );
};

export default ScheduleHeader;