from celery import shared_task
from core.models import Session


@shared_task
def evaluate_session(session_id):
    session = Session.objects.get(id=session_id)
    answers = session.answer_set.filter(question__question_type="T")
    for ans in answers:
        ans.evaluate()
    session.save()
