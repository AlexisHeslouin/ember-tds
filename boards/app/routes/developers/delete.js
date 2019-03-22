import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },

  actions:{
    cancelDeletion(dev){
      dev.cancelDeletion(dev).then(this.transitionTo("developers"));
    },
    confirmDeletion(dev){
      dev.destroyRecord().then(this.transitionTo("developers"));
    }
  }
});
