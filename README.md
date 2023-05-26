# csc105-hackathon-group-3

## Command for branching
#### to make a branch name "Tong" and switch to that branch
`git checkout -b Tong`

#### to switch to the branch "main" without creating new branch
`git checkout main`

#### to check name of all branches and what brand we're in
`git branch -a`

#### to check status whether our filr is detected or not
`git status`

#### to publish code on your current branch(not merge)
#### No git push
`git add .`
`git commit -m ""`

#### to "delete branch "Tong"
##### 1. it will ask if you have not merge to the main branch
`git branch -d Tong`
##### or 2. force to delete without merging
`git branch -D Tong`


## Command for Merging
### Don't forget to push your code to your own branch before merging

##### 1. switch to "main"
`git checkout main`

##### 2. merge "Tong" branch to "main"
`git merge Tong`

##### 3. push your code,
### use git commit without -m
`git add .`
`git commit`
`git push`
