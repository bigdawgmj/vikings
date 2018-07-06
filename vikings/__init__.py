from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include('.routes')
    config.add_static_view(name='', path='vikings:static/vikingapp/dist')
    config.add_static_view(name='assets',
                           path='vikings:static/vikingapp/dist/assets')
    config.include('pyramid_jinja2')
    config.include('.models')
    config.scan()
    return config.make_wsgi_app()
