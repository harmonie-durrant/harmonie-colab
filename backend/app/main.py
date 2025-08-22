from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import select
from sqlmodel import Session

from .db import get_session
from .models import *

app = FastAPI()


@app.get("/")
async def index():
    return {"Hello": "World"}


@app.get("/users", response_model=List[Users])
def get_user(*, session: Session = Depends(get_session)):
    users = session.exec(select(Users)).scalars().all()

    return users


@app.post("/users", response_model=Users)
def create_user(*, session: Session = Depends(get_session), user: UsersCreate):
    add_user = Users.from_orm(user)
    session.add(add_user)
    session.commit()
    session.refresh(add_user)

    return add_user


@app.get("/users/{user_id}", response_model=Users)
def get_user_by_id(*, session: Session = Depends(get_session), user_id: int):
    user = session.get(Users, user_id)

    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    return user