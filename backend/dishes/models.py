from django.db import models
from authentication.models import User

class Dish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    foodId = models.CharField(max_length=255)