import mernImg from "../assets/mern.avif";
import pythonImg from "../assets/python.avif";
import javaImg from "../assets/java.avif";
import frontendImg from "../assets/frontend.avif";
import dataAnalysisImg from "../assets/dataAnalysis.avif";
import devOpsImg from "../assets/devops.avif";
import reactAdvancedImg from "../assets/reactAdvanced.svg";
import nodeBackendImg from "../assets/nodeBackend.svg";
import uiuxDesignImg from "../assets/uiuxDesign.svg";
import machineLearningImg from "../assets/machineLearning.svg";
import softwareTestingImg from "../assets/softwareTesting.svg";
import awsCloudImg from "../assets/awsCloud.svg";

const coursesData = [
    {
        id: 1,
        title: "MERN Stack Development",
        price: "₹29,999",
        description: "Build modern full-stack web apps with REST APIs, authentication, dashboards, deployment, and portfolio projects.",
        duration: "24 weeks",
        level: "Beginner to job-ready",
        image: mernImg,
        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js"
        ]
    },
    {
        id: 2,
        title: "Python Full Stack",
        price: "₹27,999",
        description: "Learn Python backend development, Django, database design, frontend integration, and production-ready project workflows.",
        duration: "22 weeks",
        level: "Beginner friendly",
        image: pythonImg,
        technologies: [
            "Python",
            "Django",
            "React",
            "SQL"
        ]
    },
    {
        id: 3,
        title: "Java Full Stack",
        price: "₹31,999",
        description: "Create enterprise-grade applications with Java, Spring Boot APIs, secure services, frontend views, and database systems.",
        duration: "26 weeks",
        level: "Career track",
        image: javaImg,
        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL"
        ]
    },
    {
        id: 4,
        title: "Frontend Developer",
        price: "₹19,999",
        description: "Master responsive UI development, React components, Bootstrap layouts, state basics, and practical interface projects.",
        duration: "16 weeks",
        level: "Foundation track",
        image: reactAdvancedImg,
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ]
    },
    {
        id: 5,
        title: "Data Analytics with Python",
        price: "₹24,999",
        description: "Analyze real datasets, clean and model information, build visual reports, and prepare for entry-level analytics roles.",
        duration: "18 weeks",
        level: "Analyst track",
        image: dataAnalysisImg,
        technologies: [
            "Python",
            "Pandas",
            "SQL",
            "Visualization"
        ]
    },
    {
        id: 6,
        title: "Cloud & DevOps Basics",
        price: "₹21,999",
        description: "Understand deployment, cloud hosting, containers, CI/CD basics, and the tools developers use to ship reliable apps.",
        duration: "14 weeks",
        level: "Starter track",
        image: devOpsImg,
        technologies: [
            "Linux",
            "Git",
            "Docker",
            "AWS"
        ]
    },
    {
        id: 7,
        title: "React JS Advanced",
        price: "₹18,999",
        description: "Build polished React applications with routing, reusable components, hooks, API integration, and dashboard workflows.",
        duration: "12 weeks",
        level: "Intermediate track",
        image: frontendImg,
        technologies: [
            "React",
            "Hooks",
            "Redux",
            "APIs"
        ]
    },
    {
        id: 8,
        title: "Node.js Backend Development",
        price: "₹22,999",
        description: "Create secure backend services with Express, authentication, database models, validation, and production API patterns.",
        duration: "16 weeks",
        level: "Backend track",
        image: nodeBackendImg,
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "JWT"
        ]
    },
    {
        id: 9,
        title: "UI/UX Design Essentials",
        price: "₹17,999",
        description: "Learn user research basics, wireframing, visual design, prototyping, and responsive layouts for modern digital products.",
        duration: "14 weeks",
        level: "Design foundation",
        image: uiuxDesignImg,
        technologies: [
            "Figma",
            "Wireframes",
            "Prototypes",
            "UI Design"
        ]
    },
    {
        id: 10,
        title: "Machine Learning Basics",
        price: "₹26,999",
        description: "Understand core ML concepts, data preparation, model training, evaluation, and beginner-friendly prediction projects.",
        duration: "20 weeks",
        level: "Beginner ML track",
        image: machineLearningImg,
        technologies: [
            "Python",
            "NumPy",
            "Scikit-learn",
            "Models"
        ]
    },
    {
        id: 11,
        title: "Software Testing & QA",
        price: "₹16,999",
        description: "Practice manual testing, test cases, bug reports, API testing, automation basics, and quality workflows used by teams.",
        duration: "12 weeks",
        level: "QA starter track",
        image: softwareTestingImg,
        technologies: [
            "Testing",
            "Postman",
            "Selenium",
            "Jira"
        ]
    },
    {
        id: 12,
        title: "AWS Cloud Practitioner",
        price: "₹23,999",
        description: "Learn cloud fundamentals, AWS services, storage, networking, security basics, and deployment concepts for beginners.",
        duration: "15 weeks",
        level: "Cloud foundation",
        image: awsCloudImg,
        technologies: [
            "AWS",
            "EC2",
            "S3",
            "IAM"
        ]
    }
]

export default coursesData;
