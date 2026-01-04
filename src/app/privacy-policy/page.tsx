'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, Mail, Phone, Globe, FileText, CheckCircle, AlertTriangle, Cookie } from 'lucide-react';
import Link from 'next/link';

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

export default function PrivacyPolicy() {
    const lastUpdated = "January 04, 2026";

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden" style={{ fontFamily: BRAND.fonts.body }}>
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary/5">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <Badge className="mb-6 bg-white/80 backdrop-blur-sm border-neutral-200/50 text-neutral-800 hover:bg-white px-4 py-1.5 shadow-sm">
                            <Shield className="w-3.5 h-3.5 fill-accent text-accent mr-2" />
                            <span className="font-medium tracking-wide">Privacy & Data Protection</span>
                        </Badge>

                        <h1 className="mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: BRAND.fonts.heading }}>
                            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900">
                                Privacy Policy
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            How we collect, protect, and use your information at Rekha Garments
                        </p>

                        <div className="inline-flex items-center justify-center bg-accent/10 text-accent px-6 py-3 rounded-full border border-accent/20">
                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-medium">Last Updated: {lastUpdated}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Introduction Card */}
                            <Card className="mb-12 border border-accent/20 bg-gradient-to-br from-white to-accent/5">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900 mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Rekha Garments, Vadodara
                                            </h2>
                                            <p className="text-neutral-600 mb-4">
                                                This Privacy Policy describes how <strong>Rekha Garments</strong> collects, uses,
                                                stores, and protects your personal information through its website,
                                                mobile application, and related services ("Services").
                                            </p>
                                            <p className="text-neutral-600">
                                                We value the trust you place in us and are committed to protecting your
                                                personal data with the highest standards of security and
                                                confidentiality. By using our Services, you consent to the collection,
                                                storage, processing, transfer, and sharing of your personal information
                                                in accordance with this Privacy Policy.
                                            </p>
                                            <p className="text-neutral-600 mt-4 font-semibold">
                                                Please read this Privacy Policy carefully to understand our practices.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Main Content */}
                            <div className="space-y-12">
                                {/* Section 1 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">1</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Information We Collect
                                            </h3>
                                        </div>

                                        {/* 1a */}
                                        <div className="ml-14 mb-8">
                                            <div className="flex items-center mb-4">
                                                <Database className="w-5 h-5 text-accent mr-2" />
                                                <h4 className="text-xl font-semibold text-neutral-900">a) Information You Provide to Us</h4>
                                            </div>
                                            <p className="text-neutral-600 mb-4">
                                                When you register, place an order, contact us, or share your details, we
                                                may collect:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                                                <li>Full name</li>
                                                <li>Mobile number</li>
                                                <li>Email address</li>
                                                <li>Billing and delivery address</li>
                                                <li>Order and communication details</li>
                                            </ul>
                                            <p className="text-neutral-600">
                                                This information is required to process orders and provide customer
                                                support.
                                            </p>
                                        </div>

                                        {/* 1b */}
                                        <div className="ml-14 mb-8">
                                            <div className="flex items-center mb-4">
                                                <Eye className="w-5 h-5 text-accent mr-2" />
                                                <h4 className="text-xl font-semibold text-neutral-900">b) Information Collected Automatically</h4>
                                            </div>
                                            <p className="text-neutral-600 mb-4">
                                                We automatically collect certain information when you use our Services,
                                                including:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                                                <li>Device information (browser type, IP address, operating system)</li>
                                                <li>Pages viewed, links clicked, and time spent on the website</li>
                                                <li>Interaction with product listings and content</li>
                                            </ul>
                                            <p className="text-neutral-600">
                                                This information helps us improve our Services and user experience.
                                            </p>
                                        </div>

                                        {/* 1c */}
                                        <div className="ml-14 mb-8">
                                            <div className="flex items-center mb-4">
                                                <Cookie className="w-5 h-5 text-accent mr-2" />
                                                <h4 className="text-xl font-semibold text-neutral-900">c) Cookies</h4>
                                            </div>
                                            <p className="text-neutral-600 mb-4">
                                                Cookies are small data files stored on your device.<br />
                                                Rekha Garments uses cookies to:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                                                <li>Remember your preferences</li>
                                                <li>Improve website functionality</li>
                                                <li>Analyze traffic and usage patterns</li>
                                            </ul>
                                            <p className="text-neutral-600 mb-2">
                                                Cookies do <strong>not</strong> store personally identifiable information. You may
                                                disable cookies through your browser settings, though some features may
                                                not function properly.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">2</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Payment Information
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We may collect transaction-related details such as order value, shipping
                                                details, and order status.
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                                                <div className="flex items-start">
                                                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-amber-800 font-semibold mb-1">
                                                            <strong>We do not store or collect your card, UPI, or banking details.</strong>
                                                        </p>
                                                        <p className="text-amber-700">
                                                            All payments are processed securely through third-party payment
                                                            gateways, and their respective privacy policies apply.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">3</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                How We Use Your Information
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We use your information to:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Process and fulfill garment orders</li>
                                                <li>Verify and confirm deliveries</li>
                                                <li>Communicate order updates, invoices, and service information</li>
                                                <li>Respond to customer queries and support requests</li>
                                                <li>Improve our products, website, and services</li>
                                                <li>Send promotional or marketing communication (you may opt out anytime)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">4</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Sharing of Information
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We may share your information only in the following cases:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3 mb-6">
                                                <li>With delivery partners for shipping orders</li>
                                                <li>With payment service providers for transaction processing</li>
                                                <li>With technology or communication partners for SMS/email notifications</li>
                                                <li>When required by law, court order, or legal authority</li>
                                            </ul>
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                                <div className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-green-800 font-semibold">
                                                            We <strong>do not sell, trade, or rent</strong> your personal information to third parties.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-neutral-600">
                                                Non-personally identifiable information may be shared for analytics or
                                                business improvement purposes as permitted by law.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">5</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Third-Party Links
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                Our Services may contain links to third-party websites or services.<br />
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-amber-800 font-semibold">
                                                            Rekha Garments is <strong>not responsible</strong> for the privacy practices or
                                                            content of such third parties.
                                                        </p>
                                                        <p className="text-amber-700 mt-1">
                                                            Users are encouraged to read their privacy policies separately.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 6 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">6</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Data Retention
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We retain your personal information only as long as necessary to:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3 mb-4">
                                                <li>Fulfill business and legal obligations</li>
                                                <li>Resolve disputes</li>
                                                <li>Enforce our Terms & Conditions</li>
                                                <li>Maintain records as required under applicable laws</li>
                                            </ul>
                                            <p className="text-neutral-600">
                                                Retention periods vary based on the type of information and legal
                                                requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">7</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Data Security
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We implement appropriate technical and organizational security measures
                                                to protect your personal data against unauthorized access, misuse,
                                                alteration, or loss.
                                            </p>
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <Lock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-blue-800">
                                                            While we strive to protect your data, no method of electronic storage or
                                                            transmission is 100% secure.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 8 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">8</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Minors
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                Our Services are not intended for use by minors without parental
                                                supervision.<br />
                                                We sell clothing products that may include children's garments, but
                                                purchases must be made by adults.
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-amber-800 font-semibold">
                                                            Rekha Garments shall not be held responsible for transactions made by
                                                            minors without supervision.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">9</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Your Consent
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                By using our Services, you consent to:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Collection and use of your information as described</li>
                                                <li>Communication via phone, SMS, WhatsApp, or email for order and
                                                    service-related purposes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 10 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">10</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Changes to This Privacy Policy
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                Rekha Garments reserves the right to update or modify this Privacy Policy
                                                at any time to reflect business or legal changes.
                                            </p>
                                            <p className="text-neutral-600">
                                                Updated policies will be posted on our website and shall be effective
                                                immediately upon posting. Continued use of our Services constitutes
                                                acceptance of the revised policy.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 11 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">11</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Contact Information
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-6">
                                                For any questions, concerns, or requests regarding this Privacy Policy,
                                                please contact:
                                            </p>
                                            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                                                <CardContent className="p-6">
                                                    <h4 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                                                        <strong>Rekha Garments, Vadodara</strong>
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center">
                                                            <Phone className="w-4 h-4 text-primary mr-3" />
                                                            <span className="text-neutral-700">+91 94797 88000 / +91 94263 23279</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Mail className="w-4 h-4 text-primary mr-3" />
                                                            <span className="text-neutral-700">rekhagarments2007@yahoo.co.in</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Confirmation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-12 pt-8 border-t border-neutral-200/50"
                                >
                                    <Card className="bg-gradient-to-r from-primary to-primary/90 text-white border-0 shadow-xl">
                                        <CardContent className="p-8 text-center">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Shield className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                                                ✅ FINAL CONFIRMATION
                                            </h3>
                                            <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                                By using Rekha Garments' Services, you acknowledge that you have read,
                                                understood, and agreed to this Privacy Policy.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-12 bg-neutral-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}