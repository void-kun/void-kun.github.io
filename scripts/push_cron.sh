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
    git rev-parse --abbrev-ref HEAD
}

any_update="$(check_any_update)"
if [[ $any_update == "Has update" ]]; then
    local branch="$(git_branch)"
    echo "Commit all change to branch $(branch)"

    # add all change and push to master branch
    git add .
    git commit -m "update"
    git push origin "$(branch)"
else
    echo $any_update
fi
