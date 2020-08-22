from django.shortcuts import render
from django.urls import reverse
from django.views.generic import ListView, CreateView
from .models import Blog


class BlogListView(ListView):
    model = Blog
    ordering = ['-id']


class BlogCreateView(CreateView):
    model = Blog
    fields = ("title", "body", "author",)

    def get_success_url(self):
        return reverse('blog_list')