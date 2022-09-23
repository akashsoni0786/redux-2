
export const initialState ={
    contacts:[
        {
            name: "Aakash ",
            address: "LDA Colony",
            city: "LKO",
            mobile: "4569871235",
            mail: "akash@gmail.com",
        }
    ],
  
}
const reducers = (state=initialState,action) => {
    
    if (action.type === "ADD_CONTACT") {
        return {
            ...state,
            contacts: [...state.contacts,action.data]
        }
      }
      if (action.type === "REMOVE_CONTACT") {
        return {
            contacts : state.contacts.filter((i)=>i.mobile!==action.data)
        }
      }
      
      return state;
}

export default reducers