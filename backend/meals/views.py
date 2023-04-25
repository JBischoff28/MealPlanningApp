from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Meal
from .serializers import MealSerializer
from django.shortcuts import get_object_or_404
from dishes.models import Dish

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
The function will return one Meal object that matches the PK sent in the request.
    - If a GET request is sent, the API will return the Meal object with the pk that was sent in the request.
    - If a PUT request is sent, the request data will be validated.
        If the request data is valid, the API will update the Meal that matches the PK with the request data.
        If the request data is invalid, the API will return a 400 - BAD REQUEST error.
    - If a DELETE request is sent, the API will delete the Meal with the same PK as the PK sent in the request.

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
            return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        meal.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['PATCH', 'DELETE'])
@permission_classes([AllowAny])
def meal_dish(request, dish_pk, meal_pk):

    try:
        dish = Dish.objects.get(pk=dish_pk)
    except:
        return Response({"message": "Dish not found"}, status=status.HTTP_404_NOT_FOUND)
    try:
        meal = Meal.objects.get(pk=meal_pk)
    except:
        return Response({"message": "Meal not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PATCH':
        meal.dish.add(dish)
        meal.save()
        serializer = MealSerializer(meal)
    elif request.method == 'DELETE':
        meal.dish.remove(dish)
        meal.save()
        serializer = MealSerializer(meal)

    return Response(serializer.data, status=status.HTTP_200_OK)