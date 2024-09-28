import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import experience1 from "../assets/experiences/experience1.png";
import experience2 from "../assets/experiences/experience2.png";
import experience3 from "../assets/experiences/experience3.png";

export const HERO_CONTENT = `I am currently a Year 2 Information Systems student studying at the National University of Singapore (NUS). As someone who is passionate about web and app development and have experience working with technologies such as React, React Native, Node.js and many more, this is the place where I showcase my projects and share my experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    image: experience1,
    role: "Support Engineer",
    company: "Solace",
    description: `Leveraged knowledge of event-driven architecture and undertook more than 10 support tickets. Developed a real-time messaging application using FlutterFlow and Dart, establishing connectivity between a mobile application and Solace's broker through the MQTT protocol. Additionally, built a dynamic visualization API using ReactFlow to generate flow charts, transforming log data into meaningful diagrams for support investigations.`,
    technologies: ["Jira", "React", "FlutterFlow", "Node.js", "Javascript"],
  },
  {
    year: "Jun 2023 - Aug 2023",
    image: experience2,
    role: "Software Trainee",
    company: "Metropolitan Wireless International",
    description: `Developed the front-end of an Automated Location Tracking Service (ALTS) web application using Angular, integrated with NgRx for state management, JasperReport for reporting, and PrimeNG for UI components. Additionally, contributed to the initial phase of revamping a Schedule Engine web application in Java, utilizing the Spring Boot framework and Quartz library to automate task scheduling at defined intervals.`,
    technologies: ["AngularJS", "Spring Boot", "Quartz"],
  },
  {
    year: "Oct 2020 - May 2021",
    image: experience3,
    role: "Junior Software Developer",
    company: "IWANNAGO",
    description: `Revamped the architecture of an event ticketing website, leveraging Angular for the front-end and ASP.NET Core Web API for the back-end, integrated with Google Analytics and AWS for enhanced performance and insights. Additionally, collaborated with SEIKO to develop an Angular-based inventory management system for their watches, as part of an extended internship project`,
    technologies: ["AngularJS", "ASP.NET", "MySQL", "AWS"],
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

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
