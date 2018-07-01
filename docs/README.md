# Flask Chat
Flask Chat is a simple project for a multi-user chat platform, focused on a interesting and practical use of the [Flask](http://flask.pocoo.org/) framework for Python. 

### File Structure
```
.
├── app
│   ├── __init__.py
│   ├── routes.py
│   ├── sockets.py
│   ├── static
│   │   ├── css
│   │   │   └── chat.css
│   │   └── js
│   │       └── chat.js
│   └── templates
│       └── index.html
├── config.py
├── docs
│   └── README.md
├── flaskchat.py
├── Pipfile
├── Pipfile.lock
└── Procfile (on deployment server)
```

## Running deployed server
To see the deployed server on [Heroku](https://heroku.com), enter [this](https://salesvictor-chat.herokuapp.com/) link.

## Running local server
The following instructions are based on Linux (Ubuntu >= 16.04) setup for localhosting of the web application project.

### Prerequisites
First, install ```Python3.6``` (previous versions may not work). Then, install ```pip``` and ```pipenv``` for packages and virtual enviroment management. 

Then install the following dependencies at your virtual enviroment:
* [Flask](http://flask.pocoo.org/)
* [Flask-SocketIO](https://flask-socketio.readthedocs.io/)

All these flask dependencies needed are set in the Pipfile configuration for pipenv.

### Running

To run the code, simply execute ```pipenv run python flaskchat.py``` on root directory.

## Authors

* **Victor Sales** - [salesvictor](https://github.com/salesvictor)

## Acknowledgments

* **Professor Edgar Toshiro Yano** - [Curriculum](http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4798593T1&idiomaExibicao=2)
