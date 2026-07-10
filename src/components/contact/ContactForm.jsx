import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../common/Button";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    if (!form.message.trim()) next.message = "Please tell us how we can help";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-14 px-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <CheckCircle2 className="size-12 text-emerald-600" />
        <h3 className="font-display font-semibold text-xl text-navy-950">Message Sent!</h3>
        <p className="text-sm text-slate-600 max-w-sm">
          Thanks for reaching out. Our team will get back to you shortly — for anything urgent, feel free to
          call or WhatsApp us directly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="sm:col-span-1">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Full Name *</label>
        <input
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div className="sm:col-span-1">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Phone Number *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="10-digit mobile number"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Email Address</label>
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Subject</label>
        <input
          type="text"
          value={form.subject}
          onChange={update("subject")}
          placeholder="What's this about?"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Message *</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us how we can help..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" icon={Send} className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
