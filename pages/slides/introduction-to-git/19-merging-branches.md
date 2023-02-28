---
order: 19
---

#### Merging branches

```sh
# go to the branch you're merging into
git checkout main

# merge the branch that has the changes you want (--ff-only means no merge commit)
git merge --ff-only <branch-name>

# delete the branch you just merged (more for cleanup than anything)
git branch -d <branch-name>
```
