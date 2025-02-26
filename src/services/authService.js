import axios from 'axios'

export const doSignup = async ({email,password}) => {
    console.log(signupdata,"data")
    const res = await axios.post('https://reqres.in/api/register',{signupdata});
    return res.data;
}
export const doSignin = async (signindata) => {
    const res = await axios.post('https://reqres.in/api/login/',signindata);
    return res.data;
}