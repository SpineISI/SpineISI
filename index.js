$(document).ready(function() {
  $('.dropdown-title').on('click tap', function() {
    var list = $(this).parent().find('.dropdown-list');
    if ($(this).hasClass('expanded')) {
      list.show();
      list.slideUp(300, function() {
        list.addClass('hidden');
      });
      $(this).removeClass('expanded');
    } else {
      list.removeClass('hidden');
      list.hide()
      list.slideDown(300);
      $(this).addClass('expanded');
    }
  })
})
