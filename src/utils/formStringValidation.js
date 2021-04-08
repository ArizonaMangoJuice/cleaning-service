export const stringErrorValidation = (dispatch, obj) => {
    const {string, error, type} = obj;
    if(string === '') {
        return dispatch({type, payload: error});
    };
    if(string.length !== 0 || string.length !== 0) return dispatch({type, payload: null});
}

export default stringErrorValidation;