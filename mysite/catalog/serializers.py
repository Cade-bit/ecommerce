from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'description', 'price', 'quantity' , 'image', 'category', 'delivery_info', 'notes')
        lookup_field = 'slug'
        extra_kwargs = {
            'url' : {
                'lookup' : 'slug'}
        }


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
    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'children')

    def get_children(self, obj):
        child_categories = obj.children.filter(is_active=True).order_by('nav_order')

        return CategorySerializer(child_categories, many=True, context=self.context,).data