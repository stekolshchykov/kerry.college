import {CourseI, scheduleData, ScheduleI} from "@/data";

class ScheduleStore {

    data: ScheduleI = {
        note: "",
        course: []
    }

    constructor() {
        this.load()
    }

    getCourseTitle = (): string[] => {
        return this.data.course.map(c => c.courseTitle) || []
    }

    getCourseByTitle = (title: string): CourseI | null => {
        return this.data.course.find(c => c.courseTitle == title) || null
    }

    private load = () => {
        this.data = scheduleData
    }

}

export default ScheduleStore
