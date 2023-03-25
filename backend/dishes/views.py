from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Dish
from .serializers import DishSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny]) # For development use only
def display_all_dishes(request):
    dishes = Dish.objects.all()
    serializer = DishSerializer(dishes, many=True)
    return Response(data=serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_dishes(request):
    if request.method == 'GET':
        dishes = Dish.objects.filter(user=request.user.id)
        serializer = DishSerializer(dishes, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        serializer = DishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def user_singleDish(request, pk):

    dish = get_object_or_404(Dish, pk=pk)

    if request.method == 'GET':
        serializer = DishSerializer(dish)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DishSerializer(dish, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        dish.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)