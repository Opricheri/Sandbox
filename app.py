from flask import Flask, render_template, redirect, request
import re

app = Flask(__name__, static_folder='./static/css')

@app.route('/')
def sandbox():
    return render_template('sandbox.html')

@app.route('/1')
def lock():
    return render_template('lock.html')

@app.route('/2')
def page2():
    return render_template('1.html')

@app.route('/3')
def page3():
    return render_template('2.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=3000, threaded=True)