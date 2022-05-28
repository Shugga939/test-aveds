export const userReducer = (state = JSON.parse(window.localStorage.getItem('avedsUser')), action) => {
  switch (action.type) {
    case 'LOGIN' : {
      localStorage.setItem('avedsUser',JSON.stringify( action.payload ))
      return action.payload
    }
    case 'LOGOUT' : {
      window.localStorage.setItem('avedsUser',null)
      return null
    }
    default : return state
  }
}

export const userLogin = (payload) => ({type:'LOGIN', payload})
export const userLogout = () => ({type:'LOGOUT'})
