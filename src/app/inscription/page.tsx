// app/inscription/page.tsx

export default function InscriptionPage() {
  return (
    <main>
      <h1><center>Page d'inscription</center></h1>
      <div className="bg-green-500 text-white p-4 overflow-hidden">
        <div className="animate-bounce">Peace for you</div>
      </div>
      <form>
        <input type="text" placeholder="Nom d'utilisateur" />

        <button type="submit">S'inscrire</button>
      </form>
    </main>
  );
}