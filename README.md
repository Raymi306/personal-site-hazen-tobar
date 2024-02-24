# Hazen Tobar Personal Site
## Resources
- [Zola Documentation](https://www.getzola.org/documentation/getting-started/overview/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [CSS Tricks - Responsive Menu Concepts](https://css-tricks.com/responsive-menu-concepts/)
## How to Use
`cd ~/projects/personal-site-hazen-tobar`
- type `zola serve` to build locally
- 'git pull' before working on code
- 'git commit -am "My commit message"' to commit changes
- 'git push' to push to github

Homepage slide labels
- /projects/personal-site-hazen-tobar/static/index.js

Changing recent project photos (most recent project 01)
	- 3 photos per project renamed 01, 02, 03, etc. placed in recent/01/01, recent/01/02, recent/01/03 etc respectively
	- edit index.md in folder of recent project and each individual new photo; change title to project title
	- change project title in static/index.js
	- edit templates/index.html to show title of newest project
