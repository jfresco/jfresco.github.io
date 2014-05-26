var SD = SD || {};
SD.Views = SD.Views || {};
SD.Views.SurveyDesigner = Backbone.View.extend({
  tagName: 'div',
  
  el: '#container',

  template: _.template($("#survey-designer-template").html()),
  
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

      $(".sd-sortable").sortable({
        placeholder: 'sd-drop-placeholder',
        cursor: 'move'
      });

      $("#sd-audience-select").chosen();

      $(".sd-rich").wysihtml5();
    });
  }
});