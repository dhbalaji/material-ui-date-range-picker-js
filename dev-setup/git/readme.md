To setup pre-commit hook that stops accidental `console.log` getting committed to your code, follow the below steps.

1. Goto root of your project in file explorer
2. Enable setting that allows you to show hidden folders
3. Go inside `.git/hooks/` folder
4. Replace contents of `pre-commit`. Just make sure there wasn't any important script inside the `pre-commit` file.

> Disclaimer: this pre-commit was tested only on windows 10. And script was compiled from multiple blogs.