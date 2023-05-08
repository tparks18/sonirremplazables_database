from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('missingPersons/', views.getMissingPersons, name='missingPersons'),
    path('missingPersons/<str:pk>/', views.getMissingPerson, name='missingPerson'),
]
