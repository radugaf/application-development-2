# Generated by Django 3.0.8 on 2020-11-04 22:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20201104_2149'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='restaurant_staff',
        ),
    ]