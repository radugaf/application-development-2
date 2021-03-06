from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from edesia_main.products.models import Cart, Restaurant, Enquiry, Invoice

User = get_user_model()

@receiver(post_save, sender=Restaurant)
def create_enquiry_for_new_restaurant(sender, instance, created, **kwargs):
    if created:
        # Creating Cart Object whenever a restaurant is created 
        created_enquiry = Enquiry.objects.create(restaurant=instance)

@receiver(post_save, sender=Invoice)
def create_invoice_no_for_new_invoice(sender, instance, created, **kwargs):
    if created:
        invoice_id = str(instance.id).zfill(6)
        instance.invoice_no = f'EM{invoice_id}'
        instance.save()
