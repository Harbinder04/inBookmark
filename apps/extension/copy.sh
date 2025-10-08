#!/bin/sh

SRC='/home/harbinder04/extension/bookmark_t/apps/extension/dist'
DEST='/mnt/d/extension/'

mkdir -p "$DEST"

# Copy files
rsync -av --delete "$SRC/" "$DEST/"

echo "Extension copied to $DEST"
