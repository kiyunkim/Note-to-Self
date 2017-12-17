[Source](https://learnpythonthehardway.org/book/appendix-a-cli/introduction.html)

## Commands
```command
$ pwd 
/Users/kiyun
$
```
Prints working directory

```command
$ cd ~
$ pwd
/Users/kiyun
$ mkdir temp
$ mkdir temp/'another folder'
```
Use `cd ~` to go back to the home directory and print working directory to check you are at home.  
`mkdir temp` and `mkdir temp/'another folder'` creates the folder 'temp' in the home directory, and the folder 'another folder' inside of the 'temp' folder.

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

---
### To Memorize

Command Name | Description
---------- | -----------
`pwd`|print working directory
`hostname`|my computer network name
`mkdir`|make directory
`cd`|change directory
`ld`|list directory
`rmdir`|remove directory
`pushd`|push directory
`popd`|pop directory
`cp`|copy a file or directory
`mv`|move a file or directory
`less`|page through a file
`cat`|print the whole file
`xargs`|execute arguments
`find`|find files
`grep`|find things inside files
`man`|read a manual page
`apropos`|find what man apge is appropriate
`env`|look at your environment
`echo`|print some arguments
`export`|export/set a new environment variable
`exit`|exit the shell
`sudo`|become super user root **CAUTION!**


## Vocabulary
- **Shell**
  - In computing, a **shell** is a user interface for access to an operating system's services. In general, operating system shells use either a **command-line interface** (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation. It is named a shell because it is the outermost layer around the operating system kernel.
- **Folder = Directory**
- **Session**
  - Do not type in the `$` (Unix) or `>` (Windows). That's just showing you my **session** so you can see what I got.
- **Prompt**
  - You can then see what I have for output followed by another `$` or `>` **prompt**. That content is the output and you should see the same output.
- **Command Line Interface (CLI)**  
  - Means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines). [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
- **Graphical User Interface (GUI)** 
  - Program interface that takes advantage of the computer's graphics capabilities to make the program easier to use. Well-designed graphical user interfaces can free the user from learning complex command languages.  [Webopedia](https://www.webopedia.com/TERM/G/Graphical_User_Interface_GUI.html)


---
### Questions to Review
- Is there a way to comment?
- What is `-lR`? 
  - When typing in `ls -lR` in the temp directory: `drwxr-xr-x  3 kiyunkim  staff  96 Dec 16 15:51 stuff`
