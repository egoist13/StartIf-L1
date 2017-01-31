$(window).ready(function(){
    $(".panel.panel-primary").hover(
        function() {
            var hBefore = $(this).height();
            var p = $(this).children(".panel-footer").children("p:first").addClass("less").removeClass("more");
            var hAfter = $(this).height();
            $(this).css('margin-bottom', hBefore - hAfter + "px");
        },
        function() {
            var p = $(this).children(".panel-footer").children("p:first").addClass("more").removeClass("less");
            $(this).css('margin-bottom', "20px");
        }
    );
});