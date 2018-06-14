$(window).on('load', function() {
  //original by Grant Vinson
  //slingshot icon by Angelo Troiano on nounproject
  //hand icon by arif fajar yulianto on nounproject
  //Background Photo by Iván C. Fajardo on Unsplash
  
  var el = {
  h1 : $("h1"),
  ten : $(".ten"),
  jack : $(".jack"),
  queen : $(".queen"),
  king : $(".king"),
  ace : $(".ace"),
  cards : $(".cards"),
  cardBack : $(".card-back"),
  container : $(".container"),
  reset : $("#reset"),
  selected : '',
};


/**
  Animate fanning of cards
**/
var tl = new TimelineLite();

tl
  .to(el.ace, 0.2, {rotation: 24, top: '1.5vw', left: '12vw', delay: 0.25})
  .to(el.king, 0.2, {rotation: 13, left: '5vw'}, "-=0.16")
  .to(el.queen, 0.2, {rotation: 2, top: "-0.75vw"}, "-=0.16")
  .to(el.jack, 0.2, {rotation: -11, left: '-4vw', top: '-0.75vw'}, "-=0.16")
  .to(el.ten, 0.2, {rotation: -25, left: '-8.5vw'}, '-=0.16');



/**
  Show selected card
**/
el.cards.on('click', function(e) {
  el.selected = $(e.target).parent();
  tl.reverse();
  el.container.addClass('chosen show');
  setTimeout(function() {
    el.selected.addClass('show');
    setTimeout(function() {
      el.h1.text("Ready? Set. Shoot!");
      el.selected.addClass('animate');
    }, 200);
  }, 500); 
});

/**
  Reset animations
**/
el.reset.on('click', function() {
  tl.pause(0).play(0);
  el.h1.text("Pick a card, any card");
  el.selected.removeClass('show animate');
  el.container.removeClass('chosen show');
});
  
  
});