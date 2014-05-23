var SD = SD || {};
SD.Views = SD.Views || {};
SD.Views.Welcome = Backbone.View.extend({
  tagName: 'div',
  
  el: '#container',

  template: _.template($("#welcome-template").html()),
  
  initialize: function (options) {
    this.options = options || {};
  },

  render: function () {
    var that = this;
    this.$el.fadeOut(function(e) {
      $(this).html(that.template()).fadeIn();
    });
  }
});