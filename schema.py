from pydantic import BaseModel
from typing import Optional


class MaterialSchema(BaseModel):
    first: Optional[str]
    second: Optional[str]

    class Config:
        orm_mode = True


class MaterialIndexSchema(BaseModel):
    index: Optional[int]

    class Config:
        orm_mode = True
