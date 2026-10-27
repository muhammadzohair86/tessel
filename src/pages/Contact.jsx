import { useState } from 'react';
import { PageHero } from '../components/Sections.jsx';
import { Check, Mail, Phone, Pin, Clock } from '../components/Icons.jsx';
import { site } from '../data/site.js';
import { services } from '../data/services.js';
import { usePageTitle } from '../hooks/hooks.js';

const empty = { name: '', email: '', topic: '', message: '' };
const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter an email address like name@example.com.';
  if (!v.topic) e.topic = 'Please choose what you need help with.';
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).';
  return e;
};

export default function Contact() {
  usePageTitle('Contact');
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    if (Object.keys(found).length) {
      document.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    setSent(true); // demonstration only: nothing is sent or stored
  };

  const a11y = (k) => ({ id: k, name: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined });
  const field = (k, label, control) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {control}
      {errors[k] && <p className="error" id={`${k}-err`}>{errors[k]}</p>}
    </div>
  );

  return (
    <>
      <PageHero title="Contact">Tell us about your project. We reply within two working days.</PageHero>
      <section className="section tight">
        <div className="wrap contact-grid">
          <ul className="contact-info">
            <li><Mail /><div><h2>Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
            <li><Phone /><div><h2>Phone</h2><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></div></li>
            <li><Pin /><div><h2>Studio</h2><span>{site.address}</span></div></li>
            <li><Clock /><div><h2>Hours</h2><span>{site.hours}</span></div></li>
            <li className="note">These details are placeholders and the form below does not send anything.</li>
          </ul>
          {sent ? (
            <div className="sent" role="status">
              <Check />
              <h2>Thanks, {v.name.trim().split(' ')[0]}.</h2>
              <p>On a live website your message would now be on its way. This demonstration does not send or store anything.</p>
              <button className="btn btn-ghost" onClick={() => { setV(empty); setErrors({}); setSent(false); }}>Write another message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="row2">
                {field('name', 'Your name', <input type="text" autoComplete="name" {...a11y('name')} />)}
                {field('email', 'Email address', <input type="email" autoComplete="email" {...a11y('email')} />)}
              </div>
              {field('topic', 'What do you need help with?', (
                <select {...a11y('topic')}>
                  <option value="">Choose an option</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                  <option>Not sure yet</option>
                </select>
              ))}
              {field('message', 'About your project', <textarea rows="6" {...a11y('message')} />)}
              <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
