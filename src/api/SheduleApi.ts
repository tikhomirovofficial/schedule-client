import instance from "./index";
import {IGroup} from "../types";

class SheduleApi {
    static GROUP_PATH = '/shedule'


    static async getGroups() {
       return await instance.get<IGroup[]>(this.GROUP_PATH)
    }
}
export default SheduleApi