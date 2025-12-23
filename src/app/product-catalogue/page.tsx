'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import {
    ShoppingBag, Shirt, Package, Check, ArrowRight, ChevronRight,
    Users, Briefcase, Target, Palette, Scissors, Factory, Layers,
    Feather, Truck as TruckIcon, Star, Award, Clock, Shield,
    MapPin, Phone, Mail, MessageCircle, Quote, TrendingUp,
    Building, Users as UsersIcon, Ruler, Heart, Sparkles, Gift,
    GraduationCap, School, Target as TargetIcon, Calendar,
    ShoppingBag as ShoppingBagIcon, Star as StarIcon, FileText,
    Zap, CheckCircle, Heart as HeartIcon, Compass
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

export default function ProductCatalogPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    const whatsappMessage = "Hello! I'm interested in your product catalog and would like to request a quote."
    const whatsappUrl = `https://wa.me/918238636766?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHomeContact = () => {
        window.location.href = '/#contact';
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Product Categories
    const productCategories = [
        {
            id: 't-shirts',
            name: 'T-Shirts & Basics',
            icon: Shirt,
            description: 'Essential apparel for everyday wear and branding',
            color: 'from-blue-500/5 to-blue-600/10',
            products: [
                {
                    name: 'Plain T-Shirts',
                    description: 'Basic tees in various colors and fabrics',
                    features: ['Multiple Colors', 'Premium Cotton', 'Poly-Cotton Blends', 'Custom Sizing'],
                    minOrder: '100 pieces',
                    leadTime: '7-10 days',
                    icon: Shirt
                },
                {
                    name: 'Round Neck T-Shirts',
                    description: 'Classic crew-neck style for comfort and style',
                    features: ['Traditional Fit', 'Regular & Oversized', 'Year-Round Wear', 'Logo Placement'],
                    minOrder: '100 pieces',
                    leadTime: '7-10 days',
                    icon: ShoppingBag
                },
                {
                    name: 'Polo T-Shirts',
                    description: 'Collared shirts suitable for casual and semi-formal wear',
                    features: ['Button Collar', 'Professional Look', 'Multiple Colors', 'Embroidery Ready'],
                    minOrder: '100 pieces',
                    leadTime: '10-14 days',
                    icon: Briefcase
                },
                {
                    name: 'Sports T-Shirts',
                    description: 'Athletic and casual sportswear shirts',
                    features: ['Moisture-Wicking', 'Quick Dry Fabrics', 'Active Wear', 'Team Sports'],
                    minOrder: '50 pieces',
                    leadTime: '10-14 days',
                    icon: Target
                }
            ]
        },
        {
            id: 'custom-printed',
            name: 'Custom Printed Apparel',
            icon: Layers,
            description: 'Branded and customized garments for events and organizations',
            color: 'from-green-500/5 to-green-600/10',
            products: [
                {
                    name: 'Custom Printed T-Shirts',
                    description: 'For events, companies, teams, and promotions',
                    features: ['Screen Printing', 'DTG Printing', 'Sublimation', 'Full Color Prints'],
                    minOrder: '50 pieces',
                    leadTime: '10-14 days',
                    icon: Layers
                },
                {
                    name: 'Corporate/Company T-Shirts',
                    description: 'Customized for business groups and organizations',
                    features: ['Logo Printing', 'Brand Colors', 'Employee Sizing', 'Bulk Discounts'],
                    minOrder: '100 pieces',
                    leadTime: '12-16 days',
                    icon: Building
                },
                {
                    name: 'Ganpati/Ganesh T-Shirts',
                    description: 'Festive themed print shirts for celebrations',
                    features: ['Festive Designs', 'Vibrant Colors', 'Cultural Themes', 'Seasonal Collections'],
                    minOrder: '50 pieces',
                    leadTime: '7-10 days',
                    icon: Gift
                }
            ]
        },
        {
            id: 'uniforms',
            name: 'Uniform Solutions',
            icon: UsersIcon,
            description: 'Complete uniform programs for organizations and institutions',
            color: 'from-primary/5 to-primary/10',
            products: [
                {
                    name: 'Corporate/Company Uniforms',
                    description: 'Custom T-shirts and apparel for company staff',
                    features: ['Standardized Design', 'Brand Consistency', 'Multi-Size Kits', 'Professional Look'],
                    minOrder: '100 pieces',
                    leadTime: '14-21 days',
                    icon: Briefcase
                },
                {
                    name: 'Custom Staff Uniforms',
                    description: 'General customized uniforms for teams and organizations',
                    features: ['Team Branding', 'Role-Specific Designs', 'Durability Focus', 'Wear Testing'],
                    minOrder: '50 pieces',
                    leadTime: '12-18 days',
                    icon: Users
                },
                {
                    name: 'School Uniforms',
                    description: 'School-style T-shirts and uniform garments for bulk orders',
                    features: ['Age-Appropriate Sizing', 'Durable Fabrics', 'School Colors', 'Growth Allowance'],
                    minOrder: '200 pieces',
                    leadTime: '15-25 days',
                    icon: GraduationCap
                }
            ]
        },
        {
            id: 'festive',
            name: 'Festive & Seasonal',
            icon: Sparkles,
            description: 'Special occasion and festival-specific apparel',
            color: 'from-orange-500/5 to-orange-600/10',
            products: [
                {
                    name: 'Festival Clothing',
                    description: 'Seasonal collections for cultural celebrations',
                    features: ['Festival Themes', 'Traditional Motifs', 'Group Matching Sets', 'Vibrant Colors'],
                    minOrder: '50 pieces',
                    leadTime: '10-15 days',
                    icon: Sparkles
                },
                {
                    name: 'Seasonal Collections',
                    description: 'Themed apparel for various occasions throughout the year',
                    features: ['Holiday Designs', 'Event-Specific', 'Limited Editions', 'Quick Turnaround'],
                    minOrder: '30 pieces',
                    leadTime: '8-12 days',
                    icon: Calendar
                }
            ]
        },
        {
            id: 'accessories',
            name: 'Accessories & Bottoms',
            icon: Package,
            description: 'Complementary garments and accessories',
            color: 'from-purple-500/5 to-purple-600/10',
            products: [
                {
                    name: 'Track Pants & Pants',
                    description: 'Trousers offered alongside tops for complete sets',
                    features: ['Elastic Waist', 'Drawstring Options', 'Multiple Fabrics', 'Matching Sets'],
                    minOrder: '100 pieces',
                    leadTime: '12-18 days',
                    icon: Package
                },
                {
                    name: 'Professional Wear',
                    description: 'Aprons, doctor coats, and specialized workwear',
                    features: ['Functional Design', 'Durable Materials', 'Professional Finish', 'Custom Sizing'],
                    minOrder: '50 pieces',
                    leadTime: '14-21 days',
                    icon: Shield
                }
            ]
        }
    ];

    // All Products Flattened for "All Products" View
    const allProducts = productCategories.flatMap(category =>
        category.products.map(product => ({
            ...product,
            category: category.name,
            categoryId: category.id,
            categoryColor: category.color,
            categoryIcon: category.icon
        }))
    );

    const fabricOptions = [
        { name: 'Premium Cotton', bestFor: 'Comfort, daily wear, branding' },
        { name: 'Poly-Cotton Blend', bestFor: 'Durability, vibrant prints, maintenance' },
        { name: 'Combed Cotton', bestFor: 'Softness, premium feel' },
        { name: 'DRIFIT/Performance', bestFor: 'Sports, active wear, moisture management' },
        { name: 'Organic Cotton', bestFor: 'Eco-friendly, sensitive skin' },
        { name: 'Heavyweight Cotton', bestFor: 'Durability, cold weather' }
    ];

    const printingTechniques = [
        { name: 'Screen Printing', bestFor: 'Bulk orders, simple designs, cost-effective' },
        { name: 'Digital Printing (DTG)', bestFor: 'Complex designs, small batches, photo prints' },
        { name: 'Sublimation Printing', bestFor: 'All-over prints, polyester fabrics' },
        { name: 'Embroidery', bestFor: 'Premium look, corporate logos, durability' },
        { name: 'Heat Transfer', bestFor: 'Small batches, quick turnaround' }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden" style={{ fontFamily: BRAND.fonts.body }}>


            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary/5 pt-20">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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
                                <Award className="w-3.5 h-3.5 fill-accent text-accent mr-2" />
                                <span className="font-medium tracking-wide">Complete Manufacturing Portfolio • 50+ Product Variants</span>
                            </Badge>
                            <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                                <Factory className="w-4 h-4" />
                                <span>Vadodara-based manufacturing since 2004 • Bulk orders available</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="mb-8 leading-[1.1] tracking-tight"
                            style={{ fontFamily: BRAND.fonts.heading }}
                        >
                            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900">
                                Complete Product Catalog
                            </span>
                            <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
                                Your Comprehensive Apparel Solution
                            </span>
                        </motion.h1>

                        <motion.p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            From basic T-shirts to complete uniform programs. Explore our comprehensive range of
                            apparel manufacturing solutions for corporate, educational, and festive needs.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl transition-all group"
                                    onClick={scrollToHomeContact}
                                >
                                    <span className="flex items-center">
                                        <FileText className="w-5 h-5 mr-2" />
                                        Order Now
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
                                        WhatsApp for Bulk Pricing
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
                                { value: 50, label: "Product Variants", suffix: "+" },
                                { value: 3800000, label: "Annual Capacity", suffix: "+ units" },
                                { value: 98.7, label: "Quality Rating", suffix: "%" },
                                { value: 21, label: "Years Experience", suffix: "+" },
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
            </section>

            {/* Product Categories Tabs */}
            <section className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-white text-neutral-800 border-neutral-200/50 shadow-sm">Browse by Category</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Complete Product Range
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Explore our comprehensive manufacturing capabilities across all apparel categories.
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <Tabs defaultValue="all" className="max-w-7xl mx-auto" onValueChange={setActiveTab}>
                        <div className="flex justify-center mb-16">
                            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-neutral-100/50 p-1 rounded-xl h-auto w-full">
                                <TabsTrigger value="all" className="data-[state=active]:bg-white">
                                    <ShoppingBag className="w-4 h-4 mr-2" />
                                    All Products
                                </TabsTrigger>
                                <TabsTrigger value="t-shirts" className="data-[state=active]:bg-white">
                                    <Shirt className="w-4 h-4 mr-2" />
                                    T-Shirts
                                </TabsTrigger>
                                <TabsTrigger value="custom-printed" className="data-[state=active]:bg-white">
                                    <Layers className="w-4 h-4 mr-2" />
                                    Custom Print
                                </TabsTrigger>
                                <TabsTrigger value="uniforms" className="data-[state=active]:bg-white">
                                    <UsersIcon className="w-4 h-4 mr-2" />
                                    Uniforms
                                </TabsTrigger>
                                <TabsTrigger value="festive" className="data-[state=active]:bg-white">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Seasonal
                                </TabsTrigger>
                                <TabsTrigger value="accessories" className="data-[state=active]:bg-white">
                                    <Package className="w-4 h-4 mr-2" />
                                    Accessories
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* All Products Tab */}
                        <TabsContent value="all" className="mt-0">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {allProducts.map((product, index) => (
                                    <motion.div
                                        key={`${product.categoryId}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Card className="h-full hover:shadow-xl transition-all duration-300 border border-neutral-200/50 hover:border-primary/30">
                                            <CardContent className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.categoryColor} flex items-center justify-center`}>
                                                        <product.icon className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <Badge className="bg-primary/10 text-primary border-primary/20">
                                                        {product.category}
                                                    </Badge>
                                                </div>

                                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{product.name}</h3>
                                                <p className="text-neutral-600 mb-4 text-sm">{product.description}</p>

                                                <div className="space-y-3 mb-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Features</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.features.map((feature, i) => (
                                                                <span key={i} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-neutral-100">
                                                        <div>
                                                            <div className="text-xs text-neutral-500">Min. Order</div>
                                                            <div className="text-sm font-semibold">{product.minOrder}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs text-neutral-500">Lead Time</div>
                                                            <div className="text-sm font-semibold">{product.leadTime}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Button
                                                    variant="outline"
                                                    className="w-full text-primary hover:text-primary hover:bg-primary/5"
                                                    onClick={scrollToHomeContact}
                                                >
                                                    Request Quote
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Category-specific Tabs */}
                        {productCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-10"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                            <category.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-neutral-900" style={{ fontFamily: BRAND.fonts.heading }}>
                                                {category.name}
                                            </h3>
                                            <p className="text-neutral-600">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {category.products.map((product, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-neutral-200/50">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-start justify-between mb-4">
                                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                                                <product.icon className="w-6 h-6 text-primary" />
                                                            </div>
                                                            <Badge className="bg-primary/10 text-primary border-primary/20">
                                                                {category.name}
                                                            </Badge>
                                                        </div>

                                                        <h3 className="text-xl font-bold text-neutral-900 mb-3">{product.name}</h3>
                                                        <p className="text-neutral-600 mb-4 text-sm">{product.description}</p>

                                                        <div className="space-y-3 mb-6">
                                                            <div>
                                                                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Features</h4>
                                                                <ul className="space-y-2">
                                                                    {product.features.map((feature, i) => (
                                                                        <li key={i} className="flex items-center text-sm text-neutral-600">
                                                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                                                            {feature}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-neutral-100">
                                                                <div>
                                                                    <div className="text-xs text-neutral-500">Min. Order</div>
                                                                    <div className="text-sm font-semibold">{product.minOrder}</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xs text-neutral-500">Lead Time</div>
                                                                    <div className="text-sm font-semibold">{product.leadTime}</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <Button
                                                            variant="outline"
                                                            className="w-full text-primary hover:text-primary hover:bg-primary/5"
                                                            onClick={scrollToHomeContact}
                                                        >
                                                            Request Quote
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Fabric & Printing Options */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Fabric Options */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Fabric Options</Badge>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                                Premium Fabric Selection
                            </h3>
                            <p className="text-lg text-neutral-600 mb-8">
                                Choose from our wide range of premium fabrics to match your specific requirements and budget.
                            </p>

                            <div className="space-y-4">
                                {fabricOptions.map((fabric, index) => (
                                    <div key={index} className="flex items-start p-4 bg-neutral-50 rounded-xl border border-neutral-200/50">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 border border-neutral-200">
                                            <Feather className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{fabric.name}</h4>
                                            <p className="text-sm text-neutral-600 mt-1">Best for: {fabric.bestFor}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Printing Techniques */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">Printing Techniques</Badge>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                                Customization Options
                            </h3>
                            <p className="text-lg text-neutral-600 mb-8">
                                Multiple printing techniques available to bring your designs to life with precision and quality.
                            </p>

                            <div className="space-y-4">
                                {printingTechniques.map((technique, index) => (
                                    <div key={index} className="flex items-start p-4 bg-neutral-50 rounded-xl border border-neutral-200/50">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 border border-neutral-200">
                                            <Layers className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{technique.name}</h4>
                                            <p className="text-sm text-neutral-600 mt-1">Best for: {technique.bestFor}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bulk Order Process */}
            <section className="py-24 bg-gradient-to-b from-neutral-50/50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Bulk Order Process</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            How Bulk Orders Work
                        </h2>
                        <p className="text-lg text-neutral-600">
                            A streamlined process designed for efficient bulk manufacturing and timely delivery.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Requirement Analysis",
                                desc: "Understand your needs, quantities, and specifications",
                                icon: FileText
                            },
                            {
                                step: "02",
                                title: "Sample Development",
                                desc: "Create samples for approval with your specifications",
                                icon: Layers
                            },
                            {
                                step: "03",
                                title: "Bulk Production",
                                desc: "Quality-controlled manufacturing at scale",
                                icon: Factory
                            },
                            {
                                step: "04",
                                title: "Delivery & Support",
                                desc: "Timely delivery with post-order support",
                                icon: TruckIcon
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-sm text-neutral-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: BRAND.fonts.heading }}>
                            Ready to Place Your Bulk Order?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                            Get a custom quote for any product from our catalog. Our team will provide you with
                            competitive pricing and detailed specifications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-neutral-100 px-8 py-6 text-lg"
                                onClick={scrollToHomeContact}
                            >
                                <FileText className="w-5 h-5 mr-2" />
                                Request Complete Catalog & Quote
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-primary px-8 py-6 text-lg"
                                onClick={() => window.open(whatsappUrl, '_blank')}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp for Bulk Pricing
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
                                    <span className="text-xs text-neutral-400">Complete Apparel Solutions</span>
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Your comprehensive apparel manufacturing partner. From basic T-shirts to complete uniform programs,
                                we deliver quality and consistency across all product categories.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Product Categories</h4>
                            <div className="space-y-3">
                                {productCategories.map((category, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setActiveTab(category.id);
                                            window.location.href = `#${category.id}`;
                                        }}
                                        className="block text-neutral-400 hover:text-white transition-colors text-sm hover:translate-x-1"
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg" style={{ fontFamily: BRAND.fonts.heading }}>Contact Sales</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-neutral-400">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>+91 79424 52200</span>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>sales@rekhagarments.com</span>
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
                            &copy; 2024 Rekha Garments. All rights reserved. | Comprehensive Apparel Manufacturing Specialists
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}