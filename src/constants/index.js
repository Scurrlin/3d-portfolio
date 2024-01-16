import { neu, ga, propcard } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Enrollment Operations Lead",
        company_name: "Northeastern University CPS",
        icon: neu,
        iconBg: "#FEF7DA",
        date: "February 2018 - May 2022",
        points: [
            "Promoted to Lead 6 months after being hired as an Enrollment Operations Assistant in August 2017.",
            "Played integral role in launch of the Student Hub in April 2022 which resulted in a 75% improvement in international transcript condition fulfillment.",
            "Submitted an approved proposal for 16 GB RAM upgrades to all team members laptops to increase productivity.",
            "Assisted in training student workers and managed applicant caseloads across multiple populations."
        ],
    },
    {
        title: "Student Software Engineer",
        company_name: "General Assembly",
        icon: ga,
        iconBg: "#fbc3bc",
        date: "July 2022 - October 2022",
        points: [
            "Software Engineering Bootcamp: Full-Time Immersive Program.", 
            "12-week, 500+ hour Immersive Full Stack Software Engineering bootcamp. This intensive program covered product development fundamentals, object-oriented programming, MVC frameworks, data modeling, team collaboration strategies, and the creation of a professional portfolio."
            
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "December 2023 - January 2024",
        points: [
            "Modernized data pipelines and ETL processes to improve platform scalability.",
            "Collaborated with a senior developer to design and build a Web API tailored for specific CRMLS data queries."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Scurrlin',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/seancurrlin',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    }
];