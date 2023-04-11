from rest_framework import serializers
from .models import Meal
from dishes.serializers import DishSerializer

class MealSerializer(serializers.ModelSerializer):
    dish = DishSerializer(many=True, read_only=True)
    
    class Meta:
        model = Meal
        fields = ['id', 'name', 'dish', 'user']
        depth = 1