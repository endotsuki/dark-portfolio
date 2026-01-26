import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Cancel01Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  Linkedin01Icon,
  LinkSquare02Icon,
  Loading03Icon,
  Location05Icon,
  Mail02Icon,
  Navigation03Icon,
  SmartPhone01Icon,
  TelegramIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Field = ({ label, name, type = 'text', ...props }: any) => (
  <div className='space-y-2'>
    <label className='text-ms block font-medium uppercase tracking-widest text-gray-500'>{label}</label>
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

  const contactInfo = [
    {
      icon: SmartPhone01Icon,
      label: 'Phone',
      value: '+855 86 397 836',
      href: 'tel:+85586397836',
      description: 'Call me directly',
    },
    {
      icon: TelegramIcon,
      label: 'Telegram',
      value: '@cheatzx',
      href: 'https://t.me/cheatzx',
      description: 'Quick chat',
    },
    {
      icon: Mail02Icon,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      description: 'Professional inquiries',
    },
    {
      icon: Linkedin01Icon,
      label: 'LinkedIn',
      value: 'Mao Socheathek',
      href: '#',
      description: 'Professional inquiries',
    },
    {
      icon: Location05Icon,
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
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
        icon: <HugeiconsIcon size={30} icon={CheckmarkCircle02Icon} className='text-green-500' />,
        text: 'Your message was sent.',
      },
      error: {
        title: 'Error!',
        icon: <HugeiconsIcon size={30} icon={Cancel01Icon} className='text-red-500' />,
        text: 'Something went wrong. Please try again or contact me directly via Telegram.',
      },
      connection: {
        title: 'Connection Error!',
        icon: <HugeiconsIcon size={30} icon={InformationCircleIcon} className='text-yellow-500' />,
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
    <section id='contact' className='relative overflow-hidden bg-black px-6 py-32 sm:px-8 md:px-12 lg:px-16'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-20'>
          <h2 className='text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl'>Contact</h2>
          <div className='mt-6 h-px w-20 bg-white/30' />
        </div>
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='space-y-4 lg:col-span-5'>
            {/* <h3 className='mb-8 text-2xl font-bold text-white'>Connect With Me</h3> */}
            {contactInfo.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className='group flex items-center gap-4 border border-white/10 bg-black/50 p-5 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5'
              >
                <div className='group border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:rotate-45 group-hover:border-white/20 group-hover:bg-white/10'>
                  <HugeiconsIcon size={23} icon={c.icon} className='text-white transition-transform duration-300 group-hover:-rotate-45' />
                </div>

                <div className='flex-1'>
                  <div className='mb-1 flex items-center justify-between'>
                    <h4 className='text-sm font-medium text-gray-400'>{c.label}</h4>
                    <HugeiconsIcon
                      size={20}
                      icon={LinkSquare02Icon}
                      className='text-gray-500 transition-colors group-hover:text-gray-300'
                    />
                  </div>
                  <p className='mb-1 text-base font-medium text-white'>{c.value}</p>
                  <p className='text-sm font-medium text-gray-500'>{c.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className='lg:col-span-7'>
            <div className='border border-white/10 bg-black/50 p-8 backdrop-blur-sm lg:p-12'>
              <div className='mb-10'>
                <h3 className='mb-3 text-3xl font-bold text-white'>Send a Message</h3>
                <p className='text-gray-400'>Connected to Telegram for instant notifications</p>
              </div>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid gap-6 md:grid-cols-2'>
                  <Field
                    label='Full Name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='h-12 rounded-none border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white/30'
                    placeholder='Enter your name'
                  />
                  <Field
                    label='Telegram'
                    name='telegram'
                    value={formData.telegram}
                    onChange={handleInputChange}
                    required
                    className='h-12 rounded-none border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white/30'
                    placeholder='@yourusername'
                  />
                </div>
                <Field
                  label='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='h-12 rounded-none border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white/30'
                  placeholder='What would you like to discuss?'
                />
                <div className='space-y-2'>
                  <label className='text-ms block font-medium uppercase tracking-widest text-gray-500'>Message</label>
                  <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='resize-none rounded-none border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white/30'
                    placeholder='Tell me about your project, ideas, or just say hello...'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='group h-12 w-full rounded-none border border-white bg-transparent px-8 text-white transition-all hover:border-white hover:bg-white/20'
                >
                  {isSubmitting ? (
                    <div className='flex items-center'>
                      <HugeiconsIcon size={20} icon={Loading03Icon} className='mr-2 animate-spin' />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className='flex items-center'>
                      <span className='mr-2'>Send Message</span>
                      <HugeiconsIcon icon={Navigation03Icon} size={20} />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
