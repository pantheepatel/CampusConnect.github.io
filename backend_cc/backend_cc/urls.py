from django.contrib import admin
from django.urls import path
from api import views as api_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", api_view.authentication),
]
