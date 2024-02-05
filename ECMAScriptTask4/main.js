// task1

const getUserData = async (userID) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка при получении данных о пользователе. Статус: ${response.status}`);
    }
    return await response.json();
};

const userID = 1;

function renderUserData(userData, parentKey = "", container) {
    for (let key in userData) {
        if (userData.hasOwnProperty(key)) {
            const currentKey = parentKey ? `${parentKey}-${key}` : key;

            if (typeof userData[key] === "object") {
                renderUserData(userData[key], currentKey, container);
            } else {
                const userInfo = `<div class="type ${currentKey}"><span>${key}:</span> ${userData[key]}</div>`;
                container.innerHTML += userInfo;
            }
        }
    }
}

getUserData(userID)
    .then((userData) => {
        console.log("Данные о пользователе:", userData);
        const userContainer = document.querySelector(".user");
        if (!userContainer) {
            console.error("Контейнер пользователя не найден");
            return;
        }

        renderUserData(userData, "", userContainer);
    })
    .catch((error) => {
        console.error("Ошибка:", error.message);
    });

// task2

async function saveUserData(userData) {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error(`Ошибка при сохранении данных. Статус: ${response.status}`);
    }
}

const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
};

saveUserData(user)
    .then(() => {
        console.log("Данные о пользователе успешно сохранены");
    })
    .catch((error) => {
        console.error("Ошибка:", error.message);
    });


// task3

function changeStyleDelayed(elem, delay) {
    setTimeout(() => {
        document.querySelector(elem).style.color = 'red';
    }, delay);
}

changeStyleDelayed('.elem', 2000);