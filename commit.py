import git
import datetime

# specify the repository
repo = git.Repo("https://github.com/parryk303/dad-joke.git")

# add and commit changes
today = datetime.datetime.now().strftime("%Y-%m-%d")
repo.index.add(["file.txt"])
repo.index.commit(f"Commit for {today}")

# push changes to GitHub
origin = repo.remote(name="origin")
origin.push()
