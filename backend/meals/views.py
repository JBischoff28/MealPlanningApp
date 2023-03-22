from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Meal
from .serializers import MealSerializer
from django.shortcuts import get_object_or_404

# This function serves for development purposes only, and may be removed before submitting.
@api_view(['GET'])
@permission_classes([AllowAny]) # For development use only
def display_all_meals(request):
    meals = Meal.objects.all()
    serializer = MealSerializer(meals, many=True)
    return Response(serializer.data)

""" 
This function serves to allow authenticated users to send GET and POST API requests to the API. 
    - If a GET request is sent, every meal that contains the same user_id as the requesting user is returned.
    - If a POST request is sent, the request data (sent by user via frontend application) will first be validated.
        If the request data is valid, it will then be saved to the database as a new Meal object.
        If the request data is invalid, the API will return a 400 - BAD REQUEST error.
"""
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
    
"""
This function serves to allow authenticated users to send GET, PUT, and DELETE API requests to the API.
"""
@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def user_singleMeal(request, pk):

    meal = get_object_or_404(Meal, pk=pk)

    if request.method == 'GET':
        serializer = MealSerializer(meal)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MealSerializer(meal, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        meal.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)


