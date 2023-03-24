from django.db import models
from authentication.models import User
from meals.models import Meal

class Dish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    foodId = models.CharField(max_length=255)