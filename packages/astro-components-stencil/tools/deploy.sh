cat tools/astro-components.txt
set -e
echo
echo Running deployment script ...

npm version patch

$version = node -p "require('./package.json').version"
echo  "Update package version to ${$version}"
# git add -A
# git commit -m

