# Commands

Command Name | Description
---------- | -----------
`pwd`|print working directory
`mkdir`|make directory
`cd`|change directory
`ls`|list directory
`rmdir`|remove directory
`pushd`|push directory
`popd`|pop directory
`cp`|copy a file or directory
`mv`|move (or rename) a file or directory
`hostname`|my computer network name
`touch` | create empty file
`less`|page through a file
`cat`|print the whole file
`rm` | remove file
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



Option Name | Description
--|--
`-l` | Long
`-r`| ??
`-rf`| ??

## Vocabulary
- **Shell**
  - In computing, a **shell** is a user interface for access to an operating system's services. In general, operating system shells use either a **command-line interface** (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation. It is named a shell because it is the outermost layer around the operating system kernel.
- **Folder = Directory**
- **Session**
  - Do not type in the `$` (Unix) or `>` (Windows). That's just showing the **session**
- **Prompt**
  - You can then see what I have for output followed by another `$` or `>` **prompt**. That content is the output and you should see the same output.
  - This is the beginning of the command line. It usually provides some contextual information like who you are, where you are and other useful info. It typically ends in a $ . After the prompt is where you will be typing commands.
- **Command Line Interface (CLI)**  
  - Means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines). [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
- **Graphical User Interface (GUI)** 
  - Program interface that takes advantage of the computer's graphics capabilities to make the program easier to use. Well-designed graphical user interfaces can free the user from learning complex command languages.  [Webopedia](https://www.webopedia.com/TERM/G/Graphical_User_Interface_GUI.html)
- **Console:** This is the system as a whole. This is both the command line as well as the output from previous commands.
- **Command Line:** This is the actual line in a console where you type your command.
- **Terminal:** This is the actual interface to the console. The program we use to interact with the console is actually a "terminal emulator", providing us the experience of typing into an old school terminal from the convenience of our modern graphical operating system.
- **Running a command**
  - 3 main parts: the **program** (the 'verb' `ls`), the **options** (the 'adverb' `-l`), and the **arguments** (the 'object' `~`)

---
### Questions to Review
- Is there a way to comment?
- What is `-lR`? 
  - When typing in `ls -lR` in the temp directory: `drwxr-xr-x  3 kiyunkim  staff  96 Dec 16 15:51 stuff`
- Review `pushd` and `popd`
- What is:  
  `cp -r [directory1] [directory2]` -- copy directory1 and its contents  
  `rm -rf [directory]` (remove directory and its contents)
  
## Sources

- [LearnPythonTheHardWay](https://learnpythonthehardway.org/book/appendix-a-cli/introduction.html)  
- [Intro to Mac OS X Command Line - treehouse](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

