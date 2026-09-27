from django.db import models
from django.db.models import Model
from django.utils import timezone

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True,)
    slug = models.SlugField(max_length=100, unique=True)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    nav_order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'catalog_category'

 # Add size and color options later
 #------------------------------------> Product model
class Product(models.Model):
    product_name = models.CharField(max_length=100, db_index=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    quantity = models.PositiveIntegerField(null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(max_length=500, db_index=True, null=True)
    delivery_info = models.TextField(max_length=500, db_index=True, null=True)
    image = models.ImageField(upload_to='uploads/products/', null=True)
    notes = models.TextField(max_length=500, null=True, blank=True, help_text='Please enter any business notes you have for this product. (Customers will not see this)')
    slug = models.SlugField(max_length=100, unique=True, blank=True, null=True)
    is_draft = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def image_url(self):
        if self.image:
            img_str = str(self.image)
            if img_str.startswith('http') or img_str.startswith('https://'):
                return img_str
            try:
                import os
                if os.path.exists(self.image.path):
                    return self.image.url
            except (ValueError, NotImplementedError):
                return self.image.url
        return 'https://motobros.com/wp-content/uploads/2024/09/no-image.jpeg'

    class Meta:
        db_table = 'catalog_product'

    def __str__(self):
        return self.product_name



