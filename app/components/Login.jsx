'use client';

import '../styles/Hero.module.css'
export default function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log('submit')
        
        const res = await fetch('/api/v9/login', {
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        
        if (res.ok) {
            const result = await res.json();
            console.log(result)
            if (result.success === true) {
                // Handle successful registration
                window.location.assign(result.redirect);
            } else {
                document.getElementById('message').innerHTML = result.message;
                document.getElementById('message').classList.add('text-red-500');
            }
        } else {
            console.error('Registration failed:', res.status);
        }
    }
    

    return (
        <div className="flex relative h-screen bg-[#404eed] isolate px-6 lg:px-6">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Welcome back!
                    </h2>
                    <p className="mt-2 text-center text-md text-gray-300 max-w">
                        We're so excited to see you again!
                    </p>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800 p-10 mt-0">
                    <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 uppercase text-gray-100">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 uppercase text-gray-100">
                                    Password <span className="text-red-500">*</span>
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="text-sm mt-2">
                                <a href="#" className="font-semibold text-blue-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-sm bg-indigo-500 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log In
                            </button>
                        </div>
                    </form>

                    <span id="message" className='mt-5'></span>

                    <p className="mt-2 text-sm text-gray-500 text-left">
                        Need an account?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Register
                        </a>
                    </p>
                </div>
            </div>


            <img src={'/login-bg.svg'} style={{
                position: 'absolute',
                top: 0,
                zIndex: -1,
                left: 0,
                width: '100%',
                height: '100%'
            }} alt="" />
        </div>
    )
}
