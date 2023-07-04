from django.urls import path, include
from base.views import missingPerson_views as views

urlpatterns = [
    path('', views.getMissingPersons, name='missingPersons'),
    path('<str:pk>/', views.getMissingPerson, name='missingPerson'),
    path('delete/<str:pk>/', views.deleteMissingPerson, name='missingPerson-delete'),
]
