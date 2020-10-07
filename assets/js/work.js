// this is button for show side nav
const get_show_btn = document.getElementById("showSideNav");
// this is close btn for side nav
const get_close_btn = document.getElementById("closeSideNav");
// get sideNav container
const get_sideNav = document.getElementById("sideNav_wrapper");
// get main content wrapper
const get_main_wrapper = document.getElementById("main_wrapper");

// for display side bar nav

function showSideBar() {
  get_sideNav.style.display = "flex";
  get_main_wrapper.style.marginLeft = "275px";
  get_show_btn.style.visibility = "hidden";
}

function hideSideBar() {
  get_sideNav.style.display = "none";
  get_main_wrapper.style.marginLeft = "0px";
  get_show_btn.style.visibility = "visible";
}
