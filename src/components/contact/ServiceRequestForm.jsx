import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Button from "../common/Button";
import { services } from "../../data/services";

const initialState = {
  name: "",
  phone: "",
  email: "",
  deviceType: "Laptop",
  service: "",
  mode: "Walk-in at Shop",
  preferredDate: "",
  issue: "",
};

const deviceTypes = ["Laptop", "Desktop PC", "Printer", "CCTV System", "Networking Equipment", "Other"];
const serviceModes = ["Walk-in at Shop", "On-Site Visit", "Pickup & Drop", "Remote Support"];

export default function ServiceRequestForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim() || form.phone.trim().length < 10) next.phone = "Please enter a valid phone number";
    if (!form.service) next.service = "Please select a service";
    if (!form.issue.trim()) next.issue = "Please briefly describe the issue";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-16 px-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <CheckCircle2 className="size-14 text-emerald-600" />
        <h3 className="font-display font-semibold text-2xl text-navy-950">Request Received!</h3>
        <p className="text-sm text-slate-600 max-w-md">
          Thanks, {form.name.split(" ")[0] || "there"}! We've noted your service request for{" "}
          <span className="font-semibold">{form.service}</span>. Our team will call you at{" "}
          <span className="font-semibold">{form.phone}</span> shortly to confirm details.
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
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
      <div>
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
          placeholder="you@example.com (optional)"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Device Type</label>
        <select
          value={form.deviceType}
          onChange={update("deviceType")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
        >
          {deviceTypes.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Service Needed *</label>
        <select
          value={form.service}
          onChange={update("service")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Preferred Service Mode</label>
        <select
          value={form.mode}
          onChange={update("mode")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
        >
          {serviceModes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Preferred Date</label>
        <input
          type="date"
          value={form.preferredDate}
          onChange={update("preferredDate")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Describe the Issue *</label>
        <textarea
          rows={4}
          value={form.issue}
          onChange={update("issue")}
          placeholder="E.g. Laptop won't turn on, printer showing paper jam, need 4 CCTV cameras installed..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
        />
        {errors.issue && <p className="mt-1 text-xs text-red-600">{errors.issue}</p>}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" icon={Send} className="w-full sm:w-auto">
          Submit Service Request
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          This is a request form — we'll call to confirm your appointment. For urgent issues, please call or
          WhatsApp us directly.
        </p>
      </div>
    </form>
  );
}
