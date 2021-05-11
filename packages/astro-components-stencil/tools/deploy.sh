cat tools/astro-components.txt
set -e
echo
echo Running components deploment ...

npm run build
# npm version patch

version=$(node -p "require('./package.json').version")
message="Update package version to ${version}"

echo ${message}

# git add -A
# git commit -m "${message}"
# git push

# npm publish
echo Components deployment finished!
