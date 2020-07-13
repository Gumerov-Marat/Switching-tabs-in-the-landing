window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  /*
    Задача:
    Общее:
    - требуется чтобы на странице показывался только один блок
    остальные скрыты, и показываться только при переключении.

    постановка задачи:
    1) Найти элементы:
      - сам Таб контент (часть страницы)
      - кнопки переключения на другие части
      - родитель этих кнопок

    ----------
    родитель кнопок info-header
    кнопки          info-header-tab
    табконтент      info-tabcontent
  */

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  /*
  Для скрытия табов и элементов в стилях уже есть классы show, hide
  fade  - css3 анимация
  */

  // функция hideTabContent - скрывает все табы
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1); // цикл скрывает все кроме первого

  //функция showTabCOntent - добавляет один таб
  function showTabCOntent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  /*
  Назначаем обработчик событий при клике на кнопки
   */

   info.addEventListener('click', function (event) {
     let target = event.target;
     if (target && target.classList.contains('info-header-tab'))
  
     for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabCOntent(i);
          break;
        }
     }
   })
})