# Generated by Django 4.1.7 on 2023-05-10 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_delete_agency'),
    ]

    operations = [
        migrations.AddField(
            model_name='missingperson',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
