from django.urls import path
from dishes import views

urlpatterns = [
    path('', views.display_all_dishes),
    path('mydishes/', views.user_dishes),
    path('mydish/', views.user_singleDish)
]