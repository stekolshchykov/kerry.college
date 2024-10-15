export interface CourseI {
    title: string
    lecture: string
    room: string
}

export interface CourseDataI {
    title: string
    schedule: CourseI[][]
}

export interface DataI {
    times: string[],
    course: CourseDataI[]
}

const dataCourse: DataI = {
    times: [
        "09:00-10:00",
        "10:00-11:00",
        "11:00-11:20", // Перемена
        "11:20-12:20",
        "12:20-13:20",
        "13:20-14:00", // Обеденный перерыв
        "14:00-15:00",
        "15:00-16:00"
    ],
    course: [
        {
            title: "c1",
            schedule: [
                [ // понедельник
                    {lecture: "l1", title: "1", room: "2"},
                    {lecture: "l1", title: "2", room: "2"},
                    {lecture: "l1", title: "3", room: "2"},
                    {lecture: "l1", title: "4", room: "2"},
                    {lecture: "l1", title: "5", room: "2"},
                ],
                [ // вторник
                    {lecture: "l1", title: "12", room: "2"},
                    {lecture: "l1", title: "22", room: "2"},
                    {lecture: "l1", title: "22", room: "2"},
                    {lecture: "l1", title: "22", room: "2"}
                ],
                [ // серда
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"}
                ],
                [ // серда
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"}
                ],
                [ // серда
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"},
                    {lecture: "l1", title: "32", room: "2"}
                ]

            ]
        },
    ]
}

export {dataCourse}