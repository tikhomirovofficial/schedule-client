import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IGroup, ISchedule} from "./types";
import useFetch from "./hooks/useFetch";
import api from "./api";
import ScheduleApi from "./api/ScheduleApi";
import {Axios, AxiosResponse} from "axios";
import Header from "./components/Header";
import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleBody from "./components/ScheduleBody";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {fetchSchedule, IScheduleSlice} from "./store/slices/ScheduleSlice";

function App() {

    const dispatch = useAppDispatch()
    const schedule = useAppSelector<ISchedule>(state => state.schedule.value)

    useEffect(() => {
        dispatch(fetchSchedule())
    }, [])
    useEffect(() => {
        console.log('changed')
    }, [schedule])

    const fRew = useRef<HTMLDivElement>({} as HTMLDivElement)
    //const references: React.MutableRefObject<HTMLDivElement>[] = []

    const scrollNext = useCallback((ref: React.MutableRefObject<HTMLDivElement>) => {
        ref.current.scrollIntoView({behavior: "smooth"})
    }, [])


    return (
            <div className="App">
                <div className="container ml-auto f-center-col h-100v">
                    <div className="w-100p shedule flex-col-betw">
                        <Header/>
                        <div className="shedule__content flex-col-betw">
                            <ScheduleHeader/>
                            <ScheduleBody/>
                        </div>
                        <div className="shedule__updated f-center-row">
                            <p>
                                обновлено 03.12.2022 9:57
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default App;
