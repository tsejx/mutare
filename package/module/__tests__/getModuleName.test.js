import { expect } from 'chai';
import { getModuleName } from '../src/getModuleName';

describe('Method getModuleName:', function() {
  it('get right module name from the file node_modules ', function() {
    expect(getModuleName('/node_modules/chai/lib/chai/config.js')).to.be.equal('chai');
    expect(getModuleName('/node_modules/atob/bin/atob.js')).to.be.equal('atob');
    expect(getModuleName('/node_modules/mocha/lib/reporters/base.js')).to.be.equal('mocha');
  });
});
