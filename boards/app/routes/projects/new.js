import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },

  actions:{
    save(pro){
    //  let dev=model.copy;
      pro=this.store.createRecord("project", pro.copy);
      pro.save().then(this.transitionTo("projects"));
    }
  }
});
