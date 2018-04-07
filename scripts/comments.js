$(document).ready(function(){
  $('#comments').each(function(){
      var commentsUrl = $(this).html();
      var comments = $.ajax(commentsUrl);
      $(this).html(comments);
    });
});
