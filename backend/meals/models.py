from django.db import models
from authentication.models import User

class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dish_id = models.CharField(max_length=155)
    name = models.CharField(max_length=255)