module.exports = angular.module('angular.jest.shared')
    .service('dictionaryService', function() {
        this.items = {};
        this.has = key => {
            return key in this.items;
        };
        this.set = (key, value) => {
            this.items[key] = value;
        },
        this.delete = key => {
            if (this.has(key)) {
                delete this.items[key];
            }
        },
        this.get = key => {
            return this.has(key) ? this.items[key] : undefined;
        },
        this.getItems = () => {
            return this.items;
        },
        this.keys = () => {
            return Object.keys(this.items);
        },
        this.values = () => {
            const values = [];
            for (const key in this.items) {
                values.push(this.items[key]);
            }
            return values;
        },
        this.size = () => {
            return Object.keys(this.items).length;
        },
        this.clear = () => {
            this.items = {};
        }
    });