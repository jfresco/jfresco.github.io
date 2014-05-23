var SD = SD || {};
SD.Router = Backbone.Router.extend({
  routes: {
    "": "showWelcome",
    "welcome": "showWelcome",
    "survey": "showSurveyInstance",
    "design": "showSurveyDesigner"
  },

  showWelcome: function () {
    new SD.Views.Welcome().render();
  },

  showSurveyInstance: function () {
    new SD.Views.SurveyInstance().render();
  },

  showSurveyDesigner: function () {
    var view = new SD.Views.SurveyDesigner()
    view.render();
  }
});