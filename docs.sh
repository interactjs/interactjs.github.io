API_REV=$1
ARCHIVE_URL=$2
ROOT=$PWD

ARCHIVE_SRC=$ARCHIVE_URL/$API_REV.tar.gz
ARCHIVE_DIR=$ROOT/tmp/dr.js/$API_REV
ARCHIVE_NAME=archive.tar.gz
DEST=$ROOT/tmp/npm/api

mkdir -p $DEST $ARCHIVE_DIR
pushd $ARCHIVE_DIR

[ -f $ARCHIVE_NAME ] || {
  wget $ARCHIVE_SRC -O $ARCHIVE_NAME
}

tar -xf $ARCHIVE_NAME

pushd interact.js*
sed -i \
  -e 's,index.html,'$DEST'/index.html.erb,' \
  -e 's,template,'$ROOT'/api-template,' \
  -e 's,3ddcd9f,'$API_REV',' \
  docs/dr.json

rm package.json
npm run _docs -- $PWD/docs/dr.json

popd
popd
