import { expect } from 'chai';
import shuffle from '../shuffle';

describe('#shuffle()', function() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

    it('new array should be disordered', function() {
        expect(shuffle(arr))
            .should.be.an('array')
            .and.length(arr.length);
    });
});
