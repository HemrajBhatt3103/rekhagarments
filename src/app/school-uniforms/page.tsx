'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import dynamic from 'next/dynamic';

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import {
    BookOpen, Users, Shield, Truck, Check, Package,
    Ruler, Feather, Award, Clock, FileText, Download,
    Shirt, Home, ArrowRight, ChevronRight, GraduationCap,
    School, Layers, CheckCircle, Calendar, Target,
    TrendingUp, MapPin, Phone, Mail, MessageCircle,
    Star, Quote, Scissors, Factory, Truck as TruckIcon
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

export default function SchoolUniformsPage() {
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    const whatsappMessage = "Hello! I'm interested in school uniforms for my institution."
    const whatsappUrl = `https://wa.me/919426323279?text=${encodeURIComponent(whatsappMessage)}`

    const scrollToHomeContact = () => {
        window.location.href = '/#contact';
    };

    // Uniform Types Data
    const uniformTypes = [
        {
            title: "School T-Shirts",
            icon: Shirt,
            variants: ["Round Neck", "Polo Style", "House Colors", "Custom Prints"],
            fabrics: ["Premium Cotton", "Poly-Cotton Blend", "DRIFIT", "Combed Cotton"],
            sizes: "XS to XXL (Age 4 to 18+)",
            colors: ["White", "Blue", "Navy", "Grey", "Maroon", "Green"],
            color: "from-blue-500/5 to-blue-600/10"
        },
        {
            title: "Track Pants & Trousers",
            icon: Layers,
            variants: ["Elastic Waist", "Drawstring", "Side Stripes", "Pockets"],
            fabrics: ["Polyester Twill", "Poly-Cotton Blend", "Jersey", "Corduroy"],
            sizes: "Age-specific sizing (4 to 18+)",
            colors: ["Navy", "Black", "Grey", "Khaki"],
            color: "from-green-500/5 to-green-600/10"
        },
        {
            title: "Complete Uniform Sets",
            icon: Package,
            variants: ["T-Shirt + Pant", "Shirt + Trouser", "Skirt Sets", "Winter Wear"],
            fabrics: ["Multiple Options", "Season Specific", "Durable Blends"],
            sizes: "Full Range Available",
            colors: ["Custom School Colors"],
            color: "from-purple-500/5 to-purple-600/10"
        },
        {
            title: "Sports & PE Uniforms",
            icon: Target,
            variants: ["House T-Shirts", "Shorts", "Track Suits", "Team Jerseys"],
            fabrics: ["Quick Dry", "Moisture Wicking", "Breathable Mesh"],
            sizes: "Custom Team Sizing",
            colors: ["Vibrant House Colors"],
            color: "from-red-500/5 to-red-600/10"
        }
    ];

    const schoolSizes = [
        { age: "4-6 Years", chest: "24-26", waist: "22-24", height: "38-42" },
        { age: "7-9 Years", chest: "26-28", waist: "24-26", height: "42-48" },
        { age: "10-12 Years", chest: "28-30", waist: "26-28", height: "48-54" },
        { age: "13-15 Years", chest: "30-34", waist: "28-30", height: "54-60" },
        { age: "16-18 Years", chest: "34-38", waist: "30-32", height: "60-66" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "School Consultation",
            desc: "Understand school requirements, colors, logos, and specific needs",
            icon: GraduationCap
        },
        {
            step: "02",
            title: "Sample Development",
            desc: "Create samples with school branding for approval (5-7 days)",
            icon: FileText
        },
        {
            step: "03",
            title: "Bulk Production",
            desc: "Quality-controlled manufacturing at our Vadodara facility",
            icon: Factory
        },
        {
            step: "04",
            title: "Delivery & Support",
            desc: "Class-wise packaging and multi-location delivery across India",
            icon: TruckIcon
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden" style={{ fontFamily: BRAND.fonts.body }}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary/5 pt-32">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
                                <School className="w-3.5 h-3.5 fill-accent text-accent mr-2" />
                                <span className="font-medium tracking-wide">Trusted by 150+ Schools Nationwide</span>
                            </Badge>
                            <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                                <GraduationCap className="w-4 h-4" />
                                <span>Premium School Uniform Manufacturing Since 2004</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="mb-8 leading-[1.1] tracking-tight"
                            style={{ fontFamily: BRAND.fonts.heading }}
                        >
                            <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-neutral-900">
                                Premium School Uniforms
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
                                Crafting Identity, Building Pride
                            </span>
                        </motion.h1>

                        <motion.p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Durable, comfortable uniforms that instill unity and pride. Manufacturing excellence for schools across India with customized solutions for every need.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-primary/90 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-2xl transition-all group"
                                    onClick={scrollToHomeContact}
                                >
                                    <span className="flex items-center">
                                        <FileText className="w-5 h-5 mr-2" />
                                        Request School Catalog
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
                                        WhatsApp School Coordinator
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
                                { value: 850000, label: "Annual Production", suffix: "+ uniforms" },
                                { value: 150, label: "Schools Served", suffix: "+" },
                                { value: 99.2, label: "Quality Rating", suffix: "%" },
                                { value: 21, label: "Years Experience", suffix: "+" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-200/30">
                                    <div className="font-bold text-3xl text-blue-600 mb-1" style={{ fontFamily: BRAND.fonts.heading }}>
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

            {/* Uniform Types */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50">Complete Range</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Comprehensive School Uniform Solutions
                        </h2>
                        <p className="text-lg text-neutral-600">
                            From basic T-shirts to complete uniform sets, we manufacture everything your school needs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {uniformTypes.map((uniform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                                    <CardContent className="p-6">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${uniform.color} flex items-center justify-center mb-4`}>
                                            <uniform.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-4">{uniform.title}</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Available Variants</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {uniform.variants.map((v, i) => (
                                                        <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                            {v}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Fabric Options</h4>
                                                <p className="text-sm text-neutral-600">{uniform.fabrics.join(", ")}</p>
                                            </div>

                                            <div className="flex justify-between text-sm">
                                                <div>
                                                    <span className="font-semibold">Sizes:</span> {uniform.sizes}
                                                </div>
                                            </div>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            className="w-full mt-6 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                            onClick={scrollToHomeContact}
                                        >
                                            Get Pricing
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Size Chart */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Perfect Fit Guarantee</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Standard Size Chart
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Age-appropriate sizing with growth allowance for maximum comfort and durability.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="overflow-hidden border border-blue-100">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-5 gap-0">
                                    <div className="bg-blue-600 text-white p-4 font-bold text-center">Age Group</div>
                                    <div className="bg-blue-600 text-white p-4 font-bold text-center">Chest (in)</div>
                                    <div className="bg-blue-600 text-white p-4 font-bold text-center">Waist (in)</div>
                                    <div className="bg-blue-600 text-white p-4 font-bold text-center">Height (in)</div>
                                    <div className="bg-blue-600 text-white p-4 font-bold text-center">Size Code</div>

                                    {schoolSizes.map((size, index) => (
                                        <div key={index} className="contents">
                                            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                {size.age}
                                            </div>
                                            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                {size.chest}
                                            </div>
                                            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                {size.waist}
                                            </div>
                                            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                {size.height}
                                            </div>
                                            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                S{index + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-8 text-center text-sm text-neutral-600">
                            <p>Custom sizing available upon request. Free size consultation for schools ordering 100+ uniforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Streamlined Process</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            How School Uniform Orders Work
                        </h2>
                        <p className="text-lg text-neutral-600">
                            A simplified 4-step process designed specifically for educational institutions.
                        </p>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300/50 to-blue-200 md:-translate-x-1/2"></div>

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
                                        <Badge className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 text-blue-700 border-blue-200">
                                            Step {step.step}
                                        </Badge>
                                        <step.icon className="w-4 h-4 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3" style={{ fontFamily: BRAND.fonts.heading }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600">{step.desc}</p>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-6 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 bg-white border-4 border-white rounded-full z-10 flex items-center justify-center shadow-xl">
                                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Ready to Standardize Your School Uniforms?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                            Get in touch for a customized quote, fabric swatches, and sample program tailored for your institution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg"
                                onClick={scrollToHomeContact}
                            >
                                <FileText className="w-5 h-5 mr-2" />
                                Request School Catalog & Quote
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                                onClick={() => window.open(whatsappUrl, '_blank')}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Coordinator
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
                                    <span className="text-xs text-neutral-400">School Uniform Specialists</span>
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Premium school uniform manufacturer based in Vadodara. Crafting identity and building pride through quality uniforms for educational institutions nationwide.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Quick Links</h4>
                            <div className="space-y-3">
                                {['Home', 'Corporate Uniforms', 'Festive Clothing', 'Contact'].map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (item === 'Home') window.location.href = '/';
                                            else if (item === 'Festive Clothing') window.location.href = '/festive-clothing';
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
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Contact School Division</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-neutral-400">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>+91 94797 88000 / +91 94263 23279</span>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>schools@rekhagarments.com</span>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="text-sm">Plot No. 27, GIDC Estate, Vadodara</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700/50 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            &copy; 2024 Rekha Garments. All rights reserved. | School Uniform Manufacturing Specialists
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