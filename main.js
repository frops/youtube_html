/**
 * @author ifrops <ifrops@gmail.com>
 *
 * Get HTML of YouTUbe video by URL
 * @param url
 * @param width
 * @param height
 * @param autoplay
 * @param fullscreen
 * @returns {XML|string|void}
 */
function youtube_html(url, width, height, autoplay, fullscreen) {
  if (fullscreen === undefined) fullscreen = 'true';
  if (autoplay === undefined) autoplay = 0;

  var reg = new RegExp("http(s?):\\/\\/(www\\.){0,1}youtube\\.com\\/watch\\?v=([^\\[]{11,110})", "g");
  var scriptaccess = 'always';
  var wmode = 'opaque';

  var template = '<object>' +
    '<param name="movie" value="http://www.youtube.com/v/$3">' +
    '<param name="allowFullScreen" value="true">' +
    '<param name="wmode" value="opaque">' +
    '<embed src="http$1://www.youtube.com/v/$3&playerapiid=$3&autoplay=' + autoplay + '" type="application/x-shockwave-flash" ' +
    (scriptaccess != '' ? 'allowscriptaccess="' + scriptaccess + '"' : '') +
    (fullscreen != '' ? 'allowfullscreen="' + fullscreen + '"' : '') +
    (wmode != '' ? 'wmode="' + wmode + '"' : '') +
    'width = "' + width + '" height="' + height + '">' +
    '</object>';

  return url.replace(reg, template);
}

var html = youtube_html("https://youtube.com/watch?v=B6sJ-AOfYYY", 425, 350, 1);
document.write(html);