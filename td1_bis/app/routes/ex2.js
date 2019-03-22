import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

const Services = EmberObject.extend({

	services : [],
	countActive : computed("services.@each.active", function(){
		return this.get('services').filter(services => services.active).length;
	}),

	sumActive : computed("services.@each.active", function(){
		var somme = 0;
		this.get('services').filter(services => {
			if(services.active){
				somme+=services.price;
			}
		})
		return somme;
	}),
	promo:null,
	redux:computed("promo", function(){
		return this.get("promos")[this.get("promo")]
	})


});


export default Route.extend({
  model(){
    return Services.create({services: [
    {
        "name": "Web Development",
        "price": 300,
        "active":true
    },{
        "name": "Design",
        "price": 400,
        "active":false
    },{
        "name": "Integration",
        "price": 250,
        "active":true
    },{
        "name": "Formation",
        "price": 220,
        "active":false
    }
],
promo:{
  "B22":0.05,
  "AZ":0.01,
  "UBOAT":0.02
}

 });
  }
});
