import { createAction, createReducer } from "@reduxjs/toolkit"



const initialState = {
    gptSearch: false,
}

const toggleGptSearch = createAction("TOGGLE_GPT_SEARCH")


const gptReducer = createReducer(initialState, (builder) => {    
    builder.addCase(toggleGptSearch, (state) => {
        state.gptSearch = !state.gptSearch
    })
})


export {toggleGptSearch}
export default gptReducer