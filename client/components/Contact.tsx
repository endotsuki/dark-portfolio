import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  IconBrandTelegram,
  IconBrowserShare,
  IconCircleCheck,
  IconCircleX,
  IconPhone,
  IconInfoCircle,
  IconLoader3,
  IconMail,
  IconMap2,
  IconSend2,
} from '@tabler/icons-react';

const Field = ({ label, name, type = 'text', ...props }: any) => (
  <div className='space-y-3'>
    <label className='block text-sm font-semibold uppercase tracking-wide text-white'>{label}</label>
    <Input name={name} type={type} {...props} />
  </div>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  // Contact data
  const contactInfo = [
    {
      icon: IconPhone,
      label: 'Phone',
      value: '+855 86 397 836',
      href: 'tel:+85586397836',
      description: 'Call me directly',
    },
    {
      icon: IconBrandTelegram,
      label: 'Telegram',
      value: '@cheatzx',
      href: 'https://t.me/cheatzx',
      description: 'Quick chat on Telegram',
    },
    {
      icon: IconMail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      description: 'Professional inquiries',
    },
    {
      icon: IconMap2,
      label: 'Location',
      value: 'Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia.',
      href: '#',
      description: 'Available for meetings',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;

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
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
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
        title: 'Success!',
        icon: <IconCircleCheck size={30} className='text-green-500' />,
        text: 'Your message was sent.',
      },
      error: {
        title: 'Error!',
        icon: <IconCircleX size={30} className='text-red-500' />,
        text: 'Something went wrong. Please try again or contact me directly via Telegram.',
      },
      connection: {
        title: 'Connection Error!',
        icon: <IconInfoCircle size={30} className='text-yellow-500' />,
        text: 'Unable to connect to server. Please check your internet connection and try again.',
      },
    };
    const { title, icon, text } = options[type];
    toast({
      title,
      description: (
        <div className='flex items-center gap-2'>
          {icon}
          <span>{text}</span>
        </div>
      ),
      duration: 6000,
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
    <section id='contact' className='relative overflow-hidden bg-slate-950 px-2 pt-16'>
      <div className='relative z-10 py-20'>
        <div className='mx-auto max-w-7xl'>
          {/* Header */}
          <div className='mb-16 text-center'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3'>
              <IconMail className='h-5 w-5' />
              <span className='text-sm font-medium tracking-wide text-white'>CONTACT</span>
            </div>
            <h2 className='mb-2 text-5xl font-black tracking-tight text-white md:text-7xl'>
              GET IN
              <span className='block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>TOUCH</span>
            </h2>
            <div className='mx-auto mb-8 h-px w-24 bg-white'></div>
          </div>
          {/* Grid */}
          <div className='grid gap-12 lg:grid-cols-12'>
            {/* Contact Info */}
            <div className='space-y-6 lg:col-span-5'>
              <h2 className='mb-8 text-3xl font-medium text-white'>Connect With Me</h2>
              <div className='mt-10 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900 p-6'>
                <div className='flex items-center gap-4'>
                  <span className='relative flex size-3'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-95'></span>
                    <span className='relative inline-flex size-3 rounded-full bg-green-500'></span>
                  </span>
                  <div>
                    <p className='text-lg font-semibold text-white'>Quick Response</p>
                    <p className='text-sm text-gray-400'>I will get back to you as soon as possible. Usually within 24 hours.</p>
                  </div>
                </div>
              </div>
              {contactInfo.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  data-aos='fade-right'
                  data-aos-delay={i * 300}
                  data-aos-duration='500'
                  className='group relative block overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gray-700 hover:shadow-2xl hover:shadow-white/5'
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Dark holographic sweep effect */}
                  <div className='absolute inset-0 overflow-hidden rounded-2xl'>
                    <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100' />
                  </div>
                  <div className='relative z-10 flex items-start gap-5'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-primary/50 bg-primary/20 transition-transform duration-500 group-hover:-translate-x-40'>
                      <c.icon size={23} className='text-white' />
                    </div>
                    <div className='flex-1 transition-transform duration-500 group-hover:-translate-x-16'>
                      <div className='mb-1 flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-white'>{c.label}</h3>
                        <IconBrowserShare
                          size={20}
                          className='translate-x-20 text-gray-400 transition-all group-hover:translate-x-16 group-hover:text-gray-300'
                        />
                      </div>
                      <p className='mb-1 font-medium text-white'>{c.value}</p>
                      <p className='text-sm text-gray-400'>{c.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Form */}
            <div className='lg:col-span-7' data-aos='fade-left' data-aos-duration='600'>
              <div className='relative rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900 px-4 py-8 backdrop-blur-sm lg:p-12'>
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent'></div>
                <div className='absolute -top-px left-8 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
                <div className='absolute -right-px top-8 h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>
                <div className='relative z-10'>
                  <div className='mb-10'>
                    <h2 className='mb-3 text-4xl font-medium text-white'>Send a Message</h2>
                    <p className='text-gray-300'>Connected to Telegram for instant notifications</p>
                  </div>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid gap-6 md:grid-cols-2'>
                      <Field
                        label='Full Name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='h-14 rounded-xl border-white/20 bg-black/50 text-lg text-white transition-all placeholder:text-gray-500 focus:border-white focus:ring-white/20'
                        placeholder='Enter your name'
                      />
                      <Field
                        label='Telegram'
                        name='telegram'
                        value={formData.telegram}
                        onChange={handleInputChange}
                        required
                        className='h-14 rounded-xl border-white/20 bg-black/50 text-lg text-white transition-all placeholder:text-gray-500 focus:border-white focus:ring-white/20'
                        placeholder='@yourusername'
                      />
                    </div>
                    <Field
                      label='Subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='h-14 rounded-xl border-white/20 bg-black/50 text-lg text-white transition-all placeholder:text-gray-500 focus:border-white focus:ring-white/20'
                      placeholder='What would you like to discuss?'
                    />
                    <div className='space-y-3'>
                      <label className='block text-sm font-semibold uppercase tracking-wide text-white'>Message</label>
                      <Textarea
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className='resize-none rounded-xl border-white/20 bg-black/50 text-base text-white transition-all placeholder:text-gray-500 focus:border-white focus:ring-white/20'
                        placeholder='Tell me about your project, ideas, or just say hello...'
                      />
                    </div>
                    <Button variant='on-hold' type='submit' disabled={isSubmitting}>
                      <div className='relative z-10 flex items-center justify-center'>
                        {isSubmitting ? (
                          <>
                            <IconLoader3 size={23} className='mr-3 h-6 w-6 animate-spin' />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <IconSend2 size={23} className='mr-3 transition-transform duration-500 group-hover:-translate-x-96' />
                            <span className='transition-all duration-500 group-hover:translate-x-96'>Send Message</span>
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
