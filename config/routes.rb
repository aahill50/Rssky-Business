NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
  end

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  root to: "static_pages#index"
end
