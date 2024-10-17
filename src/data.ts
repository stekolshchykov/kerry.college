export interface CourseI {
    title?: string;
    lecture?: string;
    room?: string;
}

export interface CourseDataI {
    title: string;
    schedule: CourseI[][];
}

export interface DataI {
    times: string[];
    course: CourseDataI[];
}

export interface StaffCardI {
    name: string;
    img: string;
    job: string;
}

const dataStaff: StaffCardI[] = [
    {
        name: "Michael Jordan",
        img: "/staff/michael-jordan.jpg",
        job: "Basketball Coach"
    },
    {
        name: "Albert Einstein",
        img: "",
        job: "Physics Professor"
    },
    {
        name: "Oprah Winfrey",
        img: "",
        job: "Communications and Media Instructor"
    },
    {
        name: "Stephen King",
        img: "",
        job: "Creative Writing Professor"
    },
    {
        name: "Marie Curie",
        img: "",
        job: "Chemistry Department Head"
    },
    {
        name: "Serena Williams",
        img: "",
        job: "Tennis Coach"
    },
    {
        name: "Steve Jobs",
        img: "",
        job: "Entrepreneurship and Innovation Lecturer"
    },
    {
        name: "Frida Kahlo",
        img: "",
        job: "Art History Professor"
    },
    {
        name: "Neil deGrasse Tyson",
        img: "",
        job: "Astronomy Professor"
    },
    {
        name: "Jane Goodall",
        img: "",
        job: "Anthropology Professor"
    },
    {
        name: "Mark Zuckerberg",
        img: "",
        job: "Computer Science Lecturer"
    },
    {
        name: "David Attenborough",
        img: "",
        job: "Environmental Science Instructor"
    },
    {
        name: "J.K. Rowling",
        img: "",
        job: "English Literature Professor"
    },
    {
        name: "Elon Musk",
        img: "",
        job: "Engineering and Space Exploration Instructor"
    },
    {
        name: "Beyoncé",
        img: "",
        job: "Music and Performance Arts Teacher"
    },
    {
        name: "Leonardo da Vinci",
        img: "",
        job: "Art and Engineering Professor"
    },
    {
        name: "Amelia Earhart",
        img: "",
        job: "Aviation and History Instructor"
    },
    {
        name: "Bill Gates",
        img: "",
        job: "Technology and Business Lecturer"
    },
    {
        name: "Muhammad Ali",
        img: "",
        job: "Boxing Coach"
    },
    {
        name: "Ada Lovelace",
        img: "",
        job: "Mathematics and Computer Science Professor"
    }
];


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
            title: "Software Development",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Work Experience", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Math for IT", room: "25"},
                    {lecture: "", title: "Communications (Level 5)", room: "25"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications (Level 5)", room: "1"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Вторник
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "Web Authoring", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Web Authoring", room: "31"},
                    {lecture: "", title: "Web Authoring", room: "31"},
                ],
                [ // Среда
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "Networking Essentials", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Networking Essentials", room: "31"},
                    {lecture: "", title: "Networking Essentials", room: "31"},
                ],
                [ // Четверг
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Math for IT", room: "20"},
                    {lecture: "", title: "Math for IT", room: "20"},
                ],
                [ // Пятница
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "Work Experience", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Digital Media Production",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Multimedia Technology", room: "31"},
                    {lecture: "", title: "Multimedia Technology", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Multimedia Technology", room: "31"},
                    {lecture: "", title: "Work Experience", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Project Management", room: "31"},
                    {lecture: "", title: "Project Management", room: "31"},
                ],
                [ // Вторник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Studio Location & Sound Production", room: "32"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Studio Location & Sound Production", room: "32"},
                    {lecture: "", title: "Studio Location & Sound Production", room: "32"},
                ],
                [ // Среда
                    {lecture: "", title: "Project Management", room: "1"},
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "Graphics & Animation", room: "32"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Graphics & Animation", room: "32"},
                    {lecture: "", title: "Graphics & Animation", room: "32"},
                ],
                [ // Четверг
                    {lecture: "", title: "Design Skills", room: "32"},
                    {lecture: "", title: "Design Skills", room: "32"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Design Skills", room: "32"},
                    {lecture: "", title: "Web Authoring", room: "32"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Web Authoring", room: "32"},
                    {lecture: "", title: "Web Authoring", room: "32"},
                ],
                [ // Пятница
                    {lecture: "", title: "Work Experience", room: "32"},
                    {lecture: "", title: "Computer Illustration Graphics", room: "10"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Computer Illustration Graphics", room: "10"},
                    {lecture: "", title: "Computer Illustration Graphics", room: "10"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Animale Care",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Veterinary Assisting", room: "20"},
                    {lecture: "", title: "Veterinary Assisting", room: "20"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Veterinary Assisting", room: "20"},
                    {lecture: "", title: "Animal Behavior", room: "20"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "20"},
                    {lecture: "", title: "Animal Welfare", room: "20"},
                ],
                [ // Вторник
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "8"},
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Animal Welfare", room: "8"},
                    {lecture: "", title: "Animal Welfare", room: "8"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Environmental sustainability", room: "Term 2"},
                    {lecture: "", title: "Environmental sustainability", room: "Term 2"},
                ],
                [ // Среда
                    {lecture: "", title: "Maths", room: "20"},
                    {lecture: "", title: "Maths Tutorial", room: "20"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "20"},
                    {lecture: "", title: "Work Experience", room: "20"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Biology", room: "20"},
                    {lecture: "", title: "Animal Behaviour", room: "20"},
                ],
                [ // Четверг
                    {lecture: "", title: "Maths", room: "20"},
                    {lecture: "", title: "Maths", room: "20"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Communications", room: "20"},
                    {lecture: "", title: "Animal Behaviour", room: "20"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Tutorial", room: "8"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Пятница
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Communications", room: "20 / 27"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Animal Science",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Physics", room: "8"},
                    {lecture: "", title: "Physics", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "8"},
                    {lecture: "", title: "Maths", room: "8"},
                ],
                [ // Вторник
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "8"},
                    {lecture: "", title: "Animal Anatomy & Physiology", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Communications", room: "20"},
                    {lecture: "", title: "Maths", room: "20"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Environmental sustainability", room: "Term 1"},
                    {lecture: "", title: "Environmental sustainability", room: "Term 1"},
                ],
                [ // Среда
                    {lecture: "", title: "Laboratory Skills", room: "8"},
                    {lecture: "", title: "Laboratory Skills", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "20"},
                    {lecture: "", title: "Work Experience", room: "20"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Biology", room: "8"},
                ],
                [ // Четверг
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Chemistry", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Laboratory Skills", room: "8"},
                    {lecture: "", title: "Maths", room: "8"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Tutorial", room: "8"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Пятница
                    {lecture: "", title: "Physics", room: "20"},
                    {lecture: "", title: "Chemistry", room: "20"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Chemistry", room: "8"},
                    {lecture: "", title: "Communications", room: "8 / 28"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Animation (Creative Media)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Digital Editing", room: "32"},
                    {lecture: "", title: "Digital Editing", room: "32"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Ditital Editing", room: "32"},
                    {lecture: "", title: "Animation Drawing Studies", room: "32"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Animation Drawing Studies", room: "32"},
                    {lecture: "", title: "Animation Drawing Studies", room: "32"},
                ],
                [ // Вторник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "Computing 3D Modelling", room: "32"},
                    {lecture: "", title: "Computing 3D Modelling", room: "32"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Computing 3D Modelling", room: "32"},
                    {lecture: "", title: "Teamworking", room: "1"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "PPD", room: "13"},
                    {lecture: "", title: "PPD", room: "13"},
                ],
                [ // Четверг
                    {lecture: "", title: "Drawing", room: "Pathways Building"},
                    {lecture: "", title: "Drawing", room: "Pathways Building"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Drawing", room: "Pathways Building"},
                    {lecture: "", title: "Computer Illustrated Graphics", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Computer Illustrated Graphics", room: "31"},
                    {lecture: "", title: "Computer Illustrated Graphics", room: "31"},
                ],
                [ // Пятница
                    {lecture: "", title: "Teamworking", room: "1"},
                    {lecture: "", title: "Figure Studies", room: "Pathways Building"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Figure Studies", room: "Pathways Building"},
                    {lecture: "", title: "Figure Studies", room: "Pathways Building"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        }
    ]
}

export {dataCourse, dataStaff};
