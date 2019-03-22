import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:'Smith',
            age:20,
            details:'Des détails sur Smith...'}
  }
});
