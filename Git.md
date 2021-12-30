Git Basics

- git init, commit, add, push, status, log.- git diff <file name> - shows the parts that were deleted/added
- git checkout <file name> - asks to rollout the file to the last commited version.
- Local Rep. .git is there. Many different commits can be pushed from here on GitHub. 
- Master branch - where the main progress is saved.
- Remote Repository - can be different from the local. Can be synced. You can push there. GitHub. 

# Gitignore

`touch .gitignore`

- git rm --cached -r . - how to remove added files
- (r - recursive)


.DS_Store
secrets.txt
*.txt (all the .txt files will be ignored)

# Side branch

Adding some features aside from master branch. At the same time you can wort on two branches parallel to each other. At some point you can bring changes to the master branch and continue working there. Or even make more branches. The reasons is adding more features or fixing bugs. 

`git branch ailen-plot`
`git branch // checking which branches you have`
`git checkout alien-plot // switch to this branch`
`git add . & git commit -m "modify chapter 2 to have alien theme"`
`git log // two commits on master and one on alien`
`git checkout master // go to master - it's not changed`
`touch chapter4.txt`
`git add add . & git commit -m "chapter 4"`
`git log // last on master, but there was no commit on alien`
`git merge alien-plot // add merge message and absorb changes from alien`
`git log // previous commits + alien commits`
`git push origin master -u // now there are 5 commits`
