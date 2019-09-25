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

  /* 环球网校留单模块 */
  tabHandle('.tab-head .head-item', '.ldmk-cont .cont-item', 'cur');

  /* 精品备考资料 */
  tabHandle('.jpbksl-radio .radio-item', null, 'cur');

  /* 环球网校兑课中心 */
  tabHandle('.cont-radio .radio-item', null, 'cur');

  /* 初级职称名师精品课 */
  $('.jpk .cont-more').click(function () {
    $(this).prev('.cont-detail').css({
      'height': 'auto'
    });
  });
});