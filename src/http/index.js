import axios from "axios"
import Vue from 'vue'
import globals from '@/globals'


axios.defaults.withCredentials = true;

// Create axios instance for making http calls
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

const evaInstance = {
  async getSamples() {
    const query = {
      "datebegin":       "",
      "dateend":         "",
      "s.name":          "",
      "foreignid":       "",
      "pedigree":        "",
      "ds.iddisease":    "",
      "lstatus":         "",
      "s.idcooperation": "",
      "idproject":       "",
      "nottoseq":        "0"
    }
    var data
    try {
      const res = await instance.post("/legacy/samples", query)
      data = res.data
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  },
  async login(user, password) {
    if (!(user && password)) {
      return {"error": "User and Password must be filled.", "data": null}
    }
    var data

    try {
      const response = await instance.post(
        "/login", {user: user, password: password})
      data = response.data
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  },
  async logout() {
    var data
    try {
      const resp = await instance.post("/logout")
      data = resp.json
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  }
}

const http = {
    install () {
        Vue.prototype.$http = evaInstance
    }
} // Check debug/build mode

Vue.use(http)
export default http
