var timer;
function updateClock() {
    $('.date_start_time').each(function() {
        var startDateTime = new Date( $(this).attr('data-date-time') );
        startStamp = startDateTime.getTime();
        newDate = new Date();
        newStamp = newDate.getTime();
        var diff = Math.round((newStamp - startStamp) / 1000);

        var d = Math.floor(diff / (24 * 60 * 60));

        diff = diff - (d * 24 * 60 * 60);
        var h = Math.floor(diff / (60 * 60));
        diff = diff - (h * 60 * 60);
        var m = Math.floor(diff / (60));
        diff = diff - (m * 60);
        var s = diff;

        $(this).parent().find("div.time-elapsed").html(d + "day(s), " + h + ":" + m + ":" + s);
    });
}

setInterval(updateClock, 1000);