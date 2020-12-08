from django.apps import AppConfig


class ProductsConfig(AppConfig):
    name = "edesia_main.products"

    def ready(self):
        import edesia_main.products.signals  # noqa F401
        super().ready()