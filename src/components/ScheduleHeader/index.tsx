import React, {FC, useCallback, useEffect, useState} from 'react';
import ScheduleHeaderItem from "./ScheduleHeaderItem";


interface ICourse  {
    course: number
}


const ScheduleHeader: FC = () => {
    const [courses, setCourses] = useState<ICourse[]>([
        {
            course: 1,
        },
        {
            course: 2,
        },
        {
            course: 3,
        },
        {
            course: 4
        }
    ])

    const [letterGroups] = useState<string[]>(['а', 'б', 'в', 'а', 'б', 'в'])

    const [selectedCourse, setSelectedCourse] = useState<number>(0)
    const [selectedGroup, setSelectedGroup] = useState<number>(0)

    const handleSelectCourse = useCallback((index: number) => {
        setSelectedCourse(index)
    }, [courses])

    const handleSelectGroup = useCallback((index: number) => {
        setSelectedGroup(index)
    }, [letterGroups])


    return (
        <div className="shedule__header w-100p flex-row-betw">
            <div className="shedule__header-left d-f al-center">
                {courses.map((item, index) => (
                    <ScheduleHeaderItem key={Date.now() + index} indexItem={index} title={`${String(item.course)} Курс`} onSelectItem={() => handleSelectCourse(index)} isSelected={index === selectedCourse} />
                ))}
            </div>
            <div className="shedule__header-right d-f al-center">
                {letterGroups.map((item, index) => (
                    <ScheduleHeaderItem key={Date.now() + index} indexItem={index} title={`${item}`} onSelectItem={() => handleSelectGroup(index)} isSelected={index === selectedGroup} />
                ))}
            </div>
        </div>
    );
};

export default ScheduleHeader;