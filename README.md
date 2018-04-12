# Node 'Hello World' exercise
The goal of this exercise is to be able to install node.js and get a very basic HTTP server up and running.

## Get started
The first thing to do is to install Node, and NPM, which comes with it.  We will also need Git, so that we can obtain a copy of the exercise materials.

### Installing Node and NPM

#### On MacOS and Windows
Download and run the installer from https://nodejs.org/en/
(alternatively, if you are on MacOS and have homebrew installed, you can type 'brew install node' on the command line)

#### On Linux
Probably the easiest way is to install node from your package manager.  Follow the instructions for your distribution here: https://nodejs.org/en/download/package-manager/

### Installing Git
You also need to make sure you have git installed.  Follow the instructions on the Git project's website:
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Exercise
We are going to make a very simple HTTP server that only works on your local computer, and responds "Hello World" to every request.  A good introductory exercise; perhaps also useful in certain [very specific circumstances](http://hasthelargehadroncolliderdestroyedtheworldyet.com/)

### 1.  Clone this repository
On the command line, navigate to a suitable directory where you want to work, and use the 'Clone or download' option on the github repository page to clone the repository

https://github.com/leanjscom/node-hello-world-exercise

### 2.  Fix the index script
Have a look at index.js.  Try to use it by running 'node index.js' on the commad line.

You will notice that the script is completely broken, because it is missing most of its code, and one of the values is wrong.  Your first task is to fix it so that it works.

You will find the [official documentation](https://www.w3schools.com/nodejs/nodejs_http.asp) useful in completing this task


### 3.  Extension tasks
If you know a bit about node and / or finish early, you could try the following extra tasks:

* Adapt the server to accept a command-line parameter containing the text to output, instead of always outputting 'Hello World' (so that, for example, you could start it with "node index.js 'leave me alone, world'" if you want to give it a hangover).  Hint: use the variable process.argv.

* Rewrite the functions using ES6 arrow syntax rather than the 'function' keyword

* Write a simple HTTP server that serves files, like a simple Apache (use the node 'fs' module to load the files)