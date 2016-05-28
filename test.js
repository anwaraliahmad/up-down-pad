var upPad = require("./");
var test = require("tape");

test('up pad', function (assert) {
  assert.plan(7);
  assert.strictEqual(upPad('foo', 5), '\n\n\n\n\nfoo\n\n\n\n\n');
  assert.strictEqual(upPad('foobar', 6), '\n\n\n\n\n\nfoobar\n\n\n\n\n\n');
  assert.strictEqual(upPad(1, 2), '\n\n1\n\n');
  assert.strictEqual(upPad(1, 2), '\n\n1\n\n');
  assert.strictEqual(upPad('foo', 2), '\n\nfoo\n\n');
  assert.strictEqual(upPad('foo', -1), 'foo');
  assert.strictEqual(upPad('foo', 7), '\n\n\n\n\n\n\nfoo\n\n\n\n\n\n\n');
});
