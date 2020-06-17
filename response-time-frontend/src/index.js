document.addEventListener("DOMContentLoaded", init)
const startUp = new ApiAdapter;
const states = ["Alabama", "Louisiana"];

function init() {
    populateSidebar(states);
    expandSidebarBtns();
    startUp.fetchPd("police_departments")
    .then(pds => {
        pds.forEach(pd => {
            newPd = new PoliceDepartment(pd);
            newPd.renderName;
        });
    });
}

function expandSidebarBtns() {  
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

function populateSidebar(statesArray) {
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

        innerDiv.appendChild(innerBtn);
        div.appendChild(btn);
        div.appendChild(innerDiv);
        return div;
    })
}