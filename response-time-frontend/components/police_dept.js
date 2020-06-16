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
        const h1 = document.createElement("h1");
        h1.innerText = this.name;
        return document.body.appendChild(h1);
    }
}