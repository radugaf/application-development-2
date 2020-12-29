import datetime
import json
import time

from django.db.models import Q
from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import exceptions, status
from rest_framework.views import APIView

from edesia_main.products.models import *
from edesia_main.users.api.serializers import *

User = get_user_model()


class UserRegistrationView(APIView):
    permission_classes = ()

    def post(self, request):
        try:
            username = request.data.get('username')
            bio = request.data.get('bio', '')
            password = request.data.get('password')

            is_company_owner = True if request.data.get('is_company_owner', False) else False
            is_company_staff = True if request.data.get('is_company_staff', False) else False
            is_restaurant_owner = True if request.data.get('is_restaurant_owner', False) else False
            is_restaurant_staff = True if request.data.get('is_restaurant_staff', False) else False

            if not is_company_owner and not is_company_staff and not is_restaurant_owner and not is_restaurant_staff:
                return Response({'status': 'error', 'message': 'User type has to be mentioned.'}, status=status.HTTP_400_BAD_REQUEST)

            if is_company_staff + is_company_owner + is_restaurant_owner + is_restaurant_staff != 1:
                return Response({'status': 'error', 'message': 'Only one User type has to be mentioned.'}, status=status.HTTP_400_BAD_REQUEST)

            data = {
                'username': username,
                'bio': bio,
                'is_company_owner': is_company_owner,
                'is_company_staff': is_company_staff,
                'is_restaurant_owner': is_restaurant_owner,
                'is_restaurant_staff': is_restaurant_staff,
            }
            print(data)

            user = User.objects.create(**data)

            user.set_password(password)
            user.save()

            return Response({'status': 'success', 'message': 'User is created successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CheckUserTypeAPIView(APIView):
    def get(self, request):
        try:
            data = {}
            if request.user.is_company_owner:
                data['is_company_owner'] = True
            if request.user.is_company_staff:
                data['is_company_staff'] = True
            if request.user.is_restaurant_staff:
                data['is_restaurant_staff'] = True
                resurantdata = request.user.get_restaurant()
                data['resturant_name'] = resurantdata.name
                data['resturant_address'] = resurantdata.address
            if request.user.is_restaurant_owner:
                data['is_restaurant_owner'] = True
                resurantdata = request.user.get_restaurant()
                data['resturant_name'] = resurantdata.name
                data['resturant_address'] = resurantdata.address

            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class StaffListToAddRestaurantAPIView(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        try:
            users = User.objects.filter(is_restaurant_staff=True, restaurants_work_for__isnull=True)
            serializer = self.serializer_class(users, many=True)
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AddStaffForRestaurantAPIView(APIView):
    def post(self, request):
        try:
            restaurant_id = request.data.get('restaurant_id')
            staff_id = request.data.get('staff_id')

            restaurant = Restaurant.objects.get(id=restaurant_id)
            staff = User.objects.get(id=staff_id)

            added = restaurant.staff.add(staff)

            return Response({'status': 'success', 'message': 'Staff has been added successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RemoveStaffFromRestaurantAPIView(APIView):
    def post(self, request):
        try:
            restaurant_id = request.data.get('restaurant_id')
            staff_id = request.data.get('staff_id')

            restaurant = Restaurant.objects.get(id=restaurant_id)
            staff = User.objects.get(id=staff_id)

            added = restaurant.staff.remove(staff)

            return Response({'status': 'success', 'message': 'Staff has been removed successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class StaffListToAddCompanyAPIView(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        try:
            users = User.objects.filter(is_company_staff=True, company_work_for__isnull=True)
            serializer = self.serializer_class(users, many=True)
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AddStaffForCompanyAPIView(APIView):
    def post(self, request):
        try:
            company_id = request.data.get('company_id')
            staff_id = request.data.get('staff_id')

            company = Company.objects.get(id=company_id)
            staff = User.objects.get(id=staff_id)

            added = company.staff.add(staff)

            return Response({'status': 'success', 'message': 'Staff has been added successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RemoveStaffFromCompanyAPIView(APIView):
    def post(self, request):
        try:
            company_id = request.data.get('company_id')
            staff_id = request.data.get('staff_id')

            company = Company.objects.get(id=company_id)
            staff = User.objects.get(id=staff_id)

            added = company.staff.remove(staff)

            return Response({'status': 'success', 'message': 'Staff has been removed successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
