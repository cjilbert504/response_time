class Review {
    constructor({id, commentor, comment}) {
        this.id = id
        this.commentor = commentor
        this.comment = comment
    }

    get reviewDivMaker() {
        const reviewPTag = document.createElement("p");
        reviewPTag.innerText = `${this.commentor} says: ${this.comment}`
        return reviewPTag;
    }
}