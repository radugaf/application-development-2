from django.db import models
from django.urls import reverse
from django.conf import settings
from django_countries.fields import CountryField

from django.contrib.auth import get_user_model


ADDRESS_CHOICES = (
    ("B", "Billing"),
    ("S", "Shipping"),
)

class Restaurant(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.SET_NULL, related_name='owned_restaurant')
    staff = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='restaurants_work_for')

    name = models.CharField(max_length=255)
    address = models.TextField()
    phone_number = models.CharField(max_length=255)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class UserDetail(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.SET_NULL, related_name='staff')
    nationality = CountryField(blank=True, null=True)
    phonenumber = models.CharField(blank=True, null=True, max_length=200)
    address = models.TextField()

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username
    
# class SupplierDetail(models.Model):
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.SET_NULL, related_name='supplier')
#     nationality = CountryField(blank=True, null=True)
#     phonenumber = models.CharField(blank=True, null=True, max_length=200)
#     address = models.TextField()

#     created_date = models.DateTimeField(auto_now_add=True)
#     modified_date = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.user.username

class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    phone_number = models.CharField(max_length=255)

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='owned_company')
    staff = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='company_work_for')
    
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# User = get_user_model()

class Product(models.Model):
    # Fields
    # uuid = models.UUIDField()
    title = models.CharField(max_length=50)
    description = models.TextField(default='')
    image_main = models.ImageField(upload_to="upload/images/")
    total_stock = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    instant_delivery = models.BooleanField()

    supplier_company = models.ForeignKey(Company, on_delete=models.CASCADE, default=None, null=True)
    last_updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, default=None, null=True)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


class Variation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)  # For example: size

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ("product", "name")

    def __str__(self):
        return self.name


class ProductVariation(models.Model):
    variation = models.ForeignKey(Variation, on_delete=models.CASCADE)
    value = models.CharField(max_length=50)
    attachment = models.ImageField(blank=True)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ("variation", "value")

    def __str__(self):
        return self.value

class OrderItem(models.Model):
    STATUS_CHOICES = (
        ('NOT_CUSTOM', 'NOT_CUSTOM'),
        ('PENDING', 'PENDING'),
        ('COMPLETED', 'COMPLETED'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orderitems')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=False)
    is_editable = models.BooleanField(default=True) # Editable for Restaurant user

    is_shipped = models.BooleanField(default=False)
    is_delivered = models.BooleanField(default=False)
    is_paid = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    is_custom = models.BooleanField(default=False) # Below attributes won't be used, if this field is False
    is_enquiry_solved = models.BooleanField(default=False)
    custom_status = models.CharField(max_length=255, choices=STATUS_CHOICES, default='NOT_CUSTOM')
    is_declined = models.BooleanField(default=False)
    quantity_by_restaurant = models.IntegerField(default=0)
    quantity_by_supplier_company = models.IntegerField(default=0)
    price_by_restaurant = models.IntegerField(default=0)
    price_by_supplier_company = models.IntegerField(default=0)
    final_quantity = models.IntegerField(default=0)
    final_price = models.FloatField(default=0)

    ordered_date = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product.title

    def get_total(self):
        return round(self.quantity * self.final_price, 2)
class Cart(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cart')
    products = models.ManyToManyField(OrderItem)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Cart of {self.user.username}"

    # def get_total_discount_product_price(self):  # I (Farid) have commented this function because the model doesn't have any column named "discount_price"
    #     return self.quantity * self.product.discount_price

    # def get_amount_saved(self):
    #     return self.get_total_product_price() - self.get_total_discount_product_price()

    # def get_final_price(self): # I (Farid) have commented this function because the model doesn't have any column named "discount_price"
    #     if self.product.discount_price:
    #         return self.get_total_discount_product_price()
    #     return self.get_total_product_price()


class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    country = CountryField(multiple=False)
    zip_code = models.CharField(max_length=100)
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)
    default = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Addresses"


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey(
        Address,
        related_name="shipping_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    billing_address = models.ForeignKey(
        Address,
        related_name="billing_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    

class Enquiry(models.Model):
    items = models.ManyToManyField(OrderItem)
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

class Invoice(models.Model):

    invoice_no = models.CharField(max_length=255, default='N/A')

    restaurant = models.ForeignKey(Restaurant, on_delete=models.SET_NULL, null=True)
    supplier_company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)

    pdf_document = models.FileField(upload_to='invoice_documents/', null=True, blank=True) 

    shipped_invoice = models.BooleanField(default=False)
    delivered_invoice = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)