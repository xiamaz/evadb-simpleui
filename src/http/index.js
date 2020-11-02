import axios from "axios"
import Vue from 'vue'
import globals from '@/globals'


axios.defaults.withCredentials = true;

const instance = createInstance(globals.ServerUrl)

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
}

const http = {
    install () {
        Vue.prototype.$http = instance
    }
} // Check debug/build mode

Vue.use(http)
export default http
