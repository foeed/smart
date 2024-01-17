from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
from base.models import Category, Product, Type

@csrf_exempt
@require_GET
def category_menu(request):
    categories = Category.objects.all()
    category_list = []

    for category in categories:
        category_dict = {
            'title': category.title,
            'types': list(category.types.values_list('name', flat=True)),  # Extracting a list of type names
            'items': []
        }

        # Fetch products related to each category
        products_in_category = Product.objects.filter(category=category)
        for product in products_in_category:
            item = {
                'name': product.name,
                'description': product.description,
                'price': product.price,
                'image': str(product.image),
                'type': product.type,
            }
            category_dict['items'].append(item)

        category_list.append(category_dict)

    return JsonResponse(category_list, safe=False)
