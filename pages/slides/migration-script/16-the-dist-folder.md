---
order: 16
---

## The dist Folder

When we run the script, the files are written to the `dist` folder, which should be able to be served as a static site.

We can run `backstop` against this static site running locally vs. production to make sure we didn't introduce any visual regressions.

If we're all clear, we can copy the files from `dist` into the `public` folder of our real application's code, put up a PR, and pass it along to QA! 🎉
