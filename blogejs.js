function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    var newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;

    document.querySelector(".comment-list").appendChild(newComment);

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  });
