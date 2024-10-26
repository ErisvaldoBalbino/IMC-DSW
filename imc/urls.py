from django.contrib import admin
from django.urls import path
from imc import views

urlpatterns = [
    path('', views.index, name='index-imc'),
]
