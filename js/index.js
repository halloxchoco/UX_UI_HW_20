console.log($)
let hoverOn = function(){
    console.log("hover on");
    $(this).children("div").removeClass("projTitle")
    $(this).children("div").addClass("projTitlehover")
    $(this).parent().addClass("projcolHover")
};
let hoverOff = function(
){
    console.log("hover off");
    $(this).children("div").removeClass("projTitlehover")
    $(this).children("div").addClass("projTitle")
    $(this).parent().removeClass("projcolHover")

    
};
$(".projLink").hover(hoverOn,hoverOff);
console.log("Ready!")
