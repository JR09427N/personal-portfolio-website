export const pages = [
    {
        html: "<div class='start-project-page' id='service-page'>" +
                "<div class='section-header-group'>" +
                "<h1 class='section-header'>SERVICE</h1>" +
                "<p class='section-subtext'>Choose the type of work you need.</p>" +
                "</div>" +
                "<div id='service-buttons-column-container'>" +
                "<div>" +
                "<button value='Web Design'>Web Design</button>" +
                "<button value='Frontend Development'>Frontend Development</button>" +
                "</div>" +
                "<div>" +
                "<button value='App Development'>App Development</button>" +
                "<button value='UI UX Design'>UI UX Design</button>" +
                "</div>" +
                "</div>" +
                "<button onclick='nextPage()' id='start-project-next-btn' class='start-project-next-btn'>" +
                "Next" +
                "<img src='assets/start-project-next-arrow.svg' alt='NEXT'/>" +
                "</button>" +
                "</div>"
    },

    {
        html: "<div class='start-project-page' id='details-page'>" +
                "<div class='section-header-group'>" +
                "<h1 class='section-header'>DETAILS</h1>" +
                "<p class='section-subtext'>Tell me a little more about your project.</p>" +
                "</div>" +
                "<div id='start-project-details-input-group'>" +
                "<textarea class='contact-input' id='start-project-textarea' placeholder='Brief description' name='message' required></textarea>" +
                "<form class='upload-wrap'>" +
                "<input type='file' id='file-upload' name='uploadedFile' accept='.pdf,.doc,image/*' multiple>" +
                "<label for='file-upload' class='upload-btn'>Add files</label>" +
                "<span class='upload-note' id='file-note'></span>" +
                "</form>" +
                "</div>" +
                "<button onclick='nextPage()' id='start-project-next-btn' class='start-project-next-btn'>" +
                "Next" +
                "<img src='assets/start-project-next-arrow.svg' alt='NEXT'/>" +
                "</button>" +
                "</div>"
    },

    {
        html: "<div class='start-project-page' id='info-page'>" +
                "<div class='section-header-group' style='margin-bottom:-20px;'>" +
                "<h1 class='section-header'>YOUR INFO</h1>" +
                "<p class='section-subtext'>So I know who to reach out to.</p>" +
                "</div>" +
                "<div id='start-project-info-container'>" +
                "<input class='contact-input' id='start-project-name' placeholder='Full Name *' name='name' required/>" +
                "<input class='contact-input' id='start-project-email' placeholder='Email *' name='email' required/>" +
                "<input class='contact-input' id='start-project-number' placeholder='Phone Number' name='phone'/>" +
                "</div>" +
                "<button onclick='nextPage()' id='start-project-next-btn' class='start-project-next-btn'>" +
                "Next" +
                "<img src='assets/start-project-next-arrow.svg' alt='NEXT'/>" +
                "</button>" +
                "</div>"
    },

    {
        html: "<div class='start-project-page' id='review-page'>" +
                "<div class='section-header-group' style='margin-bottom:-20px;'>" +
                "<h1 class='section-header'>REVIEW & SEND</h1>" +
                "<p class='section-subtext'>Look over your info before submitting.</p>" +
                "</div>" +
                "<div class='start-project-review-horiz-line' id='start-project-review-first-horiz-line'></div>" +
                "<div class='start-project-review-row' id='start-project-review-service'>" +
                "<h1>SERVICE</h1>" +
                "<p></p>" +
                "<a onclick='goToPage(-1)'>Edit</a>" +
                "</div>" +
                "<div class='start-project-review-horiz-line'></div>" +
                "<div class='start-project-review-row' id='start-project-review-details'>" +
                "<h1>DETAILS</h1>" +
                "<p></p>" +
                "<a onclick='goToPage(0)'>Edit</a>" +
                "</div>" +
                "<div class='start-project-review-horiz-line'></div>" +
                "<div class='start-project-review-row' id='start-project-review-info'>" +
                "<h1>YOUR INFO</h1>" +
                "<div id='start-project-review-info-group'>" +
                "</div>" +
                "<a onclick='goToPage(1)'>Edit</a>" +
                "</div>" +
                "<button type='submit' class='start-project-next-btn' id='start-project-submit-btn' onclick='sendProjectRequest()' on>" +
                "Submit Request" +
                "</button>" +
                "</div>"
    }
]