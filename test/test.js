console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      rotationForce = $val
    };

    let varCallbacks = [
      function($val) {
        if ($val.value === 0.0) {
          return {failure: 'Change your code so `rotationForce` equals something other than `0.0`.'};
        }
        return true;
      }
    ];

    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure || 'Did you set `frictrotationForceion` equal to a number other than `0.0`?';
    assert.isOk(isMatch, failureMessage);
  });
});