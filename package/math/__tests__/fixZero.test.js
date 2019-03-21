import { expect } from 'chai';
import fixedZero from '../fixZero';

describe('#fixZero()', function() {
    it('00', function() {
        expect(fixedZero(0)).to.be.equal('00');
    });
    it('01', function() {
        expect(fixedZero(1)).to.be.equal('01');
    });
    it('05', function() {
        expect(fixedZero(5)).to.be.equal('05');
    });
    it('10', function() {
        expect(fixedZero(10)).to.be.equal('10');
    });
});
