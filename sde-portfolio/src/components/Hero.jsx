import { motion } from "framer-motion";
import { Linkedin, Mail, UserCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-black text-white flex items-start pt-32">
            <HeroFrame />
        </section>
    );
}


function HeroFrame() {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
            <div className="flex flex-col gap-24">
                <Identity />
                <Statement />
                <Actions />
            </div>
        </div>
    );
}


function Identity() {
    return (
        <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
        >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Sai Kumar Nuthalapati
            </h1>

            <p className="text-sm md:text-base text-gray-400">
                Software Engineer · Backend & Systems
            </p>
        </motion.header>
    );
}


function Statement() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
        >
            <p className="text-2xl md:text-3xl leading-tight font-medium">
                I build software assuming it will be stressed,
                misused, and scaled — because it will be.
            </p>

            <p className="mt-8 text-xs uppercase tracking-widest text-gray-400 font-mono">
                Distributed Systems · Production Engineering
            </p>
        </motion.main>
    );
}


function Actions() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-10 items-center"
        >
            <ActionLink icon={<Linkedin size={18} />} label="&emsp;LinkedIn" />
            <ActionLink icon={<Mail size={18} />} label="&emsp;Contact" />
            <ActionLink icon={<UserCheck size={18} />} label="&emsp;Recruiter" />
        </motion.nav>
    );
}


function ActionLink({ icon, label }) {
  return (
    <a
      href="#"
      className="
        group flex items-center gap-2
        text-sm font-medium text-gray-400
        hover:text-white transition-colors
      "
    >
      {icon}
      <span className="relative">
        {label}
        <span
          className="
            absolute left-0 -bottom-1 h-px w-0
            bg-white transition-all duration-300
            group-hover:w-full
          "
        />
      </span>
    </a>
  );
}
