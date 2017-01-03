function prvs(sliderDiv){
  sliderElement = (sliderDiv.parentNode.parentNode);
  sliderChildren = sliderElement.querySelectorAll('.news-item');
  for (i=0;i<sliderChildren.length;i++){
    if(sliderChildren[i].nodeName=="DIV"){
      item = sliderChildren[i];
      item.classList.add('news-item-hidden');
      console.log(i + ' hidden');
    };
  };

}
function nxt(sliderDiv){
  sliderElement = (sliderDiv.parentNode.parentNode);
  sliderChildren = sliderElement.querySelectorAll('.news-item');
  for (i=0;i<sliderChildren.length;i++){
    if(sliderChildren[i].nodeName=="DIV"){
      item = sliderChildren[i];
      item.classList.remove('news-item-hidden');
      console.log(i + ' shown');
    };
  };
}
