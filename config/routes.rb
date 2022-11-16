Rails.application.routes.draw do
  
  resources :chats, only: [:index, :show]
  resources :messages, only: [:index, :show, :create, :destroy, :update]
  resources :users, only: [:index, :create]
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  get "/Auth", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
