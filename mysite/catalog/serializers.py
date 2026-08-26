from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'description', 'price', 'quantity' , 'image', 'sub_categories', 'delivery_info', 'notes')




class BulkDeleteSerializer(serializers.ModelSerializer):
    ids = serializers.ListField(
       child=serializers.IntegerField(),
        allow_empty=False
        )