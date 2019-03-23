import DS from 'ember-data';

export default DS.Model.extend({
  identify:DS.attr('string'),
  projects:DS.hasMany('project', {inverse:'owner'}),
  stories:DS.hasMany('story', {inverse:'developer'})
});
