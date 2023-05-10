function getApiKey(getApiKeyCallback) {
  var user = 'chat6';
  var pass = 'xhrgbczc0421';
  $.getJSON('https://'+user+':'+pass+'@neocities.org/api/key', function(res) {
    console.log(res);
    getApiKeyCallback(res);
  });
}
