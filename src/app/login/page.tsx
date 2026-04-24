export default function LoginPage() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-[2em] font-bold">Page de Connexion</h1>
      <form>
        <input 
          type="email" 
          placeholder="Email" 
          className="block mx-auto my-2 p-2 border border-gray-300" 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          className="block mx-auto my-2 p-2 border border-gray-300" 
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-[10px_20px]"
        >
          {/* On garde la div verte exactement comme dans ton code */}
          <div className="bg-green-500 text-white p-4">
            Se connecter
          </div>
        </button>
      </form>
    </main>
  );
}