var tab=function(){var t=document.querySelectorAll(".tabs-nav-contacts__item"),a=document.querySelectorAll(".tabs-content-contacts");function c(){t.forEach((function(t){t.classList.remove("tabs-nav-contacts__item_active")})),this.classList.add("tabs-nav-contacts__item_active"),function(t){a.forEach((function(a){a.classList.contains(t)?a.classList.add("tabs-nav-contacts__item_active"):a.classList.remove("tabs-nav-contacts__item_active")}))}(this.getAttribute("data-tab-name"))}t.forEach((function(t){t.addEventListener("click",c)}))};tab();