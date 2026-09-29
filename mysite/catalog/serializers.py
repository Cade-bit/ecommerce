from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'description', 'price', 'quantity' , 'image', 'category', 'delivery_info', 'notes')




class BulkDeleteSerializer(serializers.ModelSerializer):
    ids = serializers.ListField(
       child=serializers.IntegerField(),
        allow_empty=False
        )

class ChildCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')

class CategorySerializer(serializers.ModelSerializer):
    children = ChildCategorySerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'children')