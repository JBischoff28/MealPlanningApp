from django.urls import path
from meals import views

urlpatterns = [
    path('', views.display_all_meals),
    path('mymeals/', views.user_meals),
    path('mymeal/<int:pk>/', views.user_singleMeal),
    path('mymeal/<int:dish_pk>/<int:meal_pk>/', views.meal_dish)
]