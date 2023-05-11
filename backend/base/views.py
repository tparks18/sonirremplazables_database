from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .missingPersons import missingPersons

from .models import MissingPerson
from django.contrib.auth.models import User
from .serializers import MissingPersonSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/missingPersons/',
        '/api/missingPersons/create/',
        '/api/missingPersons/upload/',
        '/api/missingPersons/top/',
        '/api/missingPersons/<id>/',
        '/api/missingPersons/delete/<id>/',
        '/api/missingPersons/top/<update>/<id>/',
        
    ]
    return Response(routes)

@api_view(['GET'])
def getMissingPersons(request):
    missingPersons = MissingPerson.objects.all()
    serializer = MissingPersonSerializer(missingPersons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMissingPerson(request, pk):
    missingPerson = MissingPerson.objects.get(_id=pk)
    serializer = MissingPersonSerializer(
        missingPerson, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
