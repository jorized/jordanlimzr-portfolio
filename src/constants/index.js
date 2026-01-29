import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import experience1 from "../assets/experiences/experience1.png";
import experience2 from "../assets/experiences/experience2.png";
import experience3 from "../assets/experiences/experience3.png";

export const HERO_CONTENT = `Hello! I am a current Year 3 Information Systems (IS) student at the National University of Singapore. As someone who is passionate about web and app development — this is where I showcase my work and journey.`;

export const EXPERIENCES = [
  {
    year: "Jul 2025 - Present",
    image: experience1,
    role: "Full Stack Developer",
    company: "Urban Sharing",
    description: `Worked on production-critical features across Urban Sharing’s micromobility platform (Fleet, Crew, Urban API), spanning front-end, back-end, and infrastructure. Led the migration of legacy UI components to a modern, reusable Material UI architecture, redesigned and extended MaaS APIs used by city clients, and supported platform migration to Kubernetes. Also spearheaded the rebuild of the public rider web application from an aging codebase to a newer one while preserving core business logic.`,
    technologies: [
      "React",
      "Next.js",
      "Material UI",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    year: "May 2024 - Aug 2024",
    image: experience2,
    role: "Support Engineer",
    company: "Solace",
    description: `Leveraged knowledge of event-driven architecture and undertook more than 10 support tickets. Developed a real-time messaging application using FlutterFlow and Dart, establishing connectivity between a mobile application and Solace's broker through the MQTT protocol. Additionally, built a dynamic visualization API using ReactFlow to generate flow charts, transforming log data into meaningful diagrams for support investigations.`,
    technologies: ["Jira", "React", "FlutterFlow", "Node.js", "Javascript"],
  },
  {
    year: "Jun 2023 - Aug 2023",
    image: experience3,
    role: "Software Trainee",
    company: "Metropolitan Wireless International",
    description: `Developed the front-end of an Automated Location Tracking Service (ALTS) web application using Angular, integrated with NgRx for state management, JasperReport for reporting, and PrimeNG for UI components. Additionally, contributed to the initial phase of revamping a Schedule Engine web application in Java, utilizing the Spring Boot framework and Quartz library to automate task scheduling at defined intervals.`,
    technologies: ["AngularJS", "Spring Boot", "Quartz"],
  },
];

export const PROJECTS = [
  {
    title: "GradLoh",
    image: project1,
    externalLink: "https://github.com/jorized/orbital-gradloh",
    description:
      "Developed as part of a NUS 2024 Orbital Project, GradLoh is a mobile application designed and developed to help NUS students plan for their graduation requirements and track their academic progress. With essential features such as a graduation progress dashboard and a dynamic course planner, students can easily plan their academic journey and stay on track to graduate on time.",
    technologies: ["React Native", "Spring Boot", "Redis", "MySQL"],
  },
  {
    title: "Covid-19 Self-Assessment Tool",
    image: project2,
    externalLink: "https://eservices.mlaw.gov.sg/satool/selfassessment.html",
    description:
      "An online pre-assessment web tool developed for the States Court to help parties determine their eligibility to file a Notification for Relief under the COVID-19 (Temporary Measures) Act.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];