import VueRouter from 'vue-router'
import TypesSum from './components/TypesSum'
import TypesSub from './components/TypesSub'
import TypesMult from './components/TypesMult'
import TypesDiv from './components/TypesDiv'

export default new VueRouter({
  routes: [
    { path: '/', component: TypesSum },
    { path: '/sub', component: TypesSub },
    { path: '/mult', component: TypesMult },
    { path: '/div', component: TypesDiv },
  ]
})