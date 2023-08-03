from django.http import HttpResponse
from .models import Dataset, Datum, ProcessingPipeline as Pipeline ,ProcessingPipelineStep as Step
from django.shortcuts import render
from datetime import datetime
from .forms import DatasetForm
from .utils import flatten_config
import csv


def index(request):
    dataset_lists = Dataset.objects.all()
    context = {
        "list": dataset_lists,
    }

    return render(request, "index.html", context)

def detail(request, dataset_id=-1):
    if request.method == "POST":
        form = DatasetForm(request.POST)
        if form.is_valid():
            dataset = form.cleaned_data
            if dataset['id'] != None:
                print("updating")
                ds_object = Dataset.objects.get(id=dataset['id'])
                ds_object.name = dataset["name"]
                ds_object.description = dataset["description"]
                ds_object.save()    
            else:    
                print("creating")
                ds_object = Dataset(name=dataset["name"], description=dataset["description"], creation_date=datetime.now(), number_of_datums=0, recent_status="Empty")
                ds_object.save()
            
            print("form saved")
            print(ds_object)
            context = {
                "dataset": ds_object,
            }
            return render(request, "datasetdetails.html", context)
    else:
        dataset = Dataset.objects.get(id=dataset_id)
        print(dataset)

        context = {
                "dataset": dataset,
                id: dataset_id,
            }
        return render(request, "datasetdetails.html", context)


def datasets(request):
    dataset_lists = Dataset.objects.all()

    context = {
        "list": dataset_lists,
    }

    return render(request, "datasets.html", context)

def pipelines(request):
    pipelines = Pipeline.objects.all()

    context = {
        "list": pipelines,
    }

    return render(request, "pipelines.html", context)

def pipeline_detail(request, pipeline_id=-1):
    pipeline = Pipeline.objects.get(id=pipeline_id)

    steps = Step.objects.filter(pipeline=pipeline)

    for step in steps:
        step.params = flatten_config(step.parameters)

    extraction = pipeline.extraction
    loader = pipeline.loading

    context = {
        "pipeline": pipeline,
        "steps": steps,
        "extraction": extraction,
        "loader": loader,
    }

    return render(request, "pipelinedetails.html", context)

def datasetadd(request):

    context = { 
             }
    return render(request, "datasetadd.html", context)

def adddata(request, dataset_id):

    dataset = Dataset.objects.get(id=dataset_id)
    print(dataset)

    context = {
            "dataset": dataset,
            id: dataset_id,
        }
    return render(request, "adddata.html", context)


def convert_to_json(file):
    json_list = []
    decoded_file = file.read().decode('utf-8').splitlines()
    headers = decoded_file[0]
    reader = csv.DictReader(decoded_file)
    for row in reader:
        json_list.append(row)
    return json_list


def upload(request, dataset_id):

    dataset = Dataset.objects.get(id=dataset_id)

    if request.method == "POST":
        uploaded_file = request.FILES['document']   
        json_list = convert_to_json(uploaded_file)
        # add each item in json_list to the database
        for item in json_list:
            print(item)
            # create a new Datum object
            new_datum = Datum()
            new_datum.dataset = dataset
            new_datum.json = item
            new_datum.creation_date = datetime.now()
            new_datum.type = "json"
            new_datum.external_ref = "none"
            new_datum.tags = "none"
            new_datum.save()

            dataset.number_of_datums += 1
            dataset.recent_status = "Updated"
            dataset.last_updated = datetime.now()
            dataset.save()

 
    context = {
            "dataset": dataset,
            id: dataset_id,
        }
    return render(request, "upload.html", context)

def datasetedit(request, dataset_id):

    dataset = Dataset.objects.get(id=dataset_id)

    context = {
            "dataset": dataset,
            id: dataset_id,
        }
    return render(request, "datasetedit.html", context)