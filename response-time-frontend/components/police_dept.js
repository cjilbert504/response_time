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

        p.setAttribute("data-id", this.id);
        p.setAttribute("class", "departments");
        p.innerText = this.name;        
        return stateDiv.appendChild(p);
    }

    get detailView() {
        const main = document.getElementById("main");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const li5 = document.createElement("li");
        
        li1.innerText = this.name;
        li2.innerText = this.address;
        li3.innerText = this.city;
        li4.innerText = this.state;
        li5.innerText = this.phone_number;

        main.appendChild(li1);
        main.appendChild(li2);
        main.appendChild(li3);
        main.appendChild(li4);
        main.appendChild(li5);
        return main;
    }
}