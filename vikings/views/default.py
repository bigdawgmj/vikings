from pyramid.response import Response, FileResponse
from pyramid.view import view_config

from sqlalchemy.exc import DBAPIError

from ..models import MyModel
from ..models.mymodel import People
from ..models.mymodel import Team

import pdb
import json



@view_config(route_name='api', renderer='json', request_method='GET',
             match_param='type=test')
def get_api(request):
    """ Test API working """
    # return {'test': 'abc'}
    try:
        db = request.dbsession
        one = db.query(MyModel).filter(MyModel.name == 'one').first()
        person = db.query(People).filter(People.p_id == 1).first()
        team = db.query(Team).all()
        res = [] 
        for member in team:
            res.append(member.to_json())
    except DBAPIError:
        return Response(db_err_msg, content_type='text/plain', status=500)
    return {'one': one.to_json(), 'project': 'Vikings', 'person':person.to_json(), 
            'team':res}

@view_config(route_name='api', renderer='json', request_method='GET',
             match_param='type=team')
def get_team(request):
    """ Get the team members from the database """
    try:
        db = request.dbsession
        team = db.query(Team).all()
        res = [] 
        for member in team:
            res.append(member.to_json())
    except DBAPIError:
        return Response(db_err_msg, content_type='text/plain', status=500)
    return res

# @view_config(route_name='home', renderer='../templates/mytemplate.jinja2')
# def my_view(request):
#     try:
#         db = request.dbsession
#         one = db.query(MyModel).filter(MyModel.name == 'one').first()
#         person = db.query(People).filter(People.p_id == 1).first()
#         team = db.query(Team).all()
#         res = [] 
#         for member in team:
#             res.append(member.to_json())
#     except DBAPIError:
#         return Response(db_err_msg, content_type='text/plain', status=500)
#     return {'one': one, 'project': 'Vikings', 'person':person, 'team':res}


db_err_msg = """\
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to run the "initialize_vikings_db" script
    to initialize your database tables.  Check your virtual
    environment's "bin" directory for this script and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.

After you fix the problem, please restart the Pyramid application to
try it again.
"""
