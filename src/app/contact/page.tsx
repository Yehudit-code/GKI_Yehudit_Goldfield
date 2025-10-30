"use client";

import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            setStatus("Error sending message.");
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1>צור קשר</h1>
                <div className="contact-info">
                    <p>📍 כתובת: יגאל אלון 123, תל אבי</p>
                    <p>📞 טלפון: 02-1234567</p>
                    <p>✉️ אימייל: hadasim@example.com</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="שם מלא"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="אימייל"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="הודעה"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                    />
                    <button type="submit">שלח</button>
                </form>
                {status && <p style={{ marginTop: "15px" }}>{status}</p>}
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');
                .contact-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: linear-gradient(to right, #f2f2f2, #e6e6e6);
                    font-family: 'Baloo 2', cursive;
                    padding: 20px;
                }
                .contact-container {
                    background: #fff;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    margin-bottom: 20px;
                    color: #333;
                }
                .contact-info p {
                    margin: 8px 0;
                    color: #555;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                input, textarea {
                    padding: 12px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    font-size: 16px;
                    width: 100%;
                    box-sizing: border-box;
                    transition: border 0.3s;
                }
                input:focus, textarea:focus {
                    border-color: #6c63ff;
                    outline: none;
                }
                button {
                    padding: 12px;
                    background: #6c63ff;
                    color: #fff;
                    font-size: 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                button:hover {
                    background: #574fd6;
                }
                @media(max-width: 480px){
                    .contact-container {
                        padding: 30px 20px;
                    }
                }
            `}</style>
        </div>
    );
}