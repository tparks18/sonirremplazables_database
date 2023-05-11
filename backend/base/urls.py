from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('missingPersons/', views.getMissingPersons, name='missingPersons'),
    path('missingPersons/<str:pk>/', views.getMissingPerson, name='missingPerson'),
]
