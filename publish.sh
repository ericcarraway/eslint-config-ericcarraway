username_expected="ericcarraway"
username_actual=$(npm whoami)

# verify that I'm logged in to the correct account
if [ "$username_actual" != $username_expected ]; then
  echo "publish.sh must be run as user: $username_expected"
  echo "you are currently $username_actual"

  exit 255
fi

echo "OK"

exit;

# because the repository has a scope,
# we need to slightly adjust
# the `npm publish` command
npm publish --access public
