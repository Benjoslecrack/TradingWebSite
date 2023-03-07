export const initialState = {
    user: null,
    metaTitle: "Le hub de l'assurance",
    metaDescription: "Le hub de l'assurance",
}


const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER": {
            return { ...state, user: action.user }
        }
        case "SET_META_TITLE": {
            return { ...state, metaTitle: action.metaTitle }
        }
        case "SET_META_DESCRIPTION": {
            return { ...state, metaDescription: action.metaDescription }
        }
        default: {
            return state
        }
    }
}



export default reducer;