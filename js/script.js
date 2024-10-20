// Sample skills data (replace with actual skills from PDF)
const skillsData = [
    { name: "AEM", level: "Expert" },
    { name: "Java", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Spring MVC", level: "Intermediate" },
    // ... add more skills
];

const skillsContainer = document.querySelector(".skills-container");

skillsData.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.textContent = `${skill.name} - ${skill.level}`;
    skillsContainer.appendChild(skillElement);
});

// Sample experience data (replace with actual experience from PDF)
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

// Sample projects data (replace with actual projects - you'll need to extract these from the PDF)
const projectsData = [
    {
        name: "Project 1",
        description: "Description of Project 1"
    },
    {
        name: "Project 2",
        description: "Description of Project 2"
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
