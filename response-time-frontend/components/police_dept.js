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
        const div = document.createElement("div");
        const reviewDiv = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h3");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h3");
        const h5 = document.createElement("h3");
        
        div.setAttribute("class", "centerWindow");

        
        this.reviews.map(review => {
            const newReview = new Review(review);
            const reviewPTag = newReview.reviewDivMaker;
            reviewDiv.appendChild(reviewPTag);
            return reviewDiv;
        })

        h1.innerText = this.name;
        h2.innerText = this.address;
        h3.innerText = `${this.city}, ${this.state}`;
        h5.innerText = this.phone_number;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h5);
        main.appendChild(div);
        main.appendChild(reviewDiv);
        return main;
    }
}

