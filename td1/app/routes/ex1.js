import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content:'',
  MAX: 100,
  size: computed('content', function(){
    this.set("info", null);
    return this.content.length;
  }),
  warning: computed("content", function(){
    if (this.get("MAX") - this.get(size) < 10){
      return "alert alert-danger";
    }if (this.get("MAX") - this.get(size) >= 10) {
      return "alert alert-info";
    }else{
      return Note.create();
    }
  }),
  reste: computed("size", function(){
    return this.get("MAX")-this.get("size");
  })

});

export default Route.extend({
  model(){
    return Note.create();
  }
});
