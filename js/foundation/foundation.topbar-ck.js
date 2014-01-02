/*jslint unparam: true, browser: true, indent: 2 */(function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"4.0.0",settings:{index:0,stickyClass:"sticky",custom_back_text:!0,back_text:"Back",init:!1},init:function(n,r,i){var s=this;this.scope=n||this.scope;typeof r=="object"&&e.extend(!0,this.settings,r);if(typeof r!="string"){e("nav.top-bar").each(function(){s.settings.$w=e(t);s.settings.$topbar=e(this);s.settings.$section=s.settings.$topbar.find("section");s.settings.$titlebar=s.settings.$topbar.children("ul").first();s.settings.$topbar.data("index",0);var n=e("<div class='top-bar-js-breakpoint'/>").insertAfter(s.settings.$topbar);s.settings.breakPoint=n.width();n.remove();s.assemble();s.settings.$topbar.parent().hasClass("fixed")&&e("body").css("padding-top",s.outerHeight(s.settings.$topbar))});s.settings.init||this.events();return this.settings.init}return this[r].call(this,i)},events:function(){var n=this;e(this.scope).on("click.fndtn.topbar",".top-bar .toggle-topbar",function(t){var r=e(this).closest(".top-bar"),i=r.find("section, .section"),s=r.children("ul").first();n.settings.$topbar.data("height")||n.largestUL();t.preventDefault();n.breakpoint()&&r.toggleClass("expanded").css("min-height","");if(!r.hasClass("expanded")){i.css({left:"0%"});i.find(">.name").css({left:"100%"});i.find("li.moved").removeClass("moved");r.data("index",0)}}).on("click.fndtn.topbar",".top-bar .has-dropdown>a",function(t){var r=e(this).closest(".top-bar"),i=r.find("section, .section"),s=r.children("ul").first();(Modernizr.touch||n.breakpoint())&&t.preventDefault();if(n.breakpoint()){var o=e(this),u=o.closest("li");r.data("index",r.data("index")+1);u.addClass("moved");i.css({left:-(100*r.data("index"))+"%"});i.find(">.name").css({left:100*r.data("index")+"%"});o.siblings("ul").height(r.data("height")+n.outerHeight(s,!0));r.css("min-height",r.data("height")+n.outerHeight(s,!0)*2)}});e(t).on("resize.fndtn.topbar",function(){this.breakpoint()||e(".top-bar").css("min-height","")}.bind(this));e(this.scope).on("click.fndtn",".top-bar .has-dropdown .back",function(t){t.preventDefault();var n=e(this),r=n.closest(".top-bar"),i=r.find("section, .section"),s=n.closest("li.moved"),o=s.parent();r.data("index",r.data("index")-1);i.css({left:-(100*r.data("index"))+"%"});i.find(">.name").css({left:100*r.data("index")+"%"});r.data("index")===0&&r.css("min-height",0);setTimeout(function(){s.removeClass("moved")},300)})},breakpoint:function(){return e(t).width()<=this.settings.breakPoint||e("html").hasClass("lt-ie9")},assemble:function(){var t=this;this.settings.$section.detach();this.settings.$section.find(".has-dropdown>a").each(function(){var n=e(this),r=n.siblings(".dropdown"),i=e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');t.settings.custom_back_text==1?i.find("h5>a").html("&laquo; "+t.settings.back_text):i.find("h5>a").html("&laquo; "+n.html());r.prepend(i)});this.settings.$section.appendTo(this.settings.$topbar);this.sticky()},largestUL:function(){var t=this.settings.$topbar.find("section ul ul"),n=t.first(),r=0,i=this;t.each(function(){e(this).children("li").length>n.children("li").length&&(n=e(this))});n.children("li").each(function(){r+=i.outerHeight(e(this),!0)});this.settings.$topbar.data("height",r)},sticky:function(){var n="."+this.settings.stickyClass;if(e(n).length>0){var r=e(n).length?e(n).offset().top:0,i=e(t),s=this.outerHeight(e("nav.top-bar"))+20;i.scroll(function(){if(i.scrollTop()>=r){e(n).addClass("fixed");e("body").css("padding-top",s)}else if(i.scrollTop()<r){e(n).removeClass("fixed");e("body").css("padding-top","0")}})}},off:function(){e(this.scope).off(".fndtn.topbar");e(t).off(".fndtn.topbar")}}})(Foundation.zj,this,this.document);