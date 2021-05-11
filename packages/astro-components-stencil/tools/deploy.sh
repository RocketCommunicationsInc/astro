cat tools/astro-components.txt
set -e
echo
echo Running deployment script ...

npm version patch

git add -A
git commit -m "Update package version to ${node -p "require('./package.json').version"}"

