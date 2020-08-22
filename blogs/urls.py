from django.urls import path
from .views import BlogListView, BlogCreateView

urlpatterns = [
    path('', BlogListView.as_view(), name='blog_list'),
    path('add', BlogCreateView.as_view(), name='blog_add'),
]