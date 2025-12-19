import { Church, Mail, Lock, Eye, ArrowRight } from 'lucide-react'

function Login() {
  return (
    <>
      <main className="relative min-h-screen min-w-screen flex items-center justify-center p-4 bg-[#0f172a]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-100"></div>

        <div className="relative z-10 bg-white rounded-2xl shadow-2xl px-8 py-12 w-full max-w-[400px] flex flex-col items-center">
          <div className="bg-primary p-3 rounded-xl mb-4 text-white">
            <Church size={52} />
          </div>

          <h1 className="text-xl font-bold text-[#1e293b]">Church Manager</h1>
          <p className="text-gray-400 text-xs mb-8">Faça login para continuar</p>

          <form className="w-full space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 ml-1">E-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input type="email" placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 ml-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input type="password" placeholder="********"
                  className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 active:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm">
              Entrar
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-10 text-center space-y-2">
            <p className="text-xs text-gray-400">Primeira vez aqui?</p>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-900 block">Criar nova organização</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login

