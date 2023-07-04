from django.shortcuts import render
from django.utils import timezone
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

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createMissingPerson(request):
    user = request.user
    current_date = timezone.now()
    missingPerson = MissingPerson.objects.create(
        user=user,
        first_name='Sample First Name',
        last_name='Sample Last Name',
        gender='Sample Gender',
        age_last_seen=0,
        hair='Sample Hair',
        eyes='Sample Eyes',
        height=0.0,
        weight=0.0,
        last_seen_wearing='Sample Last Seen Wearing',
        critical_information='Sample Critical Information',
        province='Sample Province',
        city='Sample City',
        last_known_location='Sample Last Known Location',
        date_last_seen = current_date,
        primary_contact_first_name='Sample Primary Contact First Name',
        primary_contact_last_name='Sample Primary Contact Last Name',
        primary_contact_phone='Sample Primary Contact Phone',
        secondary_contact_first_name='Sample Secondary Contact First Name',
        secondary_contact_last_name='Sample Secondary Contact Last Name',
        secondary_contact_phone='Sample Primary Contact Phone'

    )

    serializer = MissingPersonSerializer(
        missingPerson, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteMissingPerson(request, pk):
    missingPerson = MissingPerson.objects.get(_id=pk)
    missingPerson.delete()
    return Response({'success':True})
