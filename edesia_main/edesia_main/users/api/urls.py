 
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import *

app_name='users-api'

urlpatterns = [
    path('user-registration/', UserRegistrationView.as_view(), name='user-registration'),
    path('check-user-type/', CheckUserTypeAPIView.as_view(), name='check-user-type'),
    path('staff-list-to-add-restaurant/', StaffListToAddRestaurantAPIView.as_view(), name='staff-list-to-add-restaurant'),
    path('add-staff-for-restaurant/', AddStaffForRestaurantAPIView.as_view(), name='add-staff-for-restaurant'),
    path('remove-staff-for-restaurant/', RemoveStaffForRestaurantAPIView.as_view(), name='remove-staff-for-restaurant'),
]