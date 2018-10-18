import Checkbox from '@/demos/checkboxdemo'//复选框示例
import Breadcrumb from '@/demos/breadcrumbdemo' //面包屑示例
import WList from '@/demos/wSortListDemo' //排序列表示例
import previewImgsDemo from '@/demos/previewImgsDemo' //图片预览示例
import Login from '@/components/login'
import Register from '@/components/register'
import Websoket from '@/components/websokettest.vue'
import previewImg from '@/components/previewImg.vue'
let routes = [
	{
	  path: '/login',
	  name: '登录',
	  component: Login
	},
	{
	  path: '/register',
	  name: '注册',
	  component: Register
	},
	{
	  path: '/soket',
	  name: 'soket測試',
	  component: Websoket
	},
	{
	  path: '/checkbox',
	  name: '复选框',
	  component: Checkbox
	},
	{
	  path: '/breadcrumb',
	  name: '面包屑',
	  component: Breadcrumb
	},
	{
	  path: '/wlist',
	  name: '中文首字母排序列表',
	  component: WList
	},
	{
	  path: '/previewimg',
	  name: '移动端图片预览组件',
	  component: previewImg
	},
	{
	  path: '/previewimgDemo',
	  name: '移动端图片预览demo',
	  component: previewImgsDemo
	}
]
export default routes
