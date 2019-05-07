function getUrlFormatted(url, type) {
  var urlToFormat = new URL(url);
  urlToFormat.searchParams.set(type, 1);
  return urlToFormat.toString();
}

function reload(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    chrome.tabs.update(tab.id, {url: getUrlFormatted(url, type)});
  });
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse){
      switch(message.msg) {
        case 'debug':
          reload(message.msg);
        break;
        case 'refresh':
          reload('refreshLanguage');
        break;
        default:
        break;
      }
    }
);
