NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["feeds/show"],

  events: {
    "click #refresh": "refresh"
  },

  refresh: function (event) {
    this.model.fetch();
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    var that = this;
    this.model.entries().forEach(function (entry) {
      var view = new NewsReader.Views.EntryShow({ model: entry });
      that.$el.find("ul").append(view.render().$el);
    });
    return this;
  }
});