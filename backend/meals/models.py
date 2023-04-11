from django.db import models
from authentication.models import User
from dishes.models import Dish

class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dish = models.ManyToManyField(Dish)
    name = models.CharField(max_length=255)