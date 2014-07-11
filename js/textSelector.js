$(document).ready(function(){
  $("body").mouseup(function(){
    var tweet = $(".js-tweet-text");
    var attr = $(".time");
    if (window.getSelection) {  // IE before version 9 cannot use this function
        var selRange = window.getSelection ();
        for(i = 0; i < tweet.length; i++){
          if(selRange.containsNode(tweet[i], true)){
            var childNode = attr[i].children[0];
            var hrefString = childNode.getAttribute('href').toString();
            var hrefList = hrefString.split("/");
            var user_name = hrefList[3]; 
            var tweet_id = hrefList[5];
            console.log("tweet id is :",tweet_id, "user name is:", user_name);
          }
        }
    }
  });
});

