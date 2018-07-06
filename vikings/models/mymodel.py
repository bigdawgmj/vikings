from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    Date
)

from .meta import Base


class MyModel(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)

    def to_json(self):
        return dict(id=self.id, name=self.name, value=self.value)

class People(Base):
    __tablename__ = 'people'
    p_id = Column(Integer, primary_key=True)
    p_fname = Column(Text)
    p_lname = Column(Text)
    p_birth_dt = Column(Date)

    def to_json(self):
        return dict(p_id=self.p_id, p_fname=self.p_fname, p_lname=self.p_lname,
        p_birth_dt=self.p_birth_dt)

class Team(Base):
    __tablename__='team'
    id = Column(Integer, primary_key=True)
    firstname = Column(Text)
    lastname = Column(Text)
    email = Column(Text)
    vstsuser = Column(Text)

    def to_json(self):
        return dict(id=self.id, firstname=self.firstname, lastname=self.lastname,
        email=self.lastname, vstsuser=self.vstsuser)

Index('my_index', MyModel.name, unique=True, mysql_length=255)
