cat tools/astro-components.txt
set -e
echo
echo Running deployment script ...

# npm version patch

version=$(node -p "require('./package.json').version")
message="Update package version to ${version}"

echo ${message}

git add -A
git commit -m "${message}"

