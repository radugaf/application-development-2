from rest_framework import serializers
from rest_framework.exceptions import PermissionDenied, ValidationError

from django.contrib.auth import get_user_model

from edesia_main.products.models import *

from edesia_main.users.api.serializers import UserSerializer

User = get_user_model()

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'address', 'phone_number')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ( 'id', 'name', 'address', 'phone_number',)

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        exclude = ('created_date', 'modified_date',)

class ProductSerializer(serializers.ModelSerializer):
    supplier_company = serializers.SerializerMethodField()
    class Meta:
        model = Product
        exclude = ('created_date', 'modified_date',)
    
    def get_supplier_company(self, obj):
        if obj.supplier_company:
            return {
                'id': obj.id,
                'name': obj.supplier_company.name,
            }
        return None

class VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variation
        exclude = ('created_date', 'modified_date',)

class ProductVariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariation
        exclude = ('created_date', 'modified_date',)

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        exclude = ('created_date', 'modified_date',)

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        exclude = ('created_date', 'modified_date',)

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        exclude = ('created_date', 'modified_date',)

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        exclude = ('created_date', 'modified_date',)

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        exclude = ('created_date', 'modified_date',)
