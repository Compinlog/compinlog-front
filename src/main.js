import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import {auth} from './config/firebaseConfig'

const app = createApp(App)

auth.onAuthStateChanged(user => {
if(user){
    console.log('ESTE ES EL USUARIO ACTUAL',user.email)
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
}else{
    console.log(user)
    store.dispatch('detectarUsuario', user)
}
})

createApp(App).use(router).use(store).mount('#app')

