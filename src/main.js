import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'
import User from './User.vue'

Vue.use(vueRouter)

var router = new vueRouter({})

router.map({
	'/foo': {
		component: Foo
	},
	'/bar': {
		component: Bar
	},
	'/user/:id': {
		component: User
	}
})

router.start(App,'#app')
