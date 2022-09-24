
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    var btn_view = $('#letter');
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open').removeClass('close');
        btn_view.css("display","inline")

    }
    function navto(){
        window.location.href = "letter.html"
}