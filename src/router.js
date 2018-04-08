import VueRouter from 'vue-router'
import TypesSum from './views/TypesSum'
import TypesSub from './views/TypesSub'
import TypesMult from './views/TypesMult'
import TypesDiv from './views/TypesDiv'
import TypesComp from './views/TypesComp'

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/sum' },
    { path: '/sum', component: TypesSum },
    { path: '/subtract', component: TypesSub },
    { path: '/multiply', component: TypesMult },
    { path: '/divide', component: TypesDiv },
    { path: '/compare', component: TypesComp },
  ]
})