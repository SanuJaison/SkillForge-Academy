import mernImg from "../assets/mern.avif";
import pythonImg from "../assets/python.avif";
import javaImg from "../assets/java.avif";
import forntendImg from "../assets/frontend.avif";
import dataAnalysisImg from "../assets/dataAnalysis.avif";
import devOpsImg from "../assets/devops.avif";

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
        level: "Carrer track",
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
        image: forntendImg,
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
    }


]

export default coursesData;