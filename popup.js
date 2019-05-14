function debugIt() {
  chrome.tabs.getCurrent(function (tab) {
    console.log(tab);
  //Your code below...
  var tabUrl = encodeURIComponent(tab.url);
  var tabTitle = encodeURIComponent(tab.title);
  var myNewUrl = "https://www.mipanga.com/Content/Submit?url=" + tabUrl + "&title=" + tabTitle;

  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
});
}

function getChangedUrl(param) {

}

document.addEventListener('DOMContentLoaded', function() {
  var debug = document.getElementById('debug');
  var refresh = document.getElementById('refresh');
  var error = document.getElementById('error');

  debug.addEventListener('click', function() {
    chrome.runtime.sendMessage({ msg: "debug" })
  });

  refresh.addEventListener('click', function() {
    chrome.runtime.sendMessage({ msg: "refresh" })
  });

  error.addEventListener('click', function() {
    chrome.runtime.sendMessage({ msg: "error" })
  });
});
