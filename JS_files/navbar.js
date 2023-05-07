let navbar = document.createElement("nav");
navbar.setAttribute("class","sidebar close");
document.querySelector("body").prepend(navbar);

let header = document.createElement("header");
navbar.append(header);

let div_image_text = document.createElement("div");
div_image_text.setAttribute("class","image-text");
header.append(div_image_text);

let div_text_logo_text = document.createElement("div");
div_text_logo_text.setAttribute("class","text logo-text");
div_image_text.append(div_text_logo_text);

let span_name = document.createElement("span");
span_name.setAttribute("class","name");
span_name.innerHTML = "Pet Mall";
div_text_logo_text.append(span_name);

let span_proffesion = document.createElement("span");
span_proffesion.setAttribute("class","profession");
span_proffesion.innerHTML = "E-commerce";
div_text_logo_text.append(span_proffesion);

let i_toggle = document.createElement("i");
i_toggle.setAttribute("class","bx bx-chevron-right toggle");
header.append(i_toggle);

let div_menu_bar = document.createElement("div");
div_menu_bar.setAttribute("class","menu-bar");
navbar.append(div_menu_bar);

let div_menu = document.createElement("div");
div_menu.setAttribute("class","menu");
div_menu_bar.append(div_menu);

let li_search_box = document.createElement("li");
li_search_box.setAttribute("class","search-box");
div_menu.append(li_search_box);

let i_search_icon = document.createElement("i");
i_search_icon.setAttribute("class","bx bx-search icon");
li_search_box.append(i_search_icon);


let input_search = document.createElement("input");
input_search.setAttribute("type","text");
input_search.setAttribute("placeholder","Search...");
li_search_box.append(input_search);

let ul_menu_links = document.createElement("ul");
ul_menu_links.setAttribute("class","menu-links");
div_menu.append(ul_menu_links);

let li_nav_link1 = document.createElement("li");
li_nav_link1.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link1);

let a_home_page = document.createElement("a")
a_home_page.setAttribute("href","#")
li_nav_link1.append(a_home_page)

let i_home_alt_icon = document.createElement("i")
i_home_alt_icon.setAttribute("class","bx bx-home-alt icon");
a_home_page.append(i_home_alt_icon);

let span_home_alt_icon = document.createElement("i")
span_home_alt_icon.setAttribute("class","text nav-text");
span_home_alt_icon.innerHTML = "Home";
a_home_page.append(span_home_alt_icon);

let li_nav_link2 = document.createElement("li");
li_nav_link2.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link2);

let a_sell_page = document.createElement("a");
a_sell_page.setAttribute("href","#");
li_nav_link2.append(a_sell_page);

let i_bar_chart_alt_2_icon = document.createElement("i");
i_bar_chart_alt_2_icon.setAttribute("class","bx bx-bar-chart-alt-2 icon");
a_sell_page.append(i_bar_chart_alt_2_icon);

let span_bar_chart_alt_2_icon = document.createElement("i")
span_bar_chart_alt_2_icon.setAttribute("class","text nav-text");
span_bar_chart_alt_2_icon.innerHTML = "Sell Pet";
a_sell_page.append(span_bar_chart_alt_2_icon);

let li_nav_link3 = document.createElement("li");
li_nav_link3.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link3);

let a_Order_details = document.createElement("a");
a_Order_details.setAttribute("href","#");
li_nav_link3.append(a_Order_details);

let i_bell_icon = document.createElement("i");
i_bell_icon.setAttribute("class","bx bx-bell icon");
a_Order_details.append(i_bell_icon);

let span_bell_icon = document.createElement("i")
span_bell_icon.setAttribute("class","text nav-text");
span_bell_icon.innerHTML = "Order detials";
a_Order_details.append(span_bell_icon);

let li_nav_link4 = document.createElement("li");
li_nav_link4.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link4);

let a_Cart = document.createElement("a");
a_Cart.setAttribute("href","#");
li_nav_link4.append(a_Cart);

let i_cart_add_icon = document.createElement("i");
i_cart_add_icon.setAttribute("class","bx bx-cart add icon");
a_Cart.append(i_cart_add_icon);

let span_cart_add_icon = document.createElement("i")
span_cart_add_icon.setAttribute("class","text nav-text");
span_cart_add_icon.innerHTML = "About us";
a_Cart.append(span_cart_add_icon);

let li_nav_link5 = document.createElement("li");
li_nav_link5.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link5);

let a_Profile = document.createElement("a");
a_Profile.setAttribute("href","#");
li_nav_link5.append(a_Profile);

let i_user_icon = document.createElement("i");
i_user_icon.setAttribute("class","bx bx-user icon");
a_Profile.append(i_user_icon);

let span_user_icon = document.createElement("i");
span_user_icon.setAttribute("class","text nav-text");
span_user_icon.innerHTML = "Account";
a_Profile.append(span_user_icon);

let li_nav_link6 = document.createElement("li");
li_nav_link6.setAttribute("class","nav-link");
ul_menu_links.append(li_nav_link6);

let a_About_us = document.createElement("a");
a_About_us.setAttribute("href","../pages/sell-page.html");
li_nav_link6.append(a_About_us);

let i_pie_chart_alt_icon = document.createElement("i");
i_pie_chart_alt_icon.setAttribute("class","bx bx-pie-chart-alt icon");
a_About_us.append(i_pie_chart_alt_icon);

let span_pie_chart_alt_icon = document.createElement("i");
span_pie_chart_alt_icon.setAttribute("class","text nav-text");
span_pie_chart_alt_icon.innerHTML = "Wallets";
a_About_us.append(span_pie_chart_alt_icon);

let div_bottom_content = document.createElement("div");
div_bottom_content.setAttribute("class","bottom-content");
div_menu_bar.append(div_bottom_content);

let li_mode_switch = document.createElement("li");
li_mode_switch.setAttribute("class","mode");
div_bottom_content.append(li_mode_switch);

let div_sun_moon = document.createElement("div");
div_sun_moon.setAttribute("class","sun-moon");
li_mode_switch.append(div_sun_moon);

let i_moon_icon = document.createElement("i")
i_moon_icon.setAttribute("class","bx bx-moon icon moon")
div_sun_moon.append(i_moon_icon);

let i_sun_icon = document.createElement("i")
i_sun_icon.setAttribute("class","bx bx-sun icon sun")
div_sun_moon.append(i_sun_icon);

let span_mode_text = document.createElement("span");
span_mode_text.setAttribute("class","mode-text text");
span_mode_text.innerText = "Dark mode";
li_mode_switch.append(span_mode_text);

let div_toggle_switch = document.createElement("div");
div_toggle_switch.setAttribute("class","toggle-switch");
li_mode_switch.append(div_toggle_switch);

let span_switch = document.createElement("span");
span_switch.setAttribute("class","switch");
div_toggle_switch.append(span_switch);




const body = document.querySelector('body'),
section = document.querySelector('section'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");
section.classList.toggle("dark");

if(body.classList.contains("dark")){
modeText.innerText = "Light mode";
}else{
modeText.innerText = "Dark mode";

}
});