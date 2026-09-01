from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name')
        # Keep data hidden in api
        extra_kwargs = { 'password': { 'write_only': True } }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
