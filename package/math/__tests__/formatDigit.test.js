import { expect } from 'chai';
import formatDigit from '../formatDigit';

describe('#formatDigit', function() {
    it('9999', function() {
        expect(formatDigit(9999)).to.be.equal('9,999');
    });
    it('9999999', function() {
        expect(formatDigit(9999999)).to.be.equal('9,999,999');
    });
    it('9999999999', function() {
        expect(formatDigit(9999999999)).to.be.equal('9,999,999,999');
    });
    it('9999.9', function() {
        expect(formatDigit(9999.9)).to.be.equal('10,000');
    });
    it('9999.99', function() {
        expect(formatDigit(9999.99)).to.be.equal('10,000');
    });
    it('9999.999', function() {
        expect(formatDigit(9999.999)).to.be.equal('10,000');
    });
});
