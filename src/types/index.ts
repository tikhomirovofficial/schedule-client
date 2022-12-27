export interface ILocation {
    building: number,
    room: number
}

export interface ITeacher {
    first_name: string,
    middle_name: string,
    last_name: string
}

export interface ICouple {
    title: string,
    teacher: ITeacher,
    location: ILocation
}

export interface IGroup {
    title: string,
    course: number,
    seq_number: number,
    card_color: string
    couples: ICouple[]
}

export interface ISchedule {
    groups: IGroup[]
}