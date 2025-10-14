class Storage {
    #inems;
    constructor(items) {
        this.#inems = items;
    }
    getItems() {
        return this.#inems;
    }
    addItem(newItem) {
        this.#inems.push(newItem);
    }
    removeItem(itemToRemove) {
        this.#inems = this.#inems.filter(item => item !== itemToRemove);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
