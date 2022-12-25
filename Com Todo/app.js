let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("post");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // prevents the automatic clicking of the button after the refreshment pf page

  formValidation(); //when the button is clicked everytime button clicked.
});

let formValidation = () => {
  if (input.value == "") {
    msg.innerText = "Post cannot be empty"; //failure
  } else {
    msg.innerText = ""; //success
    acceptData();
  }
};

let data = {}; /// and store the  data that is entered by the user.

let acceptData = () => {
  //collect the input using this function
  data["text"] = input.value;

  createPost();
};

let createPost = () => {
  // data.text, here the post contains all the text that is needed to be shown
  post.innerHTML += `<div>
  <p>${data.text}</p>    
  <span class="option">
    <i  onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
    
    <i onClick="deletePost(this)" class="fa-sharp fa-solid fa-trash"></i>
    
  </span>

</div>
`; // here this will only make changes in the post that is clicked i.e. individual post
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  // here two parent element is there bcz first parentelement remove from the option and second   one remove from the div
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
