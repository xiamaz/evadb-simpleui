import Vue from 'vue'
import axios from "axios"

import globals from '@/globals'


axios.defaults.withCredentials = true;


function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
}

// Create axios instance for making http calls
const instance = createInstance(globals.ServerUrl)


export const api = {
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
  async getPatient(patient_id) {
    var data
    try {
      const res = await instance.post("/next/getPatient", {id: patient_id})
      data = res.data
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  },
  async submitQuery(query) {
    var data
    try {
      const res = await instance.post("/next/query/submit", query)
      data = res.data
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  },
  async allQuery() {
    var data
    try {
      const res = await instance.post("/next/query/all")
      data = res.data
    } catch (error) {
      data = {"error": error.toString(), "data": null}
    }
    return data
  },
  async fetchQuery(queryId) {
    var data
    try {
      const res = await instance.post("/next/query/fetch", {id: queryId})
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
  },
  async checkSession() {
    return {"error": "Yes", "data": null}
  }
}


const apiPlugin = {
    install () {
        Vue.prototype.$http = api
    }
} // Check debug/build mode

Vue.use(apiPlugin)
export default apiPlugin
