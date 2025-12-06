import { pages } from '../data/pages.js';

let request = {
    service: "",
    details: "",
    files: [],
    info: { 
        name: "",
        email: "",
        number: "",
    }
}

let spOpen = false;
const progress1 = document.getElementById('start-project-progress-1');
const progress2 = document.getElementById('start-project-progress-2');
const progress3 = document.getElementById('start-project-progress-3');
const menu = document.getElementById('mobile-nav-container');

document.addEventListener('DOMContentLoaded', () => {
  const spButton = document.getElementById('top-start-project-btn');
  const startProject = document.getElementById('start-project');

  if (startProject) {
    startProject.style.opacity = "0%";
    startProject.style.pointerEvents = "none";
    startProject.style.transition = "opacity 0.3s ease-in-out";
  }

  if (spButton) {
    console.log(window.innerWidth);
    spButton.addEventListener('click', () => {
      spOpen = !spOpen;

      spButton.style.left = "13.8vw";
      setTimeout(() => {
        spButton.style.left = "6.9vw";
      }, 300);
      
      if(spOpen) {
        startProject.style.opacity = "1";
        startProject.style.pointerEvents = "auto";
        document.body.style.overflow = "hidden";
        menu.style.display = "none";
      } else {
        startProject.style.opacity = "0";
        startProject.style.pointerEvents = "none";
        document.body.style.overflow = "";

        revealMenu();
      }
      
      console.log("start project clicked", spOpen);
    });
  }  
});

function serviceListener() {
  console.log('serviceListener()');

  progress1.style.width = "0%";

  progress2.style.width = "0%";

  progress3.style.width = "0%";

  const service_container = document.getElementById('service-buttons-column-container');
  // const next = document.getElementById('start-project-next-btn');

  if (service_container) {
    service_container.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        service_container.querySelectorAll('button').forEach(btn => btn.classList.remove('service-btn-clicked'));
        e.target.classList.add('service-btn-clicked');
        request.service = e.target.value;

        setTimeout(() => {
          nextPage();
        }, 500);

        console.log("request service: ", request.service);
      }

      // next.disabled = request.service.length === 0;
    });
  }

  // next.disabled = request.service.length === 0;
}

function detailsListener() {
  console.log('detailsListener()');
  console.log(request);

  progress1.style.backgroundColor = "#00EEFF";
  progress1.style.width = "100%";

  progress2.style.width = "0%";

  progress3.style.width = "0%";
  
  const details_text = document.getElementById('start-project-textarea');
  const next = document.getElementById('start-project-next-btn');
  const skip = document.getElementById('start-project-skip-btn');

  if(request.details.trim().length != 0) {
    details_text.value = request.details;
  }

  details_text.addEventListener('input', (e) => {

      let details = e.target.value.trim();

      if (details) {
        request.details = details;
      }

      next.disabled = request.details.length === 0;
      console.log("request details: ", request.details);
  });

  // Add inputted file name
  const fileInput = document.getElementById('file-upload');
  const note = document.getElementById('file-note');

  fileInput.addEventListener('change', () => {
    const files = Array.from(fileInput.files || []);
    request.files = files;
    note.textContent = files.length
      ? files.map(f => f.name).join(', ')
      : 'No files selected';
  });

  next.disabled = request.details.length === 0;
  skip.disabled = true;
}

function infoListener() {
  console.log('infoListener()');
  console.log(request);

  progress1.style.backgroundColor = "#00EEFF";
  progress1.style.width = "100%";

  progress2.style.backgroundColor = "#00EEFF";
  progress2.style.width = "100%";

  progress3.style.width = "0%";

  const nameInput = document.getElementById('start-project-name');
  const emailInput = document.getElementById('start-project-email');
  const numberInput = document.getElementById('start-project-number');
  const next = document.getElementById('start-project-next-btn');
  const skip = document.getElementById('start-project-skip-btn');

  if(request.info.name.trim().length != 0) {
    nameInput.value = request.info.name;
  }

  if(request.info.email.trim().length != 0) {
    emailInput.value = request.info.email;
  }

  if(request.info.number.trim().length != 0) {
    numberInput.value = request.info.number;
  }

  nameInput.addEventListener('input', (e) => {
    request.info.name = e.target.value.trim();
    next.disabled = (request.info.name.length == 0 || request.info.email.length == 0);
    console.log('name:', request.info.name);
  });

  emailInput.addEventListener('input', (e) => {
    request.info.email = e.target.value.trim();
    next.disabled = (request.info.name.length == 0 || request.info.email.length == 0);
    console.log('email:', request.info.email);
  });

  numberInput.addEventListener('input', (e) => {
    request.info.number = e.target.value.trim();
    console.log('number:', request.info.number);
  });

  next.disabled = (request.info.name.length == 0 || request.info.email.length == 0);
  skip.disabled = true;
  console.log("name length:", request.info.name.length, "email length:", request.info.email.length);
}

