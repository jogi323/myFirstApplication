$(document).ready(function(){
  $('form').on('submit',function(){
    var item=$('form input');
    var todo={ item: item.val()};
    console.log("dfsef");
    $.ajax({
      type : 'post',
      url :  '/todo',
      data : todo,
      success :function(data){

        location.reload();
      },
    });
    return false;
  });
$('li').on('click',function(){
  var item =$(this).text().replace(/ /g,"");
  $.ajax({
    type : 'DELETE',
    url :  '/todo/' + item,
    success :function(data){

      location.reload();
    }
  });
});
});
