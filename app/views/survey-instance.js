var SD = SD || {};
SD.Views = SD.Views || {};
SD.Views.SurveyInstance = Backbone.View.extend({
  tagName: 'div',
  
  el: '#container',

  template: _.template($("#survey-instance-template").html()),
  
  initialize: function (options) {
    this.options = options || {};
  },

  render: function () {
    var that = this;
    this.$el.fadeOut(function(e) {
      $(this).html(that.template()).fadeIn();

      $("input").iCheck({  
        checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
      });

      $(".sd-rich").wysihtml5();
    });
  }
});