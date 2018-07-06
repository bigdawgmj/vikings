from pyramid.response import Response, FileResponse
from pyramid.view import view_config

import urllib2, json

@view_config(route_name='api', renderer='json', request_method='GET',
             match_param='type=wu')
def get_weather(request):
    city = request.params['city']
    base = 'http://api.wunderground.com/api/'
    access_key = request.registry.settings['WuAccessKey']
    weather = urllib2.urlopen(base + access_key + '/conditions/q/UT/' + city +
                              '.json')
    return json.load(weather)