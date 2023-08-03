from django.db import models


class Dataset(models.Model):
    name = models.CharField(max_length=200)
    creation_date = models.DateTimeField("date published")
    description = models.CharField(max_length=200)
    recent_status = models.CharField(max_length=200)
    number_of_datums = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Datum(models.Model):
    dataset = models.ForeignKey(Dataset, on_delete=models.CASCADE)
    type = models.CharField(max_length=200)
    json = models.JSONField()
    external_ref = models.URLField(max_length=200)
    creation_date = models.DateTimeField("date published")
    tags = models.CharField(max_length=200, null=True)


    
class ProcessingPipelineExtraction(models.Model):
    name = models.CharField(max_length=200)
    python_class = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    input_type = models.CharField(max_length=200)
    output_type = models.CharField(max_length=200)
    parameters = models.JSONField()
    version = models.CharField(max_length=200, default="1.0")

    def __str__(self):
        return self.name
    
class ProcessingPipelineTransformation(models.Model):
    name = models.CharField(max_length=200)
    python_class = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    input_type = models.CharField(max_length=200)
    output_type = models.CharField(max_length=200)
    parameters = models.JSONField(null=True)
    version = models.CharField(max_length=200, default="1.0")

    def __str__(self):
        return self.name
    
class ProcessingPipelineLoading(models.Model):
    name = models.CharField(max_length=200)
    python_class = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    input_type = models.CharField(max_length=200)
    output_type = models.CharField(max_length=200)
    parameters = models.JSONField()
    version = models.CharField(max_length=200, default="1.0")

    def __str__(self):
        return self.name
    
class ProcessingPipeline(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    input_type = models.CharField(max_length=200)
    loading = models.ForeignKey(ProcessingPipelineLoading, on_delete=models.CASCADE)
    extraction = models.ForeignKey(ProcessingPipelineExtraction, on_delete=models.CASCADE)
    output_type = models.CharField(max_length=200)
    parameters = models.JSONField()
    version = models.CharField(max_length=200, default="1.0")

    def __str__(self):
        return self.name

class ProcessingPipelineStep(models.Model):
    pipeline = models.ForeignKey(ProcessingPipeline, on_delete=models.CASCADE)
    step = models.ForeignKey(ProcessingPipelineTransformation, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)
    parameters = models.JSONField()
    version = models.CharField(max_length=200, default="1.0")
    
    def __str__(self):
        return self.pipeline.name + " - " + self.step.name

class ProcessingPipelineRun(models.Model):
    pipeline = models.ForeignKey(ProcessingPipeline, on_delete=models.CASCADE)
    input = models.JSONField()
    output = models.JSONField()
    start_date = models.DateTimeField("date published")
    end_date = models.DateTimeField("date published")
    status = models.CharField(max_length=200)
    logs = models.JSONField()
    parameters = models.JSONField()
    version = models.CharField(max_length=200, default="1.0")

    def __str__(self):
        return self.pipeline.name + " - " + self.start_date.strftime("%d/%m/%Y %H:%M:%S")
    

    
