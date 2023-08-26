from django.contrib import admin
from django.urls import path
from api import views as api_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", api_view.authentication),
    path("club_add/", api_view.club_add),
    path("club_list/", api_view.club_list)
]
