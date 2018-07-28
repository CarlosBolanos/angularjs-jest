const Dictionary = require('@/shared/services/dictionary');

describe('it should test dictionary behaviour', () => {
    let dict;

    beforeEach(() => {
        dict = new Dictionary();
    });
    it('should add items to the dictionary', () => {
        expect(dict.has('first_name')).toBeFalsy();
        dict.set('first_name', 'carlos');
	
	    expect(dict.get('first_name')).toBe('carlos');
	    expect(dict.get('last_name')).toBe(undefined);
        expect(dict.has('first_name')).toBeTruthy();
    });

    it('should add items to the dictionary', () => {
        expect(dict.has('first_name')).toBeFalsy();
        dict.set('first_name', 'carlos');
        dict.set('last_name', 'bolanos');

        expect(dict.getItems().first_name).toEqual('carlos');
        expect(dict.getItems().last_name).toEqual('bolanos');
    });

    it('should delete items from the dictionary', () => {
        expect(dict.has('first_name')).toBeFalsy();
        dict.set('first_name', 'carlos');

        expect(dict.has('first_name')).toBeTruthy();
        dict.delete('first_name');

        expect(dict.has('first_name')).toBeFalsy();
        
	    dict.delete('first_name')
	    expect(dict.has('first_name')).toBeFalsy();
    });

    it('should get items from the dictionary', () => {
        dict.set('first_name', 'carlos');
        expect(dict.get('first_name')).toEqual('carlos');

        dict.set('first_name', 'raul');
        expect(dict.get('first_name')).toEqual('raul');
    });

    it('should get items keys from the dictionary', () => {
        dict.set('first_name', 'carlos');
        dict.set('last_name', 'bolanos');
        expect(dict.keys()).toEqual(['first_name', 'last_name']);
    });

    it('should get items values from the dictionary', () => {
        dict.set('first_name', 'carlos');
        dict.set('last_name', 'bolanos');
        expect(dict.values()).toEqual(['carlos', 'bolanos']);
        dict.clear()
	    expect(dict.values()).toEqual([]);
    });
	
	it('should get items values from the dictionary', () => {
		dict.set('first_name', 'carlos');
		dict.set('last_name', 'bolanos');
		dict.clear()
		expect(dict.size()).toEqual(0);
    });
    
});