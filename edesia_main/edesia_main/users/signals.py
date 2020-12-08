from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from edesia_main.products.models import Cart

User = get_user_model()

# @receiver(post_save, sender=User)
# def create_cart_for_new_user(sender, instance, created, **kwargs):
#     """ This signal method will be called after creating a user and if email_confirmed=False """
#     if created:
#         # Creating Cart Object whenever a user is created 
#         created_cart = Cart.object.create(user=instance)
