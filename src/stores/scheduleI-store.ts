import {dataCourse, DataI} from "@/data";

class ScheduleStore {

    data: DataI = dataCourse;

    getCourseTitles = (): string[] => {
        return this.data.course.map(c => c.title)
    };

    getCourseByTitle = (title: string) => {
        for (const course of this.data.course) {
            if (course.title === title) {
                return course
            }
        }
        return null; // Return null if no matching course is found
    };

}

export default ScheduleStore;
