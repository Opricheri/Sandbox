from flask import Flask, render_template

app = Flask(__name__, static_folder='./templates/images')

@app.route('/')
def sandbox():
    return render_template('1.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=3000, threaded=True)