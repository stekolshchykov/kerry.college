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
            {lecture: "", title: "Work Experience", room: "31" },
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
            {lecture: "Maria Brosnan", title: "Multimedia Technology", room: "31"},
            {lecture: "Maria Brosnan", title: "Multimedia Technology", room: "31"},
            {}, // Перемена
            {lecture: "Maria Brosnan", title: "Multimedia Technology", room: "31"},
            {lecture: "Loz Ann McCarthy", title: "Work Experience", room: "31"},
            {}, // Обеденный перерыв
            {lecture: "John Collins", title: "Project Management", room: "31"},
            {lecture: "John Collins", title: "Project Management", room: "31"},
        ],
        [ // Вторник
            {},
            {},
            {}, // Перемена
            {},
            {lecture: "Loz Ann McCarthy", title: "Studio Location & Sound Production", room: "32"},
            {}, // Обеденный перерыв
            {lecture: "Loz Ann McCarthy", title: "Studio Location & Sound Production", room: "32"},
            {lecture: "Loz Ann McCarthy", title: "Studio Location & Sound Production", room: "32"},
        ],
        [ // Среда
            {lecture: "John Collins", title: "Project Management", room: "1"},
            {lecture: "Amanda O'Donnell", title: "Communications", room: "1"},
            {}, // Перемена
            {lecture: "Amanda O'Donnell", title: "Communications", room: "1"},
            {lecture: "Shane Murphy", title: "Graphics & Animation", room: "32"},
            {}, // Обеденный перерыв
            {lecture: "Shane Murphy", title: "Graphics & Animation", room: "32"},
            {lecture: "Shane Murphy", title: "Graphics & Animation", room: "32"},
        ],
        [ // Четверг
            {lecture: "Siobhan Murphy", title: "Design Skills", room: "32"},
            {lecture: "Siobhan Murphy", title: "Design Skills", room: "32"},
            {}, // Перемена
            {lecture: "Siobhan Murphy", title: "Design Skills", room: "32"},
            {lecture: "John Collins", title: "Web Authoring", room: "32"},
            {}, // Обеденный перерыв
            {lecture: "John Collins", title: "Web Authoring", room: "32"},
            {lecture: "John Collins", title: "Web Authoring", room: "32"},
        ],
        [ // Пятница
            {lecture: "Loz Ann McCarthy", title: "Work Experience", room: "32"},
            {lecture: "Siobhan Murphy", title: "Computer Illustration Graphics", room: "10"},
            {}, // Перемена
            {lecture: "Siobhan Murphy", title: "Computer Illustration Graphics", room: "10"},
            {lecture: "Siobhan Murphy", title: "Computer Illustration Graphics", room: "10"},
            {}, // Обеденный перерыв
            {},
            {},
        ]
    ]
},
{
            title: "Artificial Intelligence",
            schedule: [
                [ // Понедельник
                    {lecture: "Emma Green", title: "Introduction to AI", room: "401"},
                    {lecture: "Liam Black", title: "Machine Learning Overview", room: "402"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Neural Networks Basics", room: "403"},
                    {lecture: "Liam Black", title: "AI Ethics", room: "402"},
                ],
                [ // Вторник
                    {lecture: "Emma Green", title: "Supervised Learning", room: "401"},
                    {lecture: "Liam Black", title: "Unsupervised Learning", room: "402"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Reinforcement Learning", room: "403"},
                    {},
                ],
                [ // Среда
                    {lecture: "Liam Black", title: "Deep Learning", room: "404"},
                    {lecture: "Emma Green", title: "Computer Vision", room: "401"},
                    {}, // Перемена
                    {lecture: "Liam Black", title: "Natural Language Processing", room: "404"},
                    {lecture: "Emma Green", title: "AI in Industry", room: "401"},
                ],
                [ // Четверг
                    {lecture: "Emma Green", title: "AI Tools and Libraries", room: "405"},
                    {lecture: "Liam Black", title: "Project Work", room: "401"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Future of AI", room: "404"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Liam Black", title: "AI Capstone Project", room: "401"},
                    {lecture: "Emma Green", title: "Final Exam Review", room: "402"},
                    {}, // Перемена
                    {lecture: "Liam Black", title: "Feedback Session", room: "403"},
                    {},
                ]
            ]
        },
        {
            title: "Mobile Development",
            schedule: [
                [ // Понедельник
                    {lecture: "Sophia Blue", title: "Introduction to Android", room: "501"},
                    {lecture: "Jackson Grey", title: "iOS Development", room: "502"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "Cross-Platform Frameworks", room: "503"},
                    {lecture: "Jackson Grey", title: "UI/UX Design", room: "502"},
                ],
                [ // Вторник
                    {lecture: "Sophia Blue", title: "Building UI in Android", room: "501"},
                    {lecture: "Jackson Grey", title: "Swift Basics", room: "502"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "App Architecture", room: "503"},
                    {},
                ],
                [ // Среда
                    {lecture: "Jackson Grey", title: "API Integration", room: "504"},
                    {lecture: "Sophia Blue", title: "Testing Mobile Apps", room: "501"},
                    {}, // Перемена
                    {lecture: "Jackson Grey", title: "Publishing Apps", room: "504"},
                    {lecture: "Sophia Blue", title: "App Monetization Strategies", room: "501"},
                ],
                [ // Четверг
                    {lecture: "Sophia Blue", title: "Mobile Security", room: "505"},
                    {lecture: "Jackson Grey", title: "Final Project Work", room: "501"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "User Feedback Analysis", room: "504"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Jackson Grey", title: "Mobile Development Trends", room: "501"},
                    {lecture: "Sophia Blue", title: "Project Showcase", room: "502"},
                    {}, // Перемена
                    {lecture: "Jackson Grey", title: "Closing Ceremony", room: "503"},
                    {},
                ]
            ]
        },
        {
            title: "Cybersecurity",
            schedule: [
                [ // Понедельник
                    {lecture: "Zoe Red", title: "Introduction to Cybersecurity", room: "601"},
                    {lecture: "Mason Yellow", title: "Network Security", room: "602"},
                    {}, // Перемена
                    {lecture: "Zoe Red", title: "Malware Analysis", room: "603"},
                    {lecture: "Mason Yellow", title: "Penetration Testing", room: "602"},
                ],
                [ // Вторник
                    {lecture: "Zoe Red", title: "Cyber Threats", room: "601"},
                    {lecture: "Mason Yellow", title: "Cryptography Basics", room: "602"},
                    {}, // Перемена
                    {lecture: "Zoe Red", title: "Ethical Hacking", room: "603"},
                    {},
                ],
                [ // Среда
                    {lecture: "Mason Yellow", title: "Risk Management", room: "604"},
                    {lecture: "Zoe Red", title: "Incident Response", room: "601"},
                    {}, // Перемена
                    {lecture: "Mason Yellow", title: "Security Policies", room: "604"},
                    {lecture: "Zoe Red", title: "Final Project Guidance", room: "601"},
                ],
                [ // Четверг
                    {lecture: "Zoe Red", title: "Network Forensics", room: "605"},
                    {lecture: "Mason Yellow", title: "Final Project Work", room: "601"},
                    {}, // Перемена
                    {lecture: "Zoe Red", title: "Future of Cybersecurity", room: "604"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Mason Yellow", title: "Cybersecurity Trends", room: "601"},
                    {lecture: "Zoe Red", title: "Final Exam Review", room: "602"},
                    {}, // Перемена
                    {lecture: "Mason Yellow", title: "Feedback Session", room: "603"},
                    {},
                ]
            ]
        }
    ]
}

export {dataCourse, dataStaff};
