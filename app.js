function switchPage(whichPage){
  $(".page").hide();
  $(whichPage).show();
}
switchPage(".home-page-content")

$(".switch-to-home").click(function(){
  switchPage("#home-page-content")
})
$(".switch-to-page-1").click(function(){
  switchPage("#info-page-1-content")
})
$(".switch-to-page-2").click(function(){
  switchPage("#info-page-2-content")
})
$(".switch-to-page-3").click(function(){
  switchPage("#info-page-3-content")
})
$(".switch-to-page-4").click(function(){
  switchPage("#info-page-4-content")
})
$(".switch-to-page-5").click(function(){
  switchPage("#info-page-5-content")
})
$(".switch-to-page-6").click(function(){
  switchPage("#info-page-6-content")
})
