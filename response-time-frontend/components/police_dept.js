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
        const li = document.createElement("li");
        li.setAttribute("data-id", this.id);
        li.innerText = this.name;

        const ul = document.getElementById("sidebar-ul");
        return ul.appendChild(li);
    }
}