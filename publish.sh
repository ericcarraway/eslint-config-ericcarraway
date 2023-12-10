#!/bin/bash

# Run this script from package.json via `npm run shipit`.

# Prevent the script from exiting happily if subsequent commands fail.
set -e

package_name="@percuss.io/eslint-config-ericcarraway"

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

# Because the repository has a scope, we need to slightly adjust the `npm publish` command.
npm publish --access public

echo "- - -"
echo "Package published successfully: https://www.npmjs.com/package/${package_name}"
