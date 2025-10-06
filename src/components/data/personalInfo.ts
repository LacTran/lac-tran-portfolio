// src/data/personalInfo.ts
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Lac Tran",
  title: "Full-stack Software Developer",
  description:
    "Building scalable, maintainable software solutions with 5+ years of experience in full-stack development and cloud architecture.",
  contact: {
    email: "lac.tran@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  aboutText: "I build, maintain, and ship elegant, efficient, and scalable software solutions. From designing complex systems to writing clean code, I thrive on solving real-world problems and delivering products that stand the test of time.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-username",
      icon: Twitter,
    },
  ],
  contactItems: [
    {
      label: "Email",
      value: "trangialac.fin@gmail.com",
      href: "mailto:trangialac.fin@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+358 469 434 897",
      href: "tel:+358469434897",
      icon: Phone,
    },
    { label: "Location", value: "Vantaa, Finland", icon: MapPin },
  ],
};