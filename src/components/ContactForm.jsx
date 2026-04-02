"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
//import { CreatContact } from "../actions/actions";

export default function ContactForm() {
  const { t } = useTranslation();

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
    
    if (!form.firstName.trim()) e.firstName = t("errors.required");
    if (!form.lastName.trim()) e.lastName = t("errors.required");
    if (!form.phone.trim()) e.phone = t("errors.required");
    if (!form.message.trim()) e.message = t("errors.required");

    if (!form.email.trim()) {
      e.email = t("errors.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t("errors.invalidEmail");
    }

    if (!form.agree) e.agree = t("errors.mustAccept");

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
        setErrors({ server: result.error || t("errors.server") });
      }
    } catch (err) {
      setErrors({ server: t("errors.server") });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center  p-6">
      <form onSubmit={handleSubmit} className=" max-w-7xl space-y-6 rounded-2xl  pb-0" noValidate>
        <div className="grid grid-cols-1 gap-4">
         
          {/* Prénom */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t("firstName")} *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              maxLength={25}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Jane"
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t("lastName")} *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              maxLength={25}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("email")} *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="jane.doe@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t("phone")} *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="+1 234 567 890"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t("message")} *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            maxLength={600}
            className={`mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder={t("messagePlaceholder")}
          />
          <div className="mt-1 text-xs text-gray-500 text-right">{form.message.length}/600</div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
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
            <label htmlFor="agree" className="text-xs text-gray-700">{t("agree")} *</label>
          </div>
          {errors.agree && <p className="text-xs text-red-600 w-full max-w-2xl">{errors.agree}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-fit rounded-2xl flex justify-center items-center gap-3 px-6 py-3 font-medium text-white transition-all ${isLoading ? 'bg-gray-400' : 'bg-[#E54259] hover:bg-[#d13c50]'}`}
          >
            {isLoading ? "Envoi..." : t("submit")}
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
              ✓ {t("success")} - Nous vous répondrons bientôt.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}