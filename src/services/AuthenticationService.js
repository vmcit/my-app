import axios from 'axios'
 
const API_URL = 'http://localhost:8080'
 
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'


 
class AuthenticationService {
 	
     dataSignIn = {
        username : '' ,
        password : '' 
    }
    a = '';
   

    executeBasicAuthenticationService(username,password ) {
      
        this.dataSignIn.username = username;
        this.dataSignIn.password = password;
        // return axios.post(`${API_URL}/api/auth/signin`,
        //     { headers: { authorization: this.createBasicAuthToken(username, password) } })
        return axios.post(`${API_URL}/api/auth/signin`,
        this.dataSignIn )
    }
 
    executeJwtAuthenticationService(username, password) {
        this.dataSignIn.username = username;
        this.dataSignIn.password = password;
        return axios.post(`${API_URL}/api/auth/signin`, {
            username,
            password
        })
    }
 
    createBasicAuthToken(username, password) {
       
        return 'Bearer ' + this. a;
    }
 
    registerSuccessfulLogin(username, password) {
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }
 
    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
 
    createJWTToken(token) {
        return 'Bearer ' + token
    }
 
 
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
 
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }
 
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
 
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            },  
            error => {return Promise.reject(error);}
        )
    }
}
 
export default new AuthenticationService()