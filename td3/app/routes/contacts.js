import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Contacts=EmberObject.extend({
  datas:null,
  filtre:null,
  contacts:computed('datas.@each.isDeleted', 'filtre',function(){
    let deleteds=this.datas.filter((contact)=>!contact.get('isDeleted'));
    debugger
    if(this.filtre==null){
      return deleteds;
    }
    return deleteds.filter((contact)=>{
      return (contact.lastname && contact.lastname.includes(this.filtre)||
            contact.firstname && contact.firstname.includes(this.filtre)||
            contact.email && contact.email.includes(this.filtre));
    });
  }),
//manque une fonction

  deleteds:computed('datas.@each.isDeleted',function(){
    return this.datas.filter((contact)=>contact.get('isDeleted'));
  }),
  deletedsCount:computed('datas.@each.isDeleted',function(){
    return this.get('deleteds').length;
  })
});

export default Route.extend({
  model(){
      return Contacts.create({
        datas: this.store.findAll('contact')
      });
  },
  actions: {
    delete(contact){
      contact.deleteRecord();
    },
    cancelDeletion(deleteds){
      deleteds.forEach((item)=>{item.rollbackAttributes();});
    },
    confirmDeletion(deleteds){
      deleteds.forEach((Contact)=>{contact.save();})
    }

  }
});
