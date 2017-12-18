
## Commands

### Print Directory 

```command
$ pwd 
/Users/kiyun
$
```
Prints working directory

### Make a Directory

```command
$ cd ~
$ pwd
/Users/kiyun
$ mkdir temp
$ mkdir temp/'another folder'
```
Use `cd ~` to go back to the home directory and print working directory to check you are at home.  
`mkdir temp` and `mkdir temp/'another folder'` creates the folder 'temp' in the home directory, and the folder 'another folder' inside of the 'temp' folder.

### Change directories, list contents of directory
```command
$ cd temp
$ pwd
/Users/kiyun/temp
$ cd ../
$ pwd
/Users/kiyun
$ cd temp
$ mkdir temp/stuff
$ ls
stuff
$ rmdir stuff
```
`cd` to change directories through the tree/path.  
`ls` list the contents of the current directory (in the above case, the temp directory)  
`rmdir` removes the empty directory 'stuff'  
 \**When there is a .DS_Store file an error may come up saying the directory is not empty - if that happens enter `rm -rf <dir>` with `<dir>` as the directory name.*
 ### Push and Pop
 ```command
 $ cd temp
$ mkdir -p i/like/icecream
$ pushd i/like/icecream
~/temp/i/like/icecream ~/temp
$ popd
~/temp
$ pwd
~/temp
$ pushd i/like
~/temp/i/like ~/temp
$ pwd
~/temp/i/like
$ pushd icecream
~/temp/i/like/icecream ~/temp/i/like ~/temp
$ pwd
~/temp/i/like/icecream
$ popd
~/temp/i/like ~/temp
$ pwd
~/temp/i/like
$ popd
~/temp
$ pushd i/like/icecream
~/temp/i/like/icecream ~/temp
$ pushd
~/temp ~/temp/i/like/icecream
$ pwd
~/temp
$ pushd
~/temp/i/like/icecream ~/temp
$ pwd
~/temp/i/like/icecream
$
 ```
Copied from [Learn Python the Hard Way](https://learnpythonthehardway.org/book/appendix-a-cli/ex8.html)

`pushd` takes the current directory and "pushes" it into a list for later, then changes to another directory. "Save where I am now and then go here." (`pushd` by itself will switch between the current directory and the last pushed directory)  
`popd` takes the last directory you pushed and "pops" it off, taking you back to it.  
`mkdir -p` creates an entire path
### Create empty files

```command
$ touch hello.txt
$ ls
hello.txt
```

### Copy files and directories with files in them
```command
$ cd temp
$ cp iamcool.txt neat.txt
$ ls
iamcool.txt neat.txt
$ cp neat.txt awesome.txt
$ ls
awesome.txt iamcool.txt neat.txt
$ mkdir something
$ cp awesome.txt something/
$ ls
awesome.txt iamcool.txt  neat.txt  something
$ ls something/
awesome.txt
$ cp -r something newplace
$ ls newplace/
awesome.txt
$
```
`cp -r` command to copy directories with files in them.  
Put a `/` at the end of a directory to make sure the file really is a directory.

### Move files
