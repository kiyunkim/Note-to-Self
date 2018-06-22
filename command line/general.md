# General


## Vocabulary
- **Shell**
  - In computing, a **shell** is a user interface for access to an operating system's services. In general, operating system shells use either a **command-line interface** (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation. It is named a shell because it is the outermost layer around the operating system kernel.
  - **Command Line Interface (CLI)**  
    - Means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines). [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
  - **Graphical User Interface (GUI)** 
    - Program interface that takes advantage of the computer's graphics capabilities to make the program easier to use. Well-designed graphical user interfaces can free the user from learning complex command languages. [Webopedia](https://www.webopedia.com/TERM/G/Graphical_User_Interface_GUI.html)
- **Folder = Directory**
- **Session**
  - Do not type in the `$` (Unix) or `>` (Windows). That's just showing the **session**
  - `#` means you are operating as the _superuser_
- **Prompt**
  - You can see an output followed by another `$` or `>` **prompt**. That content is the output.
  - This is the beginning of the command line. It usually provides some contextual information like who you are, where you are and other useful info. It typically ends in a $ . After the prompt is where you will be typing commands.
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
  `cp -r [directory1] [directory2]`
  > copy directory1 and its contents
  
  `rm -rf [directory]`
  > (remove directory and its contents)

## Resources

- [Git & Command Line](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
- [Learning the shell](http://linuxcommand.org/lc3_lts0030.php)
- [LearnPythonTheHardWay](https://learnpythonthehardway.org/book/appendix-a-cli/introduction.html)  
- [Intro to Mac OS X Command Line - treehouse](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
- [Codecademy: List of Command Line Commands](https://www.codecademy.com/articles/command-line-commands)

