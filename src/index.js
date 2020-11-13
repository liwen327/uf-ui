

import UfButton from '../packages/button/index.js'
import UfButtonGroup from '@/components/common/UfButtonGroup'
import UfDrawer from '@/components/common/UfDrawer'
import UfLoading from '@/components/common/UfLoading'
import UfModal from '@/components/common/UfModal'
import UfLocalLoading from '@/components/common/UfLocalLoading'
import UfMoreBtn from '@/components/common/UfMoreBtn'
import UfPager from '@/components/common/UfPager'
import UfQueryArea from '@/components/common/UfQueryArea'
import UfTab from '@/components/common/UfTab'
import UfTreeSelect from '@/components/common/UfTreeSelect'
import UfAcctSelect from '@/components/common/UfAcctSelect'
import UfAgencySelect from '@/components/common/UfAgencySelect'
import Ztree from '@/components/common/Ztree'
import UfHeader from '@/components/common/UfHeader'
import UfSubTitle from '@/components/common/UfSubTitle'

const components = [
  UfButton
]

const install = function(Vue, opts = {}) {


  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default{
  install,
}


// const global = {
//   install: function (Vue) {

//     /* 公共编程式组件 开始 */

//     /* 全局loading的处理 开始 */
//     const LoadingConstructor = Vue.extend(UfLoading)
//     let instance = new LoadingConstructor()
//     instance.$mount(document.createElement('div'))
//     document.body.appendChild(instance.$el)

//     Vue.prototype.$showLoading = (content) => {
//       instance.show = true
//       content ? (instance.text = content) : (instance.text = '')
//       setTimeout(() => {
//         instance.show = false
//       }, 10000) //如果页面未响应hideLoading，10秒后自动隐藏loading
//     }

//     Vue.prototype.$hideLoading = function () {
//       instance.show = false
//     }
//     /* 全局loading的处理 结束 */

//     /* 全局报错的处理 开始 */
//     Vue.prototype.$showError = (error) => {
//       Vue.prototype.$hideLoading()
//       //开发模式下查看错误
//       console.log(error)
//       if (error) Vue.prototype.$message.error(error)
//     }
//     /* 全局报错的处理 结束 */

//     /* 公共编程式组件结束 */

//     /* 公共组件 开始 */

//     //全局按钮
//     /* Vue.component('uf-button', UfButton)
//     //全局按钮组
//     Vue.component('uf-button-group', UfButtonGroup)
//     //全局抽屉
//     Vue.component('uf-drawer', UfDrawer)
//     //全局模态窗口
//     Vue.component('uf-modal', UfModal)
//     //组件局部loading
//     Vue.component('uf-local-loading', UfLocalLoading)
//     //“更多”展开按钮
//     Vue.component('uf-morebtn', UfMoreBtn)
//     //分页器
//     Vue.component('uf-pager', UfPager)
//     //查询区域
//     Vue.component('uf-queryarea', UfQueryArea)
//     //页签
//     Vue.component('uf-tab', UfTab)
//     //下拉树
//     Vue.component('uf-tree-select', UfTreeSelect)
//     //单位账套树
//     Vue.component('uf-acct-select', UfAcctSelect)
//     //单位树
//     Vue.component('uf-agency-select', UfAgencySelect)
//     //ztree
//     Vue.component('ztree', Ztree)
//     //页面头部
//     Vue.component('uf-header', UfHeader)
//     //二级标题
//     Vue.component('uf-subTitle', UfSubTitle) */

//     /* 公共组件 结束 */
//   },
// }

// export default global
