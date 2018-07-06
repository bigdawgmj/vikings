import os
from pyramid.request import Request
from pyramid.response import FileResponse
from pyramid.view import view_config


@view_config(route_name='home', http_cache=3600*24*365)
def index_view(request):
    """ Serve up index page """
    here = os.path.abspath(os.path.join(
        os.path.dirname(__file__), os.pardir))
    index_path = os.path.join(here, 'static', 'vikingapp', 'dist',
            'index.html')
    return FileResponse(index_path, request=request)
