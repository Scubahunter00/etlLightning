from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("datasets", views.datasets, name="datasets"),
    path("datasets/add/", views.datasetadd, name="datasetadd"),
    path("datasets/<int:dataset_id>/", views.detail, name="detail"),
    path("datasets/details/", views.detail, name="detail"),
    path("datasets/<int:dataset_id>/edit", views.datasetedit, name="edit"),
    path("datasets/<int:dataset_id>/add", views.adddata, name="add"),
    path("datasets/<int:dataset_id>/upload", views.upload, name="add"),
    path("pipelines", views.pipelines, name="pipelines"),
    path("pipelines/<int:pipeline_id>/", views.pipeline_detail, name="pipeline"),

    
]