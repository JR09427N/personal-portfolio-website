import { pages } from '../data/pages.js';

let request = {
    service: "",
    details: "",
    info: { 
        name: "",
        email: "",
        number: "",
    }
}

// serviceListener();
// detailsListener();
// infoListener();
// reviewListener();

const progress1 = document.getElementById('start-project-progress-1');
const progress2 = document.getElementById('start-project-progress-2');
const progress3 = document.getElementById('start-project-progress-3');

function serviceListener() {
  console.log('serviceListener()');

  progress1.style.width = "0%";

  progress2.style.width = "0%";

  progress3.style.width = "0%";

  const service_container = document.getElementById('service-buttons-column-container');

  if (container) {
    service_container.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        service_container.querySelectorAll('button').forEach(btn => btn.classList.remove('service-btn-clicked'));
        e.target.classList.add('service-btn-clicked');
        request.service = e.target.value;

        console.log("request service: ", request.service);
      }
    });
  }
}

function detailsListener() {
  console.log('detailsListener()');
  console.log(request);

  progress1.style.backgroundColor = "#00EEFF";
  progress1.style.width = "100%";

  progress2.style.width = "0%";

  progress3.style.width = "0%";
  
  const details_text = document.getElementById('start-project-textarea');

  details_text.addEventListener('input', (e) => {

      let details = e.target.value.trim();

      if (details) {
        request.details = details;
      }

      console.log("request details: ", request.details);
  });

  // Add inputted file name
  const fileInput = document.getElementById('file-upload');
  const note = document.getElementById('file-note');

  fileInput.addEventListener('change', () => {
    const files = Array.from(fileInput.files || []);
    note.textContent = files.length
      ? files.map(f => f.name).join(', ')
      : 'No files selected';
  });
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

  nameInput.addEventListener('input', (e) => {
    request.info.name = e.target.value.trim();
    console.log('name:', request.info.name);
  });

  emailInput.addEventListener('input', (e) => {
    request.info.email = e.target.value.trim();
    console.log('email:', request.info.email);
  });

  numberInput.addEventListener('input', (e) => {
    request.info.number = e.target.value.trim();
    console.log('number:', request.info.number);
  });
}

function reviewListener() {
  console.log('reviewListener()');
  console.log(request);

  progress1.style.backgroundColor = "#00EEFF";
  progress1.style.width = "100%";

  progress2.style.backgroundColor = "#00EEFF";
  progress2.style.width = "100%";

  progress3.style.backgroundColor = "#00EEFF";
  progress3.style.width = "100%";

  const serviceText = document.querySelector('#start-project-review-service p');
  const detailsText = document.querySelector('#start-project-review-details p');
  const infoText = document.getElementById('start-project-review-info-group');

  serviceText.innerHTML = "<p>" + request.service + "</p>";
  detailsText.innerHTML = "<p>" + request.details + "</p>";
  infoText.innerHTML = "<p><span>Full Name: </span>" + request.info.name + "</p>" +
                        "<p><span>Email: </span>" + request.info.email + "</p>" +
                        "<p><span>Phone Number: </span>" + request.info.number + "</p>";
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
      alert("You've have reached the first page"); 
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