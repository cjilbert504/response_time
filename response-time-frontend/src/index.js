document.addEventListener("DOMContentLoaded", init)
const startUp = new ApiAdapter;

function init() {
    startUp.fetchPd("police_departments")
    .then(pds => {
        pds.forEach(pd => {
            newPd = new PoliceDepartment(pd);
            newPd.renderName;
        });
    });
}