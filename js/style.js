// ●○●○●○ hero(bgswitcher.js) ●○●○●○ //
// pc
jQuery(function($) {
    $('.hero-pc').bgSwitcher({
        images: ['img/hero_img01.jpg','img/hero_img02.jpg','img/hero_img03.jpg'], // 切り替える背景画像を指定
    });
});

// sp
jQuery(function($) {
  $('.hero-sp').bgSwitcher({
      images: ['img/hero_img01-sp.jpg','img/hero_img02-sp.jpg','img/hero_img03-sp.jpg'], // 切り替える背景画像を指定
  });
});


// ●○●○●○ するするスクロール ●○●○●○ //
var headerHeight = $('header').outerHeight();
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position},300);
    return false;
  }
);



// ●○●○●○ ふわっと出現 ●○●○●○ //
// スクロール操作したとき
$(window).on('scroll', function () {

  // クラス名【 inview 】が付与されている、全ての要素に対して処理を実行
  $('.inview').each(function() {

    // ブラウザの最上部から、クラス名【 inview 】が付与されている要素の位置を取得
    var targetPosition = $(this).offset().top;

    // ブラウザの最上部からのスクロール量を取得
    var scroll = $(window).scrollTop();

    // ウィンドウの高さを取得
    var windowHeight = $(window).height();

    // ブラウザの最上部からのスクロール量 > クラス名【 inview 】が付与されている要素の位置 - ウィンドウの高さを取得
    if (scroll > targetPosition - windowHeight) {

      // クラス名【 show 】を付与
      $(this).addClass('show');
    }
  });
});


// ●○●○●○ modal(iziModal)オプション ●○●○●○ //
$(function () {
  $(".modal_group01").iziModal({
    headerColor: '#23171B', //ヘッダー部分の色
    width: '70%', //横幅
    overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
    fullscreen: true, //全画面表示
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown'
  });
})
$(function () {
  $(".modal_group02").iziModal({
    headerColor: '#23171B',
    width: '70%',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    fullscreen: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown'
  })
})