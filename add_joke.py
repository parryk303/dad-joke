from pathlib import Path
import requests
import json

url = "https://dad-jokes.p.rapidapi.com/random/joke"
headers = {
    "X-RapidAPI-Key": "5306d8a43emsh14d3563571f84a3p13fa78jsncf07f8fd46f6",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
}
response = requests.request("GET", url, headers=headers)
newJoke = json.loads(response.text)

setup = newJoke["body"][0]["setup"]
punchline = newJoke["body"][0]["punchline"]

dad_joke = {"setup": setup, "punchline": punchline}

dj = json.dumps(dad_joke)

f = open("../public/jokes.json")
jokes = json.loads(json.dumps(json.load(f)))
jokes.append(dj)

with open("../public/jokes.json", "w") as write_file:
    json.dump(jokes, write_file)
print("Done writing JSON data into jokes")
