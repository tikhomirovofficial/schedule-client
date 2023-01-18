import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {scheduleReducer} from "./slices/ScheduleSlice";


const rootReducer = combineReducers({
    schedule: scheduleReducer
})

const rootStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']

export const globalStore = rootStore()