---
order: 17
---

#### Staging Changes

```
# see which files have changed
git status

# stage a specific file to commit
git add <filename>

# stage all changed files
git add .

# stage portions of changed files (you'll be prompted for each chunk y/n)
git add . -p

# unstage a specific file
git restore --staged <filename>

# unstage all files
git restore --staged .
```
