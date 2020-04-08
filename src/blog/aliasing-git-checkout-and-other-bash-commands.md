---
title: How to Alias Git Checkout to Git Co and other Commands
date: "2020-04-08"
---

Ever since the original [Rails Tutorial](https://www.railstutorial.org/) we've needed `git checkout` to be aliased as `git co`. We run that command so often the saved keystrokes probably save a significant amount of time each year.

[Here's how we do it in 2020](https://stackoverflow.com/a/14489111/2628223). Simply add an alias to `~/.gitconfig` like so:

```bash
[alias]
    co = checkout
```

In the process we also found [a neat tutorial for all kinds of aliases](https://jonsuh.com/blog/git-command-line-shortcuts/) that you could set up in `~/.bashrc` or `~/.zshrc`. We added:

```bash
alias gaa='git add .'
alias gcm='git commit --message'
```

... since those are our two most common commands. We didn't add any other aliases since we don't like adding complexity to rarely used tasks.

Also, as one last pro-tip [here is a great post on zshrc / bashrc, etc. loading orders](https://medium.com/@rajsek/zsh-bash-startup-files-loading-order-bashrc-zshrc-etc-e30045652f2e). This is useful if you've ever found your changes don't seem to work... and remember:

```bash
source ~/.zshrc
```
