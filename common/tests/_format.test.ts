/**
 * Tests for ageFromDob utility method
 */

// Application
import Format from '../utils/base/_format';
describe('format', ()=>{
    it('format - `enumeration.get`', () => {
        const { enumeration: { get } } = Format;
        expect(get(null)).toEqual('');
        expect(get('MY_CONSTANT')).toEqual('My constant');
        expect(get('test')).toEqual('Test');
    });

    it('format - `enumeration.get`', () => {
        const { enumeration: { set } } = Format;
        expect(set(null)).toEqual('');
        expect(set('My Constant')).toEqual('MY_CONSTANT');
        expect(set('test')).toEqual('TEST');
    });

    it('format - `camelCase`', () => {
        const { camelCase } = Format;
        expect(camelCase(null)).toEqual('');
        expect(camelCase('bla bla')).toEqual('Bla bla');
        expect(camelCase('bla')).toEqual('Bla');
    });

    it('format - `cssImage`', () => {
        const { cssImage } = Format;
        expect(cssImage(null)).toEqual('none');
        expect(cssImage('ok.png')).toEqual('url("ok.png")');
    });

    it('format - `ordinal`', () => {
        const { ordinal } = Format;
        expect(ordinal(null)).toEqual('0');
        expect(ordinal(1)).toEqual('1st');
        expect(ordinal(22)).toEqual('22nd');
        expect(ordinal(33)).toEqual('33rd');
        expect(ordinal(44)).toEqual('44th');
        expect(ordinal(55)).toEqual('55th');
    });

    it('format - `truncateText`', () => {
        const { truncateText } = Format;
        expect(truncateText(null,3)).toEqual(null);
        expect(truncateText('abc', 1)).toEqual('a...');
        expect(truncateText('abc', 2)).toEqual('ab...');
        expect(truncateText('abc', 3)).toEqual('abc');
    });

    it('format - `removeAccents`', () => {
        const { removeAccents } = Format;
        expect(removeAccents(null)).toEqual('');
        expect(removeAccents('âêîôûŵŷäëïöüẅÿàèìòùẁỳáéíóúẃý')).toEqual('aeiouwyaeiouwyaeiouwyaeiouwy');
    });
})
