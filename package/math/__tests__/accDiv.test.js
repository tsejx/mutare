import { expect } from 'chai';
import { accDiv } from '../src/accDiv';

describe('When using accDiv', function() {
  it('9.99/0.3', function() {
    expect(accDiv(9.99, 0.3)).to.be.equal(33.3);
  });
  it('0.6/0.2', function() {
    expect(accDiv(0.6, 0.2)).to.be.equal(3);
  });
  it('0.3/0.1', function() {
    expect(accDiv(0.3, 0.1)).to.be.equal(3);
  });
  it('0.69/10', function() {
    expect(accDiv(0.69, 0.1)).to.be.equal(6.9);
  });
});
