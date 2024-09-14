from datetime import datetime
from flask import Blueprint

router = Blueprint("time", __name__)


@router.get("/")
def get_time():
    return datetime.now().isoformat()
