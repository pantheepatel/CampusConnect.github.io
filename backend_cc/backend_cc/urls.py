from django.contrib import admin
from django.urls import path
from api import views as api_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", api_view.authentication),
    path("profile/", api_view.profile),
    path("club_add/", api_view.club_add),
    path("club_list/", api_view.club_list),
    path("my_club_list/", api_view.my_club_list),
    path("club_edit/", api_view.club_edit),
    path("club_delete/", api_view.club_delete),
    path("user_data/", api_view.userData),
    path("club_details/", api_view.club_details),
    path("profile_edit/", api_view.profile_edit),
    
]
