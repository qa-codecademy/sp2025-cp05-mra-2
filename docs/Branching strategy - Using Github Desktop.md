# Branching strategy - Using Github Desktop ⚙️

### What is Github Desktop?

Github Desktop, is a desktop application that allows you to work with git technologies more easily,
without the complexity of remembering all the git commands like git clone, git commit, git push and so on. So basically, it provides you with an easy to use UI, and it offers a great user experience. Further in this document you can find out how to make easier your work on the projects.

### Step by step, from cloning to pull request!

Let say that someone already create a repository on GitHub for you. So, first of all you need to clone the repository to your local machine, so that you can connect with that repository created on GitHub. For that purpose, follow the steps below

1. Simply start the GitHub app on your machine and you will see the following screen:
   ![image](./img/git-clone_1.png)

2. Then the following screen appears
   ![image](./img/git-clone_2.png)

3. After all of this you wait for a few seconds and the next screen appears which is basically the repository cloned on your machine
   ![image](./img/repository-screen.png)

4. Now you should switch to develop branch, so that you can create feature branches from it. Check on the image how you can do that.
   ![image](./img/develop-switch.png)

5. After switching on develop you should create your own feature branch, on which you will commit your changes without interfering other team member's work.
   ![image](./img/create-branch_1.png)

6. Select that you want to create a branch from 'develop' and then again 'Create branch' button, like on the image below
   ![image](./img/create-branch_2.png)

7. Now you are on your own branch. Open Visual Studio code or whatever you are using for coding. You can do this also from GitHub desktop app.
   ![image](./img/vscode-open.png)

8. After that you start to add HTML/CSS files, or maybe JS files, you implement your feature logic and so on. After saving the work, you go back to GitHub Desktop app, and it immediately recognizes your change. Check the image.

![image](./img/change-made.png)

9. When you have implemented enough to commit, the next thing is committing your changes and then push them also to the origin repo (the repo on GitHub). Check how you do that.

![image](./img/commit.png)

![image](./img/push.png)

10. After you finished all your work. And you are sure that that's it. The merging part comes. First of all, you need to merge the develop branch into your branch. Check the image how you do this.
    ![image](./img/merge-locally_1.png)

![image](./img/merge-locally_2.png)

11. If you cannot click the merge button, it means that you are up to date with develop branch, and you can go further with creation of **pull request**. This means that you want now to put your code on the develop branch, or to merge your branch into develop (origin). So, you just click on Create pull request button from the GitHub desktop app.

![image](./img/pull-request_1.png)

12. After clicking you should be redirected on GitHub in browser, so that you can create the pull request. See on the image what to select and where to click, to create the pull request.
    ![image](./img/pull-request_2.png)

### The end 😎

Well the previous 12 steps define your work on every new feature that will come as a task for you. When you create the pull request, your team lead when you start working, and on the academy probably the mentors
will go through your code and will check what you implemented. After assuring that everything you add can be merged into develop branch, the mentor approves the pull request and merge your work into develop. For start working on some new feature, just repeat the previous steps 😁
