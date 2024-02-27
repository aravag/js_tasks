//task 1

const musicCollection = {
    albums: [
        { title: "Альбом 1", artist: "Исполнитель 1", year: "2020" },
        { title: "Альбом 2", artist: "Исполнитель 2", year: "2021" },
        { title: "Альбом 3", artist: "Исполнитель 3", year: "2022" },
    ],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.albums.length) {
                    const album = this.albums[index++];
                    return { value: album, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// task 2

const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"],
]);

const dishes = new Map([
    ['Пицца "Маргарита"', "Виктор"],
    ['Пицца "Пепперони"', "Виктор"],
    ['Суши "Филадельфия"', "Ольга"],
    ['Суши "Калифорния"', "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
]);

const orders = new Map();

orders.set({ name: "Алексей" }, ['Пицца "Пепперони"', "Тирамису"]);
orders.set({ name: "Мария" }, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set({ name: "Ирина" }, ["Чизкейк"]);

orders.forEach((dishList, client) => {
    console.log(`${client.name} заказал:`);
    dishList.forEach((dish) => {
        const chef = chefs.get(dishes.get(dish));
        console.log(`- ${dish} (Повар: ${chef})`);
    });
});
