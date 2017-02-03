$(function(){
  var images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg'];
  var img = 0;
  imageChange();
  
  function imageChange(){
    $('img').hide().attr('src', images[img]).css({'margin-left' : 0}).show(300);
    $('img').delay(2000).animate({'margin-left': '-=800'}, 1000);
    if(img === images.length-1){
      img = 0;
    }else{
      img++;
    }
    setTimeout(imageChange, 5000);
  }
  
});