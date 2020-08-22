from django.db import models


class Blog(models.Model):
    title = models.CharField(blank=False, max_length=70)
    body = models.TextField(blank=False)
    author = models.CharField(blank=False, max_length=80)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
