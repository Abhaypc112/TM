import axios from 'axios'

export const doSignup = async (signupData) => {
    const res = await axios.post('https://reqres.in/api/register',signupData);
    return res.data;
}
export const doSignin = async (signindata) => {
    const res = await axios.post('https://reqres.in/api/login/',signindata);
    return res.data;
}