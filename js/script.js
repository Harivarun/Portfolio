document.addEventListener("DOMContentLoaded", function() {
  fetch('content/content.txt')
    .then(response => response.text())
    .then(data => {
      // Split the content into sections based on [Section] headers
      const sections = data.split(/(.+?)\n/).filter(section => section.trim());

      // Map to hold section names and corresponding content
      const contentMap = {};
      for (let i = 0; i < sections.length; i += 2) {
        const sectionName = sections[i].trim();
        const sectionContent = sections[i + 1].trim();
        contentMap[sectionName] = sectionContent;
      }

      // Populate the "About Me" section
      if (contentMap['About']) {
        const aboutLines = contentMap['About'].split('\n');
        document.getElementById('about-name').textContent = aboutLines[0].trim();
        document.getElementById('about-contact').textContent = aboutLines[1].trim();
      }

      // Populate the "Professional Summary" section
      if (contentMap['Summary']) {
        document.getElementById('summary-text').textContent = contentMap['Summary'];
      }

      // Populate the "Skills" section
      if (contentMap['Skills']) {
        const skillsArray = contentMap['Skills'].split('\n');
        const skillsList = document.getElementById('skills-list');
        skillsArray.forEach(skill => {
          if (skill.trim()) {
            let listItem = document.createElement('li');
            listItem.textContent = skill.trim();
            skillsList.appendChild(listItem);
          }
        });
      }

      // Populate the "Experience" section
      if (contentMap['Experience']) {
        const experienceArray = contentMap['Experience'].split('\n');
        const experienceList = document.getElementById('experience-list');
        experienceArray.forEach(experience => {
          if (experience.trim()) {
            let listItem = document.createElement('li');
            listItem.textContent = experience.trim();
            experienceList.appendChild(listItem);
          }
        });
      }

      // Populate the "Education" section
      if (contentMap['Education']) {
        document.getElementById('education-text').textContent = contentMap['Education'];
      }

    })
    .catch(error => console.error('Error loading content file:', error));
});
