


1   $ git checkout master
2   $ git status        if there are conflicts go to step 4
3   $ git reset --hard HEAD
4   $ git pull upstream master
5   $ git checkout -b nameno



$ git add -A
$ git commit -m "whatever"
$ git push origin nameno
go to git hub to create new pull request
$ git checkout master
$ git pull upstream master
$ git checkout -b nameno
