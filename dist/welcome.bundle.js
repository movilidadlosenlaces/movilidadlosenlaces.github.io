var Panel=function(){var e=$(".sector-selector"),t=$(document.getElementById("validateSectorChoose")),o=$(document.getElementById("startWorking")),a=$("#first-step"),s=$("#second-step"),c={updateSectorInfor:"/api/User/UpdateSectorInfo"},n=function(){$(".sector-selector").removeClass("active"),$(this).addClass("active"),t.addClass("selected-active"),i()},i=function(){function e(e){setTimeout(function(){a.removeClass("fadeInDown").addClass("fadeOutDown").delay(800).hide(),setTimeout(function(){s.addClass("fadeInDown").show(),setTimeout(function(){o.addClass("selected-active")},1e3)},1e3)},1e3)}var t=$(".sector-selector.active").length;if(0!==t){t=$(".sector-selector.active").attr("sector");var n={sector:t};ApiGenially.executeCall(n,c.updateSectorInfor,"POST",e)}},r=function(){e.click(n)},d=function(){r()};return{initialize:d}}();