import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  IconUserSquare,
  IconDownload,
  IconSchool,
  IconWalk,
  IconMapPin2,
  IconMail,
  IconDeviceMobile,
  IconMessage,
  IconCheck,
} from "@tabler/icons-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Icon } from "iconza";
import React from "react";

const journey1 = `I'm a passionate full-stack developer and designer with over 5 years of experience creating digital experiences that matter. My journey began with curiosity about how things work on the web, and it has evolved into a deep expertise in modern technologies.`;
const journey2 = `I specialize in React, Node.js, and cloud technologies, but what sets me apart is my ability to bridge the gap between design and development. I don't just build applications I craft experiences that users love and businesses depend on.`;
const journey3 = `When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through talks and mentoring.`;

const personalInfos = [
  {
    icon: IconMapPin2,
    handle: "San Francisco, CA",
    platform: "Location",
    link: "https://www.google.com/maps?q=San+Francisco,CA",
  },
  {
    icon: IconMail,
    handle: "maosocheathek@gmail.com",
    platform: "Email",
    link: "mailto:maosocheathek@gmail.com",
  },
  {
    icon: IconDeviceMobile,
    handle: "+1 (555) 123-4567",
    platform: "Phone",
    link: "tel:+15551234567",
  },
];

const education = [
  {
    degree: "Associate Degree",
    school: "Passerelles Numériques Cambodia (PNC)",
    logo: "/pnc.png",
    field: "Web Development",
    years: "2022 - 2024",
  },
  {
    degree: "Baccalaureate (Bac II)",
    school: "Kampong Thom High School",
    logo: "kpt-school.png",
    field: "General Education",
    years: "2021 - 2022",
  },
];

const socials = [
  {
    icon: <Icon name="GitHub Light" size={23} />,
    handle: "/johndoe",
    platform: "GitHub",
    link: "https://github.com/johndoe",
  },
  {
    icon: <Icon name="LinkedIn" size={23} />,
    handle: "/in/johndoe",
    platform: "LinkedIn",
    link: "https://linkedin.com/in/johndoe",
  },
  {
    icon: <Icon name="Telegram" size={23} />,
    handle: "@johndoe",
    platform: "Telegram",
    link: "https://t.me/johndoe",
  },
  {
    icon: <Icon name="BehanceFill" size={23} />,
    handle: "/so_cheat",
    platform: "Behance",
    link: "https://behance.net/so_cheat",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-slate-950 pt-28 px-2 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <IconUserSquare size={23} />
            <span className="text-sm text-white font-medium tracking-wide">
              SKILLS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            WHO I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              AM
            </span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            My toolkit for building scalable, beautiful experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Card - Twitter Style */}
            <div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-xl overflow-hidden relative"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />

              {/* Header Banner */}
              <div className="h-32 relative overflow-hidden bg-gray-800">
                <img
                  src="/design/7_january.webp"
                  alt="Profile Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-transparent to-black"></div>
              </div>

              {/* Profile Content */}
              <div className="relative px-6 pb-6">
                {/* Avatar - Overlapping */}
                <div className="flex justify-between items-start -mt-16 mb-4 relative z-10">
                  <Avatar className="w-28 h-28 border-4 border-gray-900 rounded-full">
                    <AvatarImage
                      src="/test.png"
                      alt="Profile"
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                      <Icon name="Trash" size={20} className="text-gray-300" />
                    </button>
                    <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                      <Icon name="Edit" size={20} className="text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Name & Handle */}
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      SOCHEATH EK MAO
                    </h3>
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-blue-400"
                    />
                  </div>
                  <p className="text-gray-400">@socheathek</p>
                </div>

                {/* Professional Title */}
                <p className="text-gray-300 mb-4">
                  <span className="text-cyan-400">{"<"}</span>Fullstack
                  Developers <span className="text-cyan-400">{"/>"}</span>
                </p>

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-gray-700 mb-5">
                  <p className="text-gray-400 text-sm mb-3">
                    Connect on social:
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800/50 border border-white/5 hover:border-cyan-400/50 hover:bg-gray-800 transition-all group"
                        title={social.platform}
                      >
                        {React.cloneElement(social.icon as React.ReactElement, {
                          size: 30,
                          className:
                            "text-gray-400 group-hover:text-cyan-400 transition-colors",
                        })}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700 mb-4"></div>

                {/* Name Fields */}
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="text-gray-300 text-sm font-medium block mb-2">
                      Name *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        defaultValue="SOCHEATH EK"
                        className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                      />
                      <input
                        type="text"
                        defaultValue="MAO"
                        className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="text-gray-300 text-sm font-medium block mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <IconMail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      defaultValue="maosocheathek@gmail.com"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <IconCheck size={16} />
                    <span>Verified 14 Jan, 2025</span>
                  </div>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium text-sm rounded-lg transition-colors"
                  >
                    <IconDownload size={16} />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* My Journey */}
            <div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl relative"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                <IconWalk size={23} />
                My Professional Journey
              </h3>
              <div className="text-lg sm:text-xl md:text-xl text-gray-200 leading-relaxed max-w-none">
                <p className="text-gray-300 mb-4">{journey1}</p>
                <p className="text-gray-300 mb-4">{journey2}</p>
                <p className="text-gray-300">{journey3}</p>
              </div>
            </div>
            {/* Education & Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl relative"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                  <IconMessage size={23} />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {personalInfos.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-start gap-4 p-2 rounded-lg bg-gray-800/50 border border-white/5 overflow-hidden group transition-colors duration-300"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                      <div className="p-2 rounded-lg bg-gray-800/50 border border-white/5 transition-colors">
                        <info.icon
                          size={23}
                          className="text-gray-300 transition-colors"
                        />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.platform}</p>
                        <p className="text-white font-medium">{info.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              {/* Education */}
              <div
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-white/10 shadow-xl"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                  <IconSchool size={23} />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-5">
                      <img
                        src={edu.logo}
                        className="w-14 h-14 rounded-full object-cover border border-white/20 bg-white"
                      />
                      {/* Education Content */}
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-xl text-gray-200 leading-relaxed">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400 mb-1">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.field}</p>
                        <p className="text-sm text-stone-50 mt-2">
                          {edu.years}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
