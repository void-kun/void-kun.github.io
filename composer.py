import os
import re
import json
import shutil


def runner():
    md_dir = os.listdir('./daily_notes')
    md_files = list(filter(lambda x: re.search(r'.+\.md$', x), md_dir))

    posts = []
    for md_file in md_files:
        md_content = ''
        with open('./daily_notes/' + md_file, 'r', encoding="utf-8") as inp_file:
            md_content = [x for x in inp_file.read().split("\n")]

        with open('./lib/src/markdown/' + md_file.replace(".md", ".json"), 'w', encoding="utf-8") as oup_file:
            timestamp = md_content.pop(0)
            title = md_content.pop(0)
            slug = md_file[:-3]
            categories = []
            for x in md_content.pop(0).split(","):
                temp = x.strip().split(":")
                categories.append({
                    "name": temp[0],
                    "path": temp[1]
                })
            summary = md_content.pop(0)

            output_obj = {
                "timestamp": timestamp,
                "title": title,
                "slug": slug,
                "categories": categories,
                "summary": summary,
                "markdown": md_content,
            }
            posts.append(output_obj)
            oup_file.write(json.dumps(output_obj))

    with open('./lib/src/markdown/posts.json', 'w', encoding="utf-8") as oup_file:
        post_oup = []
        for post in posts:
            post_oup.append({
                "timestamp": post['timestamp'],
                "title": post['title'],
                "slug": post['slug'],
                "categories": post['categories'],
                "summary": post['summary'],
            })
        oup_file.write(json.dumps(post_oup))

    shutil.copyfile('./daily_notes/meta/categories.json',
                    './lib/src/markdown/categories.json')

    image_files = list(filter(lambda x: re.search(
        r'.*\.((png)|(jpeg))$', x), md_dir))
    for image in image_files:
        shutil.copyfile('./daily_notes/'+image, './lib/public/'+image)


if __name__ == "__main__":
    runner()
