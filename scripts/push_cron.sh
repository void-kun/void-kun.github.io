#!/usr/bin/bash

# commit all change to git

check_any_update () {
    local empty_msg='nothing to commit, working tree clean'
    local status="$(git status)"

    if [[ $status == *"$empty_msg"* ]]; then
	echo "Nothing to commit"
    fi
}

check_any_update
