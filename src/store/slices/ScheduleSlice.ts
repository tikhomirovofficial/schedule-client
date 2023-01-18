import {createAsyncThunk, createListenerMiddleware, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGroup, ISchedule} from "../../types";
import ScheduleApi from "../../api/ScheduleApi";

interface IDetails {
    courses: number[]
    letters: string[]
}
interface IFilter {
    curCourse: number
    curGroup: number
}
export interface IScheduleSlice {
    value: ISchedule,
    details: IDetails
    filter: IFilter
    isLoading: boolean,
    isRejected: boolean
}


const initialState: IScheduleSlice = {
    value: {
        groups: []
    },
    filter: {
        curCourse: 0,
        curGroup: 0
    },
    details: {courses: [1,2,3,4], letters: ['а', 'б', 'и', 'э']},
    isLoading: false,
    isRejected: false
}

export const fetchSchedule = createAsyncThunk(
    'schedule',
    async () => {
        const response = await ScheduleApi.getGroups()
        return response.data as IGroup[]
    }
)
const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        selectGroup(state, action: PayloadAction<number>) {
            state.filter.curGroup = action.payload
        },
        selectCourse(state, action: PayloadAction<number>) {
            state.filter.curCourse = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSchedule.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.value.groups = payload
        })
        builder.addCase(fetchSchedule.rejected, (state) => {
            state.isLoading = false
            state.isRejected = true
        })
        builder.addCase(fetchSchedule.pending, (state) => {
            state.isLoading = true
        })
    },
})
export const {selectGroup, selectCourse} = scheduleSlice.actions
export const scheduleReducer = scheduleSlice.reducer
