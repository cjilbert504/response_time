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
}