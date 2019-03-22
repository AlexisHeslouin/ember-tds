import Route from "@ember/routing/route";

export default Route.extend({
  model(){
    return[
      {nom:"Anne Halle", age:20, details:"Des détails sur Anne..."},
      {nom:"Laurane Halle", age:50, details:"Des détails sur Laurane..."},
      {nom:"Peter Moilku", age:34, details:"Des détails sur Peter..."}
  ]}
});
