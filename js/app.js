App = Ember.Application.create();

App.Router.map(function() {
  this.resource('photos', function() {
    this.resource('photo', { path: ':photo_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('photos');
  }
});

App.PhotosRoute = Ember.Route.extend({
  model: function() {
    return App.Photo.find();
  }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Photo = DS.Model.extend({
  title: DS.attr('string'),
  caption: DS.attr('string'),
  xDimension: DS.attr('number'),
  yDimension: DS.attr('number'),
  author: DS.attr('string'),
  
  imageUrl: function() {
    return "images/" + this.get('id') + ".jpg";
  }.property('id'),
  
  description: function() {
    return '<b>' + this.get('title') + '</b>' + ' by ' + this.get('author') + '<br/><em>' + this.get('caption') + '<em>';
  }.property('title', 'author', 'caption')
})

App.Photo.FIXTURES = [{
  title: "Island of Monarchs",
  caption: "Georges Island, Boston Harbor",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:1
}, {
  title: "Home Sweet Home",
  caption: "Boston from Memorial Drive during evening lightning storm.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:2
}, {
  title: "Cloudy Day",
  caption: "Little fluffy clouds.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:3
}, {
  title: "Gold Cap",
  caption: "Glowing forest floor in Deer Jump Park, Andover.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:4
}, {
  title: "Dragon Wings",
  caption: "Dragonfly perched trailside near Pomp's Pond.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:5
}, {
  title: "The Hangover 4",
  caption: "Tree bough hanging over the Shawsheen River in Deer Jump Park, Andover.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:6
}, {
  title: "Moonrock Morning",
  caption: 'View of Mount Washington from "Moonrock" campsite on Mount Jefferson.',
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:7
}, {
  title: "Permanently Frosted",
  caption: "Permafrost on peak of Mt. Jefferson, October 2010.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:8
}, {
  title: "North by Northwest",
  caption: "Plane taking off alongside bus in Martha's Vinyard.",
  xDimension: "400",
  yDimension: "300",
  author: "Patrick Holloway",
  id:9
}];