//import Ember from 'ember';
//import Band from '../models/band';
//import Song from '../models/song';

var Band = Ember.Object.extend({
  name: ''
});

//var ledZeppelin = Band.create({name: 'Led Zeppelin', songs: [blackDog]});
//var pearlJam = Band.create({name: 'Pearl Jam', songs: [daughter, yellowLedbetter]});
//var fooFighters = Band.create({name: 'Foo Fighters', songs: [pretender]});
var ledZeppelin = Band.create({name: 'Led Zeppelin'});
var pearlJam = Band.create({name: 'Pearl Jam'});
var fooFighters = Band.create({name: 'Foo Fighters'});

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function () {
    return bands;
  }

  //actions: {
  //  createBand: function() {
  //    var name = this.get('controller').get('name');
  //    var band = Band.create({ name: name });
  //    bands.get('content').pushObject(band);
  //    this.get('controller').set('name', '');
  //  }
  //}

});
