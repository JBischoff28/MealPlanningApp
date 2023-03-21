from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Meal
from .serializers import MealSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def display_all_meals(request):
    meals = Meal.objects.all()
    serializer = MealSerializer(meals, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_meals(request):
    if request.method == 'GET':
        meals = Meal.objects.filter(user=request.user.id)
        serializer = MealSerializer(meals, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MealSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)