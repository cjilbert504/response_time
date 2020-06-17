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
        p.innerText = this.name;        
        return stateDiv.appendChild(p);
    }
}