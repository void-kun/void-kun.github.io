import sys
import os
import re


def runner():
    files_on_dir = os.listdir('./daily_notes')
    files_on_dir = list(filter(lambda x: re.search(r'.+\.md$', x), files_on_dir))
    files_on_dir.sort(reverse=True)

    with open('./index.md', 'w') as out_file:
        content = ''
        for md_file in files_on_dir:
            with open('./daily_notes/' + md_file, 'r') as inp_file:
                content += (md_file[:len(md_file) - 3] + '\n')
                content += inp_file.read()
                content += '\n<br>\n'
        
        out_file.write(content)
    print('rerender index.md file')


if __name__ == "__main__":
    runner()
