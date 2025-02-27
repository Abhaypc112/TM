import axios from 'axios'

export const doSignup = async (signupData) => {
    const res = await axios.post('https://reqres.in/api/register',signupData);
    console.log(res)
    return res.data;
}
export const doSignin = async (signindata) => {
    const res = await axios.post('https://reqres.in/api/login/',signindata);
    console.log(res)
    return res.data;
}
export const getUserByEmail = async (email) => {
    const res = await axios.get(`https://reqres.in/api/users`);
    console.log(res.data);
    return res.data.data.find((item)=>item.email === email)
}