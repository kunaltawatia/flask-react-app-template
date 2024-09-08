from flask import Blueprint

router = Blueprint('router', __name__, url_prefix='/api')


@router.route('/', methods=['GET'])
def get_index():
    return "OK"
