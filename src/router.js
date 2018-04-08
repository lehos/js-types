import VueRouter from 'vue-router'
import TypesSum from './views/TypesSum'
import TypesSub from './views/TypesSub'
import TypesMult from './views/TypesMult'
import TypesDiv from './views/TypesDiv'

export default new VueRouter({
  routes: [
    { path: '/', component: TypesSum },
    { path: '/sub', component: TypesSub },
    { path: '/mult', component: TypesMult },
    { path: '/div', component: TypesDiv },
  ]
})