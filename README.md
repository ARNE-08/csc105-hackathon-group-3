# csc105-hackathon-group-3

## Command for branching
to make a branch name "Tong" and switch to that branch
git checkout -b Tong

## to switch to the branch "master" without creating new branch
git checkout master

## to check name of all branches and what brand we're in
git branch -a

## to check status whether our filr is detected or not
git status

## to publish code on your current branch(not merge)
## No git push
git add .
git commit -m ""

## to "delete branch "Tong"
## 1. it will ask if you have not merge to the main branch
git branch -d Tong
# or 2. force to delete without merging
git branch -D Tong
