# Generated by Django 4.1.7 on 2023-05-10 17:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MissingPerson',
            fields=[
                ('first_name', models.CharField(blank=True, max_length=200, null=True)),
                ('last_name', models.CharField(blank=True, max_length=200, null=True)),
                ('gender', models.CharField(max_length=200)),
                ('age_last_seen', models.IntegerField()),
                ('hair', models.CharField(blank=True, max_length=200, null=True)),
                ('eyes', models.CharField(blank=True, max_length=200, null=True)),
                ('height', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('weight', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('last_seen_wearing', models.TextField(blank=True, null=True)),
                ('critical_information', models.TextField(blank=True, null=True)),
                ('province', models.CharField(blank=True, max_length=200, null=True)),
                ('city', models.CharField(blank=True, max_length=200, null=True)),
                ('last_known_location', models.CharField(blank=True, max_length=200, null=True)),
                ('date_last_seen', models.DateTimeField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
