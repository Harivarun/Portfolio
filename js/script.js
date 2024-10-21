document.addEventListener("DOMContentLoaded", function() {
  // Hardcoded content
  const content = {
    about: {
      name: "Sri Hari Varun Marubattula",
      contact: "mshvarunkumar@gmail.com | +91-9182576649 | Hyderabad, India"
    },
    summary: "5.11 years of experience in developing AEM and web applications with a strong foundation in AEM components, Sling models, Java full-stack development, and front-end technologies like HTML, CSS, and Bootstrap.",
    skills: [
      { skill: "Java", proficiency: "Expert" },
      { skill: "HTML5", proficiency: "Advanced" },
      { skill: "CSS", proficiency: "Advanced" },
      { skill: "AEM 6.5 & 6.4", proficiency: "Expert" },
      { skill: "Spring Boot", proficiency: "Advanced" },
      { skill: "MySQL, Oracle", proficiency: "Intermediate" },
      { skill: "Postman, Jenkins", proficiency: "Intermediate" },
      { skill: "REST API", proficiency: "Intermediate" }
    ],
    experience: [
      { role: "AEM Developer", company: "Publicis Sapient", duration: "May 2022 – Present" },
      { role: "AEM Developer", company: "TA Digital", duration: "June 2021 – May 2022" },
      { role: "Software Developer", company: "Capgemini India Pvt. Ltd", duration: "Sep 2018 – May 2021" }
    ],
    education: "Bachelor of Technology, Computer Science and Engineering\nG. Pullaiah College of Engineering and Technology, Kurnool (2014-2018)"
  };

  // Populate the "About Me" section
  document.getElementById('about-name').textContent = content.about.name;
  document.getElementById('about-contact').textContent = content.about.contact;

  // Populate the "Professional Summary" section
  document.getElementById('summary-text').textContent = content.summary;

  // Populate the "Skills" table
  const skillsTableBody = document.getElementById('skills-table').querySelector('tbody');
  content.skills.forEach(({ skill, proficiency }) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${skill}</td><td>${proficiency}</td>`;
    skillsTableBody.appendChild(row);
  });

  // Populate the "Experience" table
  const experienceTableBody = document.getElementById('experience-table').querySelector('tbody');
  content.experience.forEach(({ role, company, duration }) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${role}</td><td>${company}</td><td>${duration}</td>`;
    experienceTableBody.appendChild(row);
  });

  // Populate the "Education" section
  document.getElementById('education-text').textContent = content.education;
});
