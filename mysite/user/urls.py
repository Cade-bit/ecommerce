from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework.routers import DefaultRouter
from .views import RegisterViewSet

router = DefaultRouter()
router.register(r'register', views.RegisterViewSet, basename='register')

app_name = 'user'

urlpatterns = router.urls
