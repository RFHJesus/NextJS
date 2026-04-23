// app/inscription/page.tsx

export default function InscriptionPage() {
  return (
    <main>
      <h1><center>Page d'inscription</center></h1>
      <h1 color="green">
        <div className="bg-green-500 text-white p-4">
        <marquee behavior="Hello" direction="">Peace for you</marquee>
        </div>
      </h1>
      <form>
        <input type="text" placeholder="Nom d'utilisateur" />

        <button type="submit">S'inscrire</button>
      </form>
    </main>
  );
}