
const toggleButton = document.getElementsByClassName("toggle-btn");
const sidebar = document.getElementById('sidebar');

 function toggleSideBar(){
      sidebar.classList.toggle("close");
      toggleButton.classList.toggle("rotate");
 }


function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
}
