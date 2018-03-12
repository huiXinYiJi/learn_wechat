// component/modal/modal.js
Component({
  /**
   * 启用多slot支持
   */
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod: function () { },
    onTap: function(){
      var myEventDetail = {a:1};
      var myEventOption = {};
      this.triggerEvent('myevent',myEventDetail,myEventOption);
    }
  },

  /**
   * 外部样式类
   */
  externalClasses:['my-class']
})
