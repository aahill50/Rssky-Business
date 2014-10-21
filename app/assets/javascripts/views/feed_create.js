NewsReader.Views.CreateFeed = Backbone.View.extend({
  template: JST["feeds/create"],

  events: {
    "submit form": "create"
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  create: function (event) {
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    var that = this;
    this.model.save(formData, {
      success: function(model, resp, options) {
        NewsReader.feeds.add(that.model);
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});