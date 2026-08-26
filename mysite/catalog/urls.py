from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', views.ProductViewSet, basename='product')

app_name = 'catalog'

urlpatterns = [
    path('api/', include(router.urls)),
]
