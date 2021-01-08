# Generated by Django 3.0.8 on 2021-01-05 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0015_auto_20201229_0158'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantOrderItemHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('items', models.ManyToManyField(to='products.OrderItem')),
                ('restaurant', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='products.Restaurant')),
            ],
        ),
    ]