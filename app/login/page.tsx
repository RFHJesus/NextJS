
// app/login/page.tsx

// ✅ L'export doit être "default"
export default function LoginPage() {
  return (
    <main>
      <h1>Page de Connexion</h1>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </main>
  );
}