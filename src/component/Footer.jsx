import { useState } from 'react'
const Footer = () => {
    const [email, setEmail] = useState('')
    return (
        <div className="h-[200px] text-white flex ml-10 gap-20 mt-10">
            <div className="w-1/3">
                <h1 className="text-6xl mb-2">LOGO</h1>
                <h1 className="text-4xl mb-2">Bharat Gym</h1>
                <h1> Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</h1>
            </div>
            <div className="flex">
                <div className="h-[80%] bg-white border-r-2"></div>
            </div>
            <div className="flex flex-col gap-6">
                <p className="font-medium text-xl">CONTACT</p>
                <div className="flex flex-col cursor-pointer gap-2">
                    <p className="hover:underline">Facebook</p>
                    <p className="hover:underline">Email</p>
                    <p className="hover:underline">Contact: +91 1111 1111</p>
                </div>
            </div>
            <div className='flex flex-col items-end ml-56'>
                <p className='font-medium text-xl mb-3'>Subscribe to our newsletter</p>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Get latest updates'
                    className='bg-white rounded-lg py-4 px-10'
                />
            </div>
        </div>
    )
}

export default Footer