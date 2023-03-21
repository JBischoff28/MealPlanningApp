from django.urls import path, include
from meals import views

urlpatterns = [
    path('', views.display_all_meals),
    path('mymeals/', views.user_meals)
]