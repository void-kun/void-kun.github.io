import os
import argparse
import subprocess
from contextlib import contextmanager


EXIT_SUCCESS_CODE = 0
EXIT_FAILURE_CODE = 1


@contextmanager
def cd(newdir):
    prevdir = os.getcwd()
    os.chdir(os.path.expanduser(newdir))
    try:
        yield
    finally:
        os.chdir(prevdir)


def execute(args: argparse.ArgumentParser):
    directory = args.directory

    # check parent path
    if directory == ".":
        directory = os.getcwd()
    else:
        temp_dir = os.path.join(os.getcwd(), directory)
        if os.path.isdir(temp_dir):
            directory = temp_dir
        else:
            directory = os.getcwd()
        
    # read list projects from NOTE.md file
    with open("./NOTE.md", "r") as f:
        data = f.read()

    data = data.split("```")[1]
    projects = {}
    project_type = ""
    for text_line in data.split("\n"):
        if text_line.strip() == "":
            continue

        if text_line.startswith("[TYPE]"):
            project_type = text_line.split("[TYPE] ")[1]
            project_type = os.path.join(directory, project_type)
        else:
            if project_type not in projects:
                projects[project_type] = []

            projects[project_type].append(text_line)

    for project_type, project_items in projects.items():
        print(project_type, project_items)

        # make project type
        if not os.path.exists(project_type):
            os.makedirs(project_type)

        with cd(project_type):
            for project_item in project_items:
                subprocess.run(["git", "clone", project_item])

    return EXIT_SUCCESS_CODE


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument("-d", dest="directory", type=str, default=".")
    parser.set_defaults(handler=execute)
    
    try:
        args = parser.parse_args()
        status_code = args.handler(args)
        exit(status_code)
    except Exception as e:
        print(e)
        exit(EXIT_FAILURE_CODE)
