let res;
function stars() {



    const ratingStars = document.querySelectorAll("span");


    ratingStars.forEach(star => {

        star.addEventListener("click", function () {
            let value = this.getAttribute("data-value");
            res = value;
        });

    });




}
function Rattings(e) {
    e.preventDefault();
    stars();
    if (res) {
        window.location.assign(`thankyou.html?rating=${res}`);
    }
}


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const rating = urlParams.get('rating');
    const ratingResult = document.querySelector(".Rattings-result");
    if (rating) {


        ratingResult.textContent = `You rated ${rating} out of 5 stars!`;
    }
}



function redirectionHome() {
    window.location.assign("index.html");
}