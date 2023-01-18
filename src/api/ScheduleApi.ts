import instance from "./index";
import {IGroup} from "../types";

class ScheduleApi {
    static GROUP_PATH = '/shedule'


    static async getGroups() {
        return await instance.get<IGroup[]>(this.GROUP_PATH)
    }
}
export default  ScheduleApi;
//