function reviewListener() {

  function formatUSPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    return phoneNumber;
  }

  console.log('reviewListener()');
  console.log(request);

  progress1.style.backgroundColor = "#00EEFF";
  progress1.style.width = "100%";

  progress2.style.backgroundColor = "#00EEFF";
  progress2.style.width = "100%";

  progress3.style.backgroundColor = "#00EEFF";
  progress3.style.width = "100%";

  if(request.service.length == 0) {
    request.service = "N/A";
  }
  
  if(request.info.number.length == 0) {
    request.info.number = "N/A";
  }

  const serviceText = document.querySelector('#start-project-review-service p');
  const detailsText = document.querySelector('#start-project-review-details p');
  const infoText = document.getElementById('start-project-review-info-group');
  const skip = document.getElementById('start-project-skip-btn');

  serviceText.innerHTML = "<p>" + request.service + "</p>";
  detailsText.innerHTML = "<p>" + request.details + "</p>";
  infoText.innerHTML = "<p><span>Full Name:&nbsp;&nbsp;</span>" + request.info.name + "</p>" +
                        "<p><span>Email:&nbsp;&nbsp;</span>" + request.info.email + "</p>" +
                        "<p><span>Phone Number:&nbsp;&nbsp;</span>" + formatUSPhoneNumber(request.info.number) + "</p>";

  skip.disabled = true;
}

// Navigate through 'Start A Project'
let index = -1;
const container = document.getElementById("start-project-content-container");
console.log(pages.length)
nextPage();

function nextPage() {
  if (index < pages.length - 1) {
        index += 1;
        container.innerHTML = pages[index].html; 
  } else {
      alert("You've have reached the last page"); 
  }

  switch(index) {
    case 0:
      serviceListener();
      break;
    case 1:
      detailsListener();
      break;
    case 2:
      infoListener();
      break;
    case 3:
      reviewListener();
      break;
    default:
      break;
  }

  console.log("index:", index);
}
window.nextPage = nextPage;

function prevPage() {
  if (index > 0) {
        index -= 1;
        container.innerHTML = pages[index].html; 
  } else {
      const startProject = document.getElementById('start-project');
      spOpen = false;
      revealMenu();
      if (startProject) {
        startProject.style.opacity = "0";
        startProject.style.pointerEvents = "none";
        document.body.style.overflow = "";
      }

      request.service = "";
      request.details = "";
      request.files = [];
      request.info.name = "";
      request.info.email = "";
      request.info.number = "";

      index = -1;
  }

  switch(index) {
    case 0:
      serviceListener();
      break;
    case 1:
      detailsListener();
      break;
    case 2:
      infoListener();
      break;
    case 3:
      reviewListener();
      break;
    default:
      break;
  }

  console.log("index:", index);
}
window.prevPage = prevPage;

function goToPage(page) {
  console.log("edit clicked");
  index = page;
  nextPage();
}
window.goToPage = goToPage;

window.addEventListener('resize', revealMenu);

function revealMenu() {
  if(window.innerWidth < 768 && !spOpen) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }

  console.log("resize");
}

async function sendProjectRequest() {
  const endpoint = "https://api.web3forms.com/submit";
  const formData = new FormData();

  formData.append("access_key", "a81e1201-cf6a-4808-b45d-f0d39988557e");
  formData.append("subject", "New Project Request");
  formData.append("from_name", "Portfolio Website");

  formData.append("service", request.service || "N/A");
  formData.append("details", request.details || "N/A");
  formData.append("name", request.info.name || "N/A");
  formData.append("email", request.info.email || "N/A");
  formData.append("phone", request.info.number || "N/A");

  // ✅ Safely attach files if any
  if (request.files && request.files.length > 0) {
    for (let i = 0; i < request.files.length; i++) {
      const file = request.files[i];
      console.log("Attaching:", file.name, file.size, "bytes");
      if (file.size <= 5 * 1024 * 1024) { // < 5MB
        formData.append("attachments[]", file.name);
      } else {
        alert(`File ${file.name} is too large (max 5MB).`);
        return;
      }
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log("Web3Forms Response:", result);

    if (result.success) {
      alert("Request sent successfully!");
    } else {
      alert("Error: " + (result.message || "Bad Request"));
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("There was a network error sending your request.");
  }
}
window.sendProjectRequest = sendProjectRequest;