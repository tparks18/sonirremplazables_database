from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class MissingPerson(models.Model):
    #user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/logo.png')
    gender = models.CharField(max_length=200, null=False, blank=False)
    age_last_seen = models.IntegerField(null=False, blank=False)
    hair = models.CharField(max_length=200, null=True, blank=True)
    eyes = models.CharField(max_length=200, null=True, blank=True)
    height = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    last_seen_wearing = models.TextField(null=True, blank=True)
    critical_information = models.TextField(null=True, blank=True)
    province = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    last_known_location = models.CharField(
        max_length=200, null=True, blank=True)
    date_last_seen = models.DateTimeField(null=False, blank=False)
    #contacts = models.ManyToManyField("Contact")
    createdAt = models.DateTimeField(auto_now_add=True)
    primary_contact_first_name = models.CharField(max_length=200, null=True, blank=True)
    primary_contact_last_name = models.CharField(max_length=200, null=True, blank=True)
    primary_contact_phone = models.CharField(
        max_length=200, null=True, blank=True)
    secondary_contact_first_name = models.CharField(max_length=200, null=True, blank=True)
    secondary_contact_last_name = models.CharField(max_length=200, null=True, blank=True)
    secondary_contact_phone = models.CharField(
        max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

# class Contact(models.Model):
#     missing_person = models.ForeignKey(
#         MissingPerson, on_delete=models.SET_NULL, null=True, related_name='missing_person_contacts')
#     user = models.ForeignKey(
#         User, on_delete=models.SET_NULL, null=True, related_name='user_contacts')
#     first_name = models.CharField(max_length=200, null=False, blank=False)
#     last_name = models.CharField(max_length=200, null=False, blank=False)
#     relationship_to_person = models.CharField(
#         max_length=200, null=True, blank=True)
#     phone_number = models.CharField(max_length=200, null=False, blank=False)
#     createdAt = models.DateTimeField(auto_now_add=True)
#     is_primary_contact = models.BooleanField(default=False)
#     _id = models.AutoField(primary_key=True, editable=False)

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"

