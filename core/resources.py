from import_export import resources, fields, widgets
from .models import Question, Exam


class QuestionResource(resources.ModelResource):
    class Meta:
        model = Question
        exclude = ("exam", "question_type", "image", "created", "deleted")

    def __init__(self, exam_pk):
        self.exam = Exam.objects.get(pk=exam_pk)

    def validate_instance(
        self,
        instance,
        import_validation_errors=None,
        validate_unique=True,
    ):
        # Perform instance-level validation
        if instance.id and instance.exam != self.exam:
            raise ValueError("Question not found")
        super().validate_instance(instance, import_validation_errors, validate_unique)

    def before_save_instance(self, instance, using_transactions, dry_run):
        instance.exam = self.exam


class QuestionResourceAdmin(resources.ModelResource):
    class Meta:
        model = Question
