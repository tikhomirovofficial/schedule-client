import React, {FC, useCallback, useContext, useState} from 'react';
// import {ISelectableItem, SelectableListContext} from "../index";

interface ISheduleHeaderItemProps {
    title: string,
    isSelected: boolean,
    onSelectItem: (index: number) => void,
    indexItem: number
}
const ScheduleHeaderItem: FC<ISheduleHeaderItemProps> = ({title, isSelected, onSelectItem, indexItem}) => {
    return (
        <div onClick={() => onSelectItem(indexItem)} className={`shedule__header-item ${isSelected ? 'shedule__header-item-choosed' : null}`}>{title}</div>
    );
};

export default ScheduleHeaderItem;