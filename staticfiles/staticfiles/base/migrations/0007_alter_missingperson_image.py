# Generated by Django 4.1.7 on 2023-07-04 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_missingperson_contacts_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='missingperson',
            name='image',
            field=models.ImageField(blank=True, default='/logo.png', null=True, upload_to=''),
        ),
    ]
