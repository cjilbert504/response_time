document.addEventListener("DOMContentLoaded", init)
const startUp = new ApiAdapter;
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
                "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
                "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", 
                "Washington", "West Virginia", "Wisconsin", "Wyoming"];

function init() {
    handleForm();
    populateSidebar(states);
    expandSidebarBtns();
    startUp.fetchPd("police_departments")
    .then(pds => {
        addPdsToSidebar(pds)
        getPdDetailInfo();
    });
}

function addPdsToSidebar(pds) {
    pds.forEach(pd => {
        newPd = new PoliceDepartment(pd);
        return newPd.renderName;
    });
}

function expandSidebarBtns() {  
    const accs = Array.from(document.getElementsByClassName("accordion"));

    accs.forEach(acc => {
        acc.addEventListener("click", function() {
            const panel = this.nextElementSibling;
            this.classList.toggle("active");

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    })
}


function populateSidebar(statesArray) {                             
    const div = document.getElementById("sidebar");

    statesArray.forEach(state => {
        const btn = document.createElement("button");
        const innerDiv = document.createElement("div");
        // const innerBtn = document.createElement("button");

        btn.setAttribute("class", "accordion");
        innerDiv.setAttribute("class", "panel");
        innerDiv.setAttribute("id", state);
        // innerBtn.setAttribute("class", "accordionBtn");

        btn.innerText = state;
        // innerBtn.innerText = "Add a new police department";

        // innerDiv.appendChild(innerBtn);
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
        startUp.fetchCreateNewReview()
        .then(response => {
            console.log(response);
            
            if (response.message) {
                alert(response.message)
            } else {
            const commentor = document.getElementById("commentor");
            const comment = document.getElementById("comment");
            
            newPd = new PoliceDepartment(response);
            const reviewArr = Array.from(newPd.reviews);
            const newReview = new Review(reviewArr.pop());
            newReview.addToReviews;

            commentor.value = "";
            comment.value = "";
            }
        })        
    })
}

