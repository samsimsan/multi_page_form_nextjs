"use client";


import { createContext } from "react";
import useForm from "@/Hooks/useForm";

export const FormContext = createContext();

const FormProvider = ({ children }) => {

    const { name, updateName, email, updateEmail, phone, updatePhone, plan, setPlan, period, setPeriod, addOnes, setAddOnes } = useForm();

    return (
        <FormContext.Provider value={{ name, updateName, email, updateEmail, phone, updatePhone, plan, setPlan, period, setPeriod, addOnes, setAddOnes }} >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider