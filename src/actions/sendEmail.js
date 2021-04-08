export const sendEmail = async (dispatch,obj) => {
    dispatch({type: 'QUOTE_FORM_LOADING'});
    let sentEmail;
    try{
        sentEmail = await fetch('http://localhost:8080/email', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        });
        dispatch({type: 'QUOTE_FORM_STOP_LOADING'});
        dispatch({type: 'EMAIL_SENT'});
    } catch (error) {
        console.log(sentEmail);
    }
};

export default sendEmail;