
async function getallBookmarks() {
    const bookmark = await chrome.bookmarks.getTree();
    console.log(bookmark)
}

getallBookmarks();