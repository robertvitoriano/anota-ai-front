export interface IReduxState {
  auth: {
    token:string
  }
  sidebar:{
    collapsed:boolean
  }
  loading: {
    isLoading:boolean
  }

}