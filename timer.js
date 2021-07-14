 var imageArray = [
    "https://s13.postimg.org/fa1p792lv/community.png",
    "https://s13.postimg.org/3wf5w1s37/about.png",
    "https://s13.postimg.org/iuxkqh75f/events.png"
  ];
  var linkArray = [
    "index.php?page=Community",
    "index.php?page=About",
    "index.php?page=Events"
  ];
  
  var thisId=0;
  var image = document.getElementById("thisImgCentral");
  image.src = imageArray[thisId];

  var linkAvailable = false;
  image.onclick = function() {
  	// when clicked, jump to the appropriate page link
    // note, this will only work on your site that actually has those pages!!
    // here it will throw a "page not found - exception"
    if(linkAvailable)
      window.location.href = linkArray[thisId];
  	else
    	showMessage(linkArray[thisId]);
  }

  window.setInterval(function(){
    thisId = (thisId+1)%3;
    image.src = imageArray[thisId];
  },1500);        

  function showMessage(msg) {      
  	var a = document.createElement("a");
    a.innerHTML = "<br>" + msg;
    document.body.appendChild(a);      
  }
 
