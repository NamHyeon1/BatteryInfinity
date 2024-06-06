from typing import Union

from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse, JSONResponse
from schema import MaterialSchema, MaterialIndexSchema
from functions import getFirstMaterialsByName, getSecondMaterialsByName
import numpy as np

app = FastAPI()

userInput = {
    "first": "",
    "second": ""
}

app.mount("/static", StaticFiles(directory="static", html=True), name="static")


@app.get("/")
def read_root1(req: Request):
    return FileResponse("Cathode.html")


@app.get("/Cathode")
def read_root2(req: Request):
    return FileResponse("Cathode.html")


@app.get("/Anode")
def read_root3(req: Request):
    return FileResponse("Anode.html")


@app.get("/Electrolyte")
def read_root4(req: Request):
    return FileResponse("Electrolyte.html")


@app.get("/AddData")
def read_root5(req: Request):
    return FileResponse("AddData.html")


@app.get("/News")
def read_root6(req: Request):
    return FileResponse("News.html")


@app.get("/Community")
def read_root7(req: Request):
    return FileResponse("Community.html")


@app.get("/About")
def read_root8(req: Request):
    return FileResponse("About.html")


@app.post("/CathodePost")
def CathodePost(material: MaterialSchema):
    # print(material.first)

    userInput.update(material)
    print(userInput)

    return True


@app.get("/CathodeComparison")
def read_root9(req: Request):
    return FileResponse("CathodeComparison.html")


@app.get("/AnodeComparison")
def read_root10(req: Request):
    return FileResponse("AnodeComparison.html")


@app.get("/ElectrolyteComparison")
def read_root11(req: Request):
    return FileResponse("ElectrolyteComparison.html")


@app.post("/getFirstMaterialInfo")
def get_first_Material_Info(index: MaterialIndexSchema):

    firstM = getFirstMaterialsByName(
        materialType=index, userInput=userInput)

    firstM.insert(0, userInput['first'])

    print(firstM)

    return firstM


@app.post("/getSecondMaterialInfo")
def get_second_Material_Info(index: MaterialIndexSchema):

    secondM = getSecondMaterialsByName(
        materialType=index, userInput=userInput)

    secondM.insert(0, userInput['second'])

    print(secondM)

    return secondM
