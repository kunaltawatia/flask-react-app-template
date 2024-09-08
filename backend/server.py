from flask import Flask

from routes import router

app = Flask(__name__, static_folder="build", static_url_path="/")
app.register_blueprint(router)


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(debug=True)
