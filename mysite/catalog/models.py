from django.db import models
from django.db.models import Model

# Create your models here.

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
