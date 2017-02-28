import Home from './components/Home.vue'


export default [{
	path: '/home',
	component: Home
},{
	path: '/',
	redirect: '/home'
}, {
	path: '*',
	redirect: '/home'
}]