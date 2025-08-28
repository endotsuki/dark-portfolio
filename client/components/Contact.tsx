import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { IconBrandTelegram, IconBrowserShare, IconCircleCheck, IconCircleX, IconPhone, IconInfoCircle, IconLoader3, IconMail, IconMap2, IconSend2 } from '@tabler/icons-react';

const Field = ({ label, name, type = "text", ...props }: any) => (
  <div className="space-y-3">
    <label className="block text-white font-semibold text-sm uppercase tracking-wide">{label}</label>
    <Input name={name} type={type} {...props} />
  </div>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', telegram: '', subject: '', message: '' });
  const { toast } = useToast();

  // Contact data
  const contactInfo = [
    { icon: IconPhone, label: 'Phone', value: '+855 86 397 836', href: 'tel:+85586397836', description: 'Call me directly' },
    { icon: IconBrandTelegram, label: 'Telegram', value: '@cheatzx', href: 'https://t.me/cheatzx', description: 'Quick chat on Telegram' },
    { icon: IconMail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com', description: 'Professional inquiries' },
    { icon: IconMap2, label: 'Location', value: 'Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia.', href: '#', description: 'Available for meetings' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const BOT_TOKEN = '7762199917:AAFvdAJQZRrZm_ouEoHHDGxPPMr4lUT6T4Y';
  const CHAT_ID = '5058242890';

  const sendToTelegram = async (data: typeof formData) => {
    const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Telegram:* ${data.telegram}
📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Sent:* ${new Date().toLocaleString()}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'Markdown' })
      });
      return res.ok;
    } catch (err) {
      console.error('Error sending to Telegram:', err);
      return false;
    }
  };

  const notify = (type: 'success' | 'error' | 'connection') => {
    const options = {
      success: {
        title: "Success!",
        icon: <IconCircleCheck size={30} className=" text-green-500" />,
        text: "Your message was sent."
      },
      error: {
        title: "Error!",
        icon: <IconCircleX size={30} className="text-red-500" />,
        text: "Something went wrong. Please try again or contact me directly via Telegram."
      },
      connection: {
        title: "Connection Error!",
        icon: <IconInfoCircle size={30} className="text-yellow-500" />,
        text: "Unable to connect to server. Please check your internet connection and try again."
      }
    };
    const { title, icon, text } = options[type];
    toast({
      title,
      description: (
        <div className="flex items-center gap-2">
          {icon}
          <span>{text}</span>
        </div>
      ),
      duration: 6000
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await sendToTelegram(formData);
      if (success) {
        notify('success');
        setFormData({ name: '', telegram: '', subject: '', message: '' });
      } else notify('error');
    } catch {
      notify('connection');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-slate-950 pt-16 px-2 relative">
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
              <IconMail className="w-5 h-5" />
              <span className="text-sm text-white font-medium tracking-wide">CONTACT</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
              GET IN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">TOUCH</span>
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your next project and create something extraordinary together.
            </p>
          </div>
          {/* Grid */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Connect With Me</h2>
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800">
                <div className="flex items-center gap-4">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-95"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-lg text-white font-semibold">Quick Response</p>
                    <p className="text-gray-400 text-sm">I will get back to you as soon as possible. Usually within 24 hours.</p>
                  </div>
                </div>
              </div>
              {contactInfo.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  data-aos="fade-right"
                  data-aos-delay={i * 400}
                  data-aos-duration="600"
                  className="group relative overflow-hidden block p-6 rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 hover:border-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
                  style={{ animationDelay: `${i * 100}ms` }}>
                  {/* Dark holographic sweep effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                  </div>
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl border border-gray-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:-translate-x-40">
                      <c.icon size={23} className="text-white" />
                    </div>
                    <div className="flex-1 transition-transform duration-300 group-hover:-translate-x-16">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-semibold text-lg">{c.label}</h3>
                        <IconBrowserShare size={20} className="text-gray-400 group-hover:text-gray-300 group-hover:translate-x-16 translate-x-20 transition-all" />
                      </div>
                      <p className="text-white font-medium mb-1">{c.value}</p>
                      <p className="text-gray-400 text-sm">{c.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Form */}
            <div className="lg:col-span-7" data-aos='fade-left' data-aos-duration='600'>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 rounded-3xl py-8 px-4 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl"></div>
                <div className="absolute -top-px left-8 w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute -right-px top-8 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                      <div className="w-1 h-1 rounded-full bg-white/20"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-white/10"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-3">Send a Message</h2>
                    <p className="text-gray-300">Connected to Telegram for instant notifications</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg" placeholder="Enter your name" />
                      <Field label="Telegram" name="telegram" value={formData.telegram} onChange={handleInputChange} required className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg" placeholder="@yourusername" />
                    </div>
                    <Field label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg" placeholder="What would you like to discuss?" />
                    <div className="space-y-3">
                      <label className="block text-white font-semibold text-sm uppercase tracking-wide">Message</label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl resize-none text-base" placeholder="Tell me about your project, ideas, or just say hello..." />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-white/20 hover:border-white/60 rounded-xl font-medium text-lg tracking-wide transition-all duration-300" >
                      {/* Border sweep effect - now more visible */}
                      {/* <div className="absolute inset-0 overflow-hidden rounded-xl group-hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-1000" />
                      </div> */}
                      {/* Content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <IconLoader3 size={23} className="h-6 w-6 animate-spin mr-3" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <IconSend2 size={23} className="group-hover:translate-x-16 -translate-x-96 transition-all" />
                            <span className='group-hover:translate-x-96 transition-all'>Send Message</span>
                          </>
                        )}
                      </div>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}