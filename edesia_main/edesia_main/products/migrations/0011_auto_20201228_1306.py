# Generated by Django 3.0.8 on 2020-12-28 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_invoice_pdf_document'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='pdf_document',
            field=models.FileField(blank=True, null=True, upload_to='invoice_documents/'),
        ),
    ]
