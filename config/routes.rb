Rails.application.routes.draw do
   root "pages#home"
   resources :users
   resources :friends
   get 'login', to: 'sessions#new'
   post 'login', to: 'sessions#create'
   get 'logout', to: 'sessions#destroy'
end
