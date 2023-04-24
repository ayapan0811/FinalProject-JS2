$(".review1").addClass("shownSlide"); //giving class for default
$(".review1").addClass("shown2Slides");
$(".review2").addClass("shown2Slides");

let firstRev = $(".review1");
let lastRev = $(".review4");

// START: slideshow for mobile & tablet version
$(".prevBtn").click(()=>{
    let shownRev = $(".shownSlide");
    if(firstRev.hasClass("shownSlide")){
        lastRev.addClass("shownSlide");
        firstRev.removeClass("shownSlide");
    }else{
        shownRev.prev().addClass("shownSlide");
        shownRev.removeClass("shownSlide");
    }
})

$(".nextBtn").click(()=>{
    let shownRev = $(".shownSlide");
    if(lastRev.hasClass("shownSlide")){
        firstRev.addClass("shownSlide");
        lastRev.removeClass("shownSlide");
    }else{
        shownRev.next().addClass("shownSlide");
        shownRev.eq(0).removeClass("shownSlide");
    }
})
// END: slideshow for mobile & tablet version
// START: slideshow for desktop version
$(".prevBtn").click(()=>{
    let shownRevs = $(".shown2Slides");
    $(".proBottom .slideShow").css("flex-direction","row");
    if(firstRev.hasClass("shown2Slides") && firstRev.next().hasClass("shown2Slides")){
        lastRev.addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
        $(".proBottom .slideShow").css("flex-direction","row-reverse")
    }else if(firstRev.hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        lastRev.prev().addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
    }else{
        shownRevs.eq(0).prev().addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
    }
})

$(".nextBtn").click(()=>{
    let shownRevs = $(".shown2Slides");
    $(".proBottom .slideShow").css("flex-direction","row");
    if(lastRev.prev().hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        firstRev.addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
        $(".proBottom .slideShow").css("flex-direction","row-reverse")
    }else if(firstRev.hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        firstRev.next().addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
    }else{
        shownRevs.eq(1).next().addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
    }
})
// END: slideshow for desktop version
