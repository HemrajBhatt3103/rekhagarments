"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone, ShoppingBag, Shirt, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Brand configuration 
const BRAND = {
    colors: {
        primary: '#1a365d',
        accent: '#c2410c',
    },
    fonts: {
        heading: '"Playfair Display", serif',
        body: '"Inter", sans-serif',
    }
};

const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Process', href: '/#process' },
    { name: 'Product Catalogue', href: '/product-catalogue' },
    { name: 'Contact', href: '/#contact' },
];

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Dynamic header styles transforms
    const headerHeight = useTransform(scrollY, [0, 100], ["5.5rem", "4rem"]);
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"] // Becomes glass
    );
    const headerBackdropBlur = useTransform(scrollY, [0, 100], ["0px", "12px"]);
    const headerBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(226, 232, 240, 0)", "rgba(226, 232, 240, 0.4)"]
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 6px -1px rgba(0, 0, 0, 0.05)"]
    );


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappMessage = "Hello! I'd like to connect with you about your garment manufacturing services.";
    const whatsappUrl = `https://wa.me/918238636766?text=${encodeURIComponent(whatsappMessage)}`;

    // Smooth scroll handler
    const handleNavClick = (href: string) => {
        setIsOpen(false);

        if (href.startsWith('/#')) {
            const elementId = href.replace('/#', '');
            if (pathname === '/') {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = href;
            }
        } else {
            if (pathname === href) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-colors duration-300"
            style={{
                height: headerHeight,
                background: headerBackground,
                backdropFilter: `blur(${headerBackdropBlur})`, // This might need a style motion value wrapper for stricter typing, but usually works in recent framer-motion
                borderBottom: `1px solid`,
                borderColor: headerBorder,
                boxShadow: headerShadow
            }}
        >
            {/* Glassmorphism Background Gradient for extra richness */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/10 via-white/5 to-neutral-50/10 pointer-events-none opacity-50" />

            <nav className="container mx-auto px-4 relative h-full flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" onClick={() => handleNavClick('/')} className="relative z-10">
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        style={{ scale: logoScale }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-white/20 shadow-sm overflow-hidden">
                            <img
                                src="/rekha_logo.jpg"
                                alt="Rekha Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-lg md:text-xl leading-none text-neutral-900 tracking-tight" style={{ fontFamily: BRAND.fonts.heading }}>
                                Rekha Garments
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium pl-0.5 mt-0.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                                Est. 2004
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation - Interactive Pill */}
                <div className="hidden lg:flex items-center bg-neutral-100/50 p-1 rounded-full border border-neutral-200/50 backdrop-blur-md relative z-10">
                    <div className="flex items-center relative" onMouseLeave={() => setHoveredNavIndex(null)}>
                        {NAV_ITEMS.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith('/#') && pathname === '/') {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }
                                }}
                                className="relative px-4 py-2 text-sm font-medium transition-colors"
                                onMouseEnter={() => setHoveredNavIndex(index)}
                            >
                                {/* Hover Pill Effect */}
                                {hoveredNavIndex === index && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-neutral-200/50"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors duration-200 ${hoveredNavIndex === index ? "text-primary" : "text-neutral-600"
                                    }`}>
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 relative z-10">
                    <Button
                        variant="default" // Ghost is too plain, let's try a subtle outline or secondary
                        size="sm"
                        className="hidden md:flex bg-white/50 text-neutral-700 hover:text-primary hover:bg-white border border-neutral-200/60 shadow-sm backdrop-blur-sm transition-all"
                        onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                        <Phone className="w-3.5 h-3.5 mr-2" />
                        <span>+91 94797 88000 / 94263 23279</span>
                    </Button>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block"
                    >
                        <Button
                            size="sm"
                            className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 border border-primary/20 group"
                            onClick={() => handleNavClick('/#contact')}
                            style={{ fontFamily: BRAND.fonts.heading }}
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                            <div className="relative flex items-center z-20">
                                <Shirt className="w-4 h-4 mr-2" />
                                <span>Get Quote</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </Button>
                    </motion.div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-neutral-100 rounded-full">
                                    <Menu className="w-6 h-6 text-neutral-800" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] border-l border-neutral-200/50 bg-white/95 backdrop-blur-xl p-0">
                                <SheetHeader className="p-6 border-b border-neutral-100 text-left">
                                    <SheetTitle className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                                            <img src="/rekha_logo.jpg" alt="Logo" className="w-6 h-6 object-contain" />
                                        </div>
                                        <div>
                                            <span className="block text-lg font-bold text-primary">Rekha</span>
                                            <span className="block text-xs text-neutral-500 font-medium">Garments</span>
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col p-4">
                                    {NAV_ITEMS.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => {
                                                    if (item.href.startsWith('/#') && pathname === '/') {
                                                        e.preventDefault();
                                                        handleNavClick(item.href);
                                                    } else {
                                                        setIsOpen(false);
                                                    }
                                                }}
                                                className="flex items-center justify-between p-3 rounded-lg text-neutral-600 font-medium hover:bg-primary/5 hover:text-primary transition-all group mb-1"
                                            >
                                                {item.name}
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                                    <Button
                                        className="w-full mb-3 bg-neutral-900 text-white hover:bg-neutral-800"
                                        onClick={() => handleNavClick('/#contact')}
                                    >
                                        <Shirt className="w-4 h-4 mr-2" />
                                        Start Your Order
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-neutral-200"
                                        onClick={() => window.open(whatsappUrl, '_blank')}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        WhatsApp Us
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}
