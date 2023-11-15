"use client"

import { useContext } from "react"
import { FormContext } from "@/Providers/FormProvider"


const Page1 = () => {

    const { name, updateName, email, updateEmail, phone, updatePhone } = useContext(FormContext);

    return (
        <div className="grid gap-4">
            <h1>Personal info</h1>
            <p>Please provide your name, email, address and phone number.</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => updateName(e.target.value)} />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" value={email} onChange={(e) => updateEmail(e.target.value)} />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" value={phone} onChange={(e) => updatePhone(e.target.value)} />
        </div>
    )
}

export default Page1