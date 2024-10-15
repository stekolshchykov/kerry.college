export interface CourseI {
    courseTitle: string,
    schedule: { weekDay: number; time?: string; title?: string, room?: number, lecturer?: string }[];
}

export interface ScheduleI {
    note: string;
    course: CourseI[];
}

const scheduleData: ScheduleI = {
    note: "Last update: 20/10/24",
    course: [
        {
            courseTitle: "Software Development",
            schedule: [
                {
                    weekDay: 1,
                    time: "09:00-10:00",

                },
                {
                    weekDay: 1,
                    time: "10:00-11:00",
                    title: "Work Experience",
                    room: 1,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 1,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 1,
                    time: "11:20-12:20",
                    title: "Math for IT",
                    room: 25,
                    lecturer: "Dorothy Byrne",
                },
                {
                    weekDay: 1,
                    time: "12:20-13:20",
                    title: "Communications (Level 5)",
                    room: 25,
                    lecturer: "Amanda O'Donnell",
                },
                {
                    weekDay: 1,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 1,
                    time: "14:00-15:00",
                    title: "Communications (Level 5)",
                    room: 1,
                    lecturer: "Amanda O'Donnell",
                },
                {
                    weekDay: 1,
                    time: "15:00-16:00",

                },
                {
                    weekDay: 2,
                    time: "09:00-10:00",
                    title: "Programming & Design Principles",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 2,
                    time: "10:00-11:00",
                    title: "Programming & Design Principles",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 2,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 2,
                    time: "11:20-12:20",
                    title: "Programming & Design Principles",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 2,
                    time: "12:20-13:20",
                    title: "Web Authoring",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 2,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 2,
                    time: "14:00-15:00",
                    title: "Web Authoring",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 2,
                    time: "15:00-16:00",
                    title: "Web Authoring",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 3,
                    time: "09:00-10:00",
                    title: "Fundamentals",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 3,
                    time: "10:00-11:00",
                    title: "Fundamentals",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 3,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 3,
                    time: "11:20-12:20",
                    title: "Fundamentals",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 3,
                    time: "12:20-13:20",
                    title: "Networking Essentials",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 3,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 3,
                    time: "14:00-15:00",
                    title: "Networking Essentials",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 3,
                    time: "15:00-16:00",
                    title: "Networking Essentials",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 4,
                    time: "09:00-10:00",
                    title: "Software Architecture",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 4,
                    time: "10:00-11:00",
                    title: "Software Architecture",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 4,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 4,
                    time: "11:20-12:20",
                    title: "Software Architecture",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 4,
                    time: "12:20-13:20",

                },
                {
                    weekDay: 4,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 4,
                    time: "14:00-15:00",
                    title: "Math for IT",
                    room: 20,
                    lecturer: "Dorothy Byrne",
                },
                {
                    weekDay: 4,
                    time: "15:00-16:00",
                    title: "Math for IT",
                    room: 20,
                    lecturer: "Dorothy Byrne",
                },
                {
                    weekDay: 5,
                    time: "09:00-10:00",
                    title: "Operating Systems",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 5,
                    time: "10:00-11:00",
                    title: "Operating Systems",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 5,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 5,
                    time: "11:20-12:20",
                    title: "Operating Systems",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 5,
                    time: "12:20-13:20",
                    title: "Work Experience",
                    room: 31,
                    lecturer: "Brian O'Shea",
                },
                {
                    weekDay: 5,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 5,
                    time: "14:00-15:00",

                },
                {
                    weekDay: 5,
                    time: "15:00-16:00",

                }
            ],
        },
        {
            courseTitle: "Digital Media Production",
            schedule: [
                {
                    weekDay: 1,
                    time: "09:00-10:00",
                    title: "Multimedia Technology",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 1,
                    time: "10:00-11:00",
                    title: "Multimedia Technology",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 1,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 1,
                    time: "11:20-12:20",
                    title: "Multimedia Technology",
                    room: 31,
                    lecturer: "Maria Brosnan",
                },
                {
                    weekDay: 1,
                    time: "12:20-13:20",
                    title: "Work Experience",
                    room: 31,
                    lecturer: "Loz Ann McCarthy",
                },
                {
                    weekDay: 1,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 1,
                    time: "14:00-15:00",
                    title: "Project Management",
                    room: 31,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 1,
                    time: "15:00-16:00",
                    title: "Project Management",
                    room: 31,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 2,
                    time: "09:00-10:00",

                },
                {
                    weekDay: 2,
                    time: "10:00-11:00",

                },
                {
                    weekDay: 2,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 2,
                    time: "11:20-12:20",

                },
                {
                    weekDay: 2,
                    time: "12:20-13:20",
                    title: "Studio Location & Sound Production",
                    room: 32,
                    lecturer: "Loz Ann McCarthy",
                },
                {
                    weekDay: 2,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 2,
                    time: "14:00-15:00",
                    title: "Studio Location & Sound Production",
                    room: 32,
                    lecturer: "Loz Ann McCarthy",
                },
                {
                    weekDay: 2,
                    time: "15:00-16:00",
                    title: "Studio Location & Sound Production",
                    room: 32,
                    lecturer: "Loz Ann McCarthy",
                },
                {
                    weekDay: 3,
                    time: "09:00-10:00",
                    title: "Project Management",
                    room: 1,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 3,
                    time: "10:00-11:00",
                    title: "Communications",
                    room: 1,
                    lecturer: "Amanda O'Donnell",
                },
                {
                    weekDay: 3,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 3,
                    time: "11:20-12:20",
                    title: "Communications",
                    room: 1,
                    lecturer: "Amanda O'Donnell",
                },
                {
                    weekDay: 3,
                    time: "12:20-13:20",
                    title: "Graphics & Animation",
                    room: 32,
                    lecturer: "Shane Murphy",
                },
                {
                    weekDay: 3,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 3,
                    time: "14:00-15:00",
                    title: "Graphics & Animation",
                    room: 32,
                    lecturer: "Shane Murphy",
                },
                {
                    weekDay: 3,
                    time: "15:00-16:00",
                    title: "Graphics & Animation",
                    room: 32,
                    lecturer: "Shane Murphy",
                },
                {
                    weekDay: 4,
                    time: "09:00-10:00",
                    title: "Design Skills",
                    room: 32,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 4,
                    time: "10:00-11:00",
                    title: "Design Skills",
                    room: 32,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 4,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 4,
                    time: "11:20-12:20",
                    title: "Design Skills",
                    room: 32,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 4,
                    time: "12:20-13:20",
                    title: "Web Authoring",
                    room: 32,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 4,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 4,
                    time: "14:00-15:00",
                    title: "Web Authoring",
                    room: 32,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 4,
                    time: "15:00-16:00",
                    title: "Web Authoring",
                    room: 32,
                    lecturer: "John Collins",
                },
                {
                    weekDay: 5,
                    time: "09:00-10:00",
                    title: "Work Experience",
                    room: 32,
                    lecturer: "Loz Ann McCarthy",
                },
                {
                    weekDay: 5,
                    time: "10:00-11:00",
                    title: "Computer Illustration Graphics",
                    room: 10,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 5,
                    time: "11:00-11:20",
                    title: "Break",
                },
                {
                    weekDay: 5,
                    time: "11:20-12:20",
                    title: "Computer Illustration Graphics",
                    room: 10,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 5,
                    time: "12:20-13:20",
                    title: "Computer Illustration Graphics",
                    room: 10,
                    lecturer: "Siobhan Murphy",
                },
                {
                    weekDay: 5,
                    time: "13:20-14:00",
                    title: "Lunch Break",
                },
                {
                    weekDay: 5,
                    time: "14:00-15:00",

                },
                {
                    weekDay: 5,
                    time: "15:00-16:00",

                }
            ],
        }
    ],
};


export {scheduleData}
