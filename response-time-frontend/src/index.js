document.addEventListener("DOMContentLoaded", init)
const startUp = new ApiAdapter;
const states = ["Alabama", "Louisiana"];

function init() {
    handleForm();
    populateSidebar(states);
    expandSidebarBtns();
    startUp.fetchPd("police_departments")
    .then(pds => {
        pds.forEach(pd => {
            newPd = new PoliceDepartment(pd);
            newPd.renderName;
        });
        getPdDetailInfo();
    });
}

function expandSidebarBtns() {                                      // Try to refactor this code
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    }
}

function populateSidebar(statesArray) {                             // Try to break this into smaller functions and possibly refactor
    const div = document.getElementById("sidebar");
    statesArray.forEach(state => {
        const btn = document.createElement("button");
        const innerDiv = document.createElement("div");
        const innerBtn = document.createElement("button");

        btn.setAttribute("class", "accordion");
        btn.innerText = state;
        innerDiv.setAttribute("class", "panel");
        innerDiv.setAttribute("id", state);
        innerBtn.innerText = "Add a new police department";
        innerBtn.setAttribute("class", "accordionBtn");

        innerDiv.appendChild(innerBtn);
        div.appendChild(btn);
        div.appendChild(innerDiv);
        return div;
    })
}

function getPdDetailInfo() {
    const pTags = Array.from(document.getElementsByClassName("departments"));
    
    pTags.map(p => {
        p.addEventListener("click", (e) => {
            const pdId = e.target.dataset.id;
            const apiShow = new ApiAdapter;
            apiShow.fetchPdDetails(pdId)
            .then(pd => {
                const cardDiv = document.getElementById("cardDiv");

                if (cardDiv) {
                    const main = document.getElementById("main");
                    const form = document.getElementById("submit");
                    const hiddenField = document.getElementById("hidden");
                    const reviewDiv = document.getElementById("reviews");

                    main.removeChild(cardDiv);
                    main.removeChild(reviewDiv);
                    form.removeChild(hiddenField);
                }
                newPd = new PoliceDepartment(pd)
                newPd.detailView;       
                newPd.addIdToForm;       
            })
        })
    })
}

function handleForm() {
    const form = document.getElementById("submit");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event.target[0].value);    
    });
}

