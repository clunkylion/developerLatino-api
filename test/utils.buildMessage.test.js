const assert = require('assert');
const buildMessage = require('../utils/buildMessage');
describe('utils - buildMessage', () => {
  describe('when receives na entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('video', 'create');
      const expect = 'video created';
      assert.strictEqual(result, expect);
    });
  });
});
