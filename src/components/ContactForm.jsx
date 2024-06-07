import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Envoyer</button>
      <div class="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50">
        <div class="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
          <div class="text p-3 flex flex-col justify-evenly h-full">
            <span class="font-bold text-2xl">Get the Document : My CV</span>
            <p class="subtitle">Simply click the download link.</p>
          </div>
          <div class="w-full flex flex-row justify-between z-10">
            <a
              class="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center"
              href="#"
            >
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                class="w-6 h-6  stroke-cyan-800"
              >
                <path
                  stroke-width="8"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  d="M18.3,65.8v4A11.9,11.9,0,0,0,30.2,81.7H69.8A11.9,11.9,0,0,0,81.7,69.8v-4M65.8,50,50,65.8m0,0L34.2,50M50,65.8V18.3"
                  class=""
                ></path>
              </svg>
            </a>
            <a
              class="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center"
              href="/src/assets/Mohamed_JEBRI_.pdf"
            >
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                class="w-6 h-6  stroke-cyan-800"
              >
                <path
                  stroke-width="8"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
