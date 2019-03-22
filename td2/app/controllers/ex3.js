import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  copyArrayElement(fromName, toName){
    let model = this.get('model');
    let from = get(model, fromName);
    let to = get(model, toName);
    to.pushObject(from);
  },

  actions:{
    addToIncluded(){
      this.copyArrayElement('dispoItems_', 'includedItems');
    },
    addAllToIncluded(){
      this.copyArrayElement('dispoItems', 'includedItems');
    },
    removeFromIncluded(){
      this.copyArrayElement('includedItems_', 'includedItems');
    },
    removeFromIncluded(){
      this.copyArrayElement('includedItems', 'dispoItems');
    }
  }
});
