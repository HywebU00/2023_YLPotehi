// -----  基本功能開關   ---------------------------------------------------
// topNav(); // 手機版顯示nav選單
// navSticky(); // 捲動時固定主選單
// fatFooter(); // fatFooter是否要展開
tabFunction('.tabSet'); // tab功能
scrollTables('table');  // table捲動功能

// mobileSearch();

// tableAddDataAttributes({∂ç
//   elemClass: '.tableList', // 目標table
//   dataName: 'title', // tableList樣式 加上 data-title
// });

// 全站字體
// fontSize();

// 手風琴功能
// accordionFunction({
//   accordion: '.accordion',
//   openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
//   autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
//   duration: 200,
//   info: {
//     open: '展開', // 收合時顯示
//     close: '收合', // 展開時顯示
//   },
// });

// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {

  // --------------------------------------------- cursor 滑鼠動態
  const cursor = document.querySelector('.cursor');
  const linkDeco = document.querySelectorAll('.mainInfo a , .swiperBox a');

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });
  linkDeco.forEach(function(col) {
    col.addEventListener('mouseenter', function() {
      cursor.classList.add('Into');
    });
    col.addEventListener('mouseleave', function() {
      cursor.classList.remove('Into');
    });
  });

  // --------------------------------------------- btnMenu（全站共用）
  // ★★★ Note ★★★ 主選單開啟、收合
  // 取得 .btnMenu 和 .mainMenuWrap元素
  const body = document.querySelector('body');
  const btnMenu = document.querySelector('.btnMenu');
  const mainMenuWrap = document.querySelector('.mainMenuWrap');
  // 點擊 .btnMenu 觸發事件
  btnMenu.addEventListener('click', function() {
    const target = mainMenuWrap;
    // 如果 .mainMenuWrap 內有 .Show，則移除
    if (target.classList.contains('Show')) {
      target.classList.remove('Show');
      btnMenu.classList.remove('White', 'Close');
      body.classList.remove('noscroll');
    } else {
      // 如果 .mainMenuWrap 內沒有 .Show，則新增
      target.classList.add('Show');
      btnMenu.classList.add('White', 'Close');
      body.classList.add('noscroll');
    }
  });

  // --------------------------------------------- btnMenu 手機版開合（全站共用）
  // ★★★ Note ★★★ 手機版、主選單第二層開啟、收合
  const firstMenus = document.querySelectorAll('.menu > ul > li');

  for (let i = 0; i < firstMenus.length; i++) {
    const firstMenu = firstMenus[i];
    const secondMenu = firstMenu.querySelector('.second-menu');
    firstMenu.addEventListener('click', function() {
      // 加上 .act，移除其他第一層選單的 .act
      for (let j = 0; j < firstMenus.length; j++) {
        if (firstMenus[j] === firstMenu) {
          firstMenu.classList.add('act');
        } else {
          firstMenus[j].classList.remove('act');
        }
      }
    });
  }

  // --------------------------------------------- btnSearchOpen（全站共用）
  // ★★★ Note ★★★ 搜尋選單開啟
  // 取得元素
  const webSearch = document.querySelector('.webSearch');
  const btnSearch = document.querySelector('.btnSearchOpen');
  const btnClose = document.querySelector('.btnClose');
  // 點擊 .btnSearch 觸發事件
  btnSearch.addEventListener('click', function() {
    webSearch.classList.add('Show');
    body.classList.add('noscroll');
    // 如果 .mainMenuWrap 內有 .Show，則移除
    // if (target.classList.contains('Show')) {
    //   target.classList.remove('Show');
    // } else {
    //   // 如果 .mainMenuWrap 內沒有 .Show，則新增
    //   target.classList.add('Show');
    // }
  });
  // 點擊 .btnSearch 觸發事件
  btnClose.addEventListener('click', function() {
    webSearch.classList.remove('Show');
    body.classList.remove('noscroll');
  });

  // --------------------------------------------- scrollReveal 圖片進場 mask 刷過
  const sr = ScrollReveal();
  document.querySelectorAll(".imgContainer > .mask").forEach((el) => {
    sr.reveal(el, {
      beforeReveal: (el) => {
        gsap.to(el, {
          // duration: 1.2,
          animationName: "Revealer",
          animationDuration: ".8s",
          animationTimingFunction: "ease",
          animationDelay: ".5s",
        });
      },
    });
  });

  // --------------------------------------------- 條件搜尋
  // ★★★ Note ★★★ 切換 filter
  // 取得元素
  const btnFilter = document.querySelector('.iconFilter');
  const filterBox = document.querySelector('.filterBox');
  // 點擊 .btnMenu 觸發事件
  btnFilter.addEventListener('click', function() {
    const target = btnFilter;
    // 如果 .filterBox 內有 .Show，則移除
    if (target.classList.contains('act')) {
      target.classList.remove('act');
      filterBox.classList.remove('Show');
      body.classList.remove('noscroll');
    } else {
      // 如果 .filterBox 內沒有 .Show，則新增
      target.classList.add('act');
      filterBox.classList.add('Show');
      body.classList.add('noscroll');
    }
  });

  // --------------------------------------------- accordion 手風琴
  // ★★★ Note ★★★ 
  // 獲取所有手風琴項目
  var accordionLi = document.querySelectorAll('.accordion li');
  // 添加點擊事件監聽器
  accordionLi.forEach(function(item) {
    var header = item.querySelector('.accordionList');
    var content = item.querySelector('.accordionContent');

    header.addEventListener('click', function() {
      // 切換手風琴項目的 active 狀態
      item.classList.toggle('active');

      // 切換手風琴內容的顯示狀態
      if (item.classList.contains('active')) {
        content.classList.add('Show');
      } else {
        content.classList.remove('Show');
      }
    });
  });

  // --------------------------------------------- infoSlider
  // 相關資訊 swiper
  const infoSlider = new Swiper('.infoSlider .swiper', {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    // 切換點
    pagination: {
      el: '.infoSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1.5,
      },
      767: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 3.5,
      },
    },
  });

  // --------------------------------------------- cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    // 切換點
    // pagination: {
    //   el: '.cpSlider .swiperDots',
    //   bulletElement: 'button',
    //   clickable: true,
    // },
    // 切換箭頭
    // navigation: {
    //   nextEl: '.cpSlider .nextSlider', //自行設定樣式
    //   prevEl: '.cpSlider .prevSlider', //自行設定樣式
    //   disabledClass: 'swiperArrow-disabled', //不可點選樣式
    // },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  });

  // --------------------------------------------- 大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  // --------------------------------------------- 廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  // --------------------------------------------- 跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  // --------------------------------------------- cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });
})();
