from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List


class UsersBase(SQLModel):
    username: str
    passwordhash: str

class Users(UsersBase, table=True):
    id: int = Field(primary_key=True)

class UsersUpdate(SQLModel):
    username: str
    passwordhash: str

class UsersCreate(UsersBase):
    pass