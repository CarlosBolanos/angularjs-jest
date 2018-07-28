require('angular');
require('angular-mocks');

describe('dictionary.service tests', () => {
    let _dictionaryService;

    beforeAll(() => {
        angular.module('angular.jest.shared', []);        
        require('@/shared/services/dictionary.service');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.shared')        
    });

    beforeEach(inject(dictionaryService => {    
        _dictionaryService = dictionaryService;
    }))

    test('should add items to the dictionary', () => {    
        expect(_dictionaryService.has('first_name')).toBeFalsy();
        _dictionaryService.set('first_name', 'carlos');
	
	    expect(_dictionaryService.get('first_name')).toBe('carlos');
	    expect(_dictionaryService.get('last_name')).toBe(undefined);
        expect(_dictionaryService.has('first_name')).toBeTruthy();
    });

    it('should add items to the dictionary', () => {
        expect(_dictionaryService.has('first_name')).toBeFalsy();
        _dictionaryService.set('first_name', 'carlos');
        _dictionaryService.set('last_name', 'bolanos');

        expect(_dictionaryService.getItems().first_name).toEqual('carlos');
        expect(_dictionaryService.getItems().last_name).toEqual('bolanos');
    });

    it('should delete items from the dictionary', () => {
        expect(_dictionaryService.has('first_name')).toBeFalsy();
        _dictionaryService.set('first_name', 'carlos');

        expect(_dictionaryService.has('first_name')).toBeTruthy();
        _dictionaryService.delete('first_name');

        expect(_dictionaryService.has('first_name')).toBeFalsy();
        
	    _dictionaryService.delete('first_name')
	    expect(_dictionaryService.has('first_name')).toBeFalsy();
    });

    it('should get items from the dictionary', () => {
        _dictionaryService.set('first_name', 'carlos');
        expect(_dictionaryService.get('first_name')).toEqual('carlos');

        _dictionaryService.set('first_name', 'raul');
        expect(_dictionaryService.get('first_name')).toEqual('raul');
    });

    it('should get items keys from the dictionary', () => {
        _dictionaryService.set('first_name', 'carlos');
        _dictionaryService.set('last_name', 'bolanos');
        expect(_dictionaryService.keys()).toEqual(['first_name', 'last_name']);
    });

    it('should get items values from the dictionary', () => {
        _dictionaryService.set('first_name', 'carlos');
        _dictionaryService.set('last_name', 'bolanos');
        expect(_dictionaryService.values()).toEqual(['carlos', 'bolanos']);
        _dictionaryService.clear()
	    expect(_dictionaryService.values()).toEqual([]);
    });
	
	it('should get items values from the dictionary', () => {
		_dictionaryService.set('first_name', 'carlos');
		_dictionaryService.set('last_name', 'bolanos');
		_dictionaryService.clear()
		expect(_dictionaryService.size()).toEqual(0);
    });    
});