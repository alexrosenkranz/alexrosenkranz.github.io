$(document).on('ready', function() {
    $(".modal-transparent").on('show.bs.modal', function() {
        setTimeout(function() {
            $(".modal-backdrop").addClass("modal-backdrop-transparent");
        }, 0);
    });
    $(".modal-transparent").on('hidden.bs.modal', function() {
        $(".modal-backdrop").addClass("modal-backdrop-transparent");
    });

    $(".modal-fullscreen").on('show.bs.modal', function() {
        setTimeout(function() {
            $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
        }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });

    $(document).on('click', '.portfolio-item', function() {
        var target = $(this).attr('data-target');
        console.log(target);
        switch (target) {
            case '#gargantuan':
                $(target).load('portfolio/gargantuan.html');
                break;
        }
    })

})