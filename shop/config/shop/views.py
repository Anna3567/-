from django.shortcuts import render

from .models import Product,Order

# Create your views here.
def catalog(request):
    products = Product.objects.all()
    return render(request, 'shop/catalog.html', {"products": products})

def order_create(request, product_id):
    prodt = Product.objects.get(id= product_id)
    if request.method=="POST":
       Order.objects.create(product=prodt, delivery_adress=request.POST.get("address_delivery")) 
    return render(request, 'shop/order_create.html', {"product": prodt})

def orders(request):
    orders_ = Order.objects.all()
    return render(request, 'shop/orders.html', {"orders": orders_})

def product_detail(request, product_id):
    prod = Product.objects.get(id= product_id)
    return render(request, "shop/product_detail.html", {"pro": prod})




