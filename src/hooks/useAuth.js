import { useMutation } from "@tanstack/react-query"
import *as authService from '../services/authService'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export const useRegister = () => {
    const naviagte = useNavigate();
    return useMutation({mutationFn:async(signupData)=>{
        const user = await authService.doSignup(signupData);
        return user;
    },onSuccess:(data)=>{
        const token = data.token;
        localStorage.setItem('token',token);
        localStorage.setItem('userId',data.id);
        toast.success("Registerd successfully!");
        naviagte('/dashboard')
    }})
}
export const useSignin = () => {
    const naviagte = useNavigate();
    return useMutation({mutationFn:async(siginpData)=>{
        const{email}=siginpData;
        const token = await authService.doSignin(siginpData);
        const user = await authService.getUserByEmail(email)
        return {...token,...user};
    },onSuccess:(data)=>{
        localStorage.setItem('token',data.token);
        localStorage.setItem('userId',data.id)
        toast.success("Sign In successfully!");
        naviagte('/dashboard')
    }})
}