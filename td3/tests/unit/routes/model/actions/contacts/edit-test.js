import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | Model/actions/contacts/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:model/actions/contacts/edit');
    assert.ok(route);
  });
});
