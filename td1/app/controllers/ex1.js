import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      //let model= this.get('model');
      //this.modelFor(this.routeName)
      console.log('Sauvegarde : '+note.get('content'));
    },
    reset(note){
      note.set("content", "");
      console.clear();
    }
  }

});
