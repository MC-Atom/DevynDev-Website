var coll = document.getElementsByClassName("music-expandable");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var caretClass;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
      caretClass = this.querySelector(".bi-caret-down");
      caretClass.classList.remove("bi-caret-down");
      caretClass.classList.add("bi-caret-right");

    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      caretClass = this.querySelector(".bi-caret-right");
      caretClass.classList.remove("bi-caret-right");
      caretClass.classList.add("bi-caret-down");
    }

  });
}