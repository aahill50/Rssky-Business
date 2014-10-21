NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "": "indexView"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  indexView: function() {
    var view = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this._swapView(view);
  },

  _swapView: function(newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});