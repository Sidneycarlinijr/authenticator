import './App.css';
import { UserCircle } from 'phosphor-react'

function App() {
  return (
    <div className="App rounded bg-white-100 flex justify-center">
      <form className="flex flex-col flex-wrap justify-between p-10 items-center">
        <header className="text-center">
          <span className="font-bold text-xl"> Authenticator</span>
          <p className="text-xs font-thin text-slate-400"> Log-in using your e-mail and password</p>
        </header>
        <div className="pt-5">
          <i className="absolute"><UserCircle size={32} /></i>
          <input className="w-64 h-8 text-sm mb-1" type="text" placeholder='Nome de usuário'></input>
          <input className="w-64 h-8 text-sm" type="password" placeholder='Digite a Senha'></input>
        </div>
        <div>
          <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Log-in
          </button>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Register
          </button>
        </div>

      </form>
    </div>
  )
}

export default App;