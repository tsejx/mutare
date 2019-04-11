import { expect } from 'chai';
import { formatDigit } from '../src/formatDigit';

describe('When using formatDigit', function() {
  it('all result ', function() {
    expect(formatDigit(9999)).to.be.equal('9,999');
    expect(formatDigit(9999999)).to.be.equal('9,999,999');
    expect(formatDigit(9999999999)).to.be.equal('9,999,999,999');

    expect(formatDigit(9999.9)).to.be.equal('10,000');
    expect(formatDigit(9999.99)).to.be.equal('10,000');
    expect(formatDigit(9999.999)).to.be.equal('10,000');
  });
});
