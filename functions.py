import pandas as pd
from schema import MaterialIndexSchema

INDEX = ['Cathode_Name', 'Anode_Name', 'Electrolyte_Name']
MATERIALS = ['Cathode', 'Anode', 'Electrolyte']


def getFirstMaterialsByName(materialType: MaterialIndexSchema, userInput: dict):

    PATH = MATERIALS[materialType.index] + ".csv"

    sources = pd.read_csv(PATH, encoding='cp949')

    print(PATH)

    first_input = userInput['first']

    sources = sources.set_index(INDEX[materialType.index])

    first = sources.loc[first_input]

    first = first.to_list()

    returnList = []

    for x in first:
        if (type(x) != str):
            returnList.append(x.item())
        else:
            returnList.append(x)

    return returnList


def getSecondMaterialsByName(materialType: MaterialIndexSchema, userInput: dict):

    PATH = MATERIALS[materialType.index] + ".csv"

    sources = pd.read_csv(PATH, encoding='cp949')

    second_input = userInput['second']

    sources = sources.set_index(INDEX[materialType.index])

    second = sources.loc[second_input]

    second = second.to_list()

    returnList = []

    for x in second:
        if (type(x) != str):
            returnList.append(x.item())
        else:
            returnList.append(x)

    return returnList
