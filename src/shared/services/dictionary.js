class Dictionary {
    constructor() {
        this.items = {};
    }

    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    getItems() {
        return this.items;
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        const values = [];
        for (const key in this.items) {
	        values.push(this.items[key]);
        }
        return values;
    }

    size() {
        return Object.keys(this.items).length;
    }

    clear() {
        this.items = {};
    }
}

module.exports = Dictionary;