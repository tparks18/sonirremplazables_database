from django.urls import path, include
from . import views

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('users/profile/', views.getUserProfile, name='users-profile'),
    path('missingPersons/', views.getMissingPersons, name='missingPersons'),
    path('missingPersons/<str:pk>/', views.getMissingPerson, name='missingPerson'),
]
