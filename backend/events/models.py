from django.db import models
from authentication.models import User
from meals.models import Meal


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    date = models.DateField()
