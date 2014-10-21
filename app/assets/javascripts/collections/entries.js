NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function (options) {
    this.feed = options.feed;
  },

  model: NewsReader.Models.Entry,
  url: function () {
   return this.feed.url() + "/entries"
  }
});