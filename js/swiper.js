"use strict";

var heroSwiper = new Swiper(".hero__swiper", {
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".hero__pagination",
    dynamicBullets: true
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".js-first-slider", {
    spaceBetween: 32,
    slidesPerView: "auto",
    direction: "horizontal",
    navigation: {
      nextEl: ".offer__button-next",
      prevEl: ".offer__button-prev"
    },
    breakpoints: {
      610: {
        slidesPerGroup: 2
      },
      1281: {
        slidesPerGroup: 3
      }
    }
  });
});
var usefulSwiper = new Swiper(".useful__swiper", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.useful__button-next',
    prevEl: '.useful__button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    701: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    981: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 2
    }
  }
});
var sliderCatalog = new Swiper('.catalog__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 32,
  allowTouchMove: false,
  grid: {
    rows: 3,
    fill: 'row'
  },
  pagination: {
    el: '.catalog__pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      grid: {
        rows: 3
      }
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
      grid: {
        rows: 3
      }
    },
    980: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
      grid: {
        rows: 3
      }
    }
  }
});
var swiperSm = new Swiper('.product__swiper_bottom', {
  spaceBetween: 38,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    300: {
      direction: 'horizontal',
      spaceBetween: 38,
      slidesPerView: 2
    },
    450: {
      direction: 'horizontal',
      spaceBetween: 38,
      slidesPerView: 3
    },
    611: {
      direction: 'vertical',
      spaceBetween: 25
    },
    980: {
      direction: 'horizontal',
      spaceBetween: 38
    }
  }
});
var swiperProduct = new Swiper('.product__swiper_top', {
  spaceBetween: 10,
  centeredSlides: true,
  allowTouchMove: false,
  thumbs: {
    swiper: swiperSm
  }
});
var similarSwiper = new Swiper(".similar__swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.similar__button-next',
    prevEl: '.similar__button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    580: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    986: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
});
var swiperModal = new Swiper('.modal__swiper-small', {
  spaceBetween: 78,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.modal__btn-next',
    prevEl: '.modal__btn-prev'
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    650: {
      slidesPerView: 2
    },
    980: {
      slidesPerView: 3
    },
    1360: {
      slidesPerView: 4
    }
  }
});
var swiperModalMain = new Swiper('.modal__swiper-big', {
  spaceBetween: 78,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  allowTouchMove: true,
  thumbs: {
    swiper: swiperModal
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmpzIiwibmFtZXMiOlsiaGVyb1N3aXBlciIsIlN3aXBlciIsImF1dG9wbGF5IiwiZGVsYXkiLCJwYWdpbmF0aW9uIiwiZWwiLCJkeW5hbWljQnVsbGV0cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN3aXBlciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJkaXJlY3Rpb24iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsInVzZWZ1bFN3aXBlciIsInNsaWRlckNhdGFsb2ciLCJhbGxvd1RvdWNoTW92ZSIsImdyaWQiLCJyb3dzIiwiZmlsbCIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImluZGV4IiwiY2xhc3NOYW1lIiwic3dpcGVyU20iLCJmcmVlTW9kZSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJzd2lwZXJQcm9kdWN0IiwiY2VudGVyZWRTbGlkZXMiLCJ0aHVtYnMiLCJzaW1pbGFyU3dpcGVyIiwic3dpcGVyTW9kYWwiLCJzd2lwZXJNb2RhbE1haW4iXSwic291cmNlcyI6WyJzd2lwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVyb1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuaGVyb19fc3dpcGVyXCIsIHtcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogNTAwMCxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5oZXJvX19wYWdpbmF0aW9uXCIsXG4gICAgZHluYW1pY0J1bGxldHM6IHRydWUsXG4gIH0sXG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLWZpcnN0LXNsaWRlclwiLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIub2ZmZXJfX2J1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLm9mZmVyX19idXR0b24tcHJldlwiXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MTA6IHtcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDJcbiAgICAgIH0sXG5cbiAgICAgIDEyODE6IHtcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cblxuY29uc3QgdXNlZnVsU3dpcGVyID0gbmV3IFN3aXBlcihcIi51c2VmdWxfX3N3aXBlclwiLCB7XG4gIHNsaWRlc1BlclZpZXc6IDIsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnVzZWZ1bF9fYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy51c2VmdWxfX2J1dHRvbi1wcmV2JyxcbiAgfSxcblxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge3NsaWRlc1BlclZpZXc6IDF9LFxuICAgIDU4MDoge3NsaWRlc1BlclZpZXc6IDIsIHNwYWNlQmV0d2VlbjogMTZ9LFxuICAgIDcwMToge3NsaWRlc1BlclZpZXc6IDIsIHNwYWNlQmV0d2VlbjogMzJ9LFxuICAgIDk4MToge3NsaWRlc1BlclZpZXc6IDN9LCBcbiAgICAxMjAwOiB7c2xpZGVzUGVyVmlldzogMn0sIFxuICB9LCBcblxufSk7XG5cblxuY29uc3Qgc2xpZGVyQ2F0YWxvZyA9IG5ldyBTd2lwZXIoJy5jYXRhbG9nX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDIsXG4gIHNsaWRlc1Blckdyb3VwOiAyLFxuICBzcGFjZUJldHdlZW46IDMyLFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIFxuICBncmlkOiB7XG4gICAgcm93czogMyxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5jYXRhbG9nX19wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgfSxcbiAgfSxcblxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgIGdyaWQ6IHsgcm93czogMyB9LFxuICAgIH0sXG4gICAgNDUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgICAgZ3JpZDogeyByb3dzOiAzIH0sXG4gICAgfSxcbiAgICA5ODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgICBncmlkOiB7IHJvd3M6IDMgfSxcbiAgICB9LFxuICB9LCAgXG59KTtcblxuXG5jb25zdCBzd2lwZXJTbSA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0X19zd2lwZXJfYm90dG9tJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDMwMDoge2RpcmVjdGlvbjogJ2hvcml6b250YWwnLCBzcGFjZUJldHdlZW46IDM4LCBzbGlkZXNQZXJWaWV3OiAyfSxcbiAgICAgIDQ1MDoge2RpcmVjdGlvbjogJ2hvcml6b250YWwnLCBzcGFjZUJldHdlZW46IDM4LCBzbGlkZXNQZXJWaWV3OiAzfSxcbiAgICAgIDYxMToge2RpcmVjdGlvbjogJ3ZlcnRpY2FsJywgc3BhY2VCZXR3ZWVuOiAyNX0sXG4gICAgICA5ODA6IHtkaXJlY3Rpb246ICdob3Jpem9udGFsJywgc3BhY2VCZXR3ZWVuOiAzOH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzd2lwZXJQcm9kdWN0ID0gbmV3IFN3aXBlcignLnByb2R1Y3RfX3N3aXBlcl90b3AnLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IHN3aXBlclNtLFxuICAgIH0sXG4gIH0pO1xuXG5cblxuY29uc3Qgc2ltaWxhclN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc2ltaWxhcl9fc3dpcGVyXCIsIHtcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzIsXG4gIFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc2ltaWxhcl9fYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zaW1pbGFyX19idXR0b24tcHJldicsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtzbGlkZXNQZXJWaWV3OiAyLCBzcGFjZUJldHdlZW46IDE2fSxcbiAgICA1ODA6IHtzbGlkZXNQZXJWaWV3OiAyfSxcbiAgICA3MDA6IHtzbGlkZXNQZXJWaWV3OiAyLCBzcGFjZUJldHdlZW46IDMyfSxcbiAgICA5ODY6IHtzbGlkZXNQZXJWaWV3OiAzfSwgXG4gICAgMTMwMDoge3NsaWRlc1BlclZpZXc6IDR9LCBcbiAgfSxcblxufSk7XG5cblxuY29uc3Qgc3dpcGVyTW9kYWwgPSBuZXcgU3dpcGVyKCcubW9kYWxfX3N3aXBlci1zbWFsbCcsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNzgsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5tb2RhbF9fYnRuLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcubW9kYWxfX2J0bi1wcmV2JyxcbiAgICAgIH0sXG5cbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDMwMDoge3NsaWRlc1BlclZpZXc6IDF9LFxuICAgICAgICA2NTA6IHtzbGlkZXNQZXJWaWV3OiAyfSxcbiAgICAgICAgOTgwOiB7c2xpZGVzUGVyVmlldzogM30sIFxuICAgICAgICAxMzYwOiB7c2xpZGVzUGVyVmlldzogNH0sIFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlck1vZGFsTWFpbiA9IG5ldyBTd2lwZXIoJy5tb2RhbF9fc3dpcGVyLWJpZycsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNzgsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgdGh1bWJzOiB7XG4gICAgICAgIHN3aXBlcjogc3dpcGVyTW9kYWwsXG4gICAgfSxcbn0pO1xuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtFQUM3Q0MsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxtQkFBbUI7SUFDdkJDLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQztBQUdGQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtC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