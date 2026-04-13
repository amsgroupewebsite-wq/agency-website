"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CreatContact } from "../actions/actions";

export default function ContactForm() {
  

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation côté client
  function validate() {
    const e = {};
    
    if (!form.firstName.trim()) e.firstName = "errors.required";
    if (!form.lastName.trim()) e.lastName = "errors.required";
    if (!form.phone.trim()) e.phone = "errors.required";
    if (!form.message.trim()) e.message = "errors.required";

    if (!form.email.trim()) {
      e.email = "errors.required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "errors.invalidEmail";
    }

    if (!form.agree) e.agree = "errors.mustAccept";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(ev) {
    const { name, value, type } = ev.target;
    
    if (type === "file") {
      const fileInput = ev.target;
      setForm((prev) => ({ ...prev, [name]: fileInput.files && fileInput.files[0] ? fileInput.files[0] : null }));
    } else if (type === "checkbox") {
      const checkbox = ev.target;
      setForm((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Nettoyage des erreurs
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    if (errors.server) setErrors(prev => ({ ...prev, server: "" }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setIsLoading(true);
    setSubmitted(false);
    setErrors({});

    if (!validate()) {
      setIsLoading(false);
      return;
    }

    // Préparation des données pour la Server Action
    const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);
    formData.append("agree", form.agree.toString());
    if (form.file) {
      formData.append("file", form.file);
    }

    try {
      // APPEL DE L'ACTION SERVEUR
      const result = await CreatContact(formData);

      if (result.success) {
        setSubmitted(true);
        // Reset du formulaire
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          file: null,
          agree: false,
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Erreur retournée par l'action (ex: validation serveur)
        setErrors({ server: result.error || errors.server });
      }
    } catch (err) {
      setErrors({ server: "errors.server" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FFF8E8] rounded-sm p-6 ">
      <form onSubmit={handleSubmit} className=" max-w-7xl space-y-6 rounded-2xl  pb-0" noValidate>
        <div className="grid grid-cols-1 gap-4">
         
          {/* Prénom */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">Prénom*</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              maxLength={25}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder=""
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Nom*</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              maxLength={25}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder=""
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="user@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Téléphone*</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="+213 6 12 34 56 78"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message*</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            maxLength={600}
            className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Votre message ici..."
          />
          <div className="mt-1 text-xs text-gray-500 text-right">{form.message.length}/600</div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        {/* Pièce jointe */}
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">file (optionnel)</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={handleChange}
            accept=".pdf,.png,.jpg,.jpeg,.txt"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-[#E54259] file:px-4 file:py-2 file:text-white hover:file:opacity-90"
          />
          <p className="mt-1 text-xs text-gray-500">Max 5MB (PDF, Image, TXT)</p>
        </div>
        

        <div className="flex flex-col items-center gap-5 mt-1 px-4">
          <div className="flex items-start gap-3 w-full max-w-2xl">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className={`mt-1 h-5 w-5 rounded ${errors.agree ? 'border-red-500' : 'border-gray-300'}`}
            />
            <label htmlFor="agree" className="text-xs text-gray-700">En cochant cette case, vous acceptez que vos données personnelles soient utilisées dans le cadre du traitement de votre demande de contact. Pour en savoir plus sur
la gestion de vos données et vos droits, consultez notre politique de confidentialité.</label>
          </div>
          {errors.agree && <p className="text-xs text-red-600 w-full max-w-2xl">{errors.agree}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-fit rounded-2xl flex justify-center items-center gap-3 px-6 py-3 font-medium text-white transition-all ${isLoading ? 'bg-gray-400' : 'bg-[#E54259] hover:bg-[#d13c50]'}`}
          >
            {isLoading ? "Envoi..." : "Envoyer"}
            {!isLoading && <ArrowRight className="bg-white rounded-md text-[#E54259] w-5 h-5" />}
          </button>

          {/* Notifications finales */}
          {errors.server && (
            <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-red-800 text-sm">
              {errors.server}
            </div>
          )}

          {submitted && (
            <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-green-800 text-sm">
              ✓ success - Nous vous répondrons bientôt.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}