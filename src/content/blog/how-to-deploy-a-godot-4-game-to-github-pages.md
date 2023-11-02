---
title: How to deploy a Godot 4 game to Github Pages
description: How to use Github Workflow to automatically deploy your Godot 4 Game to Github Pages when you push your changes.
pubDatetime: 2023-11-02T13:12:55-04:00
featured: true
tags:
  - Game Development
  - Git
  - Github
  - Godot Game Engine
  - Godot 4
ogImage: /src/assets/images/november-23/githubxgodot.png
---

![Github Pages and Godot Game Engine](/src/assets/images/november-23/githubxgodot.png)

# How to deploy a Godot 4 game to Github Pages

Here's a quick guide to publishing an HTML web build of your Godot game directly from the source code hosted in a Github repository!

Before you get too far into it, just be aware that your GitHub repository needs to be public, and that the games do not seem to load on mobile, but I’m not yet sure if that’s because of Github Pages, something in my build setup, or Godot itself. _(I’ll update here if I can find a fix, or shoot me a message if you find one!)_

First you will need to organize your project directory. Here's the end result we're shooting for.  
 ![Project directory structure](/src/assets/images/november-23/godot_project_setup.png)

1. Create your root directory and name it whatever you like. Initialize your git repository here.
2. Create a subdirectory named `build`, and within it a subdirectory `web`. Create an `index.html` file within `web`.
3. Go back to your root directory and create a new subdirectory `project`.
4. If you already have a Godot project, simply move all of the project files into the project directory. If not, create your Godot project in the `project` folder, with the git option disabled (since you are initializing git yourself in a directory above).
5. In the root directory, create a `.gitignore` file and add .godot/ to it.
6. In the root directory, create a subdirectory `.github` and within that a subdirectory `workflows`.
7. In `workflows` create a file called `deploy.yml` and add the configuration below. The only change you need to make is make sure the name of the branch on line 10 matches your repository branch name (usually main). On line 4 and 19, Godot's version is specified (4.1.2). Make sure those lines match your version. Double check your Godot version by clicking on Godot's 'about' menu.

[](https://gist.github.com/Heidi-Negrete/23f544d20f070d69ea1fce8df91d6732.js)

<script src="https://gist.github.com/Heidi-Negrete/23f544d20f070d69ea1fce8df91d6732.js"></script>

8. Open your Godot project and configure it to export HTML builds. In Godot's top menu go to project > export... Add a Web preset. You may get a popup or warning prompting you to make some installations first. Go ahead and do that, and then add the Web preset. You only need to set the export path now by clicking on the folder icon and navigating back up one directory and down into build > web > select the index.html and hit save. You can now close the export window. Everything is good to go in Godot.
   ![Configuring export settings](/src/assets/images/november-23/export_settings_webbuild.png)

9. When you push your repository to Github, it should automatically add the workflow you configured in workflows, and you will be able to view it's process in the 'Actions' tab. When the actions finish, go to the repository's 'Settings' > Github Pages and choose deploy from branch. You will _not_ select main, but the gh-pages branch that will be created automatically by the workflow.
   ![Github Pages deploy from branch](/src/assets/images/november-23/github_pages_branch.png)

10. You may need to rerun the workflow. Go to the 'Actions' tab and click the three dots to rerun workflow. Assuming everything completes successfully, it will still take a few minutes, but then you should be able to visit your game from the link that you can find on the Settings > Github Pages tab of your repository!
    ![Github Actions Workflows](/src/assets/images/november-23/github_actions.png)

## Problems and Debugging:

- Make sure that when you push everything to Github, the `export_presets.cfg` is in the `project` directory (do not add this file to `.gitignore`).

- Make sure that you have an `index.html` file in `build/web/index.html`. If you don't, create it and double check that your Godot export path is properly set up to point to that file.

---

_I want to give credit to Paul Getwicki who created the original workflow and a [video tutorial](https://www.youtube.com/watch?v=OREQ9X1SdAw), go check it out if you want to see some of the steps done (there may be slight differences in the process since it was made for Godot 3)._ I will post an updated YouTube guide soon and update this article.
