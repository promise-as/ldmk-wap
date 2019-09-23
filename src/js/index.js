$(function () {
  /*
  * clickEle: 点击的元素，
  * tabAimEle: 要切换的目标元素
  */
  function tabHandle(clickEle, tabAimEle, className) {
    $(clickEle).each(function (index) {
      $(this).click(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(tabAimEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  tabHandle('.tab-head .head-item', '.ldmk-cont .cont-item', 'cur');
});