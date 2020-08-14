import Vue from 'vue'
export const userKey = '__knowledge_user'
export const baseApiUrl = 'https://backend-deploy-heroku.herokuapp.com'

export function showError(error){
  if(error && error.response && error.response.data){
    Vue.toasted.global.defaultError({msg : error.response.data})
  }else if(typeof error === 'string'){
    Vue.toasted.global.defaultError({ msg: error })
  }else {
    Vue.toasted.global.defaultError()
  }
}

export default { baseApiUrl, showError, userKey }