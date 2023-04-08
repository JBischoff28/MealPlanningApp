from django.urls import path
from events import views

urlpatterns = [
    path('myevents/', views.user_events),
    path('myevent/<int:pk>/', views.user_singleEvent)
]