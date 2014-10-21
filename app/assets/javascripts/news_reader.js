window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch();
    new NewsReader.Routers.FeedsRouter({ "$rootEl": $("#content") });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
