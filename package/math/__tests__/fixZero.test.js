import { expect } from 'chai';
import { fixZero } from '../src/fixZero';

describe('Method fixZero:', function() {
  it('should all result all equal to expectation', function() {
    expect(fixZero(0)).to.be.equal('00');
    expect(fixZero(1)).to.be.equal('01');
    expect(fixZero(5)).to.be.equal('05');
    expect(fixZero(10)).to.be.equal('10');
  });
});
