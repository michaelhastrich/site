---
title: 'Blog'
layout: 'base.njk'
---

## All posts

<ul>
    {% for post in collections.posts %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {% endfor %}
</ul>