import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IGroup, IShedule} from "./types";
import useFetch from "./hooks/useFetch";
import api from "./api";
import SheduleApi from "./api/SheduleApi";
import {Axios, AxiosResponse} from "axios";


function App() {
    const [shedule, setShedule] = useState<IShedule>({
        groups: []
    })
    const {req, loading, error} = useFetch(async() => {
        const res: AxiosResponse<IGroup[]> = await SheduleApi.getGroups()
        setShedule({
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
        <div className="App">
            <div className="container ml-auto f-center-col h-100v">
                <div className="w-100p shedule flex-col-betw">
                    <header className="flex-row-betw">
                        <div className="header__logo d-f al-center gap-20">
                            <img src="img/logo.jpg" alt=""/>
                            <p onClick={() => scrollNext(fRew)} className="header__text">
                                Череповецкий
                                Лесомеханический
                                техникум
                            </p>
                        </div>
                        <div className="header__things d-f al-center gap-30">
                            <div className="header__thing-item d-f al-center">
                                <div className="emodji"></div>
                                <p>Some text</p>
                            </div>
                            <div className="header__thing-item d-f al-center">
                                <div className="emodji"></div>
                                <p>Some text</p>
                            </div>
                            <div className="header__thing-item d-f al-center">
                                <div className="emodji"></div>
                                <p>Some text</p>
                            </div>
                            <div className="header__thing-item d-f al-center">
                                <div className="emodji"></div>
                                <p>Some text</p>
                            </div>
                        </div>
                    </header>
                    <div className="shedule__content flex-col-betw">
                        <div className="shedule__header w-100p flex-row-betw">
                            <div className="shedule__header-left d-f al-center">
                                <div className="shedule__header-item shedule__header-item-choosed">
                                    1 Курс
                                </div>
                                <div className="shedule__header-item">
                                    1 Курс
                                </div>
                                <div className="shedule__header-item">
                                    1 Курс
                                </div>
                                <div className="shedule__header-item">
                                    1 Курс
                                </div>
                            </div>
                            <div className="shedule__header-right d-f al-center">
                                <div className="shedule__header-item shedule__header-item-choosed">
                                    а
                                </div>
                                <div className="shedule__header-item">
                                    а
                                </div>
                                <div className="shedule__header-item">
                                    а
                                </div>
                                <div className="shedule__header-item">
                                    а
                                </div>
                                <div className="shedule__header-item">
                                    а
                                </div>
                                <div className="shedule__header-item">
                                    а
                                </div>
                            </div>
                        </div>
                        <div className="shedule__body ">
                            <div className="shedule__body-items h-100p d-f gap-30 ">
                                <div className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div ref={fRew} className="shedule__group flex-column h-100p">
                                    <div className="shedule__group-header">
                                        ис-31
                                    </div>
                                    <div className="shedule__group-list flex-column">
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                        <div className="shedule__group-item d-f al-center w-100p">
                                            <ul className="shedule__lesson w-100p">
                                                <li className="shedule__lesson-top f-center-row gap-5">
                                                    <h4>1. История</h4>
                                                    <p>
                                                        2.212
                                                    </p>
                                                </li>
                                                <p className="shedule__lesson-teacher">Филичева А. В</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
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
