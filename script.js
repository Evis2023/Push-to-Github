var posts = [
    Number(document.getElementById('nrLikes1').innerHTML),
    Number(document.getElementById('nrLikes2').innerHTML),
    Number(document.getElementById('nrLikes3').innerHTML)
]
var postsText = [
    document.getElementById('nrLikes1'),
    document.getElementById('nrLikes2'),
    document.getElementById('nrLikes3')
]
function addLikes(id) {
    posts[id] += 1;
    postsText[id].innerHTML = posts[id];
}
// nuk di ta bej kete te fundit, te lidh funksionin me vleren ne file 