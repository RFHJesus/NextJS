'use client';

export default function LoginPage() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Page de Connexion</h1>
      <form>
        <input type="email" placeholder="Email" style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
        <input type="password" placeholder="Mot de passe" style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
         
        <div className="bg-green-500 text-white p-4"> Se connecter
 </div>
        </button>
      </form>
    </main>
  );
}