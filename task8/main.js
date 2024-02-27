function addReview() {
    const productName = document.getElementById("productName").value;
    const reviewText = document.getElementById("reviewText").value;

    if (!productName || !reviewText) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({ productName, reviewText });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("productName").value = "";
    document.getElementById("reviewText").value = "";

    updateProductsList();
    updateReviewsList();
}

function deleteReview(index) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.splice(index, 1);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    updateReviewsList();
}

function updateProductsList() {
    const productNamesElement = document.getElementById("productNames");
    productNamesElement.innerHTML = "";

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const uniqueProductNames = [...new Set(reviews.map((review) => review.productName))];

    uniqueProductNames.forEach((productName) => {
        const listItem = document.createElement("li");
        listItem.textContent = productName;
        listItem.addEventListener("click", () => showReviews(productName));
        productNamesElement.appendChild(listItem);
    });
}

function updateReviewsList() {
    const reviewsElement = document.getElementById("reviews");
    reviewsElement.innerHTML = "";

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach((review, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${review.productName}: ${review.reviewText}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => deleteReview(index));
        listItem.appendChild(deleteButton);
        reviewsElement.appendChild(listItem);
    });
}

function showReviews(productName) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const filteredReviews = reviews.filter((review) => review.productName === productName);
    const reviewsText = filteredReviews.map((review) => review.reviewText).join("\n");

    alert(`Отзывы по продукту "${productName}":\n\n${reviewsText}`);
}

window.onload = function () {
    updateProductsList();
    updateReviewsList();
};
