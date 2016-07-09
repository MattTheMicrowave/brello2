window.$ = window.jQuery = require('jquery');
var ListsView = require('./views/ListsView');
var ListsCollection = require('./collections/ListsCollection');
// var TagsView = require('./views/AllTagsView');
// var TagsCollection = require('./collections/TagsCollection');

var listsCollection = new ListsCollection();
var listsView = new ListsView({ collection : listsCollection });

// var tagsCollection = new TagsCollection();
// var TagsView = new TagsView({ collection : tagsCollection });

listsCollection.fetch();
// tagsCollection.fetch();

$('#app').html(listsView.render().el);
$('#tags').html(tagsView.render().el);
