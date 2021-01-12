chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
              urlContains: 'meet.google.com'
          }
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

})
chrome.browserAction.onClicked.addListener((tab) => {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, { file: 'inject.js' });
});



