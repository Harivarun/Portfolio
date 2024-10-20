// Skills data
const skillsData = [
    { name: "AEM", level: "Expert" },
    { name: "Java", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Spring MVC", level: "Intermediate" },
    { name: "Spring Boot", level: "Intermediate" },
    { name: "HTL", level: "Advanced" },
    { name: "JSP", level: "Intermediate" },
    { name: "MySQL", level: "Basic" },
    { name: "Oracle", level: "Basic" },
    // ... add more skills
];

const skillsContainer = document.querySelector(".skills-container");

skillsData.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.textContent = `${skill.name} - ${skill.level}`;
    skillsContainer.appendChild(skillElement);
});

// Experience data
const experienceData = [
    { 
        title: "AEM Developer",
        company: "Publicis Sapient",
        date: "May 2022 - Present",
        description: "Worked on component development and enhancements. Developed Sling models for components. Developed Sling servlets."
    },
    { 
        title: "AEM Developer",
        company: "Tech Aspect Solutions Pvt. Ltd - TA Digital",
        date: "June 2021 - May 2022",
        description: "Worked on component development and enhancements. Developed Sling models for components. Developed Sling servlets."
    },
    { 
        title: "AEM Developer",
        company: "Wrench Group, Inc.",
        date: "June 2021 - May 2022",
        description: "Worked on Junits and code coverages. Worked on bug fixes for components and models. Involved in the development of custom AEM Components."
    },
    { 
        title: "Software Developer",
        company: "Capgemini India Pvt. Ltd.",
        date: "Sep 2018 – May 2021",
        description: "Developing a new model called agent search model in which need to search an agent and display the agent details. Writing Junit units for the agent search module. Worked on API consumption through rest template to get agent list. Worked on integrating Google Maps in application to display the agent locations in the map. Working on enhancement of the functionalities in application. Identifying production defects and resolving them."
    },
    { 
        title: "Software Developer",
        company: "Capgemini India Pvt. Ltd.",
        date: "Sep 2018 – May 2021",
        description: "Migrated the services, jars and all the health e-apps from Java 7 to Java 8. Migrated the services, jars and all the health e-apps from artifactories to Nexus repository manager. Resolved production issues. Resolved the bugs and conflicts due to the version changes during the migration work. Documented the local setup process and issues faced along with their fixes. Knowledge transfer sessions for new team members regarding the project and assisted them in resolving issues."
    },
    // ... add more experience
];

const experienceContainer = document.querySelector(".experience-container");

experienceData.forEach(exp => {
    const expElement = document.createElement("div");
    expElement.innerHTML = `<h3>${exp.title}</h3>
                            <p><strong>${exp.company}</strong> - ${exp.date}</p>
                            <p>${exp.description}</p>`;
    experienceContainer.appendChild(expElement);
});

// Projects data
const projectsData = [
    {
        name: "Internet Health Rate Quote Application",
        description: "The project is under insurance domain and has different branches like life, health, vehicles etc. The purpose of the project is to take the details of user, based on the details the quote will be calculated and that will be sending to an agent. Application has two flows for all the states i.e., Hospital income and Medicaid supplement."
    },
    {
        name: "Migration work for health e-apps",
        description: "The project is under insurance demand and has different branches like life, health, vehicles etc. The purpose of the project is to maintain and enhance the health branch under health insurance team. These applications provide user interaction for the creation of new policies and updating of existing policies."
    },
    // ... add more projects
];

const projectsContainer = document.querySelector(".projects-container");

projectsData.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.innerHTML = `<h3>${project.name}</h3>
                                <p>${project.description}</p>`;
    projectsContainer.appendChild(projectElement);
});

// Certifications data
const certificationsData = [
    "Adobe Certified Expert - Adobe Experience Manager Sites Developer.",
    "Coursera certificate, Front-end UI frameworks and tools Bootstrap 4.",
    "OCA Java SE8 Programmer certified.",
    "Skill2Lead JavaScript full stack developer certified.",
    "Coursera Bootstrap 4 Certified.",
    "Coursera Full stack web development React Development certified"
];

const certificationsContainer = document.querySelector(".certifications-container"); // Update with your actual container
certificationsData.forEach(cert => {
    const certElement = document.createElement("div");
    certElement.textContent = cert;
    certificationsContainer.appendChild(certElement);
});
