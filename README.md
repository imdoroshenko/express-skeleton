Expressjs skeleton app
=======================

# Install & run

#### Manual installation & run

Clone source code
```shell
$ git clone git@github.com:imdoroshenko/express-skeleton.git my_app --depth=1
$ cd my_app
my_app$ git fetch --unshallow
```
Set remotes
```shell
my_app$ git remote rename origin skeleton
my_app$ git remote add origin  git@github.com:me/my_app.git
my_app$ git config remote.skeleton.tagopt --no-tags
```

Install dependencies
```shell
my_app$ npm install
```

Run application
```shell
my_app$ npm start
```

Update skeleton
```shell
my_app$ git fetch skeleton
my_app$ git checkout -b skeleton_vX.X.X
my_app$ git merge skeleton/master
```


# Test

 All files with test code must be placed in ./test/ folder. You must put integration tests in ```./test/integration/``` and unit
 tests in ```./test/unit/```.

 Run tests manually
 ```shell
 $ npm test
 ```

# Versions
  Use Semantic Versioning for version numbers.

  Tags for new version must be created only in master branch.

  To create new version you need switch to master branch and use following commands.

  For patch update
  ```shell
    $ npm version patch -m "message"
    $ git push --follow-tags origin master
  ```

  For minor update
  ```shell
    $ npm version minor -m "message"
    $ git push --follow-tags origin master
  ```

  For major update
  ```shell
    $ npm version major -m "message"
    $ git push --follow-tags origin master
  ```

  For additional details visit following links
  - http://semver.org/
  - https://docs.npmjs.com/cli/version
