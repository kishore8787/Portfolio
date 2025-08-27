import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, Github, Linkedin, Twitter,Instagram, InstagramIcon } from 'lucide-react';
import { SiDiscord } from "react-icons/si";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({
          'form-name': 'contact',
          ...formData
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form> */}
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-300">Thanks for reaching out. I'll get back to you dont ya wry!</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-white font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or just say hi!"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold py-4 px-6 rounded-lg hover:from-cyan-300 hover:to-cyan-500 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <div className="animate-spin w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span >Send Message</span>
              </>
            )}
          </button>
          <input type="hidden" name="form-name" value="contact" />

        </form>
      )}
    </div>
  );
};

const ContactMe = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kishore8787', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kishore-g-24ba37200/', label: 'LinkedIn' },
    {icon:InstagramIcon,href:"https://www.instagram.com/kishore3__/",label:"Instagram"},
    { icon: SiDiscord, href: 'https://discord.com/users/kishore4859', label: 'Discord' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <div id="contact" className="min-h-screen py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Mail className="w-8 h-8 text-cyan-300" />
              <h2 
                className="font-bold text-white"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
              >
                Let's Connect
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind or just want to chat about data analytics? 
              I'd like to hear from you. Let's build something cool together!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Contact info and social */}
            <div className="space-y-8">
              {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-300/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email me at</p>
                      <p className="text-white font-medium">your.email@example.com</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Find Me Online</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-cyan-300/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun fact */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-cyan-300/10 rounded-2xl p-6 md:p-8 border border-yellow-400/20">
                <p className="text-lg text-white/90 italic">
                  "I typically respond within 20 hours. Tea chats and project reviews are always welcome! ☕"
                </p>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;