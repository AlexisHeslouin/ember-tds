import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | Model/actions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:model/actions');
    assert.ok(route);
  });
});
