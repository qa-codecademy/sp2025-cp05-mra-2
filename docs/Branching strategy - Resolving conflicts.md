# GitHub Branching Guide for Beginners

This guide will help you understand how to work with branches in GitHub, specifically for your project where you'll be working with a main branch and feature branches.

## What is a Branch?

A branch is like a separate workspace where you can make changes to your code without affecting the main codebase. Think of it as creating a copy of your code where you can experiment and make changes safely.

## Why Do We Use Branches?

1. **Safety**: You can make changes without affecting the main code
2. **Organization**: Each feature or fix can be developed separately
3. **Collaboration**: Multiple team members can work on different features at the same time
4. **Code Review**: Changes can be reviewed before being added to the main code

## Branching Strategy for This Project

We'll use a simple branching strategy:

- `main` branch: Contains the stable, working code
- Feature branches: Created from `main` for new features or fixes
- All work is done in feature branches and merged back to `main`

## How to Create a Branch

### Using GitHub Desktop:

1. Open GitHub Desktop
2. Click on "Current Branch" dropdown
3. Click "New Branch"
4. Name your branch (see naming conventions below)
5. Make sure "main" is selected as the base branch
6. Click "Create Branch"

### Using VS Code:

1. Click on the branch name in the bottom left corner
2. Click "Create Branch"
3. Enter your branch name
4. Select "main" as the base branch

### Using Git Command Line:

```bash
git checkout main
git pull
git checkout -b your-branch-name
```

## Branch Naming Conventions

### Good Examples:

- `add-login-button`
- `header-alignment`
- `user-profile-page`
- `login-validation`

### Bad Examples:

- `branch1` (too vague)
- `new-features` (too broad)
- `changes` (not descriptive)
- `test` (unclear purpose)

## How to Update Your Branch

### Using GitHub Desktop:

1. Click "Fetch origin" to get latest changes
2. Click "Pull origin" to update your branch

### Using VS Code:

1. Click the "Source Control" icon (branch symbol)
2. Click the "..." menu
3. Select "Pull"

### Using Git Command Line:

```bash
git pull origin main
```

## How to Merge Your Branch Back to Main

### Using GitHub Desktop:

1. Click "Current Branch" dropdown
2. Select "main"
3. Click "Merge into current branch"
4. Select your feature branch
5. Click "Create a merge commit"
6. Click "Push origin"

### Using VS Code:

1. Switch to main branch
2. Click "Source Control" icon
3. Click "..." menu
4. Select "Merge Branch"
5. Choose your feature branch
6. Push changes

### Using Git Command Line:

```bash
git checkout main
git pull
git merge your-branch-name
git push origin main
```

## How to Resolve Conflicts

Sometimes when merging, you'll encounter conflicts. Here's how to handle them:

### Using GitHub Desktop:

1. When a conflict occurs, GitHub Desktop will show the files with conflicts
2. Click on each conflicted file
3. Choose which changes to keep or combine them
4. After resolving, mark the file as resolved
5. Complete the merge

### Using VS Code:

1. VS Code will highlight conflicts in the files
2. You'll see options to:
   - Accept Current Change
   - Accept Incoming Change
   - Accept Both Changes
3. Choose the appropriate option for each conflict
4. Save the files
5. Stage the resolved files
6. Complete the merge

### Using Git Command Line:

1. Open conflicted files
2. Look for conflict markers:
   ```
   <<<<<<< HEAD
   Current changes
   =======
   Incoming changes
   >>>>>>> branch-name
   ```
3. Edit the file to keep the correct changes
4. Remove conflict markers
5. Save the file
6. Stage and commit the resolved files

## Visual Representation of Branches

Here's how branches typically look in a project:

```
main:     A---B---C---D---E
                    \
feature:            F---G---H
```

In this diagram:

- Letters represent commits
- The main branch is the top line
- The feature branch splits off from main at commit C
- New commits (F, G, H) are made on the feature branch
- When ready, the feature branch will be merged back to main

## Complete Workflow Example

Let's follow a complete example of creating a feature branch, making changes, and merging back:

1. **Starting Point**

```
main:     A---B---C
```

2. **Create a new feature branch**

```
main:     A---B---C
                    \
feature:            D
```

3. **Make changes on feature branch**

```
main:     A---B---C
                    \
feature:            D---E---F
```

4. **Someone else updates main while you're working**

```
main:     A---B---C---M---N
                    \
feature:            D---E---F
```

5. **Update your feature branch with main's changes**

```
main:     A---B---C---M---N
                    \       \
feature:            D---E---F---G
```

6. **Merge feature back to main**

```
main:     A---B---C---M---N---H
                    \       /
feature:            D---E---F---G
```

## Conflict Example and Resolution

Let's look at a real-world example of a conflict and how to resolve it:

### Scenario: Two people modify the same file

1. **Initial state** (main branch):

```javascript
function calculateTotal(items) {
	let total = 0;
	for (let item of items) {
		total += item.price;
	}
	return total;
}
```

2. **Person A's change** (in their feature branch):

```javascript
function calculateTotal(items) {
	let total = 0;
	for (let item of items) {
		total += item.price * (1 - item.discount); // Added discount
	}
	return total;
}
```

3. **Person B's change** (in main branch):

```javascript
function calculateTotal(items) {
	let total = 0;
	for (let item of items) {
		total += item.price;
	}
	return total.toFixed(2); // Added decimal places
}
```

4. **Conflict when merging**:

```javascript
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
<<<<<<< HEAD
        total += item.price * (1 - item.discount);  // Added discount
=======
        total += item.price;
>>>>>>> main
    }
    return total.toFixed(2);  // Added decimal places
}
```

5. **Resolved version** (combining both changes):

```javascript
function calculateTotal(items) {
	let total = 0;
	for (let item of items) {
		total += item.price * (1 - item.discount); // Added discount
	}
	return total.toFixed(2); // Added decimal places
}
```

## Step-by-Step Workflow Guide

### 1. Starting a New Feature

1. **Update your main branch**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create and switch to new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 2. Making Changes

1. **Make your code changes**
2. **Stage your changes**
   ```bash
   git add .
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Description of your changes"
   ```
4. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

### 3. Keeping Your Branch Updated

1. **Get latest changes from main**

   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git merge main
   ```

2. **Resolve any conflicts if they occur**
3. **Push your updated branch**
   ```bash
   git push origin feature/your-feature-name
   ```

### 4. Merging Back to Main

1. **Switch to main branch**

   ```bash
   git checkout main
   ```

2. **Pull latest changes**

   ```bash
   git pull origin main
   ```

3. **Merge your feature branch**

   ```bash
   git merge feature/your-feature-name
   ```

4. **Push to main**
   ```bash
   git push origin main
   ```

## Best Practices

1. Always pull the latest changes from main before starting new work
2. Keep your branches focused on one feature or fix
3. Commit your changes regularly with clear commit messages
4. Test your changes before merging to main
5. If you're unsure about something, ask for help!

## Common Issues and Solutions

1. **Can't push changes?**

   - Make sure you've committed all changes
   - Pull the latest changes first
   - Check if you have the right permissions

2. **Merge conflicts?**

   - Don't panic! This is normal
   - Take your time to understand the changes
   - If unsure, ask for help

3. **Wrong branch?**
   - Use `git checkout branch-name` to switch branches
   - Make sure to commit or stash your changes first

## Useful links

- [Learn Git Branching](https://learngitbranching.js.org/)

## Need Help?

If you encounter any issues:

1. Check this guide first
2. Ask your team members
3. Use GitHub's documentation
4. Contact your instructor

Remember: Everyone was a beginner once. Don't hesitate to ask questions!
