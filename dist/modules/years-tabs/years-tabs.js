var tab=function(){var t=document.querySelectorAll(".tabs-nav__item"),a=document.querySelectorAll(".tabs-content");function e(){t.forEach((function(t){t.classList.remove("tabs-nav__item_active")})),this.classList.add("tabs-nav__item_active"),function(t){a.forEach((function(a){a.classList.contains(t)?a.classList.add("tabs-nav__item_active"):a.classList.remove("tabs-nav__item_active")}))}(this.getAttribute("data-tab-name"))}t.forEach((function(t){t.addEventListener("click",e)}))};tab();