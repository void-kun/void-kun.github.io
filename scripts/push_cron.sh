#!/usr/bin/bash

check_any_update () {
    local empty_msg='nothing to commit, working tree clean'
    local status="$(git status)"

    if [[ $status == *"$empty_msg"* ]]; then
	echo "Nothing to commit"
    fi

    echo "Has update"
}

git_branch () {
    git branch --show-current
}

if [[ $1 == "" ]]; then
    commit_msg="update"
else
    commit_msg="$1"
fi

# cd to project folder
script_dir="$(dirname "$0")"
project_dir=${script_dir%"/scripts"}
cd $project_dir

any_update="$(check_any_update)"
if [[ $any_update == "Has update" ]]; then
    branch="$(git_branch)"
    echo "Commit all change to branch $branch"

    # add all change and push to master branch
    git add .
    git commit -m "$commit_msg"
    git push origin $branch
else
    echo $any_update
fi
