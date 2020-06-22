class PoliceDepartment {
    constructor({id, name, address, city, phone_number, reviews, state}) {
        this.id = id
        this.name = name
        this.address = address
        this.city = city
        this.phone_number = phone_number
        this.reviews = reviews
        this.state = state
    }

    get renderName() {
        const stateDiv = document.getElementById(`${this.state}`);
        const p = document.createElement("p");
        const hr = document.createElement("hr");

        p.setAttribute("data-id", this.id);
        p.setAttribute("class", "departments");
        p.innerText = this.name; 
        
        p.appendChild(hr);       
        return stateDiv.appendChild(p);
    }

    get detailView() {
        const main = document.getElementById("main");
        const div = createCardDiv();
        const h1 = this.createH1;
        const h2 = this.createH2;
        const h3 = this.createH3;
        const h5 = this.createH5;
        const reviewDiv = this.showReviews; 
        const hArray = [];
        
        hArray.push(h1, h2, h3, h5);
        hArray.forEach(h => div.appendChild(h));
        
        main.appendChild(div);
        main.appendChild(reviewDiv);
        return main;
    }

    get createH1() {
        const h1 = document.createElement("h1");
        h1.innerText = this.name;
        return h1;
    }

    get createH2() {
        const h2 = document.createElement("h2");
        h2.innerText = this.address;
        return h2;
    }

    get createH3() {
        const h3 = document.createElement("h3");
        h3.innerText = `${this.city}, ${this.state}`;
        return h3;
    }

    get createH5() {
        const h5 = document.createElement("h5");
        h5.innerText = this.phone_number;
        return h5;
    }

    get showReviews() {
        const reviewDiv = document.createElement("div");
        reviewDiv.setAttribute("class", "reviews");
        reviewDiv.setAttribute("id", "reviews");
        
        if (this.reviews.length > 0) {
            this.reviews.map(review => {
                const newReview = new Review(review);
                const reviewPTag = newReview.reviewDivMaker;

                reviewDiv.style.display = "block";
                reviewDiv.appendChild(reviewPTag);
            })        
        }
        return reviewDiv;
    }

    get addIdToForm() {
        const form = document.getElementById("submit");
        const hiddenInput = document.createElement("input");

        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("id", "hidden");
        hiddenInput.setAttribute("value", this.id);

        form.appendChild(hiddenInput);
        form.style.display = "block";
        return form;
    }  

}



function createCardDiv() {
    const div = document.createElement("div");

    div.setAttribute("class", "centerWindow");
    div.setAttribute("id", "cardDiv");
    div.style.display = "block";

    return div;
}



