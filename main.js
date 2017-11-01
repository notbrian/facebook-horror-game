window.onload = function() {
  if (localStorage.getItem("day") === null) {
    localStorage.setItem("day", 0)
    localStorage.setItem("score", 0)

  }
  if ((localStorage.getItem("day") == 12) && (localStorage.getItem("score") < 10000) )
  {
    alert("You didn't make it to 10,000 followers in 12 days! Scroll to the bottom of the page to reset.")
  }

  if (localStorage.getItem("score") > 10000) {
    alert("Congratulations you made it through! Scroll to the bottom of the page to reset.")
  }

  $("#followers").text(localStorage.getItem("score"))
  $("#day").text(localStorage.getItem("day"))

  var goodPosts = firebase.database().ref()
  goodPosts.once('value').then(function(snapshot) {
    var goodPostsData = snapshot.val().goodposts
    console.log(goodPostsData)
    for (var x = 0; x < (JSON.parse(localStorage.getItem("day")) + 1); x++) {
      $("#main").append(`<div class="post">
      <div class="postCreator">
        <img src="img/yourfriend.jpg" alt="" class="postContact">
        <p class="postCreatorText"> yourfriend${Math.floor(Math.random() * 1000)}</p>
      </div>
      <a href="${goodPostsData[x].image}" target="_blank">
      <img class="postimg" src="${goodPostsData[x].image}" alt="">
      </a>
      <div class="postInteraction" style="text-align:left; margin: 10px; margin-left: 20px;">
      <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
      </div>
      <p class="postCaption"> ${goodPostsData[x].caption} </p>
      <p class="likes"> ${Math.floor(goodPostsData[x].likes + (Math.random() * 47))} likes </p>

    </div>`)
    }
  });



  // <div class="postComments">
  //   ${
  //     goodPostsData[x].comments.map(function(x) {
  //       return `<p class="comment"><span style="font-weight: bold; margin-right: 5px;"> ${x.name}</span> ${x.text} <\p>`
  //     }).join("")
  //   }
  // </div>


}


function reset() {
  localStorage.setItem("day", 0)
  localStorage.setItem("score", 0)
  location.reload()
}
function nextDay() {
  localStorage.setItem("day", JSON.parse(localStorage.getItem("day")) + 1)
  location.reload();
}
