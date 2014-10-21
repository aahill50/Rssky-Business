class Api::FeedsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    render :json => current_user.feeds
  end

  def show
    render :json => Feed.find(params[:id]), include: :latest_entries
  end

  def create
    feed = current_user.feeds.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    feed = current_user.feeds.find(params[:id])

    if feed.destroy
      render json: feed
    else
      render text: "STOP THAT!", status: 404
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
