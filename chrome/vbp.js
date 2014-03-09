function setAuthorPostBackgroundColor(color)
{
    var postContainer = document.getElementsByClassName('wbbThreadPostList messageList jsClipboardContainer');
    if (postContainer.length > 0)
    {
        var threadCreatorPostsli = postContainer[0].getElementsByClassName('marginTop messageGroupStarter');
        for (i = 0; i < threadCreatorPostsli.length; i++)
        {
            threadCreatorPostsli[i].getElementsByTagName('article') [0].style.backgroundColor = color;
        }
    }
}

function setLogoLink(dest)
{
    var Logo = document.getElementById('logo') .getElementsByTagName('a') [0];
    Logo.href = dest;
}

setAuthorPostBackgroundColor('#FFDDB7');
setLogoLink('http://www.vb-paradise.de/index.php/BoardList/');