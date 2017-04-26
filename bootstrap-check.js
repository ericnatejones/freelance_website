$('*').click(function (e) {
    if (e.target === this) { // prevent all ancestors being registered
        var tag = e.target.tagName.toLowerCase();
        var data = {
            tag: tag,
            index: $(tag).index(this)
        };
        // sending tracking data to server
        console.log(data);
    }
});
