from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Dish
from .serializers import DishSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def display_all_dishes(request):
    dishes = Dish.objects.all()
    serializer = DishSerializer(dishes)
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
