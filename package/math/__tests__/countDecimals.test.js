import { expect } from 'chai';
import { countDecimals } from '../src/countDecimals';

describe('When using countDecimals', function() {
  it('0', function() {
    expect(countDecimals(0)).to.be.equal(0);
  });
  it('1.2', function() {
    expect(countDecimals(1.2)).to.be.equal(1);
  });
  it('2.33', function() {
    expect(countDecimals(2.33)).to.be.equal(2);
  });
});
