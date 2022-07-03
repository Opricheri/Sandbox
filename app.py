from flask import Flask, render_template, url_for, redirect

app = Flask(__name__, static_folder='./templates/images')

@app.route('/')
def sandbox():
    return render_template('sandbox.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=3000, threaded=True)