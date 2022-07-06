import React from 'react';
import { Link } from 'react-router-dom'
import { UserCircle, LockKey, Hash, IdentificationBadge, Key } from 'phosphor-react';

const register = (props) => (
    <form className="flex flex-col flex-wrap justify-between p-10 items-center">
        <header className="text-center">
            <span className="font-bold text-xl"> Authenticator</span>
            <p className="text-xs font-thin text-slate-400"> Sign up using your e-mail address</p>
        </header>
        <div>
            <p className="text-center ">Sign up</p>
            <div>
                <IdentificationBadge size={26} className="absolute mt-1" />
                <input className="w-64 h-8 text-sm mb-1 pl-8" type="text" placeholder='Name'></input>
            </div>
            <div>
                <Hash size={26} className="absolute mt-1" />
                <input className="w-64 h-8 text-sm mb-1 pl-8" type="number" placeholder='Mobile Number'></input>
            </div>
            <div>
                <UserCircle size={26} className="absolute mt-1" />
                <input className="w-64 h-8 text-sm mb-1 pl-8" type="email" placeholder='Email Address'></input>
            </div>
            <div>
                <Key size={26} className="absolute mt-1" />
                <input className="w-64 h-8 text-sm mb-1 pl-8" type="password" placeholder='Password'></input>
            </div>
            <div>
                <LockKey size={26} className="absolute mt-1" />
                <input className="w-64 h-8 text-sm pl-8" type="password" placeholder='Confirm Password'></input>
            </div>
        </div>
        <div className="">
            <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                Confirm
            </button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link to="/">Home</Link>
            </button>
        </div>
    </form>
)

export default register