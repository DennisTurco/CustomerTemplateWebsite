"use client";
import { useState } from "react";

export default function Contattaci() {
  const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Messaggio inviato! Ti risponderemo presto.");
    setFormData({ nome: "", email: "", messaggio: "" });
  };

  return (
    <section className="bg-green-600 py-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold">Contattaci</h2>
        <p className="mt-4 text-xl">Vuoi conoscere meglio i nostri gatti o prenotare una visita? Scrivici!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-900">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-lg font-semibold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-green-400"
              placeholder="Il tuo nome"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-green-400"
              placeholder="Il tuo indirizzo email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="messaggio" className="block text-lg font-semibold">Messaggio</label>
            <textarea
              id="messaggio"
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-green-400"
              placeholder="Scrivi il tuo messaggio..."
              rows={4}
            ></textarea>
          </div>

          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-700 transition">
            Invia Messaggio
          </button>
        </form>
      </div>
    </section>
  );
}
