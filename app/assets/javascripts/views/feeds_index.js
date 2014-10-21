NewsReader.Views.FeedsIndex = Backbone.View.extend ({
  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  template: JST["feeds/index"],

  tagName: 'ul',

  events: {
    "click .delete": "deleteFeed"
  },

  render: function () {
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    this.$el.prepend("<h2>Your Feeds</h2>");
    return this;
  },

  deleteFeed: function(event) {
    event.preventDefault();
    var id = $(event.target).data("id");
    var feed = this.collection.getOrFetch(id);

    // debugger
    feed.destroy({ wait: true });
  }
});