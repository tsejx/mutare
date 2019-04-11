import { expect } from 'chai';
import { formatDecimals } from '../src/formatDecimals';

describe('When using formatDecimals', function() {
  it('the result will automtically reserve two decimal digits lacking of the second parameter', function() {
    expect(formatDecimals(0.1)).to.be.equal('0.10');
    expect(formatDecimals(0.9)).to.be.equal('0.90');
    expect(formatDecimals(1)).to.be.equal('1.00');
    expect(formatDecimals(100)).to.be.equal('100.00');
    expect(formatDecimals(0.095)).to.be.equal('0.10');
    expect(formatDecimals(0.099)).to.be.equal('0.10');

    expect(formatDecimals(9.001)).to.be.equal('9.00');
    expect(formatDecimals(9.009)).to.be.equal('9.01');

    expect(formatDecimals(9.991)).to.be.equal('9.99');
    expect(formatDecimals(9.995)).to.be.equal('10.00');
    expect(formatDecimals(9.999)).to.be.equal('10.00');
  });
  it('all inputs below 1 should get correct results', function() {
    expect(formatDecimals(0.999, 1)).to.be.equal('1.0');
    expect(formatDecimals(0.999, 2)).to.be.equal('1.00');
    expect(formatDecimals(0.999, 3)).to.be.equal('0.999');
    expect(formatDecimals(0.999, 4)).to.be.equal('0.9990');
    expect(formatDecimals(0.999, 5)).to.be.equal('0.99900');
  });
});
