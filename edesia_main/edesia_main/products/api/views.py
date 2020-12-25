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

from .serializers import *

User = get_user_model()

class RestaurantCreateReadAPIView(APIView):
    serializer_class = RestaurantSerializer

    def get(self, request, id):
        try:
            restaurant_id = id
            
            restaurant = Restaurant.objects.get(id=restaurant_id)
            
            data = {
                'name': restaurant.name,
                'address': restaurant.address,
                'phone_number': restaurant.phone_number,
                'staff': []
            }
            for user in restaurant.staff.all():
                data['staff'].append({
                    'id': user.id,
                    'username': user.username 
                })
            
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:
            name = request.POST.get('name', None)
            address = request.POST.get('address', None)
            phone_number = request.POST.get('phone_number', None)
            
            if not name:
                raise exceptions.NotFound('name is not given')
            if not address:
                raise exceptions.NotFound('address is not given')
            if not phone_number:
                raise exceptions.NotFound('phone_number is not given')

            data = {
                'owner': request.user,
                'name': name,
                'address': address,
                'phone_number': phone_number,
            }
            created = Restaurant.objects.create(**data)

            if created:
                return Response({'status': 'success'}, status=status.HTTP_200_OK)
            else:
                return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RestaurantDeleteAPIView(APIView):
    def post(self, request, id):
        try:
            
            restaurant_id = id
            restaurant = Restaurant.objects.get(id=restaurant_id)

            if restaurant.owner != request.user and not request.user.is_superuser:
                raise exceptions.PermissionError('You don\'t have permission')
            
            restaurant.delete()

            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RestaurantListUpdateAPIView(APIView):
    serializer_class = RestaurantSerializer

    def get(self, request):
        serializer = self.serializer_class(Restaurant.objects.all(), many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, id):
        try:
            restaurant_id = id
            name = request.POST.get('name', None)
            address = request.POST.get('address', None)
            phone_number = request.POST.get('phone_number', None)
            
            restaurant = Restaurant.objects.get(id=restaurant_id)
            
            restaurant.owner = request.user
            restaurant.name = restaurant.name if not name else name
            restaurant.address = restaurant.address if not address else address
            restaurant.phone_number = restaurant.phone_number if not phone_number else phone_number
            restaurant.save()
            
            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CompanyCreateReadAPIView(APIView):
    serializer_class = CompanySerializer

    def get(self, request, id):
        try:
            company_id = id
            company = Company.objects.get(id=company_id)
            
            data = {
                'id': company.id,
                'name': company.name,
                'address': company.address,
                'phone_number': company.phone_number,
                'staff': []
            }
            for user in company.staff.all():
                data['staff'].append({
                    'id': user.id,
                    'username': user.username 
                })
            
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:
            name = request.POST.get('name', None)
            address = request.POST.get('address', None)
            phone_number = request.POST.get('phone_number', None)
            
            if not name:
                raise exceptions.NotFound('name is not given')
            if not address:
                raise exceptions.NotFound('address is not given')
            if not phone_number:
                raise exceptions.NotFound('phone_number is not given')

            data = {
                'owner': request.user,
                'name': name,
                'address': address,
                'phone_number': phone_number,
            }
            created = Company.objects.create(**data)

            if created:
                return Response({'status': 'success'}, status=status.HTTP_200_OK)
            else:
                return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CompanyDeleteAPIView(APIView):
    def post(self, request, id):
        try:
            
            company_id = id
            company = Company.objects.get(id=company_id)

            if company.owner != request.user and not request.user.is_superuser:
                raise exceptions.PermissionError('You don\'t have permission')
            
            company.delete()

            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CompanyListUpdateAPIView(APIView):
    serializer_class = CompanySerializer

    def get(self, request):
        serializer = self.serializer_class(Company.objects.all(), many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, id):
        try:
            company_id = id
            name = request.POST.get('name', None)
            address = request.POST.get('address', None)
            phone_number = request.POST.get('phone_number', None)
            
            company = Company.objects.get(id=company_id)
            
            company.owner = request.user
            company.name = company.name if not name else name
            company.address = company.address if not address else address
            company.phone_number = company.phone_number if not phone_number else phone_number
            company.save()
            
            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserDetailReadUpdateAPIView(APIView):
    serializer_class = UserDetailSerializer

    def get(self, request):
        try:
            user_detail = UserDetail.objects.get(user=request.user)
            data = {
                'nationality': str(user_detail.nationality),
                'phonenumber': user_detail.phonenumber,
                'address': user_detail.address,
            }
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:

            nationality = request.POST.get('nationality', None)
            phonenumber = request.POST.get('phonenumber', None)
            address = request.POST.get('address', None)
            
            if not nationality:
                raise exceptions.NotFound('nationality is not given')
            if not phonenumber:
                raise exceptions.NotFound('phonenumber is not given')
            if not address:
                raise exceptions.NotFound('address is not given')

            user_detail, _ = UserDetail.objects.get_or_create(user=request.user)
            user_detail.nationality = nationality
            user_detail.phonenumber = phonenumber
            user_detail.address = address
            user_detail.save()

            return Response({'status': 'success'}, status=status.HTTP_200_OK)
            
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProductDeleteAPIView(APIView):
    def post(self, request, id):
        product_id = id
        try:
            deleted = Product.objects.get(id=product_id).delete()
        except:
            pass
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class ProductCreateReadAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self, request, id):
        product_id = id
        
        try:
            obj = Product.objects.get(id=product_id)

            serializer = self.serializer_class(obj, many=False)
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:
            if not request.user.get_company():
                raise exceptions.PermissionDenied('User is not associated with any compamy')

            title = request.POST.get('title', None)
            description = request.POST.get('description', None)
            image_main = request.FILES.get('image_main', None)
            total_stock = request.POST.get('total_stock', None)
            price = request.POST.get('price', None)
            instant_delivery = str(request.POST.get('instant_delivery', 'false'))
            company = request.user.get_company()

            if not description:
                raise exceptions.NotFound('description is not given')
            if not title:
                raise exceptions.NotFound('title is not given')
            if not total_stock:
                raise exceptions.NotFound('total_stock is not given')
            if not image_main:
                raise exceptions.NotFound('image_main is not given')
            if not price:
                raise exceptions.NotFound('price is not given')
            if not instant_delivery:
                raise exceptions.NotFound('instant_delivery is not given')

            if instant_delivery == 'true':
                instant_delivery = True
            if instant_delivery == 'false':
                instant_delivery = False

            data = {
                'description': description,
                'title': title,
                'total_stock': total_stock,
                'image_main': image_main,
                'price': price,
                'instant_delivery': instant_delivery,
                'supplier_company': company,
                'last_updated_by': request.user,
            }
            created = Product.objects.create(**data)

            if created:
                return Response({'status': 'success'}, status=status.HTTP_200_OK)
            else:
                return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProductListUpdateAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self, request):
        serializer = self.serializer_class(Product.objects.all(), many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, id):
        try:
            if not request.user.get_company():
                raise exceptions.PermissionDenied('User is not associated with any compamy')

            product_id = id
            description = request.POST.get('description', None)
            created = request.POST.get('created', None)
            title = request.POST.get('title', None)
            total_stock = request.POST.get('total_stock', None)
            image_main = request.FILES.get('image_main', None)
            price = request.POST.get('price', None)
            instant_delivery = str(request.POST.get('instant_delivery', 'false'))
            
            if not product_id:
                raise exceptions.NotFound('product_id is not given')
            
            product = Product.objects.get(id=product_id)

            if title:
                product.title = title
            if description:
                product.description = description
            if total_stock:
                product.total_stock = total_stock
            if price:
                product.price = price
            if image_main:
                product.image_main = image_main
            if instant_delivery:
                if instant_delivery == 'true':
                    instant_delivery = True
                else:
                    instant_delivery = False
                product.instant_delivery = instant_delivery

            product.last_updated_by = request.user
            product.save()

            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AddProductInCartAPIView(APIView):
    def post(self, request):
        try:
            product_id = request.data.get('product_id')
            user = request.user
            cart = user.cart
            product=Product.objects.get(id=product_id)

            order_item = OrderItem.objects.create(user=user, product=product)

            if not product.instant_delivery:
                order_item.is_custom = True

            if product.instant_delivery:
                order_item.final_price = product.price

            order_item.save()
            
            cart.products.add(order_item)
            
            return Response({'status': 'success', 'message': 'Product has been added in cart'}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProductItemDetailsAPIView(APIView):
    def get(self, request, **kwargs):
        try:
            product_item_id = kwargs.get('product_item_id')
            order_item = OrderItem.objects.get(id=product_item_id)
            data = {
                'product_item_id': order_item.id,
                'product_title': order_item.product.title,
                'product_image_url': order_item.product.image_main.url,
            }
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UpdateProductInCartAPIView(APIView):
    def post(self, request):
        try:
            product_item_id = request.data.get('product_item_id')
            quantity = request.data.get('quantity', 0)
            price = request.data.get('price', 0)

            user = request.user
            order_item = OrderItem.objects.get(id=product_item_id)

            if not quantity:
                return Response({'status': 'error', 'message': 'Product price and quantity is required'}, status=status.HTTP_200_OK)

            if not order_item.is_editable:
                return Response({'status': 'error', 'message': 'This order item cannot be edited'}, status=status.HTTP_200_OK)

            order_item.quantity = quantity
            if order_item.is_custom and price:
                order_item.price_by_restaurant = price

            if order_item.is_custom and quantity:
                order_item.quantity_by_restaurant = quantity
            
            order_item.save()
            
            return Response({'status': 'success', 'message': 'Product has been updated in cart'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RemoveProductFromCartAPIView(APIView):
    def post(self, request):
        try:
            product_item_id = request.data.get('product_item_id')
            user = request.user
            order_item = OrderItem.objects.get(id=product_item_id)
            order_item.delete()

            return Response({'status': 'success', 'message': 'Product has been removed in cart'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProductListInCartAPIView(APIView):
    serializer_class = CartSerializer

    def get(self, request):
        try:
            user = request.user
            cart = Cart.objects.get(user=user)
            products = cart.products.all().select_related('product')

            instant_delivery_items = products.filter(is_custom=False)
            not_instant_delivery_items = products.filter(is_custom=True)

            data = {
                'instant_delivery_items': [],
                'not_instant_delivery_items': [],
            }
            for item in instant_delivery_items:
                data['instant_delivery_items'].append({
                    'product_item_id': item.id,
                    'product_title': item.product.title,
                    'product_image_url': item.product.image_main.url,
                    'product_quantity': item.quantity,
                    'product_total_stock': item.product.total_stock,
                    'product_price': float(item.product.price),
                    'is_editable': item.is_editable,
                    'is_custom': item.is_custom,
                    'custom_status': item.custom_status,
                    'is_declined': item.is_declined,
                    'final_price': item.final_price,
                })
            for item in not_instant_delivery_items:
                data['not_instant_delivery_items'].append({
                    'product_item_id': item.id,
                    'product_title': item.product.title,
                    'product_image_url': item.product.image_main.url,
                    'product_quantity': item.quantity,
                    'product_total_stock': item.product.total_stock,
                    'product_original_price': float(item.product.price),
                    'price_by_restaurant': float(item.price_by_restaurant),
                    'quantity_by_restaurant': int(item.quantity_by_restaurant),
                    'price_by_supplier': float(item.price_by_supplier_company),
                    'quantity_by_supplier': int(item.quantity_by_supplier_company),
                    'is_custom': item.is_custom,
                    'is_editable': item.is_editable,
                    'is_enquiry_solved': item.is_enquiry_solved,
                    'custom_status': item.custom_status,
                    'is_declined': item.is_declined,
                    'final_price': item.final_price,
                })
                
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AddItemsInEnquiry(APIView):
    
    def post(self, request):
        try:
            product_item_list = request.data.get('product_items', [])
            user = request.user
            restaurant = user.get_restaurant()
            print(restaurant)

            if not product_item_list:
                return Response({'status': 'error', 'message': 'No products item is given'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            if not restaurant:
                return Response({'status': 'error', 'message': 'Current user is not associated with any restaurant'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            order_items = OrderItem.objects.filter(id__in=product_item_list)
            order_items.update(is_editable=False, custom_status='PENDING')
            
            enquiry = restaurant.enquiry
            enquiry.items.add(*order_items)
            enquiry.save()

            return Response({'status': 'success', 'message': 'Products has been added in enquiry'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class EnquiryListAPIView(APIView):
    def get(self, request):
        try:
            data = {}
            for enquiry in Enquiry.objects.all():
                if enquiry.items.count():
                    data[enquiry.restaurant.name] = []
                    for item in enquiry.items.all():
                        data[enquiry.restaurant.name].append({
                            'enquiry_id': enquiry.id,
                            'product_item_id': item.id,
                            'product_title': item.product.title,
                            'original_price': float(item.product.price),
                            'price_by_restaurant': float(item.price_by_restaurant),
                            'quantity_by_restaurant': item.quantity_by_restaurant,
                        })

            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class DeclineEnquiryRequestAPIView(APIView):
    def post(self, request):
        try:
            product_item_id = request.data.get('product_item_id')
            enquiry_id = request.data.get('enquiry_id')

            order_item = OrderItem.objects.get(id=product_item_id)
            enquiry = Enquiry.objects.get(id=enquiry_id)

            order_item.is_declined = True
            order_item.custom_status = 'COMPLETED'
            order_item.save()

            enquiry.items.remove(order_item)

            return Response({'status': 'success', 'message': 'Enquiry is declined'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UpdatePriceQuantityInEnquiryAPIVIew(APIView):
    def post(self, request):
        try:
            product_item_id = request.data.get('product_item_id')
            enquiry_id = request.data.get('enquiry_id')
            price = request.data.get('price')
            quantity = request.data.get('quantity')

            print(product_item_id, enquiry_id, price, quantity)

            enquiry = Enquiry.objects.get(id=enquiry_id)
            order_item = OrderItem.objects.get(id=product_item_id)
            order_item.is_enquiry_solved = True
            order_item.custom_status = 'COMPLETED'
            order_item.quantity_by_supplier = quantity
            order_item.price_by_supplier = price
            order_item.final_price = price
            order_item.quantity = quantity
            order_item.save()

            enquiry.items.remove(order_item)
            enquiry.save()

            return Response({'status': 'success', 'message': 'Enquiry is updated'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PlaceOrderAPIView(APIView):
    def post(self, request):
        try:
            product_item_list = request.data.get('product_items', [])
            user = request.user
    
            if not product_item_list:
                return Response({'status': 'error', 'message': 'No products item is given'}, status=status.HTTP_200_OK)

            items = OrderItem.objects.filter(id__in=product_item_list, final_price__gt=0, ordered=False)

            if not items:
                return Response({'status': 'error', 'message': 'There is no data of the given product list'}, status=status.HTTP_200_OK)
            
            items.update(ordered=True)
            user.cart.products.remove(*items)

            return Response({'status': 'success', 'message': 'Order has been placed'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RestaurantOrderedProductListAPIView(APIView):
    def get(self, request):
        try:
            user = request.user
            data = []
            for item in user.orderitems.filter(ordered=True):
                data.append({
                    'product_item_id': item.id,
                    'product_title': item.product.title,
                    'product_image_url': item.product.image_main.url,
                    'product_quantity': item.quantity,
                    'product_price': float(item.final_price),
                    'is_editable': item.is_editable,
                    'is_delivered': item.is_delivered,
                })
            
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SupplierPendingProductListAPIView(APIView):
    def get(self, request):
        try:
            user = request.user
            
            # if not user.is_supplier:
            #     raise exceptions.PermissionDenied('The requested user is not supplier')

            data = []
            for item in user.orderitems.filter(ordered=True, is_delivered=False):
                data.append({
                    'product_item_id': item.id,
                    'product_title': item.product.title,
                    'product_image_url': item.product.image_main.url,
                    'product_quantity': item.quantity,
                    'product_price': float(item.final_price),
                    'is_editable': item.is_editable,
                    'is_delivered': item.is_delivered,
                })
            return Response({'status': 'success', 'data': data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MarkOrdersAsDeliveredAPIView(APIView):

    def post(self, request):
        try:
            product_item_list = request.data.get('product_items', [])
            user = request.user
            
            if not product_item_list:
                return Response({'status': 'error', 'message': 'No products item is given'}, status=status.HTTP_200_OK)

            items = OrderItem.objects.filter(id__in=product_item_list)
            items.update(is_delivered=True)

            return Response({'status': 'success', 'message': 'Marked product as delivered'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'status': 'error', 'message': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AddressCreateReadAPIView(APIView):
    serializer_class = AddressSerializer

    def get(self, request):
        address_id = request.GET.get('address_id')
        
        try:
            obj = Address.objects.get(id=address_id)
        except Exception as e:
            raise exceptions.NotFound(e)

        serializer = self.serializer_class(obj, many=False)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        street_address = request.POST.get('street_address', None)
        apartment_address = request.POST.get('apartment_address', None)
        country = request.POST.get('country', None)
        zip_code = request.POST.get('zip_code', None)
        address_type = request.POST.get('address_type', None)
        default = request.POST.get('default', None)
        
        if not street_address:
            raise exceptions.NotFound('street_address is not given')
        if not apartment_address:
            raise exceptions.NotFound('apartment_address is not given')
        if not country:
            raise exceptions.NotFound('country is not given')
        if not zip_code:
            raise exceptions.NotFound('zip_code is not given')
        if not address_type:
            raise exceptions.NotFound('address_type is not given')
        if not default:
            raise exceptions.NotFound('default is not given')

        data = {
            'user': request.user,
            'street_address': street_address,
            'apartment_address': apartment_address,
            'country': country,
            'zip_code': zip_code,
            'address_type': address_type,
            'default': default,
        }
        created = Address.objects.create(**data)

        if created:
            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

class AddressDeleteAPIView(APIView):
    def post(self, request):
        address_id = request.POST.get('address_id')
        try:
            deleted = Address.objects.get(id=address_id).delete()
        except:
            pass
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class AddressListUpdateAPIView(APIView):
    serializer_class = AddressSerializer

    def get(self, request):
        serializer = self.serializer_class(Address.objects.all(), many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        address_id = request.POST.get('address_id', None)
        street_address = request.POST.get('street_address', None)
        apartment_address = request.POST.get('apartment_address', None)
        country = request.POST.get('country', None)
        zip_code = request.POST.get('zip_code', None)
        address_type = request.POST.get('address_type', None)
        default = request.POST.get('default', None)
        
        if not address_id:
            raise exceptions.NotFound('address_id is not given')
        if not street_address:
            raise exceptions.NotFound('street_address is not given')
        if not apartment_address:
            raise exceptions.NotFound('apartment_address is not given')
        if not country:
            raise exceptions.NotFound('country is not given')
        if not zip_code:
            raise exceptions.NotFound('zip_code is not given')
        if not address_type:
            raise exceptions.NotFound('address_type is not given')
        if not default:
            raise exceptions.NotFound('default is not given')

        try:
            address = Address.objects.get(id=address_id)
        except Exception as e:
            raise exceptions.NotFound(e)

        address.user = request.user
        address.street_address = street_address
        address.apartment_address = apartment_address
        address.country = country
        address.zip_code = zip_code
        address.address_type = address_type
        address.default = default
        address.save()

        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class OrderCreateReadAPIView(APIView):
    serializer_class = OrderSerializer

    def get(self, request):
        order_id = request.GET.get('order_id')
        
        try:
            obj = Order.objects.get(id=order_id)
        except Exception as e:
            raise exceptions.NotFound(e)

        serializer = self.serializer_class(obj, many=False)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        products = request.POST.getlist('products', [])
        ordered_date = request.POST.get('ordered_date', None)
        ordered = request.POST.get('ordered', None)
        shipping_address_id = request.POST.get('shipping_address_id', None)
        billing_address_id = request.POST.get('billing_address_id', None)
        being_delivered = request.POST.get('being_delivered', None)
        received = request.POST.get('received', None)
        refund_requested = request.POST.get('refund_requested', None)
        refund_granted = request.POST.get('refund_granted', None)
        
        if not products:
            raise exceptions.NotFound('products is not given')
        if not ordered_date:
            raise exceptions.NotFound('ordered_date is not given')
        if not ordered:
            raise exceptions.NotFound('ordered is not given')
        if not shipping_address_id:
            raise exceptions.NotFound('shipping_address is not given')
        if not billing_address_id:
            raise exceptions.NotFound('billing_address is not given')
        if not being_delivered:
            raise exceptions.NotFound('being_delivered is not given')
        if not received:
            raise exceptions.NotFound('received is not given')
        if not refund_requested:
            raise exceptions.NotFound('refund_requested is not given')
        if not refund_granted:
            raise exceptions.NotFound('refund_granted is not given')

        data = {
            'user': request.user,
            'ordered_date': datetime.strptime(ordered_date, '%m/%d/%Y'), # sample date: 12/30/2018
            'ordered': ordered,
            'shipping_address': Address.objects.get(id=shipping_address_id),
            'billing_address': Address.objects.get(id=billing_address_id),
            'being_delivered': being_delivered,
            'received': received,
            'refund_requested': refund_requested,
            'refund_granted': refund_granted,
        }
        created = Order.objects.create(**data)
        if created:
            products = Product.objects.filter(id__in=products)
            created.products.add(**products)
            created.save()
            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

class OrderDeleteAPIView(APIView):
    def post(self, request):
        order_id = request.POST.get('order_id')
        try:
            deleted = Order.objects.get(id=order_id).delete()
        except:
            pass
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class OrderListUpdateAPIView(APIView):
    serializer_class = OrderSerializer

    def get(self, request):
        serializer = self.serializer_class(Order.objects.all(), many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        order_id = request.POST.get('order_id', None)
        products = request.POST.getlist('products', [])
        ordered_date = request.POST.get('ordered_date', None)
        ordered = request.POST.get('ordered', None)
        shipping_address_id = request.POST.get('shipping_address_id', None)
        billing_address_id = request.POST.get('billing_address_id', None)
        being_delivered = request.POST.get('being_delivered', None)
        received = request.POST.get('received', None)
        refund_requested = request.POST.get('refund_requested', None)
        refund_granted = request.POST.get('refund_granted', None)
        
        if not order_id:
            raise exceptions.NotFound('order_id is not given')
        if not products:
            raise exceptions.NotFound('products is not given')
        if not ordered_date:
            raise exceptions.NotFound('ordered_date is not given')
        if not ordered:
            raise exceptions.NotFound('ordered is not given')
        if not shipping_address_id:
            raise exceptions.NotFound('shipping_address is not given')
        if not billing_address_id:
            raise exceptions.NotFound('billing_address is not given')
        if not being_delivered:
            raise exceptions.NotFound('being_delivered is not given')
        if not received:
            raise exceptions.NotFound('received is not given')
        if not refund_requested:
            raise exceptions.NotFound('refund_requested is not given')
        if not refund_granted:
            raise exceptions.NotFound('refund_granted is not given')
        

        try:
            order = Order.objects.get(id=order_id)
        except Exception as e:
            raise exceptions.NotFound(e)

        order.user = request.user
        products = Product.objects.filter(id__in=products)
        order.products.add(**products)
        order.ordered_date = datetime.strptime(ordered_date, '%m/%d/%Y'), # sample date: 12/30/2018
        order.ordered = ordered
        order.shipping_address = Address.objects.get(id=shipping_address_id)
        order.billing_address = Address.objects.get(id=billing_address_id)
        order.being_delivered = being_delivered
        order.received = received
        order.refund_requested = refund_requested
        order.refund_granted = refund_granted

        return Response({'status': 'success'}, status=status.HTTP_200_OK)

