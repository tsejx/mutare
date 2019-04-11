import { expect } from 'chai';
import { isAllFunction } from '../src/isAllFuncObj';

describe('When using isAllFunction', function() {
  const test1 = {
    anonymous: function() {
      const a = 'BINGO!';
    },
    arrow: () => {
      return 'DONE!';
    },
    standard: Math.abs,
  };
  const test2 = {
    number: 123,
    fn: function() {
      return true;
    },
  };
  it('should all result is true ', function() {
    expect(isAllFunction(test1)).to.be.true;
  });
  it('should return false', function() {
    expect(isAllFunction(test2)).to.be.false;
  });
});
