import { useState } from "react";

//values for plan:
export const PlanValues = {
    ARCADE: "Arcade",
    ADVANCED: "Advanced",
    PRO: "Pro"
}

//values for perion of the plan:
export const PeriodValues = {
    Monthly: 12,
    Yearly: 1
}

//value for add ones:
export const addOnesValues = {
    Online_service: "online service",
    larger_storage: "larger storage",
    customizable_profile: "customizable profile"
}


const useForm = () => {
    const [name, setName] = useState("");   //string, required, can't be empty
    const [email, setEmail] = useState(""); //string, required, can't be empty
    const [phone, setPhone] = useState("");  //number, required, can't be empty
    const [plan, setPlan] = useState(PlanValues.ARCADE);   //radio value, one of [arcade, advanced, pro]
    const [period, setPeriod] = useState(PeriodValues.Monthly);   // toggle, either monthly or yearly
    const [addOnes, setAddOnes] = useState([addOnesValues.Online_service]); //  checkbox, list, can be ["online service", "larger storage", "customizable profile"]

    const updateName = (newName) => {
        if (newName == "") {
            console.log("required field");
            alert("name is a required field");
        } else {
            setName(newName);
        }
    }

    const updateEmail = (newEmail) => {
        if (newEmail == "") {
            console.log("required field");
            alert("email is a required field");
        } else {
            setEmail(newEmail);
        }
    }

    const updatePhone = (newPhone) => {
        if (newPhone == "") {
            console.log("required field");
            alert("Phone number is a required field");
        } else {
            setPhone(newPhone);
        }
    }

    return { name, updateName, email, updateEmail, phone, updatePhone, plan, setPlan, period, setPeriod, addOnes, setAddOnes }
}

export default useForm