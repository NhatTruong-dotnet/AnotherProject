
import axios from "axios";

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("lstoken")
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
      config.headers['Content-Type'] = 'application/json';
    }
    else {
      window.location.href = ''
    }
    return config
  },
  error => {
    // do something when request fail
    Promise.reject(error)
  }
)

axios.interceptors.response.use(response => {
  //Any status code that lie within the range of 2xx will handle in this scope
  
  return response
}, function(error){
  //Any status codes that falls outside the range of 2xx will handle in this scope
})

