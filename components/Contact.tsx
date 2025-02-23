"use client";
import { useState } from "react";

export default function Contattaci() {
  const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Messaggio inviato correttamente! Verrai contattato quanto prima.");
    setFormData({ nome: "", email: "", messaggio: "" });
  };

  return (
    <section className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto text-center text-black">
        <h2 className="text-4xl font-bold text-white">Contattaci</h2>
        <p className="mt-2 text-xl text-white">Vuoi conoscere meglio i nostri servizi? Contattaci!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto bg-blue p-6 rounded-lg text-grey-900">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-lg font-semibold text-white">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-400"
              placeholder=" Nome e Cognome / Ragione Sociale"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-400"
              placeholder=" Indirizzo email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="messaggio" className="block text-lg font-semibold text-white">Messaggio</label>
            <textarea
              id="messaggio"
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-400"
              placeholder=" Scrivi il tuo Messaggio..."
              rows={4}
            ></textarea>
          </div>

          <button type="submit" className="bg-white-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold">
          <br></br>
            Invia
          </button> 
        </form>
      </div>
    </section>
  );
}
