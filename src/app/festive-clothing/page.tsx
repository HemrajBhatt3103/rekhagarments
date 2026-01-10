'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import {
    Sparkles, Palette, Star, Gift, Heart, Moon,
    Sun, Flower, Package, Check, Users,
    Calendar, TrendingUp, Shirt, ArrowRight, ChevronRight,
    Target, Layers, CheckCircle, Clock, Award,
    MapPin, Phone, Mail, MessageCircle, Quote,
    ShoppingBag, Truck as TruckIcon, Scissors, Factory
} from 'lucide-react';

// ============================================
// BRAND SYSTEM (Matching Landing Page)
// ============================================
const BRAND = {
    colors: {
        primary: '#1a365d',
        accent: '#c2410c',
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
        heading: '"Playfair Display", serif',
        body: '"Inter", sans-serif',
    }
};

export default function FestiveClothingPage() {
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    const whatsappMessage = "Hello! I'm interested in festive clothing for my community/event."
    const whatsappUrl = `https://wa.me/919426323279?text=${encodeURIComponent(whatsappMessage)}`

    const scrollToHomeContact = () => {
        window.location.href = '/#contact';
    };

    // Festive Collections
    const festiveCollections = [
        {
            festival: "Ganpati Festival",
            icon: Sparkles,
            products: ["Ganpati T-Shirts", "Bappa Printed Tees", "Festival Hoodies", "Group Matching Sets"],
            colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1"],
            theme: "Lord Ganesha motifs, modak prints, eco-friendly themes",
            timeline: "July - September",
            color: "from-yellow-500/5 to-yellow-600/10"
        },
        {
            festival: "Diwali Collection",
            icon: Star,
            products: ["Diya Print Tees", "Rangoli Designs", "Festive Sweatshirts", "Family Matching Sets"],
            colors: ["#FF6B6B", "#4ECDC4", "#96CEB4", "#FFEAA7"],
            theme: "Diyas, lanterns, fireworks, traditional patterns",
            timeline: "October - November",
            color: "from-orange-500/5 to-orange-600/10"
        },
        {
            festival: "Holi Festival",
            icon: Palette,
            products: ["Color Splash Tees", "Waterproof Wear", "Group T-Shirts", "Festive Bandanas"],
            colors: ["#FF6B6B", "#4ECDC4", "#A8E6CF", "#FFD3B6"],
            theme: "Color splashes, pichkari designs, celebration motifs",
            timeline: "February - March",
            color: "from-pink-500/5 to-pink-600/10"
        },
        {
            festival: "Navratri & Durga Puja",
            icon: Flower,
            products: ["Dandiya T-Shirts", "Garba Wear", "Traditional Prints", "Group Costumes"],
            colors: ["#FF6B6B", "#FFD166", "#06D6A0", "#118AB2"],
            theme: "Dandiya sticks, dhak motifs, goddess designs",
            timeline: "September - October",
            color: "from-purple-500/5 to-purple-600/10"
        },
        {
            festival: "Eid & Ramadan",
            icon: Moon,
            products: ["Moon-Star Tees", "Calligraphy Prints", "Eid Mubarak Apparel", "Family Sets"],
            colors: ["#2D3047", "#FFD166", "#E0A458", "#FFFFFF"],
            theme: "Crescent moon, stars, traditional Islamic patterns",
            timeline: "Year-round",
            color: "from-green-500/5 to-green-600/10"
        },
        {
            festival: "Christmas & New Year",
            icon: Gift,
            products: ["Santa Tees", "Snowflake Designs", "Party Wear", "Yearly Collection"],
            colors: ["#FF6B6B", "#2D3047", "#06D6A0", "#FFFFFF"],
            theme: "Christmas trees, snowflakes, celebration themes",
            timeline: "November - January",
            color: "from-red-500/5 to-red-600/10"
        }
    ];

    const fabricOptions = [
        { type: "Premium Cotton", features: ["Breathable", "Comfortable", "Ideal for prints"], icon: Shirt },
        { type: "Poly-Cotton Blend", features: ["Durable", "Vibrant colors", "Easy maintenance"], icon: Layers },
        { type: "Organic Cotton", features: ["Eco-friendly", "Hypoallergenic", "Sustainable"], icon: Leaf },
        { type: "Performance Fabric", features: ["Quick dry", "Moisture wicking", "Outdoor friendly"], icon: Target }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Design Consultation",
            desc: "Choose from 1000+ festive motifs or provide your own design",
            icon: Palette
        },
        {
            step: "02",
            title: "Digital Proof",
            desc: "Receive digital mockups within 48 hours for approval",
            icon: Sparkles
        },
        {
            step: "03",
            title: "Production",
            desc: "Bulk manufacturing with quality checks at each stage",
            icon: Factory
        },
        {
            step: "04",
            title: "Festival Delivery",
            desc: "Timely delivery before festival celebrations begin",
            icon: TruckIcon
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden" style={{ fontFamily: BRAND.fonts.body }}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50/30 to-white pt-32">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-6xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div className="mb-8 mt-16">
                            <Badge className="bg-white/80 backdrop-blur-sm border-neutral-200/50 text-neutral-800 hover:bg-white px-4 py-1.5 shadow-sm mb-4">
                                <Sparkles className="w-3.5 h-3.5 fill-orange-500 text-orange-500 mr-2" />
                                <span className="font-medium tracking-wide">500+ Community Groups Served • Seasonal Collections</span>
                            </Badge>
                            <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                                <Gift className="w-4 h-4" />
                                <span>Celebrating Festivals Through Apparel Since 2004</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="mb-8 leading-[1.1] tracking-tight"
                            style={{ fontFamily: BRAND.fonts.heading }}
                        >
                            <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-neutral-900">
                                Festive Clothing
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-accent">
                                Celebrate in Vibrant Style
                            </span>
                        </motion.h1>

                        <motion.p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Create lasting festival memories with vibrant, meaningful apparel for every celebration.
                            Perfect for community events, family gatherings, temple celebrations, and corporate festival initiatives.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-xl shadow-orange-500/20 hover:shadow-2xl transition-all group"
                                    onClick={scrollToHomeContact}
                                >
                                    <span className="flex items-center">
                                        <Palette className="w-5 h-5 mr-2" />
                                        View Festival Catalog
                                        <ChevronRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-white/80 backdrop-blur-sm border-neutral-200/50 text-neutral-700 px-8 py-6 text-lg h-auto rounded-xl"
                                    onClick={() => window.open(whatsappUrl, '_blank')}
                                >
                                    <span className="flex items-center">
                                        <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                                        WhatsApp Festive Coordinator
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            ref={statsRef}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-200/50 pt-8"
                        >
                            {[
                                { value: 750000, label: "Festive Pieces", suffix: "+ annually" },
                                { value: 50, label: "Festival Designs", suffix: "+" },
                                { value: 98.5, label: "Timely Delivery", suffix: "%" },
                                { value: 500, label: "Community Groups", suffix: "+" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-200/30">
                                    <div className="font-bold text-3xl text-orange-600 mb-1" style={{ fontFamily: BRAND.fonts.heading }}>
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
            </section>

            {/* Festival Collections */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50">Seasonal Collections</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Festival-Specific Collections
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Thoughtfully designed apparel for every major Indian festival and celebration
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {festiveCollections.map((festival, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${festival.color} flex items-center justify-center`}>
                                                <festival.icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {festival.timeline}
                                            </Badge>
                                        </div>

                                        <h3 className="text-xl font-bold text-neutral-900 mb-4">{festival.festival}</h3>

                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-neutral-700 mb-2">Available Products</h4>
                                            <ul className="space-y-2">
                                                {festival.products.map((product, i) => (
                                                    <li key={i} className="flex items-center text-sm text-neutral-600">
                                                        <Check className="w-3 h-3 text-green-500 mr-2" />
                                                        {product}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-neutral-700 mb-2">Signature Colors</h4>
                                            <div className="flex gap-2">
                                                {festival.colors.map((color, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-6 h-6 rounded-full border border-neutral-200"
                                                        style={{ backgroundColor: color }}
                                                        title={color}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-neutral-100">
                                            <p className="text-sm text-neutral-500 italic">Theme: {festival.theme}</p>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                                            onClick={scrollToHomeContact}
                                        >
                                            View Collection
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Design Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-5 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-pink-50 text-pink-700 border-pink-200">Custom Design Service</Badge>
                            <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                                Create Your Unique Festive Design
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                Don't see what you're looking for? Our in-house design team can create custom festive apparel tailored to your specific needs.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Upload your own festival design or artwork",
                                    "Work with our in-house artists to create unique motifs",
                                    "Choose from 1000+ pre-designed festival elements",
                                    "Get digital proofs within 48 hours",
                                    "Minimum order: 50 pieces per design"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-orange-600" />
                                        </div>
                                        <span className="text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                                onClick={scrollToHomeContact}
                            >
                                Start Custom Design
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border border-orange-200"
                        >
                            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                                Fabric Options for Festive Wear
                            </h3>
                            <div className="space-y-4">
                                {fabricOptions.map((fabric, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-xl border border-orange-100">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                            <Shirt className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{fabric.type}</h4>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                {fabric.features.join(" • ")}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-gradient-to-b from-orange-50/30 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200">Festival Process</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            How Festive Orders Work
                        </h2>
                        <p className="text-lg text-neutral-600">
                            A streamlined process designed for timely festival deliveries
                        </p>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300/50 to-orange-200 md:-translate-x-1/2"></div>

                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 mb-20 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="inline-flex items-center space-x-2 mb-4">
                                        <Badge className="bg-gradient-to-r from-orange-500/10 to-pink-500/5 text-orange-700 border-orange-200">
                                            Step {step.step}
                                        </Badge>
                                        <step.icon className="w-4 h-4 text-pink-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3" style={{ fontFamily: BRAND.fonts.heading }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600">{step.desc}</p>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-6 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 bg-white border-4 border-white rounded-full z-10 flex items-center justify-center shadow-xl">
                                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Create Lasting Festival Memories
                        </h2>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
                            Perfect for community events, family gatherings, temple celebrations, and corporate festival initiatives
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                                onClick={scrollToHomeContact}
                            >
                                <Palette className="w-5 h-5 mr-2" />
                                Request Festive Catalog & Quote
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 px-8 py-6 text-lg"
                                onClick={() => window.open(whatsappUrl, '_blank')}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Festive Coordinator
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
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
                                    <span className="text-xs text-neutral-400">Festive Apparel Specialists</span>
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Creating vibrant festival apparel that brings communities together. Seasonal collections for every major Indian celebration.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Quick Links</h4>
                            <div className="space-y-3">
                                {['Home', 'Corporate Uniforms', 'School Uniforms', 'Contact'].map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (item === 'Home') window.location.href = '/';
                                            else if (item === 'School Uniforms') window.location.href = '/school-uniforms';
                                            else window.location.href = `/#${item.toLowerCase().replace(' ', '-')}`;
                                        }}
                                        className="block text-neutral-400 hover:text-white transition-colors text-sm hover:translate-x-1"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Contact Festive Division</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-neutral-400">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>+91 94797 88000 / +91 94263 23279</span>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>contact@rekhagarments.com</span>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="text-sm">RG, Opposite Rajhans Buisness Hub, Raopura Road, Vadodara Gujarat 390001</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700/50 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            &copy; 2024 Rekha Garments. All rights reserved. | Festive Apparel Manufacturing Specialists
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Leaf icon component
const Leaf = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);