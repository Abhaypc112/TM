import { useMutation } from "@tanstack/react-query"
import *as authService from '../services/authService'
import { useNavigate } from "react-router-dom"

export const useRegister = () => {
    const naviagte = useNavigate();
    return useMutation({mutationFn:async(signupData)=>{
        const user = await authService.doSignup(signupData);
        return user;
    },onSuccess:(data)=>{
        const token = data.token;
        localStorage.setItem('token',token);
        naviagte('/dashboard')
    }})
}
export const useSignin = () => {
    const naviagte = useNavigate();
    return useMutation({mutationFn:async(siginpData)=>{
        const user = await authService.doSignin(siginpData);
        return user;
    },onSuccess:(data)=>{
        localStorage.setItem('token',data.token);
        naviagte('/dashboard')
    }})
}