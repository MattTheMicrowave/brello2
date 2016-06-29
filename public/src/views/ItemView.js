var Backbone = require('backbone');
var _ = require('underscore');

var ItemView = Backbone.View.extend({
  el: '<li></li>',
  template: _.template([
    '<span><%= name %> </span>',
    '<div> <%= tags %> </div>'
  ].join()),

  render: function() {
    this.$el.append(this.template({
      name: this.model.get('name'),
      tags: this.model.get('tags').pluck('label').join(', ')
    }));
    return this;
  }


});

module.exports = ItemView;
