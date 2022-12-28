import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IGroup, ISchedule} from "./types";
import useFetch from "./hooks/useFetch";
import api from "./api";
import SheduleApi from "./api/SheduleApi";
import {Axios, AxiosResponse} from "axios";
import Header from "./components/Header";
import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleBody from "./components/ScheduleBody";


interface IScheduleContext {
    schedule: ISchedule
}
const scheduleDefaultValue: ISchedule = {
    groups: []
}
export const ScheduleContext = React.createContext<IScheduleContext>({
    schedule: scheduleDefaultValue
})

function App() {
    const [schedule, setSchedule] = useState<ISchedule>(scheduleDefaultValue)
    const {req, loading, error} = useFetch(async() => {
        const res: AxiosResponse<IGroup[]> = await SheduleApi.getGroups()
        setSchedule({
            groups: res.data
        })
        console.log(res.data)
    })

    const fRew = useRef<HTMLDivElement>({} as HTMLDivElement)
    //const references: React.MutableRefObject<HTMLDivElement>[] = []

    const scrollNext = useCallback((ref: React.MutableRefObject<HTMLDivElement>) => {
        ref.current.scrollIntoView({behavior: "smooth"})
    }, [])

    useEffect(() => {
        req()
    }, [])

    return (
        <ScheduleContext.Provider value={{schedule}}>
            <div className="App">
                <div className="container ml-auto f-center-col h-100v">
                    <div className="w-100p shedule flex-col-betw">
                        <Header/>
                        <div className="shedule__content flex-col-betw">
                            <ScheduleHeader/>
                            <ScheduleBody schedule={schedule}/>
                        </div>
                        <div className="shedule__updated f-center-row">
                            <p>
                                обновлено 03.12.2022 9:57
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScheduleContext.Provider>

    );
}

export default App;
