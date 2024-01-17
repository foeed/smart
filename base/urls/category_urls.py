from django.urls import path
from base.views import category_menu 

urlpatterns = [
    # Other URL patterns
    path('api/category_menu/', category_menu, name='category_menu'),
]
