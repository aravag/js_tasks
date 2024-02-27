// task 1

class LibraryManager {
    #books;

    constructor(initialBooks) {
        if (initialBooks.some((book, index) => initialBooks.indexOf(book) !== index)) {
            throw new Error("Начальный список книг содержит дубликаты.");
        }
        this.#books = [...initialBooks];
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.some((book) => book.title === title)) {
            throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
        }
        this.#books.push({ title });
    }

    removeBook(title) {
        const index = this.#books.findIndex((book) => book.title === title);
        if (index === -1) {
            throw new Error(`Книги с названием "${title}" нет в библиотеке.`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.some((book) => book.title === title);
    }
}

const library = new LibraryManager([{ title: "Book1" }, { title: "Book2" }, { title: "Book3" }]);

console.log(library.allBooks);
library.addBook("Book4");
console.log(library.allBooks);
library.removeBook("Book2");
console.log(library.allBooks);
console.log(library.hasBook("Book3"));
console.log(library.hasBook("Book2"));

// task 2

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function addReview() {
    const reviewInput = document.getElementById("reviewInput");
    const reviewsContainer = document.getElementById("reviewsContainer");

    const reviewText = reviewInput.value.trim();

    if (reviewText.length < 50 || reviewText.length > 500) {
        alert("Длина отзыва должна быть от 50 до 500 символов.");
        return;
    }

    const reviewElement = document.createElement("div");
    reviewElement.textContent = reviewText;

    reviewsContainer.appendChild(reviewElement);

    reviewInput.value = "";
}

window.onload = function () {
    const reviewsContainer = document.getElementById("reviewsContainer");

    initialData.forEach((product) => {
        product.reviews.forEach((review) => {
            const reviewElement = document.createElement("div");
            reviewElement.textContent = review.text;
            reviewsContainer.appendChild(reviewElement);
        });
    });
};
