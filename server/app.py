from flask import Flask
from flask_cors import CORS
from .time_service import router as time_service_router

app = Flask(__name__, static_folder="web_app_build", static_url_path="/")
CORS(app, origins="http://localhost:3000")

app.register_blueprint(time_service_router, url_prefix="/time")


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(debug=True)
