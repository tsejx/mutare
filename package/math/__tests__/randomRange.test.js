import { expect } from 'chai';
import { randomRange } from '../src/randomRange';

describe('When using randomRange', function() {
  it('should match the range', function() {
    var num1 = Math.random().toFixed(2) * 100,
      num2 = Math.random().toFixed(2) * 100;

    if (num1 >= num2) {
      var min = num2,
        max = num1;
    } else if (num1 < num2) {
      var min = num1,
        max = num2;
    }

    expect(randomRange(min, max))
      .to.be.a('number')
      .that.within(min, max);
  });
});
