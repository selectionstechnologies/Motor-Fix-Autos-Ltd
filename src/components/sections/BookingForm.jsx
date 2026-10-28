import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Phone, Send } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { business } from '../../data/business';
import { services, serviceGroups } from '../../data/services';
import { closedDays, londonNow } from '../../lib/hours';
import { hasWhatsApp } from '../../lib/whatsapp';
import {
  emptyBooking, validateBooking, submitBooking, formatReg, timeSlots, MESSAGE_MAX,
} from '../../lib/booking';

const fieldOrder = Object.keys(emptyBooking);

function ErrorText({ id, error }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          id={`${id}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-danger-ink"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function Field({ id, label, hint, error, optional, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-text">
        {label}
        {optional ? <span className="ml-1 font-normal text-text-mute">(optional)</span> : <span className="ml-0.5 text-danger-ink" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-text-mute">{hint}</p>}
      <ErrorText id={id} error={error} />
    </div>
  );
}

export default function BookingForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState(emptyBooking);
  const [errs, setErrs] = useState({});
  const [touched, setTouched] = useState({});
  const [result, setResult] = useState(null);
  const [minDate, setMinDate] = useState(undefined);

  // Pre-select a service from ?service=<slug> (e.g. coming from a service page)
  useEffect(() => {
    const slug = params.get('service');
    if (slug && services.some((s) => s.slug === slug)) setValues((v) => ({ ...v, service: slug }));
  }, [params]);

  useEffect(() => setMinDate(londonNow().iso), []);

  const update = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrs(validateBooking(next));
  };

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    update(name, type === 'checkbox' ? checked : name === 'reg' ? value.toUpperCase() : value);
  };

  const onBlur = (e) => {
    const { name } = e.target;
    const next = name === 'reg' && values.reg.trim() ? { ...values, reg: formatReg(values.reg) } : values;
    if (next !== values) setValues(next);
    setTouched((t) => ({ ...t, [name]: true }));
    setErrs(validateBooking(next));
  };

  const show = (name) => (touched[name] ? errs[name] : undefined);
  const describe = (name, hint) => {
    const ids = [show(name) && `bk-${name}-error`, !show(name) && hint && `bk-${name}-hint`].filter(Boolean);
    return {
      'aria-invalid': Boolean(show(name)),
      'aria-describedby': ids.length ? ids.join(' ') : undefined,
    };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const clean = { ...values, reg: values.reg.trim() ? formatReg(values.reg) : '' };
    const found = validateBooking(clean);
    setValues(clean);
    setErrs(found);
    setTouched(Object.fromEntries(fieldOrder.map((k) => [k, true])));
    const first = fieldOrder.find((k) => found[k]);
    if (first) {
      document.getElementById(`bk-${first}`)?.focus();
      return;
    }
    setResult(await submitBooking(clean));
  };

  if (result) {
    const viaWhatsApp = result.channel === 'whatsapp';
    return (
      <div className="card p-6 sm:p-8" role="status" aria-live="polite">
        <CheckCircle2 className="h-10 w-10 text-brand-ink" aria-hidden="true" />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Nearly done</h2>
        <p className="mt-3 text-lg">
          {viaWhatsApp
            ? 'WhatsApp should have opened with your booking details. Press send there to get them to us.'
            : 'Your email app should have opened with your booking details filled in. Press send there to get them to us.'}{' '}
          We will contact you to confirm a date and time.
        </p>
        <div className="mt-6 rounded border border-line-light bg-paper p-5">
          <p className="font-semibold text-text">Nothing opened? Call us instead</p>
          <p className="mt-1 text-text-mute">
            Call <a href={business.phoneHref} className="font-semibold text-brand-ink underline underline-offset-4">{business.phone}</a>, or email the details below to{' '}
            <a href={`mailto:${business.email}`} className="font-semibold text-brand-ink underline underline-offset-4">{business.email}</a>.
          </p>
          <pre className="mt-4 max-h-60 overflow-auto whitespace-pre-wrap rounded-sm bg-white p-4 font-body text-sm text-text">{result.body}</pre>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={business.phoneHref} className="btn-primary"><Phone className="h-5 w-5" aria-hidden="true" />Call <span className="whitespace-nowrap">{business.phone}</span></a>
          <button type="button" className="btn-outline" onClick={() => { setResult(null); setValues(emptyBooking); setTouched({}); setErrs({}); }}>
            Start a new request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-label="Booking request form" className="card grid gap-5 p-4 min-[360px]:p-6 sm:grid-cols-2 sm:p-8">
      <Field id="bk-name" label="Your name" error={show('name')}>
        <input id="bk-name" name="name" type="text" autoComplete="name" className="input"
          value={values.name} onChange={onChange} onBlur={onBlur} {...describe('name')} />
      </Field>

      <Field id="bk-phone" label="Phone number" error={show('phone')}>
        <input id="bk-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="input" placeholder="07123 456789"
          value={values.phone} onChange={onChange} onBlur={onBlur} {...describe('phone')} />
      </Field>

      <Field id="bk-email" label="Email" optional error={show('email')} className="sm:col-span-2">
        <input id="bk-email" name="email" type="email" autoComplete="email" className="input"
          value={values.email} onChange={onChange} onBlur={onBlur} {...describe('email')} />
      </Field>

      <Field id="bk-reg" label="Registration" hint="As shown on your number plate" error={show('reg')}>
        <input id="bk-reg" name="reg" type="text" autoComplete="off" autoCapitalize="characters" spellCheck="false" maxLength={10}
          className="input font-display text-xl font-bold uppercase tracking-wide" placeholder="AB12 CDE"
          value={values.reg} onChange={onChange} onBlur={onBlur} {...describe('reg', true)} />
      </Field>

      <Field id="bk-vehicle" label="Make & model" error={show('vehicle')}>
        <input id="bk-vehicle" name="vehicle" type="text" autoComplete="off" className="input" placeholder="e.g. Audi A3 1.6 TDI"
          value={values.vehicle} onChange={onChange} onBlur={onBlur} {...describe('vehicle')} />
      </Field>

      <Field id="bk-service" label="Service" error={show('service')} className="sm:col-span-2">
        <select id="bk-service" name="service" className="input" value={values.service} onChange={onChange} onBlur={onBlur} {...describe('service')}>
          <option value="">Choose a service</option>
          {serviceGroups.map((g) => (
            <optgroup key={g.id} label={g.title}>
              {services.filter((s) => s.group === g.id).map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </Field>

      <Field id="bk-date" label="Preferred date" hint={closedDays.length ? `We are closed on ${closedDays.join(' and ')}s` : undefined} error={show('date')}>
        <input id="bk-date" name="date" type="date" min={minDate} className="input"
          value={values.date} onChange={onChange} onBlur={onBlur} {...describe('date', closedDays.length > 0)} />
      </Field>

      <Field id="bk-time" label="Preferred time" error={show('time')}>
        <select id="bk-time" name="time" className="input" value={values.time} onChange={onChange} onBlur={onBlur} {...describe('time')}>
          <option value="">Choose a time</option>
          {timeSlots.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </Field>

      <Field id="bk-message" label="Anything we should know?" optional error={show('message')} className="sm:col-span-2">
        <textarea id="bk-message" name="message" rows="4" maxLength={MESSAGE_MAX} className="input resize-y"
          placeholder="Warning lights, noises, MOT due date, or the damage you would like quoted"
          value={values.message} onChange={onChange} onBlur={onBlur} {...describe('message')} />
        <p className="mt-1 text-right text-xs text-text-mute">{values.message.length}/{MESSAGE_MAX}</p>
      </Field>

      <div className="sm:col-span-2">
        <label htmlFor="bk-consent" className="flex items-start gap-3 text-sm text-text">
          <input id="bk-consent" name="consent" type="checkbox" checked={values.consent} onChange={onChange} onBlur={onBlur}
            className="mt-0.5 h-5 w-5 shrink-0 rounded-sm accent-[rgb(var(--brand-dark))]" {...describe('consent')} />
          <span>
            I agree to {business.shortName} using these details to reply to my request, as described in the{' '}
            <Link to="/privacy-policy" className="font-semibold text-brand-ink underline underline-offset-4">privacy policy</Link>.
          </span>
        </label>
        <ErrorText id="bk-consent" error={show('consent')} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">
          {hasWhatsApp ? <WhatsAppIcon className="h-5 w-5" /> : <Send className="h-5 w-5" aria-hidden="true" />}
          {hasWhatsApp ? 'Send booking on WhatsApp' : 'Send booking request'}
        </button>
        <p className="mt-3 text-center text-sm text-text-mute">
          {hasWhatsApp ? 'Opens WhatsApp with your details filled in.' : 'Opens your email app with your details filled in.'} This is a request. We confirm every booking personally.
        </p>
      </div>
    </form>
  );
}
