# Generated by Django 3.0.8 on 2020-12-05 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0017_auto_20201205_1933'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='is_enquiry_solved',
            field=models.BooleanField(default=False),
        ),
    ]