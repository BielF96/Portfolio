const icon = document.querySelectorAll(".icon");
const tabsContent = document.querySelectorAll(".tabs__content");
const bgRed = document.querySelectorAll(".plan");
const plansContent = document.querySelectorAll(".plan__content")

function selectIcon(e) {
    removeBorder();
    removeTabShows();
    this.classList.add("icon--red-border");
    const tabShows = document.querySelector(`#${this.id}__content`);
    tabShows.classList.add("tab-shows");
}

function selectPlan(e) {
    removeBgRed ();
    removePlanShows();
    this.classList.add("bg--red");
    const planShows = document.querySelector(`#${this.id}__content`);
    planShows.classList.add("plan-shows");
}

function removeBorder() {
    icon.forEach(icon => icon.classList.remove("icon--red-border"));
}

function removeTabShows() {
    tabsContent.forEach(content => content.classList.remove("tab-shows"));
}

function removeBgRed () {
    bgRed.forEach(bg => bg.classList.remove("bg--red"));
}

function removePlanShows () {
    plansContent.forEach(plan => plan.classList.remove("plan-shows"));
}

icon.forEach(icon => icon.addEventListener("click", selectIcon));
bgRed.forEach(plan => plan.addEventListener("click", selectPlan));
