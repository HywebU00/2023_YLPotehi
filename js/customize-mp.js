// --------------------- mp only
// 自行加入的JS請寫在這裡
(function () {

  const btnMenu = document.querySelector('.btnMenu');

  // --------------------------------------------- heroImg
  // ★★★ Note ★★★ 偵聽視窗高度，並將高度投入 HTML
  const heightDisplay = document.getElementById('heroImg');  // 獲取用於顯示高度的HTML元素
  let currentHeight = window.innerHeight;                    // 獲取當前瀏覽器視窗高度
  heightDisplay.style.height = `${currentHeight}px`;         // 設置初始高度樣式
  // 監聽resize事件
  window.addEventListener('resize', () => {
    currentHeight = window.innerHeight;                     // 當瀏覽器視窗高度改變時，更新currentHeight
    heightDisplay.style.height = `${currentHeight}px`;      // 設置高度樣式
  });
  const heroSwiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    autoplay: true,
    speed: 1200,
    effect: 'fade',
  });

  // --------------------------------------------- crlPanel scroll visible
  // ★★★ Note ★★★ header 右上角 crlPanel scroll 超過 hero 高度後再顯示
  // ★★★ Note ★★★ header + blur
  const crlPanel = document.querySelector('.crlPanel');
  const mpMultiBar = document.querySelector('.mp .multiBar');
  const mpHeader = document.querySelector('.mp .header');

  window.addEventListener('scroll', () => {
    // const scrollY = window.scrollY;   // 取得目前視窗捲動高度
    currentHeight = window.innerHeight - 36;
    if (scrollY >= currentHeight) {
      mpMultiBar.classList.add("Show");
      mpHeader.classList.add("Blur");
    } else {
      mpMultiBar.classList.remove("Show");
      mpHeader.classList.remove("Blur");
    }
  });

  // --------------------------------------------- btnMenu 各種開啟狀態的調整
  // ★★★ Note ★★★ multiBar Show ＋ mainMenuWrap Show 
  if (mpMultiBar.classList.contains('Show') && mainMenuWrap.classList.contains('Show')) {
    btnMenu.classList.add('close');
  } else {
    btnMenu.classList.remove('close');
  }

  // ---------------------------------------------  College 傳習學院
  // ★★★ Note ★★★ 右側三圖片 隨滑鼠滾動偏移
  const scrollPic = document.querySelector('.scrollPic');
  const cols = document.querySelectorAll('.pic img');

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollPic,
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
  });

  tl.to(cols, {
    left: '+=50',
    ease: "power3.out",
    duration: 2
  });

  // ---------------------------------------------  Information 相關資訊
  // ★★★ Note ★★★ scroll 到 .goShow，加入 .Change
  const goShow = document.querySelector('.goShow');
  window.addEventListener('scroll', function() {
    if (goShow.getBoundingClientRect().top <= 0) {
      goShow.classList.add('Change');
    } else {
      goShow.classList.remove('Change');
    }
  });

  // --------------------------------------------- infoSlider
  // 相關資訊 swiper
  const infoSlider = new Swiper('.infoSlider .swiper', {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: false,
    navigation: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    // 切換點
    // pagination: {
    //   el: '.infoSlider .swiperDots',
    //   bulletElement: 'button',
    //   clickable: true,
    // },
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
})();
