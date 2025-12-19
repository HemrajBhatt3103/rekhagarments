'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Linkedin
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RG</span>
              </div>
              <span className="font-bold text-xl">Rekha Garments</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-slate-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('solutions')} className="hover:text-slate-600 transition-colors">Solutions</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-slate-600 transition-colors">Process</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-slate-600 transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center space-x-2"
                onClick={() => window.open('tel:+919876543210', '_blank')}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Button>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-slate-800 text-white px-4 py-2">
              Serving Businesses Since 1995
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Corporate Uniform &<br />
              <span className="text-slate-600">Promotional T-Shirt</span><br />
              Manufacturing Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              High-quality, scalable solutions for companies, institutions, and organizations 
              that need premium uniforms and promotional apparel in bulk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg flex items-center space-x-2"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg flex items-center space-x-2"
                onClick={() => window.open('tel:+919876543210', '_blank')}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-lg flex items-center space-x-2"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5" />
                <span>Get a Quote</span>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-12 text-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">500+</div>
                <div className="text-sm">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">2M+</div>
                <div className="text-sm">Units Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">28+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-slate-100 text-slate-800">About Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Reliable Manufacturing Partner for Your Brand
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Based in Vadodara, India's manufacturing hub, Rekha Garments has been a trusted 
                  name in B2B apparel manufacturing for over 28 years. We specialize in corporate 
                  uniform solutions, promotional T-shirts, and unisex apparel for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our state-of-the-art facility and experienced team ensure premium quality, 
                  on-time delivery, and competitive pricing for bulk orders. We're not just 
                  manufacturersâ€”we're your strategic partners in building brand identity through quality apparel.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">In-house Manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Quality Control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">On-time Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Bulk Capacity</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Factory className="w-32 h-32 text-slate-400" />
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-slate-800 text-white p-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-3xl font-bold mb-2">28+ Years</div>
                  <div className="text-sm opacity-90">of Excellence</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Our Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Comprehensive Apparel Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From corporate uniforms to promotional campaigns, we deliver quality apparel that represents your brand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Corporate Uniform Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Professional uniforms for staff, industrial workers, and corporate teams that enhance brand identity.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Bulk manufacturing capacity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Custom branding and embroidery</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Premium fabric options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Full size range available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Package className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Promotional T-Shirts</h3>
                  <p className="text-gray-600 mb-6">
                    Eye-catching promotional apparel for events, campaigns, and marketing initiatives.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Custom printing solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Fast turnaround time</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Vibrant color options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Event bulk packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Unisex T-Shirts</h3>
                  <p className="text-gray-600 mb-6">
                    Versatile, comfortable unisex apparel perfect for teams, events, and merchandise.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Inclusive sizing options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Premium cotton blends</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Custom design support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Team merchandise solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quality-Driven Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600">
              We combine traditional craftsmanship with modern technology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { icon: Factory, title: "In-house Manufacturing", desc: "Complete control over production quality" },
              { icon: Package, title: "Bulk Order Capability", desc: "Scale from 100 to 100,000+ units" },
              { icon: Shield, title: "Quality Control", desc: "Rigorous testing at every stage" },
              { icon: Palette, title: "Custom Branding", desc: "Printing, embroidery, and customization" },
              { icon: Truck, title: "Timely Delivery", desc: "On-time delivery guaranteed" },
              { icon: Users, title: "Dedicated Support", desc: "Personal account manager for B2B clients" },
              { icon: Award, title: "Premium Fabrics", desc: "High-quality materials sourced directly" },
              { icon: Clock, title: "Fast Turnaround", desc: "Quick production without compromising quality" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-slate-50">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2M+</div>
                <div className="text-sm opacity-90">Units Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">7 Days</div>
                <div className="text-sm opacity-90">Average Turnaround</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Concept to Delivery
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined manufacturing process ensures quality and efficiency at every step.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
              
              {[
                { step: 1, title: "Fabric Selection", desc: "Premium quality fabrics sourced directly from trusted suppliers", icon: Package },
                { step: 2, title: "Precision Cutting", desc: "Advanced cutting technology ensures accurate sizing and minimal waste", icon: Scissors },
                { step: 3, title: "Expert Stitching", desc: "Skilled craftsmen ensure perfect stitching and durable construction", icon: Users },
                { step: 4, title: "Custom Printing", desc: "State-of-the-art printing and embroidery for brand customization", icon: Palette },
                { step: 5, title: "Quality Check", desc: "Rigorous quality inspection at multiple stages", icon: Shield },
                { step: 6, title: "Packaging & Dispatch", desc: "Secure packaging and timely delivery to your location", icon: Truck }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    {item.step}
                  </div>
                  <Card className="ml-8 flex-1 p-6 bg-white hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Product Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quality That Speaks for Itself
            </h2>
            <p className="text-lg text-gray-600">
              Explore our range of premium apparel solutions designed to elevate your brand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Corporate Uniform Set", category: "Corporate", color: "bg-blue-100" },
              { title: "Promotional Campaign T-Shirts", category: "Promotional", color: "bg-green-100" },
              { title: "Unisex Team Apparel", category: "Unisex", color: "bg-purple-100" },
              { title: "Industrial Work Uniforms", category: "Corporate", color: "bg-orange-100" },
              { title: "Event Merchandise", category: "Promotional", color: "bg-pink-100" },
              { title: "Retail Staff Uniforms", category: "Corporate", color: "bg-indigo-100" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className={`aspect-square ${item.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="w-24 h-24 text-slate-400" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-slate-100 text-slate-800">{item.category}</Badge>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-600 transition-colors">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Clients Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Trusted By</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Leading Companies & Industries
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve diverse industries with tailored apparel solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              "IT Companies", "Startups", "Educational Institutions", 
              "Manufacturing", "Retail Chains", "Healthcare",
              "Hospitality", "Banking", "Real Estate",
              "Logistics", "Consulting", "Government"
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Factory className="w-6 h-6 text-slate-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Client Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from businesses that trust us with their apparel needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                role: "HR Manager",
                company: "TechCorp Solutions",
                content: "Rekha Garments has been our uniform partner for 5 years. Quality is consistently excellent, and delivery is always on time.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Marketing Director",
                company: "BrandWave Agency",
                content: "The promotional T-shirts for our campaign were perfect. Great quality printing and fast turnaround. Highly recommended!",
                rating: 5
              },
              {
                name: "Amit Kumar",
                role: "Operations Head",
                company: "Manufacturing Unit Ltd",
                content: "Professional service, competitive pricing, and excellent quality. They understand B2B requirements perfectly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-slate-600">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Stay Connected</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Follow Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest projects, fabric innovations, and industry insights.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Instagram Gallery</h3>
                  <p className="text-gray-600 mb-6">
                    Follow us on Instagram for daily updates on our manufacturing process, 
                    completed projects, and fabric quality showcases.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => window.open('https://instagram.com/rekhagarments', '_blank')}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow on Instagram
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="flex justify-center space-x-6 mt-12">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-slate-100 text-slate-800">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us today for a free consultation and quote for your apparel requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-slate-50">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <Input placeholder="Your Name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                      <Input placeholder="Company Name" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp *</label>
                      <Input placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Requirement Type *</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select requirement type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate Uniforms</SelectItem>
                        <SelectItem value="promotional">Promotional T-Shirts</SelectItem>
                        <SelectItem value="unisex">Unisex T-Shirts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Quantity</label>
                    <Input placeholder="e.g., 500 units" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements</label>
                    <Textarea placeholder="Tell us about your requirements..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3">
                    Send Enquiry
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
            >
              <div className="space-y-8">
                <Card className="p-6 bg-slate-50">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600">+91 98765 43210</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">WhatsApp</div>
                        <div className="text-gray-600">+91 98765 43210</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-600">info@rekhagarments.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-gray-600">
                          Industrial Estate, Vadodara<br />
                          Gujarat, India - 390020
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                  <p className="mb-4 opacity-90">
                    We understand the urgency of B2B requirements. Our team responds to all enquiries within:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2 Hours</div>
                      <div className="text-sm opacity-75">Email Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">30 Mins</div>
                      <div className="text-sm opacity-75">Call/WhatsApp</div>
                    </div>
                  </div>
                </Card>

                <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-slate-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xl">RG</span>
                </div>
                <span className="font-bold text-xl">Rekha Garments</span>
              </div>
              <p className="text-slate-400">
                Premium B2B manufacturer of corporate uniforms and promotional apparel since 1995.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-slate-400 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('solutions')} className="block text-slate-400 hover:text-white transition-colors">Solutions</button>
                <button onClick={() => scrollToSection('process')} className="block text-slate-400 hover:text-white transition-colors">Process</button>
                <button onClick={() => scrollToSection('contact')} className="block text-slate-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-400">
                <div>+91 98765 43210</div>
                <div>info@rekhagarments.com</div>
                <div>Vadodara, Gujarat, India</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Rekha Garments. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
