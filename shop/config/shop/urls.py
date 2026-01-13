from django.urls import path, include
from .views import *
urlpatterns = [
    path('', catalog, name = 'catalog'),
    path('order_create/', order_create, name = 'order_create'),
    path('orders/', orders, name = 'orders'),
	path("product/<int:product_id>/", product_detail, name="product_detail"),
	path("order_create/<int:product_id>/", order_create, name="order_create"),
]