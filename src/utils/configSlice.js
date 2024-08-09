import { createReducer, createAction } from "@reduxjs/toolkit"


const initialState = {
    lang: "en"
}

const changeLanguage = createAction("CHANGE_LANGUAGE")


const configReducer = createReducer(initialState, (builder) =>{
    builder.addCase(changeLanguage, (state, action) =>{
        state.lang = action.payload
    })
})


export {changeLanguage}
export default configReducer