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
        },
        {
            title: "Applied Science (Laboratory Techniques)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Physics", room: "8"},
                    {lecture: "", title: "Physics", room: "8"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "Biology", room: "8"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Maths", room: "8"},
                ],
                [ // Вторник
                    {lecture: "", title: "Work Experience", room: "20"},
                    {lecture: "", title: "Work Experience", room: "20"},
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
                    {lecture: "", title: "Nutrition", room: "8"},
                    {lecture: "", title: "Nutrition", room: "8"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Nutrition", room: "8"},
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
            title: "Advanced Certificate in Early Learning and Care (Stage 1)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "ECGD", room: "9"},
                    {lecture: "", title: "ECGD", room: "9"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "CPCS", room: "9"},
                    {lecture: "", title: "CPCS", room: "9"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "PPP", room: "9"},
                    {lecture: "", title: "PPP", room: "9"},
                ],
                [ // Вторник
                    {lecture: "", title: "CRLR", room: "9"},
                    {lecture: "", title: "CRLR", room: "9"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "UACAN", room: "9"},
                    {lecture: "", title: "ECGD", room: "9"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Class", room: "9"},
                    {lecture: "", title: "Assignment Class", room: "9"},
                ],
                [ // Среда
                    {lecture: "", title: "CPCS", room: "9"},
                    {lecture: "", title: "CPCS", room: "9"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "HCC", room: "9"},
                    {lecture: "", title: "HCC", room: "9"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "ECGD", room: "9"},
                    {lecture: "", title: "PPP", room: "9"},
                ],
                [ // Четверг
                    {lecture: "", title: "HCC", room: "9"},
                    {lecture: "", title: "Assignment Class EC1", room: "9"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "CRLR", room: "9"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "UACAN", room: "9"},
                    {lecture: "", title: "UACAN", room: "9"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Advanced Certificate in Early Learning and Care (Level 6)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Вторник
                    {lecture: "", title: "Developing Child", room: "25"},
                    {lecture: "", title: "Developing Child", room: "25"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Developing Child", room: "25"},
                    {lecture: "", title: "SSP", room: "25"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Supervision & Admin", room: "9"},
                    {lecture: "", title: "Supervision & Admin", room: "9"},
                ],
                [ // Среда
                    {lecture: "", title: "SSP", room: "25"},
                    {lecture: "", title: "SSP", room: "25"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "PPP", room: "25"},
                    {lecture: "", title: "PPP", room: "25"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Curriculum and Pedagogy", room: "25"},
                    {lecture: "", title: "Assignment Class", room: "25"},
                ],
                [ // Четверг
                    {lecture: "", title: "Supervision & Admin", room: "25"},
                    {lecture: "", title: "Inclusive ELC", room: "25"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Inclusive ELC", room: "25"},
                    {lecture: "", title: "Assignment Class", room: "25"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Class", room: "25"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Пятница
                    {lecture: "", title: "Inclusive ELC", room: "9"},
                    {lecture: "", title: "PPP", room: "9"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Curriculum and Pedagogy", room: "9"},
                    {lecture: "", title: "Curriculum and Pedagogy", room: "9"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Art Craft and Design (Group A)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "PPD", room: "13"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "PPD", room: "13"},
                    {lecture: "", title: "Sculpture", room: "33"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Sculpture", room: "33"},
                    {lecture: "", title: "Sculpture", room: "33"},
                ],
                [ // Вторник
                    {lecture: "", title: "Design", room: "33"},
                    {lecture: "", title: "Design", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Design", room: "33"},
                    {lecture: "", title: "Combined Materials", room: "33"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Combined Materials", room: "33"},
                    {lecture: "", title: "Combined Materials", room: "33"},
                ],
                [ // Среда
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "Drawing", room: "33"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Drawing", room: "33"},
                    {lecture: "", title: "Drawing", room: "33"},
                ],
                [ // Четверг
                    {lecture: "", title: "Print Making", room: "33"},
                    {lecture: "", title: "Print Making", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Print Making", room: "33"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Пятница
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Computer Illustrated Graphic", room: "19"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "19"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Art Craft and Design (Group B)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Drawing", room: "33"},
                    {lecture: "", title: "Drawing", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Drawing", room: "33"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                ],
                [ // Вторник
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "PPD", room: "13"},
                    {lecture: "", title: "Combined Materials", room: "33"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Combined Materials", room: "33"},
                    {lecture: "", title: "Combined Materials", room: "33"},
                ],
                [ // Среда
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Painting", room: "33"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Design", room: ""},            //no room
                    {lecture: "", title: "Design", room: ""},            //no room
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Design", room: ""},            //no room
                    {lecture: "", title: "Print Making", room: "33"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Print Making", room: "33"},
                    {lecture: "", title: "Print Making", room: "33"},
                ],
                [ // Пятница
                    {lecture: "", title: "Sculpture", room: "33"},
                    {lecture: "", title: "Sculpture", room: "33"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Sculpture", room: "33"},
                    {lecture: "", title: "PPD", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Business Studies (Group A)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Applied Economics", room: "28"},
                    {lecture: "", title: "Applied Economics", room: "28"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Accounting M&C", room: "28"},
                    {lecture: "", title: "Accounting M&C", room: "28"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Spreadsheets", room: "28"},
                    {lecture: "", title: "Spreadsheets", room: "28"},
                ],
                [ // Вторник
                    {lecture: "", title: "Spreadsheets", room: "28"},
                    {lecture: "", title: "Maths", room: "28"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Business Law", room: "28"},
                    {lecture: "", title: "Business Law", room: "28"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Support", room: "28"},
                    {lecture: "", title: "Maths", room: "23"},
                ],
                [ // Среда
                    {lecture: "", title: "Business Law", room: "28"},
                    {lecture: "", title: "Spreadsheets", room: "28"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Maths", room: "28"},
                    {lecture: "", title: "Marketing Practice", room: "28"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Marketing Practice", room: "28"},
                    {lecture: "", title: "Applied Economics", room: "28"},
                ],
                [ // Четверг
                    {lecture: "", title: "Communications", room: "28"},
                    {lecture: "", title: "Communications", room: "28"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "28"},
                    {lecture: "", title: "Work Experience", room: "28"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Accounting M&C", room: "28"},
                    {lecture: "", title: "Marketing Practice", room: "28"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Business Studies (Group B)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Spreadsheets", room: "29"},
                    {lecture: "", title: "Spreadsheets", room: "29"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Assignment Support", room: "1"},
                    {lecture: "", title: "Maths", room: "1"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Marketing Practice", room: "13"},
                    {lecture: "", title: "Marketing Practice", room: "13"},
                ],
                [ // Вторник
                    {lecture: "", title: "Accounting M&C", room: "29"},
                    {lecture: "", title: "Applied Economics", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Applied Economics", room: "12"},
                    {lecture: "", title: "Communications", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Spreadsheets", room: "29"},
                    {lecture: "", title: "Marketing Practice", room: "29"},
                ],
                [ // Среда
                    {lecture: "", title: "Accounting M&C", room: "29"},
                    {lecture: "", title: "Applied Economics", room: "29"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "29"},
                    {lecture: "", title: "Communications", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Maths", room: "29"},
                    {lecture: "", title: "Business Law", room: "29"},
                ],
                [ // Четверг
                    {lecture: "", title: "Spreadsheets", room: "29"},
                    {lecture: "", title: "Work Experience", room: "29"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Maths", room: "29"},
                    {lecture: "", title: "Accounting M&C", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Business Law", room: "13"},
                    {lecture: "", title: "Business Law", room: "13"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Carpentry and Construction Studies",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "Furniture Making & Design", room: "17"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Furniture Making & Design", room: "17"},
                    {lecture: "", title: "Assignment Support", room: ""},    //no room
                ],
                [ // Вторник
                    {lecture: "", title: "Design", room: ""},                //no room
                    {lecture: "", title: "Design", room: ""},                //no room
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Design", room: ""},                //no room
                    {lecture: "", title: "Work Experience", room: "26"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Furniture Making & Design", room: "17"},
                    {lecture: "", title: "CAD", room: "19"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "CAD", room: "19"},
                    {lecture: "", title: "CAD", room: "19"},
                ],
                [ // Четверг
                    {lecture: "", title: "Building Construction", room: "17"},
                    {lecture: "", title: "Building Construction", room: "17"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Building Construction", room: "17"},
                    {lecture: "", title: "Wood Fabrication", room: "17"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Architectural Drawing", room: "17"},
                    {lecture: "", title: "Work Experience", room: "25"},
                ],
                [ // Пятница
                    {lecture: "", title: "Communications", room: "30"},
                    {lecture: "", title: "Communications", room: "30"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Architectural Drawing", room: "17"},
                    {lecture: "", title: "Architectural Drawing", room: "17"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Computer Games Design (Creative Media)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Computer Illustrated Graphic", room: "Computer"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "Computer"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Computer Illustrated Graphic", room: "Computer"},
                    {lecture: "", title: "PPD", room: "Computer"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications", room: "Computer"},
                    {lecture: "", title: "Communications", room: "Computer"},
                ],
                [ // Вторник
                    {lecture: "", title: "3D Modelling", room: "Computer"},
                    {lecture: "", title: "3D Modelling", room: "Computer"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "3D Modelling", room: "Computer"},
                    {lecture: "", title: "Web Authoring", room: "Computer"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Web Authoring", room: "Computer"},
                    {lecture: "", title: "Web Authoring", room: "Computer"},
                ],
                [ // Среда
                    {lecture: "", title: "Games Analysis", room: "Computer"},
                    {lecture: "", title: "Games Analysis", room: "Computer"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Games Analysis", room: "Computer"},
                    {lecture: "", title: "PPD", room: "Computer"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Digital Editing", room: "Computer"},
                    {lecture: "", title: "Digital Editing", room: "Computer"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Digital Editing", room: "Computer"},
                    {lecture: "", title: "Design Skills", room: "Computer"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Design Skills", room: "Computer"},
                    {lecture: "", title: "Design Skills", room: "Computer"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Digital Design with Visual Communication",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Design Skills", room: "10"},
                    {lecture: "", title: "Design Skills", room: "10"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Design Skills", room: "10"},
                    {lecture: "", title: "Team Working", room: "13"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Вторник
                    {lecture: "", title: "Multimedia Authoring", room: "10"},
                    {lecture: "", title: "Multimedia Authoring", room: "10"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Multimedia Authoring", room: "10"},
                    {lecture: "", title: "Multimedia Project Development", room: "10"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Multimedia Project Development", room: "10"},
                    {lecture: "", title: "Multimedia Project Development", room: "10"},
                ],
                [ // Среда
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Computer Illustrated Graphic", room: "10"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Web Authoring", room: "10"},
                    {lecture: "", title: "Web Authoring", room: "10"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Web Authoring", room: "10"},
                    {lecture: "", title: "Digital Photography", room: "10"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Digital Photography", room: "10"},
                    {lecture: "", title: "Digital Photography", room: "10"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Team Working", room: "25"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "30"},
                    {lecture: "", title: "Work Experience", room: "30"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Engineering and Electronic Technology",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Electronics", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Electronics", room: "19"},
                    {lecture: "", title: "Electronics", room: "19"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Maths", room: "19"},
                    {lecture: "", title: "Communications", room: "19"},
                ],
                [ // Вторник
                    {lecture: "", title: "Maths", room: "19"},
                    {lecture: "", title: "Workshop Theory", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Workshop Theory", room: "19"},
                    {lecture: "", title: "Electronics", room: "19"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Electronics", room: "19"},
                    {lecture: "", title: "Electronics", room: "19"},
                ],
                [ // Среда
                    {lecture: "", title: "Mechanics", room: "19"},
                    {lecture: "", title: "Mechanics", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Mechanics", room: "19"},
                    {lecture: "", title: "Communications", room: "22"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Class", room: "19"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "CAD", room: "19"},
                    {lecture: "", title: "CAD", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "CAD", room: "19"},
                    {lecture: "", title: "Engeneering Workshop Process", room: "19"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Engeneering Workshop Process", room: "19"},
                    {lecture: "", title: "Engeneering Workshop Process", room: "19"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Work Experience", room: "23"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "23"},
                    {lecture: "", title: "Maths", room: "23"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Hospitality Operations",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Word Processing / Hotel/Professional Catering", room: "27"},
                    {lecture: "", title: "Word Processing / Hotel/Professional Catering", room: "27"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Practice", room: "27"},
                    {lecture: "", title: "Work Practice", room: "27"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Personal Effectiveness", room: "27"},
                    {lecture: "", title: "Personal Effectiveness", room: "27"},
                ],
                [ // Вторник
                    {lecture: "", title: "Meal Service", room: "22 A/B"},
                    {lecture: "", title: "Meal Service", room: "22 A/B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Food Science & Technology", room: "22B"},
                    {lecture: "", title: "Food Science & Technology", room: "22B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications", room: "27"},
                    {lecture: "", title: "Communications", room: "27"},
                ],
                [ // Среда
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Meal Planning / Applied Nutrition", room: "22B"},
                    {lecture: "", title: "Meal Planning / Applied Nutrition", room: "22B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Food Preparation", room: "22B"},
                    {lecture: "", title: "Food Preparation", room: "22B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Accommodation Techniques", room: "22B"},
                    {lecture: "", title: "Accommodation Techniques", room: "22B"},
                ],
                [ // Пятница
                    {lecture: "", title: "Accommodation Techniques", room: "22B"},
                    {lecture: "", title: "Accommodation Techniques", room: "22B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Food Preparation", room: "22B"},
                    {lecture: "", title: "Food Preparation", room: "22 A/B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Legal Studies",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Assignment Support", room: "26"},
                    {lecture: "", title: "Business Law", room: "26"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Family Law", room: "26"},
                    {lecture: "", title: "Employment Law", room: "26"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Legal Practice", room: "26"},
                    {lecture: "", title: "Legal Practice", room: "26"},
                ],
                [ // Вторник
                    {lecture: "", title: "Family Law", room: "26"},
                    {lecture: "", title: "Legal Practice", room: "26"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Employment Law", room: "26"},
                    {lecture: "", title: "Word Processing", room: "1"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Criminal Law", room: "26"},
                    {lecture: "", title: "PPD", room: "26"},
                ],
                [ // Среда
                    {lecture: "", title: "Criminal Law", room: "26"},
                    {lecture: "", title: "Criminal Law", room: "26"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Business Law", room: "26"},
                    {lecture: "", title: "Business Law", room: "26"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Family Law", room: "26"},
                    {lecture: "", title: "PPD", room: "26"},
                ],
                [ // Четверг
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Assignment Class Law", room: "26"},
                    {lecture: "", title: "Employment Law", room: "26"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Word Processing", room: "1"},
                    {lecture: "", title: "Word Processing", room: "1"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Music Performance",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Sound Engineering", room: "14"},
                    {lecture: "", title: "Sound Engineering", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Event Production", room: "14"},
                    {lecture: "", title: "Event Production", room: "14"},
                ],
                [ // Вторник
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "Music Theory", room: "14"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Music Theory", room: "14"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "PPD", room: "19"},
                    {lecture: "", title: "PPD", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "Team Working", room: "14"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Team Working", room: "14"},
                    {lecture: "", title: "Sound Engineering", room: "14"},
                ],
                [ // Пятница
                    {lecture: "", title: "Music Theory", room: "14"},
                    {lecture: "", title: "Music Theory", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Theory", room: "14"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Office Administration",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Bookkeeping", room: "30"},
                    {lecture: "", title: "Customer Service", room: "30"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Spreadsheets", room: "30"},
                    {lecture: "", title: "Spreadsheets", room: "30"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Word Processing", room: "30"},
                    {lecture: "", title: "Info & Admin", room: "30"},
                ],
                [ // Вторник
                    {lecture: "", title: "Work Experience", room: "30"},
                    {lecture: "", title: "Word Processing", room: "30"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Text Production", room: "30"},
                    {lecture: "", title: "Info & Admin", room: "30"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Spreadsheets", room: "30"},
                    {lecture: "", title: "Spreadsheets", room: "30"},
                ],
                [ // Среда
                    {lecture: "", title: "Audio Transcription", room: "30"},
                    {lecture: "", title: "Work Experience", room: "30"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Customer Service", room: "30"},
                    {lecture: "", title: "Customer Service", room: "30"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Text Production", room: "30"},
                    {lecture: "", title: "Text Production", room: "30"},
                ],
                [ // Четверг
                    {lecture: "", title: "Bookkeeping", room: "30"},
                    {lecture: "", title: "Bookkeeping", room: "30"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Audio Transcription", room: "30"},
                    {lecture: "", title: "Audio Transcription", room: "30"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Word Processing", room: "30"},
                    {lecture: "", title: "Info & Admin", room: "30"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Office Management (Level 6)",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Spreadsheet Methods", room: "12"},
                    {lecture: "", title: "Spreadsheet Methods", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Audio Transcription", room: "12"},
                    {lecture: "", title: "Audio Transcription", room: "12"},
                ],
                [ // Вторник
                    {lecture: "", title: "Word Processing", room: "12"},
                    {lecture: "", title: "Spreadsheet Methods", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Customer Service", room: "12"},
                    {lecture: "", title: "Customer Service", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "HR Management", room: "12"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "HR Management", room: "12"},
                    {lecture: "", title: "HR Management", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Admin Practice", room: "12"},
                    {lecture: "", title: "Work Experience", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Spreadsheet Methods", room: "12"},
                    {lecture: "", title: "Customer Service", room: "12"},
                ],
                [ // Четверг
                    {lecture: "", title: "Word Processing", room: "12"},
                    {lecture: "", title: "Word Processing", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Payroll", room: "12"},
                    {lecture: "", title: "Assignment Support", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Support", room: "12"},
                    {lecture: "", title: "Work Experience", room: "12"},
                ],
                [ // Пятница
                    {lecture: "", title: "Admin Practice", room: "12"},
                    {lecture: "", title: "Admin Practice", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Payroll", room: "12"},
                    {lecture: "", title: "Payroll", room: "12"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Personal Training & Nutrition",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Sport/Rec Studies", room: "12"},
                    {lecture: "", title: "Sport/Rec Studies", room: "12"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Safety & Health", room: "29"},
                    {lecture: "", title: "Safety & Health", room: "29"},
                ],
                [ // Вторник
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Assignment Support", room: "23"},
                    {lecture: "", title: "Assignment Support", room: "28"},
                ],
                [ // Среда
                    {lecture: "", title: "Exercise & Fitness", room: "Gym"},
                    {lecture: "", title: "Exercise & Fitness", room: "Gym"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Leisure Facility", room: "Gym / 1"},
                    {lecture: "", title: "Leisure Facility", room: "Gym / 1"},
                ],
                [ // Четверг
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym / 13"},
                    {lecture: "", title: "ITEC Strength & Conditioning", room: "Gym / 29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Sport Anatomy & Physiology", room: "29"},
                    {lecture: "", title: "Sport Anatomy & Physiology", room: "29"},
                ],
                [ // Пятница
                    {lecture: "", title: "Nutrition", room: "29"},
                    {lecture: "", title: "Nutrition", room: "29"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Experience", room: "29"},
                    {lecture: "", title: "Work Experience", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Physiotherapy Assistant Studies",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Safety & Health", room: "21"},
                    {lecture: "", title: "Safety & Health", room: "21"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Communications", room: "21"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Care Support", room: "21"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Вторник
                    {lecture: "", title: "Anatomy & Physiology", room: "21"},
                    {lecture: "", title: "ITEC Sports Massage", room: "21"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "ITEC Sports Massage", room: "21"},
                    {lecture: "", title: "ITEC Sports Massage", room: "21"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "ITEC Sports Massage", room: "21"},
                    {lecture: "", title: "ITEC Sports Massage", room: "21"},
                ],
                [ // Среда
                    {lecture: "", title: "Communications", room: "13"},
                    {lecture: "", title: "Infection Prevention", room: "21"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Infection Prevention", room: "21"},
                    {lecture: "", title: "Infection Prevention", room: "21"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Anatomy & Physiology", room: "21"},
                    {lecture: "", title: "Anatomy & Physiology", room: "21"},
                ],
                [ // Четверг
                    {lecture: "", title: "Physiotherapy Assistant Theory", room: "21"},
                    {lecture: "", title: "Physiotherapy Assistant Theory", room: "21"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Physiotherapy Assistant Theory", room: "21"},
                    {lecture: "", title: "Physiotherapy Assistant Practice", room: "21"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Physiotherapy Assistant Practice", room: "21"},
                    {lecture: "", title: "Physiotherapy Assistant Practice", room: "21"},
                ],
                [ // Пятница
                    {lecture: "", title: "Work Experience", room: "21"},
                    {lecture: "", title: "Work Experience", room: "21"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Care Support", room: "21"},
                    {lecture: "", title: "Care Support", room: "21"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Pre Garda Studies",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Criminal Law", room: "23"},
                    {lecture: "", title: "Criminal Law", room: "23"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Criminology", room: "19"},
                    {lecture: "", title: "Conflict Resolution", room: "23"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Business Law", room: "23"},
                    {lecture: "", title: "Business Law", room: "23"},
                ],
                [ // Вторник
                    {lecture: "", title: "Legal Practice", room: "23"},
                    {lecture: "", title: "Conflict Resolution", room: "23"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Word Processing", room: "1"},
                    {lecture: "", title: "Assignment Support", room: "13"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Exercise & Fitness", room: "Complex"},
                    {lecture: "", title: "Exercise & Fitness", room: "Complex"},
                ],
                [ // Среда
                    {lecture: "", title: "Assignment Support", room: "23"},
                    {lecture: "", title: "Business Law", room: "23"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Criminal Law", room: "23"},
                    {lecture: "", title: "PPD", room: "23"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications", room: "23"},
                    {lecture: "", title: "Assignment Support", room: "27"},
                ],
                [ // Четверг
                    {lecture: "", title: "PPD", room: "23"},
                    {lecture: "", title: "Legal Practice", room: "23"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Legal Practice", room: "23"},
                    {lecture: "", title: "Conflict Resolution", room: "23"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Criminology", room: "23"},
                    {lecture: "", title: "Criminology", room: "23"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Word Processing", room: "1"},
                    {lecture: "", title: "Word Processing", room: "1"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Pre Teaching & Education Studies",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Concepts in Education", room: "29"},
                    {lecture: "", title: "Concepts in Education", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Team Working", room: "1"},
                    {lecture: "", title: "Team Working", room: "1"},
                ],
                [ // Вторник
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "Work Experience", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Word Processing", room: "27"},
                    {lecture: "", title: "Assignment Support", room: "27"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "Research & Study Skills", room: ""},    // no room
                    {lecture: "", title: "Research & Study Skills", room: ""},    // no room
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Interpersonal / Group Behaviour", room: ""},     //no room
                    {lecture: "", title: "Interpersonal / Group Behaviour", room: ""},     //no room
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Psychology of People", room: ""},        // no room
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Research & Study Skills", room: ""},    // no room            
                    {lecture: "", title: "Psychology of People", room: ""},        // no room          
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Communications", room: "25"},
                    {lecture: "", title: "Work Experience", room: "27"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Psychology of People", room: ""},        // no room
                    {lecture: "", title: "Assignment Support", room: "27"},
                ],
                [ // Пятница
                    {lecture: "", title: "Word Processing", room: "28"},
                    {lecture: "", title: "Word Processing", room: "28"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Concepts in Education", room: "28"},
                    {lecture: "", title: "Interpersonal / Group Behaviour", room: ""},     //no room
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Professional Cookery",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Word Processing / Hotel/Professional Catering", room: "27"},
                    {lecture: "", title: "Word Processing / Hotel/Professional Catering", room: "27"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Work Practice", room: "27"},
                    {lecture: "", title: "Work Practice", room: "27"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Personal Effectiveness", room: "27"},
                    {lecture: "", title: "Personal Effectiveness", room: "27"},
                ],
                [ // Вторник
                    {lecture: "", title: "Meal Service", room: "22 A/B"},
                    {lecture: "", title: "Meal Service", room: "22 A/B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Food Science & Technology", room: "22B"},
                    {lecture: "", title: "Food Science & Technology", room: "22B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Culinary Techniques", room: "22 A/B"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "Culinary Techniques", room: "22 A/B"},
                    {lecture: "", title: "Culinary Techniques", room: "22 A/B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Culinary Techniques", room: "22 A/B"},
                    {lecture: "", title: "International Cuisine", room: "22 A/B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "International Cuisine", room: "22 A/B"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Четверг
                    {lecture: "", title: "Meal Planning / Applied Nutrition", room: "22B"},
                    {lecture: "", title: "Meal Planning / Applied Nutrition", room: "22B"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Pastry Baking & Desserts", room: "22B"},
                    {lecture: "", title: "Pastry Baking & Desserts", room: "22B"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Pastry Baking & Desserts", room: "22B"},
                    {lecture: "", title: "International Cuisine", room: "22 A/B"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Sound and Production",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "Sound Engineering", room: "14"},
                    {lecture: "", title: "Sound Engineering", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Event Production", room: "14"},
                    {lecture: "", title: "Event Production", room: "14"},
                ],
                [ // Вторник
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Performance", room: "14"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Среда
                    {lecture: "", title: "Music Techniques", room: "14"},
                    {lecture: "", title: "Music Techniques", room: "14"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Techniques", room: "14"},
                    {lecture: "", title: "Audio Engineering", room: "10"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Audio Engineering", room: "10"},
                    {lecture: "", title: "Audio Engineering", room: "10"},
                ],
                [ // Четверг
                    {lecture: "", title: "PPD", room: "19"},
                    {lecture: "", title: "PPD", room: "19"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Music Industry Studies", room: "14"},
                    {lecture: "", title: "Team Working", room: "14"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Team Working", room: "14"},
                    {lecture: "", title: "Sound Engineering", room: "14"},
                ],
                [ // Пятница
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        },
        {
            title: "Sports and PE Pre Teaching",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "GAA", room: "Complex"},
                    {lecture: "", title: "GAA", room: "Complex"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Concepts of Education", room: "29"},
                    {lecture: "", title: "Concepts of Education", room: "29"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Soccer Coaching", room: "Complex"},
                    {lecture: "", title: "Soccer Coaching", room: "Complex"},
                ],
                [ // Вторник
                    {lecture: "", title: "Leisure Facility Operations", room: "Hall"},
                    {lecture: "", title: "Leisure Facility Operations", room: "Hall"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Assignment Support", room: "23"},
                    {lecture: "", title: "Assignment Support", room: "23"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications", room: "1"},
                    {lecture: "", title: "Communications", room: "1"},
                ],
                [ // Среда
                    {lecture: "", title: "Soccer Coaching", room: "Hall"},
                    {lecture: "", title: "Soccer Coaching", room: "Hall"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Sport/Rec Studies", room: "13"},
                    {lecture: "", title: "Nutrition", room: "13"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Sport/Rec Studies", room: "Hall"},
                    {lecture: "", title: "Sport/Rec Studies", room: "Hall"},
                ],
                [ // Четверг
                    {lecture: "", title: "Work Experience", room: "26"},
                    {lecture: "", title: "Work Experience", room: "26"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Exercise & Fitness", room: "1"},
                    {lecture: "", title: "Exercise & Fitness", room: "1"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Nutrition", room: "26"},
                    {lecture: "", title: "Nutrition", room: "26"},
                ],
                [ // Пятница
                    {lecture: "", title: "Basketball Coaching", room: "Complex"},
                    {lecture: "", title: "Basketball Coaching", room: "Complex"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Concepts of Education", room: "28"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        }
    ]
}

//

// Определение интерфейса для отмеченных дат
interface MarkedDatesI {
    [key: string]: "holiday" | "christmas" | "mid-terms" | "eater-break"; // ключ - строка (дата в формате "YYYY-MM-DD"), значение - строка (класс)
}

const markedDates: MarkedDatesI = {
    '2024-10-01': 'holiday',   // Праздник
    '2024-10-02': 'christmas',  // Рождество
    '2024-10-03': 'mid-terms',  // Середина семестра
    '2024-10-04': 'eater-break', // Пасхальные каникулы
};


export {dataCourse, dataStaff, markedDates};
