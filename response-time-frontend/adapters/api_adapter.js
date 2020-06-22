class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    fetchPd(url) {
        return fetch(`${this.baseUrl}/${url}`)
        .then(response => response.json())
    }

    fetchPdDetails(url) {
        return fetch(`${this.baseUrl}/police_departments/${url}`)
        .then(response => response.json())
    }

    fetchCreateNewReview() {
        return fetch(`${this.baseUrl}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                commentor: event.target[0].value,
                comment: event.target[1].value,
                police_department_id: event.target[3].value
            })
        })
        .then(response => response.json())
    }
}