from django import forms


class DatasetForm(forms.Form):
    name = forms.CharField(label="Name", max_length=100)
    description = forms.CharField(label="Description", max_length=250)
    id = forms.CharField(label="Name", max_length=100)