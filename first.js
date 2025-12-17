const addbtn = document.getElementById("addproject");
const projectcontainer = document.getElementById("projectContainer");

// 🔹 Page load pe saved projects dikhao
window.onload = function () {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach(project => addProjectToDOM(project));
};

// 🔹 Add project
addbtn.addEventListener("click", function () {

  let projectname = prompt("Enter Project Name");
  let imageurl = prompt("Paste Image URL");
  let projectlink = prompt("Paste Project Link");


  let project = {
    id: Date.now(),   // 👈 UNIQUE ID
    name: projectname,
    image: imageurl,
    link: projectlink
  };

  saveProject(project);
  addProjectToDOM(project);
});

// 🔹 DOM me box banana
function addProjectToDOM(project) {
  let box = document.createElement("div");
  box.style.border = "1px solid black";
  box.style.margin = "10px";
  box.style.padding = "10px";
  box.style.boxShadow= "-1px -10px 25px rgba(76, 158, 209, 1)";

  box.innerHTML = `
    <img src="${project.image}" width="200"><br>
    <h3>${project.name}</h3>
    <a href="${project.link}" target="_blank">
      <button>View Project</button>
    </a>
    <button class="delete-btn">Delete</button>
  `;

  // 🔹 DELETE BUTTON LOGIC
  box.querySelector(".delete-btn").addEventListener("click", function () {
    deleteProject(project.id);
    box.remove();
  });

  projectcontainer.appendChild(box);
}

// 🔹 Save to localStorage
function saveProject(project) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
}

// 🔹 Delete from localStorage
function deleteProject(id) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects = projects.filter(project => project.id !== id);
  localStorage.setItem("projects", JSON.stringify(projects));
}

let addskillbtn = document.getElementById('addskillbtn');
let skillcontainer = document.getElementById('skillContainer');

// 🔹 LocalStorage se skills load
let skills = JSON.parse(localStorage.getItem('skills')) || [];

// 🔹 Page load par show karna
skills.forEach(skill => {
  addSkillToPage(skill);
});

// 🔹 Button click
addskillbtn.addEventListener('click', () => {
  let skillName = prompt('Enter Skill Name');
  if (!skillName) return;

  skills.push(skillName);
  localStorage.setItem('skills', JSON.stringify(skills));

  addSkillToPage(skillName);
});

// 🔹 Skill box banane ka function
function addSkillToPage(skillName) {
  let box = document.createElement('div');
  box.className = 'skillbox';
  box.innerHTML = `<p>● ${skillName}</p>`;
  skillcontainer.appendChild(box);
}
