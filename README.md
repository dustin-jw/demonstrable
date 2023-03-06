# Demonstrable

This is a lightweight tool for basic presentations, as well as a collection of presentations about web development.

## Getting Started

This project requires [Node.js](https://nodejs.org) and `npm` (included with Node.js) to build the site and run it in local development. The LTS (Long Term Support) version is recommended for most cases.

Here are the main commands you'll need to run to get the project up and running.

```sh
# install dependencies
npm install

# run the site in development mode
npm start

# build the site for production
npm run build

# lint your code for possible issues
npm run lint

# run unit tests (by default does nothing)
npm run test

# update dependencies to their latest versions
npm run update-deps
```

## Building a Presentation

Presentations are built using Eleventy's [collections](https://www.11ty.dev/docs/collections/) feature. Take a look at [owasp-top-ten.njk](./pages/owasp-top-ten.njk) and [its slides](./pages/slides/owasp-top-ten/) to get a better sense of how it works.

By convention, you'll want a top-level file in `pages` for your presentation that looks like this:

```html
---
title: <presentation-title>
description: <presentation-description>
tags: presentations
---

{% extends 'layout.njk' %} {% block favicon %}
<link
  rel="icon"
  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🙂</text></svg>"
/>
{% endblock %} {% block content %} {% for slide in
collections["<presentation-tag
  >"] | sortByOrder %}
  <div class="cmp-slide">{{ slide.content | safe }}</div>
  {% endfor %} {% endblock %}</presentation-tag
>
```

Then, you'll want a folder in `pages/slides` corresponding to your presentation. That folder must have a `<presentation-name>.json` file where `<presentation-name>` matches the name of the folder.

```json
{
  "tags": ["slides", "<presentation-tag>"]
}
```

With that in place, you can add slides as individual files. Markdown is an easy format to work with, so most slides are written in Markdown. Put whatever content you want in slides, but they should all have frontmatter defining their order in the presentation.

```md
---
order: 1
---

# Presentation Title

Presentation Description
```
