import { expect } from 'chai';
import formatDecimals from '../formatDecimals';

describe('#formatDecimals', function() {
    it('0.999', function() {
        expect(formatDecimals(0.999, 1)).to.be.equal('1.0');
    });
    it('0.999', function() {
        expect(formatDecimals(0.999, 2)).to.be.equal('1.00');
    });
    it('0.999', function() {
        expect(formatDecimals(0.999, 3)).to.be.equal('0.999');
    });
    it('0.999', function() {
        expect(formatDecimals(0.999, 4)).to.be.equal('0.9990');
    });
    it('9.999', function() {
        expect(formatDecimals(9.999, 1)).to.be.equal('10.0');
    });
    it('9.999', function() {
        expect(formatDecimals(9.999)).to.be.equal('10.00');
    });
    it('9', function() {
        expect(formatDecimals(9, 1)).to.be.equal('9.0');
    });
    it('9.01', function() {
        expect(formatDecimals(9.01, 1)).to.be.equal('9.0');
    });
    it('9.01', function() {
        expect(formatDecimals(9.01)).to.be.equal('9.01');
    });
    it('9.09', function() {
        expect(formatDecimals(9.09, 1)).to.be.equal('9.1');
    });
    it('9.09', function() {
        expect(formatDecimals(9.09)).to.be.equal('9.09');
    });
    it('9.001', function() {
        expect(formatDecimals(9.001)).to.be.equal('9.00');
    });
    it('9.009', function() {
        expect(formatDecimals(9.009)).to.be.equal('9.01');
    });
    it('9.091', function() {
        expect(formatDecimals(9.091)).to.be.equal('9.09');
    });
    it('9.099', function() {
        expect(formatDecimals(9.099)).to.be.equal('9.10');
    });
    it('6.265', function() {
        expect(formatDecimals(6.265)).to.be.equal('6.27');
    });
});
