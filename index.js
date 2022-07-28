$(".game-container").hide();

$(".starting-btn").click(function () {
    $(".starting-container").fadeOut(900, function () {
        $(".starting-container").html("<h1>3</h1>").delay(900).fadeIn(1000).fadeOut(1000, function () {
            $(".starting-container").html("<h1>2</h1>").fadeIn(1000).fadeOut(1000, function () {
                $(".starting-container").html("<h1>1</h1>").fadeIn(1000).fadeOut(1000, function () {
                    $(".starting-container").html("<h1>Go</h1>").fadeIn(1000).fadeOut(1000);
                });
            });
        });
    });
});
