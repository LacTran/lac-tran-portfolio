// src/components/portfolio/ContactForm.tsx
'use client'

import { useState } from "react";
import TextField from "./TextField";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Clear submit status on change
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.');
      }

      setSubmitStatus({ type: 'success', message: 'Thank you for your message! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setSubmitStatus({ type: 'error', message: error.message || 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Your name"
          error={errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="your.email@example.com"
          error={errors.email}
        />
        <TextField
          as="textarea"
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleFormChange}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          error={errors.message}
        />
        {submitStatus.type && (
          <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-600' : 'text-destructive'}`}>
            {submitStatus.message}
          </p>
        )}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;