import { expect } from 'chai';
import convertToInt from '../convertToInt';

describe('#convertToInt()', function() {
    it('1', function() {
        expect(convertToInt(0.1)).to.be.equal(1);
    });
    it('2', function() {
        expect(convertToInt(1.25)).to.be.equal(125);
    });
    it('3', function() {
        expect(convertToInt(2.333)).to.be.equal(2333);
    });
    it('5', function() {
        expect(convertToInt(5.55555)).to.be.equal(555555);
    });
    it('10', function() {
        expect(convertToInt(10.1111111111)).to.be.equal(101111111111);
    });
});
