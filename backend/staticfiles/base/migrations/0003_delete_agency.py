# Generated by Django 4.1.7 on 2023-05-10 18:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_contact_agency_missingperson_contacts'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Agency',
        ),
    ]