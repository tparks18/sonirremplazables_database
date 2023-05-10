from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .missingPersons import missingPersons

from .models import MissingPerson
from .serializers import MissingPersonSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/missingPersons/',
        '/api/missingPersons/create/',
        '/api/missingPersons/upload/',
        '/api/missingPersons/top/', #why was this here?, video 12
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
