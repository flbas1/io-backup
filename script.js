$(document).ready(function () {
    $(".navbar a").click(function () {
        $(".navbar li").removeClass("active");
        $(this).parent().addClass("active");

        dest = 'div#x' + $(this).parent().attr('id');
        $('html, body').animate({
            scrollTop: $(dest).offset().top-60
        }, 1000);

        $(this).children().remove();
        $(this).after('<span class="sr-only">(current)</span>');

        if ($("button.navbar-toggle").attr("aria-expanded") === "true")
            $("button.navbar-toggle").click();
    });
});
