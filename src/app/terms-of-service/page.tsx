'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, XCircle, CheckCircle, User, ShoppingBag, Copyright, Mail, Phone, Shield } from 'lucide-react';
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

export default function TermsConditions() {
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
                            <Scale className="w-3.5 h-3.5 fill-accent text-accent mr-2" />
                            <span className="font-medium tracking-wide">Legal Terms</span>
                        </Badge>

                        <h1 className="mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: BRAND.fonts.heading }}>
                            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900">
                                Terms & Conditions
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Legal agreement between you and Rekha Garments for using our services
                        </p>

                        <div className="inline-flex items-center justify-center bg-accent/10 text-accent px-6 py-3 rounded-full border border-accent/20">
                            <div className="flex items-center space-x-2">
                                <AlertTriangle className="w-5 h-5" />
                                <span className="text-lg font-medium">Please read carefully before using our services</span>
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
                                            <p className="text-neutral-600">
                                                Rekha Garments is the licensed owner of the brand <strong>Rekha Garments</strong> and
                                                its website/application ("the Application").<br />
                                                Users are advised to read these Terms & Conditions carefully. By
                                                accessing or using the services provided by Rekha Garments, you agree to
                                                be bound by the terms mentioned herein.
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
                                                Personal Information
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                As part of the registration or order process, Rekha Garments may collect
                                                the following information:
                                            </p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                                                <li>Name (first and last)</li>
                                                <li>Email address</li>
                                                <li>Mobile number and contact details</li>
                                                <li>Delivery address and postal code</li>
                                                <li>Demographic details (age, gender, occupation, etc.)</li>
                                                <li>Information regarding usage of the Application such as pages visited,
                                                    links clicked, and browsing activity</li>
                                            </ul>
                                            <p className="text-neutral-600">
                                                All information is collected to process orders and improve customer
                                                experience.
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
                                                Eligibility
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Services are available only in select locations within India</li>
                                                <li>Persons who are not competent to contract under the Indian Contract
                                                    Act, 1872 are not eligible</li>
                                                <li>Minors (below 18 years) may use the Application only under the
                                                    supervision of a parent or legal guardian</li>
                                            </ul>
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
                                                License & Application Access
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                Rekha Garments grants users a limited, non-exclusive, non-transferable
                                                license to access and use the Application for personal and lawful
                                                purposes only.
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                                                <h4 className="font-semibold text-amber-800 mb-2">This license <strong>does not permit</strong>:</h4>
                                                <ul className="list-disc pl-6 text-amber-700 space-y-2">
                                                    <li>Resale or commercial use of the Application or its content</li>
                                                    <li>Copying, downloading, or reproducing product images, descriptions, or
                                                        prices</li>
                                                    <li>Data scraping, data mining, or extraction</li>
                                                    <li>Unauthorized use of trademarks, logos, designs, or brand identity</li>
                                                </ul>
                                            </div>
                                            <p className="text-neutral-600">
                                                Any unauthorized use will result in immediate termination of access.
                                            </p>
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
                                                Account & Registration Obligations
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Users must register to place orders</li>
                                                <li>You are responsible for maintaining accurate and updated account
                                                    information</li>
                                                <li>By registering, you agree to receive transactional and promotional
                                                    communications (you may opt out anytime)</li>
                                            </ul>
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
                                                Product Information & Pricing
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Rekha Garments deals in <strong>readymade garments and clothing products</strong></li>
                                                <li>All products are sold at <strong>MRP unless otherwise mentioned</strong></li>
                                                <li>Prices displayed at the time of order placement shall be final</li>
                                                <li>Once an order is confirmed, prices will not be revised</li>
                                            </ul>
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
                                                Order Cancellation
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Orders can be cancelled <strong>only before dispatch/Print</strong></li>
                                                <li>Once dispatched, cancellation is not permitted</li>
                                                <li>Rekha Garments reserves the right to cancel orders suspected of fraud,
                                                    misuse, or violation of these terms</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 - IMPORTANT */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-red-600 font-bold text-lg">7</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-red-600" style={{ fontFamily: BRAND.fonts.heading }}>
                                                ❌ Return & Refund Policy
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <Card className="bg-red-50 border-red-200 mb-6">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start">
                                                        <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-red-800 font-bold text-lg mb-2">
                                                                <strong>Rekha Garments does NOT accept returns or refunds under any circumstances.</strong>
                                                            </p>
                                                            <p className="text-red-700">
                                                                No return, no cash refund, and no credit note shall be issued once an
                                                                order is delivered.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
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
                                                Size Replacement Policy (ONLY)
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                                <div className="flex items-start mb-4">
                                                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-blue-800 font-semibold">
                                                            <strong>Only size replacement is allowed</strong>, subject to stock availability
                                                        </p>
                                                    </div>
                                                </div>
                                                <ul className="list-disc pl-6 text-blue-700 space-y-2 mb-4">
                                                    <li>Replacement requests must be raised within <strong>48 hours of delivery</strong></li>
                                                    <li>Products must be:
                                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                                            <li>Unused and unwashed</li>
                                                            <li>In original condition</li>
                                                            <li>With original tags intact</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h4 className="text-xl font-semibold text-neutral-900 mb-4">Transport / Courier Charges</h4>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                                                <ul className="list-disc pl-6 text-amber-700 space-y-2">
                                                    <li><strong>All transport, courier, and logistics charges for size replacement
                                                        shall be borne entirely by the customer</strong></li>
                                                    <li>Rekha Garments will not pay or reimburse any shipping cost</li>
                                                    <li>Replacement will be processed only after receiving the product back</li>
                                                </ul>
                                            </div>

                                            <h4 className="text-xl font-semibold text-neutral-900 mb-4">Important Conditions</h4>
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                                <ul className="list-disc pl-6 text-red-700 space-y-2">
                                                    <li>Replacement is strictly subject to availability</li>
                                                    <li>If the requested size is unavailable, <strong>no return or refund will be
                                                        provided</strong></li>
                                                    <li>Once replacement is completed, the order is considered <strong>final</strong></li>
                                                </ul>
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
                                                Product Colour Disclaimer
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                We make every effort to display garment colors accurately.<br />
                                                However, actual colors may slightly vary due to lighting, photography,
                                                and screen display differences.
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-amber-800 font-semibold">
                                                            Such variations are <strong>not considered defects</strong>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
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
                                                User Responsibilities
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">You agree that:</p>
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Delivery address and contact details provided are correct</li>
                                                <li>You will check size charts, product descriptions, and specifications
                                                    carefully before ordering</li>
                                                <li>You will use the Application only for lawful purposes</li>
                                                <li>Rekha Garments may contact you for order-related communication</li>
                                            </ul>
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
                                                Reviews, Feedback & Submissions
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                All reviews, feedback, comments, and suggestions submitted become the
                                                property of Rekha Garments.
                                            </p>
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <p className="text-blue-800 font-semibold">
                                                    Rekha Garments reserves the right to <strong>moderate, edit, accept, or
                                                        reject</strong> any content without obligation or compensation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 12 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">12</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Modification of Terms & Conditions
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600">
                                                Rekha Garments may modify these Terms & Conditions at any time without
                                                prior notice.<br />
                                                Continued use of the Application constitutes acceptance of the updated
                                                terms.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 13 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">13</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Governing Law & Jurisdiction
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <ul className="list-disc pl-6 text-neutral-600 space-y-3">
                                                <li>Governed by the laws of India</li>
                                                <li>Jurisdiction: <strong>Courts of Ahmedabad, Gujarat</strong></li>
                                                <li>Any disputes shall be resolved through arbitration under the
                                                    Arbitration & Conciliation Act, 1996</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 14 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">14</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Copyright & Trademark
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <Copyright className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-blue-800 font-semibold">
                                                            All content including text, images, designs, logos, and software are the
                                                            intellectual property of Rekha Garments.
                                                        </p>
                                                        <p className="text-blue-700 mt-1">
                                                            Unauthorized use, reproduction, or distribution is strictly prohibited.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 15 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">15</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Indemnity
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600">
                                                You agree to indemnify Rekha Garments against any claims, losses, or
                                                liabilities arising from misuse of the Application or violation of these
                                                Terms & Conditions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 16 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20"></div>
                                    <div className="ml-4">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-primary font-bold text-lg">16</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: BRAND.fonts.heading }}>
                                                Termination
                                            </h3>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-neutral-600 mb-4">
                                                Rekha Garments reserves the right to terminate access without notice for
                                                violation of these terms.
                                            </p>
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                                <p className="text-amber-800 font-semibold">
                                                    Outstanding payment obligations shall survive termination.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Note */}
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
                                                <FileText className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: BRAND.fonts.heading }}>
                                                FINAL NOTE
                                            </h3>
                                            <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                                By placing an order with Rekha Garments, you confirm that you have
                                                <strong> read, understood, and agreed</strong> to all the above Terms & Conditions.
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