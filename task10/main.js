document.addEventListener("DOMContentLoaded", () => {
    const accessKey = "u5Q1XnJ0aNMEVx9oF-J4D0M9oF-5HEjfCBqJk7_gG8Y";
    const photo = document.getElementById("photo");
    const photographerName = document.getElementById("photographerName");
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const photoOfDayButton = document.getElementById("photoOfDayButton");
    const likedPhotosContainer = document.getElementById("likedPhotosContainer");

    let likes = 0;
    let likedPhotos = [];

    function getRandomPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.urls.regular;
                const { name } = data.user;

                photo.src = imageUrl;
                photographerName.textContent = `Photographer: ${name}`;
            })
            .catch((error) => console.error("Error fetching random photo:", error));
    }

    function updateLikes() {
        likeCount.textContent = `Likes: ${likes}`;
    }

    function saveToLocalStorage() {
        localStorage.setItem("likes", likes.toString());
        localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos));
    }

    function loadFromLocalStorage() {
        const savedLikedPhotos = localStorage.getItem("likedPhotos");

        if (savedLikedPhotos) {
            likedPhotos = JSON.parse(savedLikedPhotos);

            likedPhotosContainer.innerHTML = "";

            likedPhotos.forEach((photoUrl) => {
                const likedPhoto = document.createElement("img");
                likedPhoto.src = photoUrl;
                likedPhotosContainer.appendChild(likedPhoto);
            });
        }
    }

    likeButton.addEventListener("click", () => {
        likes++;
        updateLikes();
        likedPhotos.push(photo.src);
        saveToLocalStorage();
        getRandomPhoto();
    });

    photoOfDayButton.addEventListener("click", () => {
        likedPhotosContainer.innerHTML = "";

        likedPhotos.forEach((photoUrl) => {
            const likedPhoto = document.createElement("img");
            likedPhoto.src = photoUrl;
            likedPhotosContainer.appendChild(likedPhoto);
        });
    });

    getRandomPhoto();
    loadFromLocalStorage();
});
