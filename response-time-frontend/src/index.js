document.addEventListener("DOMContentLoaded", init)
const startUp = new ApiAdapter;
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho","Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi","Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

function init() {
    handleForm();
    populateSidebar(states);
    expandSidebarBtns();
    startUp.fetchPd("police_departments")
    .then(pds => {
        addPdsToSidebar(pds)
        PoliceDepartment.getPdDetailInfo();
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
    statesArray.forEach(state => addStatesToSidebar(div, state))
}

function handleForm() {
    const form = document.getElementById("submit");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        startUp.fetchCreateNewReview()
        .then(response => {
          
            if (response.message) {
                alert(response.message)
            } else {
                renderNewReview(response);
            }
        })        
    })
}

function addStatesToSidebar(div, state) {
    const btn = document.createElement("button");
    const innerDiv = document.createElement("div");

    btn.setAttribute("class", "accordion");
    innerDiv.setAttribute("class", "panel");
    innerDiv.setAttribute("id", state);

    btn.innerText = state;

    div.appendChild(btn);
    div.appendChild(innerDiv);

    return div;
}

function renderNewReview(response) {
    const commentor = document.getElementById("commentor");
    const comment = document.getElementById("comment");

    const newPd = new PoliceDepartment(response);
    const reviewArr = Array.from(newPd.reviews);
    const newReview = new Review(reviewArr.pop());

    newReview.addToReviews;
    commentor.value = "";
    comment.value = "";
}

function removeCardDiv() {
    const main = document.getElementById("main");
    const form = document.getElementById("submit");
    const hiddenField = document.getElementById("hidden");
    const reviewDiv = document.getElementById("reviews");
    
    main.removeChild(cardDiv);
    main.removeChild(reviewDiv);
    form.removeChild(hiddenField);
}

function addSortBtn(reviews){
    const reviewDiv = document.getElementById("reviews");
    const sortBtn = document.createElement("button");
    sortBtn.innerText = "Sort"
    reviewDiv.appendChild(sortBtn);

    sortBtn.addEventListener("click", function() {
       let sorted = reviews.sort(compare)

       while (reviewDiv.firstChild){
           reviewDiv.removeChild(reviewDiv.firstChild)
       }

       sorted.forEach(review => {
           const p = document.createElement("p")
           p.innerText = `${review.commentor} says: ${review.comment}`
           p.style.color = "#f36f6f"

           reviewDiv.appendChild(p)
           reviewDiv.appendChild(sortBtn);
       })
   })
    return reviewDiv;
}

function compare(a, b) {
    let first = a.id;
    let second = b.id;

    let comparison = 0
    if(first > second) {
        comparison = 1
    } else if (first < second) {
        comparison = -1
    }
    if(comparison === 1){
        return comparison * -1
    } else {
        return comparison
    }
}

