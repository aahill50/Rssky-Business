class AddUserIdToFeeds < ActiveRecord::Migration
  def change
    add_column :feeds, :user_id, :integer
    change_column :feeds, :user_id, :integer, null: false
  end
end
