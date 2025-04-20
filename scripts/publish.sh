#!/bin/bash

# Run this script from package.json via `npm run shipit`.

# Prevent the script from exiting happily if subsequent commands fail.
set -e

package_name=$(node -p "require('./package.json').name")

username_expected="ericcarraway"
username_actual=$(npm whoami)

registry_expected="https://registry.npmjs.org/"
registry_actual=$(npm config get registry)

error_exit() {
  echo "$1" >&2
  exit 255
}

# Verify that I'm logged in to the correct account.
if [ "${username_actual}" != "${username_expected}" ]; then
  error_exit "publish.sh must be run as user: ${username_expected}\nYou are currently ${username_actual}"
fi

# Verify that I'm using the correct registry.
if [ "${registry_actual}" != "${registry_expected}" ]; then
  error_exit "publish.sh must be run with registry: ${registry_expected}\nYour current registry is ${registry_actual}"
fi

echo "OK"

# Retrieve the package version using Node.
version=$(node -p "require('./package.json').version")
echo "Publishing version: $version"

# Because the repository has a scope, we need to slightly adjust the `npm publish` command.
# Set the base publish arguments.
publish_args="--access public"

# If the version string contains "beta", append the beta tag.
if [[ "$version" == *"beta"* ]]; then
  publish_args="$publish_args --tag beta"
fi

echo "Using npm publish args: '$publish_args'"

# Publish the package with the determined arguments.
npm publish $publish_args

echo "- - -"
echo "Package published successfully: https://www.npmjs.com/package/${package_name}"
