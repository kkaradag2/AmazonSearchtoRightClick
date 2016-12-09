
function onClickHandler(info, tab) {

	x = JSON.stringify(info)
	x = info.selectionText;
	
	newURL = "http://www.amazon.com/s/ref=as_li_ss_tl?_encoding=UTF8&camp=1789&creative=390957&field-keywords=" + x 	+"&linkCode=ur2&tag=oneclickamz20-20&url=search-alias%3Daps&linkId=G5UUPU46REDXSIAF";
	
	chrome.tabs.create({ url: newURL });
	
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    //var title = "Search eBay %s '" + context + "' menu item";
	var title = "Search Amazon ' %s '";
	
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
	}
});
