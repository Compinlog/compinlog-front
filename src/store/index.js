import { createStore } from 'vuex'

//Firebase imports
import { auth } from '../config/firebaseConfig'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log(state.user)
        }
    },
    actions: {
       
        detectarUsuario({commit}, user){
            commit('setUser', user)
        },
        async register(context, { email, password }){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user)
            } else {
                throw new Error('signup failed')
            }
        },

        async login(context, { email, password }){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user)
            } else {
                throw new Error('login failed')
            }
        },

        async logout(context){
            await signOut(auth)
            context.commit('setUser', null)
        }
    },
    getters:{
        existeUsuario(state){
            if(state.user === null){
                return false
            }else{
                return true
            }
        }
    },
})

// export the store
export default store