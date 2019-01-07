var Profile=function(){var e,t,r,o,a,n,i=$("#page-loader"),l='<div class="preloader pls-white"><svg class="pl-circular" viewBox="25 25 50 50"><circle class="plc-path" cx="50" cy="50" r="20"></circle></svg></div>',c=null,s={urlApi:"/api/User/",urlApiUpdateBasicInformation:"UpdateBasicInformation",urlApiUpdateSummary:"UpdateSummary",urlApiUploadPicture:"UpdateProfilePicture",urlApiUpdateInvoiceData:"UpdateInvoiceData",textMax:140},p={UpdateAboutInfo:"/api/User/UpdateAboutInfo",UpdateSummaryInfo:"/api/User/UpdateSummaryInfo",GetUserInfo:"/api/User/GetUserInfo"},u=function(){i.show()},d=function(){i.hide()},f=function(){$(window).scroll(function(e){var t=$(window).scrollTop();t>=200?$("div.scrollTop").fadeIn():t<200&&$("div.scrollTop").fadeOut()}),$("#scrollTop").on("click",function(e){$("html, body").animate({scrollTop:0},"slow")})},m=function(){function n(){function a(){setTimeout(function(){d.text(u),$(c).removeClass("disabled")},800)}var n=!1;if(""===e.val()?(e.parent().parent().addClass("has-error"),n=!0):e.parent().parent().hasClass("has-error")&&e.parent().parent().removeClass("has-error"),""===o.val()?(o.parent().parent().addClass("has-error"),n=!0):o.parent().parent().hasClass("has-error")&&o.parent().parent().removeClass("has-error"),""===t.val()?(t.parent().parent().next().removeClass("hidden"),n=!0):t.parent().parent().next().addClass("hidden"),""===r.val()?(r.parent().parent().next().removeClass("hidden"),n=!0):r.parent().parent().next().addClass("hidden"),!n){d.html(l);var i={Username:e.val().trim(),Sector:t.val().trim(),Country:r.val().trim(),City:o.val().trim(),Summary:""};$(c).addClass("disabled"),ApiGenially.executeCall(i,p.UpdateAboutInfo,"POST",a)}}function i(){function e(){setTimeout(function(){d.text(u),$(c).removeClass("disabled")},800)}var t=!1;if(""===a.val()?(a.parent().parent().addClass("has-error"),t=!0):a.parent().parent().hasClass("has-error")&&a.parent().parent().removeClass("has-error"),!t){d.html(l);var r={Username:"",Sector:"",Country:"",City:"",Summary:a.val().trim()};$(c).addClass("disabled"),ApiGenially.executeCall(r,p.UpdateSummaryInfo,"POST",e)}}var c=this,s=$(this).attr("data-process"),u=$(this).text().trim(),d=$(this);if(null!==s)switch(s){case"about":n();break;case"summary":i();break;default:return}},h=function(){function e(e){t.selectpicker("val",e.sector),r.selectpicker("val",e.Country)}ApiGenially.executeCall("",p.GetUserInfo,"GET",e)},y=function(e){c=$("#profileCropContainer").croppie({viewport:{width:150,height:150,type:"circle"},boundary:{width:150,height:150},mouseWheelZoom:!0}),c.croppie("bind",{url:e})},v=function(){$("#previewProfilePicture").hide(),$("#user-name").hide(),$("#buttonsPicture").show();var e=$("#profilePicture").attr("src");y(e),$("#profileCropContainer").show(),$(".cr-slider-wrap").hide(),$("#saveChangePhoto").hide()},C=function(){c.croppie("destroy"),$("#profileCropContainer").hide(),$("#buttonsPicture").hide(),$("#user-name").show(),$("#previewProfilePicture").show()},w=function(e){function t(){return $.ajax({url:s.urlApi+s.urlApiUploadPicture,type:"POST",data:n,cache:!1,contentType:!1,headers:{Accept:"*/*"},processData:!1})}function r(e){$("#profilePicture").attr("src",e),notify.message=locale.profile.ImageUploaded,notify.type="success",notify.show(),C()}function o(e){notify.message=locale.profile.GenericError,notify.type="danger",notify.show()}var a=helper.cleanData64(e),n=new FormData,i=a,l=document.getElementById("fileUpload"),c=l.files[0];n.append("opmlFile",i),n.append("mimeType",c.type),t().done(r).fail(o)},g=function(){0!==document.getElementById("fileUpload").files.length&&c.croppie("result",{type:"canvas",size:"viewport"}).then(function(e){w(e)})},U=function(){$("#editPicture").click(v),$("#cancelChangePhoto").click(C),$("#saveChangePhoto").click(g),$(".fileinput").on("change.bs.fileinput",function(e){e.stopPropagation();var t=$("#inputPicture").find("img").attr("src");return c.croppie("destroy"),y(t),$(".cr-slider-wrap").show(),$("#saveChangePhoto").show(),!1})},P=function(){n.click(m),U()},I=function(){e=$(document.getElementById("profile-username")),t=$(document.getElementById("profile-sector")),r=$(document.getElementById("profile-country")),o=$(document.getElementById("profile-city")),a=$(document.getElementById("profile-about")),n=$(".profile-update"),helper.beautifulInputText(),helper.wavesButtons(),f(),P(),t.selectpicker(),r.selectpicker(),h(),$(".contracted-logo").click(function(){$("html, body").animate({scrollTop:0},"slow")}),d()};return{initialize:I,showLoader:u,hideLoader:d}}(),ApiGenially=function(){function e(e,t,r,o,a){function n(e,t,r){"timeout"===t&&swal({title:locale.error.timeoutTitle,text:locale.error.timeoutDescription,type:"warning",confirmButtonText:locale.error.timeoutButton,confirmButtonColor:"#079dac"})}function i(e,t,r){return 401===e.status?void location.reload():void("timeout"===t&&swal({title:locale.error.timeoutTitle,text:locale.error.timeoutDescription,type:"warning",confirmButtonText:locale.error.timeoutButton,confirmButtonColor:"#079dac"}))}function l(){return $.ajax({data:e,url:t,type:r,contentType:"application/json; charset=utf-8"})}"undefined"==typeof o&&(o=n),"undefined"==typeof a&&(a=i),"GET"!==r&&(e=JSON.stringify(e)),l().done(o).fail(a)}return{executeCall:e}}();$(document).ready(function(){Profile.initialize()}),$(window).scroll(function(){var e=$(window).scrollTop(),t=$("#header");e>20?t.addClass("contracted"):t.removeClass("contracted"),e>180?t.children(".brand").addClass("contracted"):t.children(".brand").removeClass("contracted")});