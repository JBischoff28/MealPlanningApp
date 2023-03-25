from django.urls import path
from dishes import views

urlpatterns = [
    path('', views.display_all_dishes),
    path('mydishes/', views.user_dishes),
    path('mydish/<int:pk>/', views.user_singleDish)
]