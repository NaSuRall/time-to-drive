
"use client";
import { useState } from "react";

export default function contactForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    company: "",
    country: "US",
    phone: "",
    email: "",
    message: "",
    agreeToPolicies: false,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    const key = id || name;
    setForm((prev) => ({
      ...prev,
      [key]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          first_name: "",
          last_name: "",
          company: "",
          country: "US",
          phone: "",
          email: "",
          message: "",
          agreeToPolicies: false,
        });
      } else {
        const data = await res.json().catch(() => ({}));
        console.error("Send contact error", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="isolate w-full px-4 py-12 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto w-full text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Time to drive</h2>
      </div>

  <form onSubmit={handleSubmit} className="mx-auto mt-8 w-full max-w-3xl sm:mt-10 text-white px-2">
  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block text-2xl font-semibold text-white">
             Prénom
            </label>
            <div className="mt-2.5">
              <input
                id="first_name"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last_name" className="block text-2xl  font-semibold text-white">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                id="last_name"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-2xl  font-semibold text-white">
              Entreprise / Organisation
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-2xl  font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-2xl  font-semibold text-white">
              Téléphone
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>EU</option>
                  </select>
                </div>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="+33 6 12 34 56 78"
                  className="block min-w-0 grow bg-gray-500 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-2xl font-semibold text-white">
              Message 
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="flex flex-row sm:col-span-2 ">
            <p className="flex w-full">J'accepte que les informations saisies dans ce formulaire soient utilisées pour me recontacter. Pour plus d'informations, consultez notre{" "}</p>
              <a href="/privacy-policy" className="underline hover:text-indigo-400">
                politique de confidentialité
              </a>
              .
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            disabled={status === "loading"}
            className="block w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            {status === "loading" ? "Envoi..." : "Let's talk"}
          </button>
          {status === "success" && <p className="mt-4 text-green-400">Message envoyé ✅</p>}
          {status === "error" && <p className="mt-4 text-red-400">Erreur lors de l'envoi. Réessayez plus tard.</p>}
        </div>
      </form>
    </div>
  );
}
