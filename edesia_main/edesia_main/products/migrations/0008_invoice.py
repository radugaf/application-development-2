# Generated by Django 3.0.8 on 2020-12-27 22:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20201227_2042'),
    ]

    operations = [
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice_no', models.CharField(max_length=255)),
                ('shipped_invoice', models.FileField(blank=True, null=True, upload_to='')),
                ('delivered_invoice', models.FileField(blank=True, null=True, upload_to='')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('restaurant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.Restaurant')),
                ('supplier_company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.Company')),
            ],
        ),
    ]
