from django.shortcuts import render
from django.utils import timezone
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.missingPersons import missingPersons
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import MissingPerson
from base.serializers import MissingPersonSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import status


@api_view(['GET'])
def getMissingPersons(request):
    query = request.query_params.get('keyword')
    if query is None:
        query = ''
    try:
        if query:
            missingPersons = MissingPerson.objects.filter(
                Q(first_name__icontains=query) | Q(last_name__icontains=query)
            ).order_by('first_name')
        else:
            missingPersons = MissingPerson.objects.all().order_by('first_name')

        paginator = Paginator(missingPersons, 4)
        page = request.query_params.get('page')

        if page == None or page == '':
            page = 1
        else:
            page = int(page)

        try:
            missingPersons = paginator.page(page)
        except PageNotAnInteger:
            missingPersons = paginator.page(1)
        except EmptyPage:
            missingPersons = paginator.page(paginator.num_pages)

        serializer = MissingPersonSerializer(missingPersons, many=True)
        return Response({'missingPersons': serializer.data, 'page': page, 'pages': paginator.num_pages})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




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
        date_last_seen=current_date,
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


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateMissingPerson(request, pk):
    data = request.data
    missingPerson = MissingPerson.objects.get(_id=pk)

    missingPerson.first_name = data['first_name']
    missingPerson.last_name = data['last_name']
    missingPerson.gender = data['gender']
    missingPerson.age_last_seen = data['age_last_seen']
    missingPerson.hair = data['hair']
    missingPerson.eyes = data['eyes']
    missingPerson.height = data['height']
    missingPerson.weight = data['weight']
    missingPerson.last_seen_wearing = data['last_seen_wearing']
    missingPerson.critical_information = data['critical_information']
    missingPerson.province = data['province']
    missingPerson.city = data['city']
    missingPerson.last_known_location = data['last_known_location']
    missingPerson.date_last_seen = data['date_last_seen']
    missingPerson.primary_contact_first_name = data['primary_contact_first_name']
    missingPerson.primary_contact_last_name = data['primary_contact_last_name']
    missingPerson.primary_contact_phone = data['primary_contact_phone']
    missingPerson.secondary_contact_first_name = data['secondary_contact_first_name']
    missingPerson.secondary_contact_last_name = data['secondary_contact_last_name']
    missingPerson.secondary_contact_phone = data['secondary_contact_phone']

    missingPerson.save()

    serializer = MissingPersonSerializer(
        missingPerson, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteMissingPerson(request, pk):
    missingPerson = MissingPerson.objects.get(_id=pk)
    missingPerson.delete()
    return Response({'success': True})


@api_view(['POST'])
# @permission_classes([IsAdminUser])
def uploadImage(request):
    data = request.data
    person_id = data['person_id']
    person = MissingPerson.objects.get(_id=person_id)

    person.image = request.FILES.get('image')
    person.save()

    return Response('Image was uploaded')
