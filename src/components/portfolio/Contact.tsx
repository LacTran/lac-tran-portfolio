// src/components/portfolio/Contact.tsx
import ContactForm from "./ContactForm";
import { personalInfo } from "@/components/data/personalInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and interesting projects. Let&apos;s talk about how we can work together.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {personalInfo.contactItems.map((item) => (
                <div key={item.label} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;