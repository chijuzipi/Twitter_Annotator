Parse.initialize("Jbz8IatuSOpr7xmnNXBpnCcN1cj2ox9sPzsqggak","anMcouVSWbzeHoJmFJBcJYrmg8XtzUatOt7hrgJX");

  $(document).ready(function(){
    
    $("body").click(function(){

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
              createHtmlElement(tweet_id, user_name);
              return;
              //ParseSave(user_name, tweet_id);
            }
          }
      }
        
    });
  });

  function ParseSave(user_name, tweet_id){
    var OpinionObject = Parse.Object.extend("OpinionObject");
    var opinion = new OpinionObject();
    opinion.save({Tweet_ID:tweet_id,
                      Tweet_UserName:user_name},{
                        success: function(opinion) {
                        // Execute any logic that should take place after the object is saved.
                          alert('New tweet saved');
                        },
                        error: function(opinion, error) {
                          alert('Failed to create new object, with error code: ' + error.message);
                        }
                        });
   }

  function createHtmlElement(id, name){
    var div = document.createElement("div");
    div.setAttribute("id", "common");
    var tweet_id = document.createTextNode(id);
    var user_name = document.createTextNode(name);
    div.appendChild(tweet_id);
    div.appendChild(user_name);
    document.body.appendChild(div);
    div.style.visibility = "hidden";
    //console.log(document.getElementById("common").childNodes[0]);
    
    }
    
    
                     
