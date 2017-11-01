API_REV=$1
ARCHIVE_URL=$2
ROOT=$PWD

ARCHIVE_SRC=$ARCHIVE_URL/$API_REV.tar.gz
ARCHIVE_DIR=$ROOT/tmp/jsdoc/$API_REV
ARCHIVE_NAME=archive.tar.gz
DEST=$ROOT/tmp/npm/api

mkdir -p $DEST $ARCHIVE_DIR
rm -r $DEST/*
pushd $ARCHIVE_DIR > /dev/null

[ -f $ARCHIVE_NAME ] || {
  wget $ARCHIVE_SRC -O $ARCHIVE_NAME || exit $?
}

tar -xf $ARCHIVE_NAME

pushd interact.js* > /dev/null

rm package.json
cp -r img $DEST/img

cd docs

DEST=$DEST npx jsdoc -c $ROOT/jsdoc/jsdoc.conf.js

popd > /dev/null
popd > /dev/null
