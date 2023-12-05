$(document).ready(function () {
    var currentIndex = 0;

    $(".btnUp").click(function () {
        moveSlide(-1);
    });

    $(".btnDown").click(function () {
        moveSlide(1);
    });

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + $(".box").length) % $(".box").length;
        var slidePosition = currentIndex * (-360) + "px";
        $(".imgList").css("transform", "translateY(" + slidePosition + ")");
    }

});


