window.onload = function() {
  var day = localStorage.getItem("day")
  $("#followers").text(localStorage.getItem("score"))
  $("#day").text(JSON.parse(day))
  var userPosts = firebase.database().ref()
  userPosts.once('value').then(function(snapshot) {
    var userPostsData = snapshot.val().userPosts
    $("#main").append(`<div class="post">
    <h1> Choose a caption for this picture </h1>
    <img class="postimg" src="${userPostsData[day].image}" alt="">
    <p id="followerResult" style=" font-weight: bold;"> </p>
    <div id="captionChoice" style="display:block;">
      <button class="userPostCaption" onClick="worstCaption()"> ${userPostsData[day].caption[2]} </button>
      <button class="userPostCaption" onClick="bestCaption()"> ${userPostsData[day].caption[0]} </button>
      <button class="userPostCaption" onClick="okayCaption()"> ${userPostsData[day].caption[1]} </button>
    </div>
  </div>`)
})
}

function nextDay() {
  localStorage.setItem("day", JSON.parse(localStorage.getItem("day")) + 1)
  location.reload();
}

function goHome() {
  window.location="index.html"
  localStorage.setItem("day", JSON.parse(localStorage.getItem("day")) + 1)

}

function worstCaption() {
  $("#captionChoice").remove();
  var followerChange = 20 + Math.floor((Math.random() * 10))
  console.log(followerChange)
  $("#followerResult").text("+" + followerChange + " followers! Could be better.");
  $("#followerResult").append(`<button class="nextDay" onClick="goHome()"> Go to next day. View new posts </button>`);
  localStorage.setItem("score", JSON.parse(localStorage.getItem("score")) + followerChange)

}

function bestCaption() {
  $("#captionChoice").remove();
  var followerChange = 500 + Math.floor((Math.random() * 1000))
  console.log(followerChange)
  $("#followerResult").text("+" + followerChange + " followers! Great choice!");
  $("#followerResult").append(`<button class="nextDay" onClick="goHome()"> Go to next day. View new posts </button>`);
  localStorage.setItem("score", JSON.parse(localStorage.getItem("score")) + followerChange)


}

function okayCaption() {
  $("#captionChoice").remove();
  var followerChange = 500 + Math.floor((Math.random() * 174))
  console.log(followerChange)
  $("#followerResult").text("+" + followerChange + " followers! Not bad!");
  $("#followerResult").append(`<button class="nextDay" onClick="goHome()"> Go to next day. View new posts </button>`);
  localStorage.setItem("score", JSON.parse(localStorage.getItem("score")) + followerChange)

}
