"use client";
import { useState } from "react";
import styles from "/styles/Contact.module.scss";

interface ContactsProps {
    isOpen: boolean;
    closePopup: () => void;
}

export default function Contacts({ isOpen, closePopup }: ContactsProps) {
    const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Messaggio inviato! Ti risponderemo presto.");
        setFormData({ nome: "", email: "", messaggio: "" });
        closePopup(); // Chiude il popup dopo l'invio
    };

    return (
        <>
            {isOpen && (
                <div className={styles.container} onClick={closePopup}>
                    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                        {/* Bottone di chiusura con "X" in alto a destra */}
                        <button className={styles.closeButton} onClick={closePopup}>&times;</button>

                        <h2 className={styles.title}>Contattaci</h2>
                        <p className={styles.subtitle}>Vuoi conoscere meglio i nostri servizi? Scrivici!</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="messaggio">Messaggio</label>
                                <textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} required rows={5}></textarea>
                            </div>

                            <button type="submit" className={styles.button}>Invia Messaggio</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
