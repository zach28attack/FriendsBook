Rails.application.routes.draw do
   root "pages#home"
   resources :users
   resources :friends
   get 'login', to: 'session#new'
   post 'login', to: 'session#create'
   get 'logout', to: 'sessions#destroy'
end
