var _ = require('underscore');
var Backbone = require('backbone');

var TagView = Backbone.View.extend({
  el: '<span id="tagview"></span>',

  template: _.template('\
  <small style="background-color: <%=model.get("color")%>"><%= model.get("label") %></small>\
  '),

  render: function() {
      this.$el.html(this.template( { model: this.model }));
      return this;
    }
});

module.exports = TagView;
