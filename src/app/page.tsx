'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Check,
  Factory,
  Users,
  Package,
  Clock,
  Award,
  Shield,
  Scissors,
  Palette,
  Truck,
  Star,
  ChevronRight,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Building,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  FileText,
  Truck as TruckIcon,
  CheckCircle,
  Ruler,
  ShoppingBag,
  Briefcase,
  Shirt,
  Compass,
  Layers,
  Feather,
  Calendar,
  ClipboardCheck,
  FileCheck,
  Timer,
  HeartHandshake,
  BarChart3,
  Percent,
  ArrowUpRight,
  Quote,
  Download
} from 'lucide-react';

// ============================================
// BRAND SYSTEM
// ============================================
const BRAND = {
  colors: {
    primary: '#1a365d', // Deep navy blue - conveys trust, professionalism
    accent: '#c2410c', // Burnt orange - energy, craftsmanship
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    }
  },
  fonts: {
    heading: '"Playfair Display", serif', // Elegant, traditional feel
    body: '"Inter", sans-serif', // Clean, professional readability
  },
  icons: {
    garment: Shirt,
    production: Layers,
    quality: Feather,
    measurement: Ruler,
    delivery: TruckIcon,
    consultation: HeartHandshake
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 1200], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const whatsappMessage = "Hello! I’d like to connect with you."

  const whatsappUrl = `https://wa.me/918238636766?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  // Stagger animation for hero text - Fixed types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden" style={{ fontFamily: BRAND.fonts.body }}>
      {/* Custom Navigation Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3 border-b border-neutral-200/30'
          : 'bg-gradient-to-b from-white/90 via-white/80 to-transparent py-5 border-b border-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-30"></div>
        <nav className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src="/rekha_logo.jpg"
                  alt="Rekha Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <span className="font-bold text-xl leading-tight block text-neutral-900" style={{ fontFamily: BRAND.fonts.heading }}>Rekha Garments</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium block border-l-2 border-accent pl-2">Est. 1995 • Vadodara</span>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {['About', 'Solutions', 'Process', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors relative group py-2"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-neutral-600 hover:text-primary hover:bg-primary/5 border border-neutral-200/50"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">+91 79424 52200</span>
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  onClick={() => scrollToSection('contact')}
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  <Shirt className="w-4 h-4 mr-2" />
                  <span>Get Bulk Quote</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section with Enhanced Animations */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

          {/* Fabric Fold Illustrations */}
          <svg className="absolute top-20 right-20 w-32 h-32 text-primary/10" viewBox="0 0 100 100">
            <path d="M20,30 Q50,10 80,30 Q50,50 20,30" fill="currentColor" />
            <path d="M20,50 Q50,30 80,50 Q50,70 20,50" fill="currentColor" fillOpacity="0.6" />
            <path d="M20,70 Q50,50 80,70 Q50,90 20,70" fill="currentColor" fillOpacity="0.3" />
          </svg>

          <svg className="absolute bottom-32 left-32 w-24 h-24 text-accent/10" viewBox="0 0 100 100">
            <path d="M30,20 L70,20 L80,40 L70,60 L30,60 L20,40 Z" fill="currentColor" />
            <path d="M35,30 L65,30 L70,40 L65,50 L35,50 L30,40 Z" fill="currentColor" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Badge className="bg-white/80 backdrop-blur-sm border-neutral-200/50 text-neutral-800 hover:bg-white px-4 py-1.5 shadow-sm mb-4">
                <Award className="w-3.5 h-3.5 fill-accent text-accent mr-2" />
                <span className="font-medium tracking-wide">ISO 9001:2015 Certified • 28+ Years Excellence</span>
              </Badge>
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                <Building className="w-4 h-4" />
                <span>Vadodara-based manufacturing since 1995</span>
              </div>
            </motion.div>

            <motion.h1
              className="mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: BRAND.fonts.heading }}
              variants={itemVariants}
            >
              <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-neutral-900">
                Corporate Identity
              </span>
              <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
                Through Precision Apparel
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We manufacture premium uniforms and promotional wear for India's leading enterprises.
              From Vadodara's industrial heart, we deliver craftsmanship that builds brand confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl transition-all group"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Request Sample Kit
                    <ChevronRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 backdrop-blur-sm border-neutral-200/50 text-neutral-700 px-8 py-6 text-lg h-auto rounded-xl"
                  onClick={() =>
                    window.open(whatsappUrl, '_blank')
                  }
                >

                  <span className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                    WhatsApp Sales Team
                    {/* <ArrowUpRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-200/50 pt-8"
              variants={itemVariants}
            >
              {[
                { value: 2850000, label: "Annual Production Capacity", suffix: "+ units" },
                { value: 517, label: "Enterprise Clients", suffix: "+" },
                { value: 98.7, label: "On-Time Delivery Rate", suffix: "%" },
                { value: 28, label: "Years Manufacturing", suffix: "+" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-200/30">
                  <div className="font-bold text-3xl text-primary mb-1" style={{ fontFamily: BRAND.fonts.heading }}>
                    {isStatsInView ? (
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                        separator=","
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                    ) : (
                      '0' + (stat.suffix || '')
                    )}
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-400 via-neutral-300 to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* For Procurement & HR Teams - B2B Focused Section */}
      <section className="bg-gradient-to-b from-white to-neutral-50/50 py-16 border-y border-neutral-200/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-5 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-3 mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">For Procurement & HR Teams</Badge>
                <Timer className="w-4 h-4 text-neutral-400" />
                <span className="text-sm text-neutral-500">SLA-driven workflow</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                Streamlined Corporate Ordering Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-800">Dedicated Account Management</h4>
                    <p className="text-base text-neutral-600 mt-1">Single point of contact for all communication and updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-800">GST-Compliant Documentation</h4>
                    <p className="text-base text-neutral-600 mt-1">Complete invoice, delivery challan, and tax compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-800">Multi-Location Delivery Coordination</h4>
                    <p className="text-base text-neutral-600 mt-1">Bulk shipments routed to offices, stores, or warehouses nationwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200/50"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-neutral-900 text-sm">Rapid Sampling</h4>
                  <p className="text-xs text-neutral-600 mt-1">Prototypes dispatched within 3-5 working days</p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-bold text-neutral-900 text-sm">Quality Guarantee</h4>
                  <p className="text-xs text-neutral-600 mt-1">Fabric test reports with each bulk order</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-50 to-white p-4 rounded-xl border border-neutral-200/30">
                  <ClipboardCheck className="w-8 h-8 text-neutral-600 mb-2" />
                  <h4 className="font-bold text-neutral-900 text-sm">Virtual Approval</h4>
                  <p className="text-xs text-neutral-600 mt-1">Digital proofs and fit approvals via WhatsApp</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-50 to-white p-4 rounded-xl border border-neutral-200/30">
                  <TruckIcon className="w-8 h-8 text-neutral-600 mb-2" />
                  <h4 className="font-bold text-neutral-900 text-sm">Tracked Dispatch</h4>
                  <p className="text-xs text-neutral-600 mt-1">Real-time tracking with POD confirmation</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200/30">
                <p className="text-sm text-neutral-600 italic">
                  "We understand corporate procurement cycles. Our workflow is built around your approval timelines and financial year planning."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Two Column Layout */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231a365d\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Brand Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="h-0.5 w-8 bg-accent"></div>
                  <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Legacy</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight" style={{ fontFamily: BRAND.fonts.heading }}>
                  From Vadodara's Workshops to India's Boardrooms
                </h2>

                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    Founded in 1995 as a boutique tailoring unit in Vadodara's industrial belt, Rekha Garments has grown into a trusted manufacturing partner for enterprises across India. What began with three sewing machines now operates across 18,000 sq. ft. of production space.
                  </p>
                  <p>
                    Our evolution mirrors Gujarat's manufacturing growth story. We've maintained our commitment to craftsmanship while adopting assembly-line efficiency, allowing us to deliver premium quality whether the order is for 50 executive blazers or 5,000 promotional tees.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { icon: Layers, text: "In-House Production", detail: "Full control from fabric to finish" },
                    { icon: Feather, text: "Premium Materials", detail: "Sourced directly from mills" },
                    { icon: Ruler, text: "Custom Fit & Sizing", detail: "Tailored to exact measurements" },
                    { icon: CheckCircle, text: "Ethical Manufacturing", detail: "Fair wages, safe workplace" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-3 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="p-2 bg-gradient-to-br from-neutral-50 to-white rounded-lg group-hover:from-primary/5 group-hover:to-primary/10 transition-colors border border-neutral-200/50">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-800 block">{item.text}</span>
                        <span className="text-sm text-neutral-500">{item.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Client Trust */}
                <div className="mt-12 pt-8 border-t border-neutral-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-neutral-900 font-bold text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Trusted by Industry Leaders</div>
                      <div className="text-neutral-500 text-sm">Join 500+ enterprise clients across sectors</div>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                      <img
                        src="/rekha_logo.jpg"
                        alt="Rekha Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Stats & Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Production Stats */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200/50 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Factory className="w-10 h-10 text-primary" />
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">Capacity</span>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1" style={{ fontFamily: BRAND.fonts.heading }}>2.85M</div>
                  <div className="text-sm text-neutral-500">Units Annual Production</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-primary to-primary/90 text-white p-6 rounded-2xl shadow-xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-10 h-10 text-accent" />
                    <span className="text-xs font-semibold px-2 py-1 bg-white/20 text-white rounded-full">Certified</span>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: BRAND.fonts.heading }}>ISO</div>
                  <div className="text-sm opacity-90">9001:2015 Quality Systems</div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-accent col-span-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Scissors className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-neutral-900 mb-2">Craftsmanship Meets Scale</div>
                      <p className="text-neutral-600">
                        Our Vadodara facility blends traditional tailoring expertise with modern assembly-line efficiency.
                        Each piece receives individual attention while maintaining bulk production timelines.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Manufacturing Process Illustration */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>Our Production Flow</h3>
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    {['Fabric', 'Cutting', 'Stitching', 'QC', 'Pack'].map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-2">
                          <span className="text-sm font-bold text-primary">{i + 1}</span>
                        </div>
                        <span className="text-xs font-medium text-neutral-600">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10"></div>
                </div>
                <p className="text-sm text-neutral-500 mt-6">
                  Each stage monitored by quality controllers with 32-point inspection checklist
                </p>
              </div>

              {/* Team & Facility */}
              <div className="bg-gradient-to-r from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-neutral-900">85+ Skilled Artisans</h4>
                    <p className="text-sm text-neutral-500">Average experience: 12+ years</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm text-neutral-600">
                  Our Vadodara team includes master tailors, pattern makers, and quality specialists trained in industrial garment construction.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Rich Tiles */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-neutral-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50 shadow-sm">Specialized Solutions</Badge>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
              Industry-Specific Apparel Programs
            </h2>
            <p className="text-lg text-neutral-600">
              Tailored manufacturing lines designed for specific corporate needs and procurement workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Corporate Uniforms",
                tag: "For HR & Admin Teams",
                desc: "Complete identity wear programs including shirts, trousers, blazers, and sarees designed for brand consistency.",
                stats: ["Wrinkle-Free Fabrics", "Logo Embroidery", "Multi-Size Kits"],
                metrics: { value: "2.1M", label: "Corporate units delivered" },
                action: "View Corporate Portfolio",
                color: "from-primary/5 to-primary/10",
                border: "border-primary/20"
              },
              {
                icon: ShoppingBag,
                title: "Promotional & Event Wear",
                tag: "For Marketing Teams",
                desc: "High-impact T-shirts, caps, and jackets for brand campaigns, product launches, and corporate events.",
                stats: ["24h Rush Orders", "HD Screen Printing", "Sustainable Options"],
                metrics: { value: "680K", label: "Event pieces annually" },
                action: "View Event Concepts",
                color: "from-accent/5 to-accent/10",
                border: "border-accent/20"
              },
              {
                icon: Shield,
                title: "Industrial Workwear",
                tag: "For Operations & Safety",
                desc: "Heavy-duty uniforms, safety vests, and specialized apparel for manufacturing, logistics, and site teams.",
                stats: ["Reinforced Stitching", "FR/High-Vis Options", "Industrial Laundry"],
                metrics: { value: "98.7%", label: "Durability rating" },
                action: "View Safety Gear",
                color: "from-neutral-50 to-white",
                border: "border-neutral-200/50"
              }
            ].map((sol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} rounded-2xl border ${sol.border} transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}></div>

                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <sol.icon className="w-7 h-7 text-primary group-hover:text-primary/80" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-white/80 backdrop-blur-sm text-neutral-600 rounded-full border border-neutral-200/50">
                      {sol.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-3" style={{ fontFamily: BRAND.fonts.heading }}>
                    {sol.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 flex-grow">{sol.desc}</p>

                  {/* Metrics */}
                  <div className="mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-neutral-200/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>{sol.metrics.value}</div>
                        <div className="text-xs text-neutral-500">{sol.metrics.label}</div>
                      </div>
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {sol.stats.map((stat, i) => (
                      <div key={i} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {stat}
                      </div>
                    ))}
                  </div>

                  <button
                    className="flex items-center text-primary font-semibold text-sm tracking-wide group/btn mt-auto"
                    onClick={() => scrollToSection('gallery')}
                  >
                    {sol.action}
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical B2B Timeline */}
      <section id="process" className="py-24 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Engagement Model</Badge>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
              How Corporate Engagement Works
            </h2>
            <p className="text-lg text-neutral-600">
              A transparent, 4-step process designed for procurement teams and scaled operations.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300/50 to-neutral-200 md:-translate-x-1/2"></div>

            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            {[
              {
                step: "01",
                title: "Discovery & Technical Quote",
                desc: "60-minute consultation to understand fabric preferences, branding requirements, and budget. Technical quote with fabric swatches delivered within 24 hours.",
                details: ["Fabric Library Access", "Cost Breakdown", "Timeline Projection"],
                icon: HeartHandshake
              },
              {
                step: "02",
                title: "Sampling & Design Approval",
                desc: "Pre-production sample developed with your branding. Digital proofs and physical sample sent for approval. Typically 5-7 working days.",
                details: ["Size Set Development", "Logo Placement Options", "Virtual Fit Session"],
                icon: FileCheck
              },
              {
                step: "03",
                title: "Production & Quality Gates",
                desc: "Bulk manufacturing begins at our Vadodara facility. Weekly progress updates with photographs. QC at each production stage.",
                details: ["In-Line Inspections", "Weekly Updates", "Pre-Dispatch QC"],
                icon: Layers
              },
              {
                step: "04",
                title: "Dispatch & Post-Order Support",
                desc: "Final quality audit, individual packaging, and multi-location logistics coordination. Delivery within 7-21 days post-approval.",
                details: ["Tracked Shipments", "Delivery Reports", "Wear & Care Guides"],
                icon: TruckIcon
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-20 md:mb-0 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-24 md:pr-12' : 'md:px-12'}`}>
                  <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-flex items-center space-x-2 mb-4">
                      <Badge className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20">
                        Step {item.step}
                      </Badge>
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3" style={{ fontFamily: BRAND.fonts.heading }}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{item.desc}</p>
                    <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      {item.details.map((d, i) => (
                        <div key={i} className="text-xs font-medium px-3 py-1.5 bg-white border border-neutral-200/50 rounded-lg text-neutral-500 shadow-sm">
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 bg-white border-4 border-white rounded-full z-10 flex items-center justify-center shadow-xl">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                Ready to Begin Your Uniform Program?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Download our corporate procurement guide with pricing templates, timeline planners, and fabric swatch catalog.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Gallery */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50">Case Studies</Badge>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
              Real Projects, Measurable Results
            </h2>
            <p className="text-lg text-neutral-600">
              Recent uniform programs delivered for leading Indian enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                client: "National Retail Chain",
                industry: "Retail",
                quantity: "2,800 uniforms",
                timeline: "6-week delivery",
                outcome: "Standardized identity across 47 stores",
                challenge: "Multi-location delivery with seasonal staff onboarding",
                icon: ShoppingBag
              },
              {
                client: "IT Services Major",
                industry: "Technology",
                quantity: "450 executive sets",
                timeline: "4-week production",
                outcome: "Premium feel with moisture-wicking fabrics",
                challenge: "Dress code transition from formal to business casual",
                icon: Briefcase
              },
              {
                client: "Healthcare Network",
                industry: "Healthcare",
                quantity: "1,200 sets",
                timeline: "8-week program",
                outcome: "Anti-microbial fabrics with easy maintenance",
                challenge: "Compliance with infection control protocols",
                icon: Shield
              },
              {
                client: "Manufacturing Group",
                industry: "Industrial",
                quantity: "3,500 workwear sets",
                timeline: "Quarterly rollout",
                outcome: "40% reduction in uniform replacement costs",
                challenge: "Durability requirements for harsh factory conditions",
                icon: Factory
              },
              {
                client: "Banking Institution",
                industry: "Finance",
                quantity: "850 blazer sets",
                timeline: "5-week delivery",
                outcome: "Year-round comfort with all-season fabrics",
                challenge: "Brand consistency across 22 branches",
                icon: Building
              },
              {
                client: "Hospitality Brand",
                industry: "Hospitality",
                quantity: "1,600 uniforms",
                timeline: "Phased over 3 months",
                outcome: "Enhanced guest recognition and staff morale",
                challenge: "Multiple uniform types for different roles",
                icon: Users
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              // transition={{ duration: 0.2 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-neutral-100 text-neutral-700 border-neutral-200/50">
                        {project.industry}
                      </Badge>
                      <project.icon className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {project.client}
                    </h3>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Package className="w-4 h-4 text-neutral-400 mr-2" />
                        <span className="text-neutral-600">{project.quantity}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 text-neutral-400 mr-2" />
                        <span className="text-neutral-600">{project.timeline}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200/30">
                      <p className="text-sm text-neutral-600 mb-2">
                        <span className="font-semibold text-neutral-800">Outcome:</span> {project.outcome}
                      </p>
                      <p className="text-xs text-neutral-500 italic">
                        Challenge: {project.challenge}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Badge className="bg-white text-neutral-800 border-neutral-200/50">Client Reviews</Badge>
              <div className="flex items-center bg-gradient-to-r from-accent/10 to-accent/5 px-3 py-1.5 rounded-full border border-accent/20">
                <Star className="w-4 h-4 fill-accent text-accent mr-1" />
                <span className="text-sm font-semibold text-neutral-700">4.9/5</span>
                <span className="text-xs text-neutral-500 ml-1">(150+ reviews)</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
              Trusted by Procurement Leaders
            </h2>
            <p className="text-lg text-neutral-600">
              Direct feedback from teams that rely on us for their uniform programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                role: "Head of HR",
                company: "TechCorp Solutions",
                tenure: "5-year partnership",
                volume: "450 uniforms annually",
                content: "Rekha Garments has been our uniform partner since 2019. Their understanding of corporate compliance and ability to handle multi-location logistics is exceptional.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Marketing Director",
                company: "BrandWave Agency",
                tenure: "3 campaigns",
                volume: "15,000 promotional pieces",
                content: "From concept to delivery, their team manages complexity brilliantly. The quality consistency across large runs gives us complete confidence.",
                rating: 5
              },
              {
                name: "Amit Kumar",
                role: "Operations Head",
                company: "Manufacturing Unit Ltd",
                tenure: "2-year contract",
                volume: "2,800 workwear sets",
                content: "They understand industrial requirements. The durability testing and replacement program has reduced our uniform costs by 35%.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full border border-neutral-200/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-neutral-300 mb-4" />
                  <p className="text-neutral-600 mb-6 italic">"{testimonial.content}"</p>

                  <div className="pt-6 border-t border-neutral-200/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900">{testimonial.name}</div>
                        <div className="text-sm text-neutral-600">{testimonial.role}</div>
                        <div className="text-sm text-neutral-700 font-medium">{testimonial.company}</div>
                        <div className="text-xs text-neutral-500 mt-1">
                          {testimonial.tenure} • {testimonial.volume}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50">Start Your Project</Badge>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
              Ready for Precision Manufacturing?
            </h2>
            <p className="text-lg text-neutral-600">
              Contact our team for a detailed consultation and custom quote.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-white border border-neutral-200/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900" style={{ fontFamily: BRAND.fonts.heading }}>
                  Request a Detailed Quote
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                      <Input
                        placeholder="Your full name"
                        required
                        className="border-neutral-300/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Company Name *</label>
                      <Input
                        placeholder="Organization"
                        required
                        className="border-neutral-300/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="corporate@email.com"
                        required
                        className="border-neutral-300/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone/WhatsApp *</label>
                      <Input
                        placeholder="+91 98765 43210"
                        required
                        className="border-neutral-300/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Requirement Type *</label>
                    <Select required>
                      <SelectTrigger className="border-neutral-300/50 focus:border-primary">
                        <SelectValue placeholder="Select apparel program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate Uniform Program</SelectItem>
                        <SelectItem value="promotional">Promotional & Event Wear</SelectItem>
                        <SelectItem value="workwear">Industrial Workwear</SelectItem>
                        <SelectItem value="custom">Custom Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Approximate Quantity</label>
                    <div className="flex space-x-2">
                      <Input placeholder="e.g., 500" className="border-neutral-300/50 focus:border-primary" />
                      <Select>
                        <SelectTrigger className="border-neutral-300/50 focus:border-primary w-32">
                          <SelectValue placeholder="Units" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="units">Units</SelectItem>
                          <SelectItem value="sets">Sets</SelectItem>
                          <SelectItem value="pieces">Pieces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Details / Requirements</label>
                    <Textarea
                      placeholder="Tell us about your project timeline, branding needs, fabric preferences..."
                      rows={4}
                      className="border-neutral-300/50 focus:border-primary"
                    />
                  </div>

                  <div className="flex items-center text-sm text-neutral-500">
                    <Timer className="w-4 h-4 mr-2" />
                    <span>Response time: Under 4 working hours for corporate enquiries</span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-white py-6 text-base"
                  >
                    Request Detailed Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <Card className="p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50">
                <h3 className="text-xl font-bold mb-6 text-neutral-900" style={{ fontFamily: BRAND.fonts.heading }}>
                  Contact Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-neutral-200/30 hover:border-primary/30 transition-colors group">
                    <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Phone</div>
                      <div className="text-neutral-600">+91 79424 52200</div>
                      <div className="text-sm text-neutral-500 mt-1">Mon-Sat, 9AM-6PM</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-neutral-200/30 hover:border-green-500/30 transition-colors group">
                    <div className="p-2 bg-green-500/5 rounded-lg group-hover:bg-green-500/10 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">WhatsApp Business</div>
                      <div className="text-neutral-600">+91 79424 52200</div>
                      <Badge className="mt-1 bg-green-500/10 text-green-700 border-green-500/20">Preferred for bulk enquiries</Badge>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-neutral-200/30 hover:border-accent/30 transition-colors group">
                    <div className="p-2 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Email</div>
                      <div className="space-y-1">
                        <div className="text-neutral-600">sales@rekhagarments.com</div>
                        <div className="text-neutral-600">support@rekhagarments.com</div>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">Response within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-neutral-200/30 hover:border-primary/30 transition-colors group">
                    <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Factory & Office</div>
                      <div className="text-neutral-600">
                        Plot No. 27, GIDC Estate<br />
                        Makarpura, Vadodara<br />
                        Gujarat, India - 390010
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        <a href="#" className="text-primary hover:underline">Get directions ↗</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Response Guarantee */}
              <Card className="p-6 bg-gradient-to-r from-primary to-primary/90 text-white">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                  Corporate Response Protocol
                </h3>
                <p className="mb-6 opacity-90">
                  We prioritize B2B enquiries with a structured response workflow:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">4 Hrs</div>
                    <div className="text-sm opacity-75">Initial Response</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">24 Hrs</div>
                    <div className="text-sm opacity-75">Detailed Quote</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm col-span-2">
                    <div className="text-sm opacity-90">Dedicated account manager assigned for orders above 500 units</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img
                    src="/rekha_logo.jpg"
                    alt="Rekha Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div>
                  <span className="font-bold text-xl block" style={{ fontFamily: BRAND.fonts.heading }}>Rekha Garments</span>
                  <span className="text-xs text-neutral-400">Manufacturing Excellence Since 1995</span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Vadodara-based B2B manufacturer of premium corporate uniforms and promotional apparel.
                Combining traditional craftsmanship with modern manufacturing systems.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Solutions</h4>
              <div className="space-y-3">
                {['Corporate Uniforms', 'Promotional Wear', 'Industrial Workwear', 'Custom Manufacturing', 'Bulk Order Process'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection('solutions')}
                    className="block text-neutral-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Company</h4>
              <div className="space-y-3">
                {['About Us', 'Manufacturing Process', 'Quality Standards', 'Client Stories', 'Contact'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block text-neutral-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Connect</h4>
              <div className="flex space-x-3 mb-6">
                {[
                  { icon: Instagram, label: "Instagram", color: "from-purple-600 to-pink-600" },
                  { icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-700" },
                  { icon: Facebook, label: "Facebook", color: "from-blue-500 to-blue-600" },
                  { icon: Twitter, label: "Twitter", color: "from-sky-500 to-sky-600" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
              <div className="text-sm text-neutral-400">
                <div className="mb-2">Subscribe to Industry Updates</div>
                <div className="flex">
                  <Input
                    placeholder="Your email"
                    className="bg-neutral-700 border-neutral-600 text-white text-sm rounded-l-lg rounded-r-none"
                  />
                  <Button className="bg-gradient-to-r from-primary to-primary/90 rounded-l-none">
                    →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700/50 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-neutral-400 text-sm">
                <p>&copy; 2024 Rekha Garments. All rights reserved.</p>
                <p className="mt-1">Plot No. 27, GIDC Estate, Makarpura, Vadodara - 390010</p>
              </div>
              <div className="flex space-x-6 justify-end">
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Quality Commitment</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

