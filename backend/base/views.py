from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .missingPersons import missingPersons

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/missingPersons/',
        '/api/missingPersons/create/',
        '/api/missingPersons/upload/',
        #'/api/missingPersons/top', why was this here?, video 12
        '/api/missingPersons/<id>',
        '/api/missingPersons/delete/<id>',
        '/api/missingPersons/top/<update>/<id>',
        
    ]
    return Response(routes)

@api_view(['GET'])
def getMissingPersons(request):
    return Response(missingPersons)

@api_view(['GET'])
def getMissingPerson(request, pk):
    missingPerson = None
    for i in missingPersons:
        if i['_id'] == pk:
            missingPerson = i
            break
    return Response(missingPerson)
