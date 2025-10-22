import { projects_left_column, projects_right_column } from '../data/projects.js';
import { process } from '../data/process.js';
import { tools } from '../data/tools.js';
import { services } from '../data/services.js';

let sections = document.querySelectorAll('#home, #about, #projects, #contact');
let navLinks = document.querySelectorAll('header a');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => link.classList.remove('nav-link-active'));

      let activeLink = document.querySelector(`header a[href='#${id}']`);
      if (activeLink) {
        activeLink.classList.add('nav-link-active');
      }
    }
  });
});

let projects_column_rig = document.getElementById('projects-column-rig');
let projects_column_lef = document.getElementById('projects-column-lef');

listServices("about-serv-left-group");
listServices("about-serv-right-group");

listTools();

listProcess();

listProjects(projects_left_column, projects_column_lef, 2);
listProjects(projects_right_column, projects_column_rig, 2);

function listServices(column) {
  let serviceContainer = document.getElementById(column);
  let tempHTML = "";
  let n = 0;

  switch (column) {
    case "about-serv-left-group":
      n = 0;
      break;

    case "about-serv-right-group":
      n = 2;
      break;
    
    default:
  }

  let k = n + 2;

  for(let i = n; i < k; i++) {
    tempHTML +=
    "<div class='about-serv-column-group'>" +
    "<img class='about-serv-img' src='" + services[i].img + "' alt='" + services[i].header.toUpperCase + "'/>" +
    "<div class='about-serv-desc-group'>" +
    "<h6 class='about-serv-header'>" + services[i].header + "</h6>" +
    "<p class='about-serv-desc'>" + services[i].desc + "</p>" +
    "</div>" +
    "</div>";
  }

  serviceContainer.innerHTML = tempHTML;
}

function listTools() {
  let toolContainer = document.getElementById('about-tool-row');

  let tempHTML = "";
  for(let i = 0; i < tools.length; i++) {
    tempHTML +=
    "<div class='about-tool-group'>" +
    "<img class='about-tool-img' src='" + tools[i].img + "' alt='" + tools[i].title.toUpperCase() + "'/>" +
    "<p class='about-tool-title'>" + tools[i].title + "</p>" +
    "</div>";
  }

  toolContainer.innerHTML = tempHTML;
}

let isExpanded = false;

function expandBtnClicked() {
  isExpanded = !isExpanded;

  let expandBtnText = document.getElementById("projects-see-more-txt");

  if(isExpanded) {
    listProjects(projects_left_column, projects_column_lef, 4);
    listProjects(projects_right_column, projects_column_rig, 4);
    expandBtnText.innerText = "See less";
  }

  else {
    listProjects(projects_left_column, projects_column_lef, 2);
    listProjects(projects_right_column, projects_column_rig, 2);
    expandBtnText.innerText = "See more";
  }
}

window.expandBtnClicked = expandBtnClicked;

function listProcess() {
    let processContainer = document.getElementById('about-steps-column-container');

    let tempHTML = "";

    for(let i = 0; i < process.length; i++) {
      tempHTML +=
      "<div class='about-step-container'>" +
      "<div class='about-step-number-container'>" +
      process[i].step +
      "</div>" +
      "<img class='about-step-img' src='" + process[i].img + "' alt='" + process[i].title.toUpperCase() + "'>" +
      "<h6 class='about-step-title'>" + process[i].title + "</h6>" +
      "<p class='about-step-desc'>" + process[i].desc + "</p>" +
      "</div>";
    }

    processContainer.innerHTML = tempHTML;
}

function listProjects(projects, projectsColumn, numProjects) {
  let tempHTML = "";

  for(let i = 0; i < numProjects; i++) {

    let tempBubbleHTML = "";
    for(let j = 0; j < projects[i].bubbles.length; j++) {
      tempBubbleHTML += "<div class='project-bubble'><p>" + projects[i].bubbles[j] + "</p></div>";
    }

    tempHTML +=
    "<div class='project-container'>" +
    "<img class='project-img' src='" + projects[i].img + "' alt='" + projects[i].title.toUpperCase() + "'/>" +
    "<div class='project-bottom-row-group'>" +
    "<p class='project-title'>" + projects[i].title + "</p>" +
    "<div class='project-bottom-row-rig-group'>" +
    "<div class='project-bubble-group'>" +
    tempBubbleHTML +
    "</div>" +
    "<img class='project-expand-btn' src='assets/project-expand-btn.svg' alt='EXPAND'/>" +
    "</div>" +
    "</div>" +
    "</div>" + 
    "<div class='project-desc-container'><p>" + projects[i].desc + "</p></div>";

    projectsColumn.innerHTML = tempHTML;

    const expandBtns = projectsColumn.querySelectorAll('.project-expand-btn');
    const seeMoreGroup = document.getElementById('projects-see-more-group');
    expandBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const descContainer = projectsColumn.querySelectorAll('.project-desc-container')[index];
        descContainer.classList.toggle('active'); // toggle expand/collapse

        const expandBtn = projectsColumn.querySelectorAll('.project-expand-btn')[index];

        if (descContainer.classList.contains('active')) {
          expandBtn.style.transform = 'rotate(180deg)';
          seeMoreGroup.style.marginTop = "40px";
        } else {
          expandBtn.style.transform = 'rotate(360deg)';
          seeMoreGroup.style.marginTop = "0px";
        }

      });
    });
  }

  console.log("List Projects Called: n =", numProjects);
}

function expandClicked() {
  let project_desc = document.getElementById('project-desc-container');
}


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuSection = document.getElementById('menu-section');
  let menuOpen = false;

  if (menuSection) {
    menuSection.style.opacity = "0%";
    menuSection.style.pointerEvents = "none";
    menuSection.style.transition = "opacity 0.3s ease-in-out";
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      
      if(menuOpen) {
        menuSection.style.opacity = "1";
        menuSection.style.pointerEvents = "auto";
        document.body.style.overflow = "hidden"
      } else {
        menuSection.style.opacity = "0";
        menuSection.style.pointerEvents = "none";
        document.body.style.overflow = ""
      }
      
      console.log("menu clicked", menuOpen);
    });
  }

  const menuLinks = document.querySelectorAll('#menu-section a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      menuSection.style.opacity = "0";
      menuSection.style.pointerEvents = "none";
      document.body.style.overflow = "";
    });
  });

  const menuClose = document.getElementById('menu-close-img');
  if (menuClose) {
    menuClose.addEventListener('click', () => {
      menuOpen = false;
      menuSection.style.opacity = "0";
      menuSection.style.pointerEvents = "none";
      document.body.style.overflow = "";
    });
  }
});


console.log("JS Loaded Successfully");