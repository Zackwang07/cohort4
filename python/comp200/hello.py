from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World! I just changed this!'

@app.route('/zack/<var>')
def hello_zack(var):
    return 'Hello, Zack! <br>' + var

@app.route('/temp/<var>')
def hello_temp(var):
    return render_template('hello.html', name=var)

if __name__ == '__main__':
    print("--- Starting", __file__)
    app.run(debug=True, use_reloader=True)