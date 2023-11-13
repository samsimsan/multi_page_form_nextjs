

const Page1 = () => {
    return (
        <div className="grid gap-4">
            <h1>Personal info</h1>
            <p>Please provide your name, email, address and phone number.</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" />
        </div>
    )
}

export default Page1