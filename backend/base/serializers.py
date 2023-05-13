from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
#from .models import MissingPerson, Contact
from .models import MissingPerson

# class UserSerializer(serializers.ModelSerializer):
#     first_name = serializers.SerializerMethodField(read_only=True)
#     last_name = serializers.SerializerMethodField(read_only=True)
#     _id = serializers.SerializerMethodField(read_only=True)
#     isAdmin = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = User
#         #fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']
#         fields = ['id', '_id', 'username', 'email', 'first_name', 'last_name', 'isAdmin']

#     def get__id(self,obj):
#         return obj.id
    
#     def get_isAdmin(self, obj):
#         return obj.is_staff

#     # def get_name(self, obj):
#     #     name = obj.first_name
#     #     if name == '':
#     #         name = obj.email
#     #     return name
    
#     def get_name(self, obj):
#         first_name = obj.first_name
#         if first_name == '':
#             first_name = obj.email
#         return first_name


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email',
                  'first_name', 'last_name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_first_name(self, obj):
        first_name = obj.first_name
        if first_name == '':
            first_name = obj.email
        return first_name

    def get_last_name(self, obj):
        last_name = obj.last_name
        if last_name == '':
            last_name = obj.email
        return last_name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        #fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
        fields = ['id', '_id', 'username', 'email',
                  'first_name', 'last_name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class MissingPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = MissingPerson
        fields = '__all__'

# class ContactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields = '__all__'
