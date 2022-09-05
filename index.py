from IPython.display import display, HTML
import requests
from pandas import *
import pandas as pd
from pathlib import Path
import numpy as np

import json

df = pd.read_json('jokeDB.json')

url = "https://dad-jokes.p.rapidapi.com/random/joke"

headers = {
	"X-RapidAPI-Key": "5306d8a43emsh14d3563571f84a3p13fa78jsncf07f8fd46f6",
	"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

df.loc[len(df.index)] = response.text

result = df.to_json(orient = 'records')

with open("test.json", "w") as write_file:
    json.dump(result, write_file)
print("Done writing JSON data into .json file")

display(result)