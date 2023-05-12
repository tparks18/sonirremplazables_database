from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.missingPersons import missingPersons

from base.models import MissingPerson
from base.serializers import MissingPersonSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import status


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
