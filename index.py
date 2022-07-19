import requests

url = "https://dad-jokes.p.rapidapi.com/random/joke"

headers = {
	"X-RapidAPI-Key": "5306d8a43emsh14d3563571f84a3p13fa78jsncf07f8fd46f6",
	"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

working_tree_dir = '/Users/louiseparry/Desktop/autoJoke/dadJokes'
file = "./jokes.txt"

# joke="{\nsetup: {setup}\npunchline: {punchline}\n}\n".format(setup=response.text.setup, punchline=response.text.punchline)
joke="{res},\n".format(res=response.text)

def alterFile(file):
    with open(file, "a") as f:
        f.write(joke)

alterFile(file)