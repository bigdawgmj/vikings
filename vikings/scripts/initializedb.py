import os
import sys
import transaction
import pdb
import pandas as pd

from pyramid.paster import (
    get_appsettings,
    setup_logging,
    )

from pyramid.scripts.common import parse_vars

from ..models.meta import Base
from ..models import (
    get_engine,
    get_session_factory,
    get_tm_session,
    )
from ..models.mymodel import MyModel
from ..models.mymodel import People
from ..models.mymodel import Team


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd))
    sys.exit(1)


def main(argv=sys.argv):
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)
    # pdb.set_trace()
    df = pd.read_csv(os.getcwd() + '\\' + settings['csv.file'], index_col=0)

    engine = get_engine(settings)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    df.to_sql(con=engine, name=Team.__tablename__, if_exists='replace')

    session_factory = get_session_factory(engine)

    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)

        person = People(p_id=1, p_fname='Leif', p_lname='Erikson')
        model = MyModel(name='one', value=1)
        dbsession.add(model)
        dbsession.add(person)

    # with transaction.manager:
    #     dbsession = get_tm_session(session_factory, transaction.manager)

