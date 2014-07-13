Parse.initialize("Jbz8IatuSOpr7xmnNXBpnCcN1cj2ox9sPzsqggak","anMcouVSWbzeHoJmFJBcJYrmg8XtzUatOt7hrgJX");
  $(document).ready(function(){
    
    $("body").click(function(){
      createHtmlElements();
      var tweet = $(".js-tweet-text");
      var attr = $(".time");
      if (window.getSelection) {  // IE before version 9 cannot use this function
          var selRange = window.getSelection ();
          var select_text = selRange.toString();
          begin_offset = selRange.anchorOffset;
          end_offset = selRange.focusOffset;
          if (select_text.length != 0){

            for(i = 0; i < tweet.length; i++){
              if(selRange.containsNode(tweet[i], true)){
                var childNode = attr[i].children[0];
                var hrefString = childNode.getAttribute('href').toString();
                var hrefList = hrefString.split("/");
                var user_name = hrefList[3]; 
                var tweet_id = hrefList[5];
                //console.log("tweet id is :",tweet_id, "user name is:", user_name);
                setHtmlElements(tweet_id, user_name, select_text, begin_offset, end_offset);
                highLightText();
                return;
              //ParseSave(user_name, tweet_id);
              
          }
          }
          }

          }//end of if window get selection
        
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

  function highLightText(){
     
    var cssApplier;
    rangy.init();
    var classApplierModule = rangy.modules.ClassApplier || rangy.modules.CssClassApplier;
    
    if (rangy.supported && classApplierModule && classApplierModule.supported) {
        boldRedApplier = rangy.createCssClassApplier("italicYellowBg");
        boldRedApplier.toggleSelection();
        console.log("the text is highlighted");
        }
  }

  function createHtmlElements(){
    var div = document.createElement("div");
    div.setAttribute("id", "common");
    var tweet_id = document.createTextNode("");
    var user_name = document.createTextNode("");
    var select_text = document.createTextNode("");
    var begin_offset = document.createTextNode("");
    var end_offset = document.createTextNode("");
    div.appendChild(tweet_id);
    div.appendChild(user_name);
    div.appendChild(select_text);
    div.appendChild(begin_offset);
    div.appendChild(end_offset);
    document.body.appendChild(div);
    div.style.visibility = "hidden";
    
    }
    
  function setHtmlElements(id, name, text, begin, end){
    var div = document.getElementById("common");
    var list = div.childNodes; 
    list[0].innerHTML = id;
    list[1].innerHTML = name;
    list[2].innerHTML = text;
    list[3].innerHTML = begin;
    list[4].innerHTML = end;

    console.log(document.getElementById("common").childNodes[0].innerHTML);
    console.log(document.getElementById("common").childNodes[1].innerHTML);
    console.log(document.getElementById("common").childNodes[2].innerHTML);
    console.log(document.getElementById("common").childNodes[3].innerHTML);
    console.log(document.getElementById("common").childNodes[4].innerHTML);
    
    }
    
                     
