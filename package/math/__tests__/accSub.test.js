import { expect } from 'chai';
import { accSub } from '../src/accSub';

describe('When using accSub', function() {
  it('6.8-0.9', function() {
    expect(accSub(6.8, 0.9)).to.be.equal(5.9);
  });
  it('6.8-0.4', function() {
    expect(accSub(6.8, 0.4)).to.be.equal(6.4);
  });
  it('1.1-1=0.1', function() {
    expect(accSub(1.1, 1)).to.be.equal(0.1);
  });
  it('0.3-0.2', function() {
    expect(accSub(0.3, 0.2)).to.be.equal(0.1);
  });
  it('0.23-0.24', function() {
    expect(accSub(0.23, 0.24)).to.be.equal(-0.01);
  });
  it('0.353-0.333', function() {
    expect(accSub(0.353, 0.333)).to.be.equal(0.02);
  });
  it('0.000006-0.000004', function() {
    expect(accSub(0.000006, 0.000004)).to.be.equal(0.000002);
  });
  it('0.02626-0.02621', function() {
    expect(accSub(0.02626, 0.02621)).to.be.equal(0.00005);
  });
});
