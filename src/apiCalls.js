import axios from 'axios';
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://mern-social-server-92ic.onrender.com/api"; 


export const loginCall = async (userCredentials, dispatch) => {
    dispatch({
        type: 'LOGIN_START',
    })
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        // console.log(res.data)
        // alert(res.message)
    } catch (err) {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: err
        })
        if (err.response) {
            console.error('Error:', err.response.data.message);
            alert(err.response.data.message);
        } else {
            console.error('Error:', err.message);
        }
    }
}

