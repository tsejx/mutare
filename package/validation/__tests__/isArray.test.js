import { expect } from 'chai';
import { isArray } from '../src/isArray';

describe('#isArray', function() {
  it('should return `false` for non-array', function() {
    expect(isArray(undefined)).to.be.false;
    expect(isArray(null)).to.be.false;
    expect(isArray(2)).to.be.false;
    expect(isArray(NaN)).to.be.false;
    expect(isArray('a')).to.be.false;
    expect(isArray(true)).to.be.false;
    expect(isArray([1, 2, 3])).to.be.true;
    expect(isArray({ a: 123 })).to.be.false;
    expect(isArray(() => {})).to.be.false;
    expect(isArray(/t$/)).to.be.false;
    expect(isArray(new Date())).to.be.false;
    expect(isArray(new Error())).to.be.false;
    expect(isArray(Symbol(123))).to.be.false;
  });
});
