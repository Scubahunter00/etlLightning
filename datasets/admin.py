

from django.contrib import admin

from .models import Datum, Dataset, ProcessingPipeline, ProcessingPipelineExtraction, ProcessingPipelineLoading, ProcessingPipelineTransformation, ProcessingPipelineStep

admin.site.register(Datum)
admin.site.register(Dataset)
admin.site.register(ProcessingPipeline)
admin.site.register(ProcessingPipelineExtraction)
admin.site.register(ProcessingPipelineLoading)
admin.site.register(ProcessingPipelineTransformation)
admin.site.register(ProcessingPipelineStep)


