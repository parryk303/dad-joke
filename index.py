from git import Repo

working_tree_dir = '/Users/louiseparry/Desktop/autoJoke/autoGit'
file = "./activityTracker.js"
repo = Repo(working_tree_dir)


def gitActivities(repo):
    if len(repo.untracked_files):
        repo.git.add(A=True)
        repo.git.commit('-m', 'initial commit')
        repo.git.push('origin', 'HEAD:refs/for/master')

def alterFile(file):
    with open(file, "a") as f:
        f.write("new line\n")


alterFile(file)


gitActivities(repo)