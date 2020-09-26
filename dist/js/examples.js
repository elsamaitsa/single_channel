$(function () {

    /**
     * Some examples of how to use features.
     *
     **/

    var SohoExamle = {
        Message: {
            add: function (message, type) {
                var chat_body = $('.layout .content .chat .chat-body');
                if (chat_body.length > 0) {

                    type = type ? type : '';
                    message = message ? message : 'Lorem ipsum dolor sit amet.';

                    $('.layout .content .chat .chat-body .messages').append('<div class="message-item ' + type + '"><div class="message-content">' + message + '</div><div class="message-action">PM 14:25 ' + (type ? '<i class="ti-check"></i>' : '') + '</div></div>');

                    chat_body.scrollTop(chat_body.get(0).scrollHeight, -1).niceScroll({
                        cursorcolor: 'rgba(66, 66, 66, 0.20)',
                        cursorwidth: "4px",
                        cursorborder: '0px'
                    });
                }
            }
        }
    };

    setTimeout(function () {
        SohoExamle.Message.add();
    }, 1000);

    setTimeout(function () {
        // $('#disconnected').modal('show');
        $('#call').modal('show');
    }, 2000);

    $(document).on('submit', '.layout .content .chat .chat-footer form', function (e) {
        e.preventDefault();

        var input = $(this).find('input[type=text]');
        var message = input.val();

        message = $.trim(message);

        if (message) {
            SohoExamle.Message.add(message, 'outgoing-message');
            input.val('');
        } else {
            input.focus();
        }
    });

    $(document).on('click', '.layout .content .sidebar-group .sidebar .list-group-item', function () {
        if (jQuery.browser.mobile) {
            $(this).closest('.sidebar-group').removeClass('mobile-open');
        }
    });

});

// function nav_agent(){
//     $("#right2-content").removeClass("active").prop("class","sidebar");
// }

// function nav_chat(){
//     $("#right2-content").removeClass("sidebar").prop("class","sidebar active");
// }

function delete_status_bar(){
    console.log("sdadada");
    $("body").on('mouseover', 'a', function (e) {
        var $link = $(this),
            href = $link.attr('href') || $link.data("href");
    
        $link.off('click.chrome');
        $link.on('click.chrome', function () {
            window.location.href = href;
        })
        .attr('data-href', href) //keeps track of the href value
        .css({ cursor: 'pointer' })
        .removeAttr('href'); // <- this is what stops Chrome to display status bar
    });
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}