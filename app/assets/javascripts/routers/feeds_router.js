NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "": "indexView",
    "feeds/new": "createView",
    "feeds/:id": "showView"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  indexView: function () {
    var view = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this._swapView(view);
  },

  showView: function (id) {
    var view = new NewsReader.Views.FeedShow({
      model: NewsReader.feeds.getOrFetch(id)
    });

    this._swapView(view);
  },

  createView: function () {
    var view = new NewsReader.Views.CreateFeed({
      model: new NewsReader.Models.Feed()
    });

    this._swapView(view);
  },

  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});