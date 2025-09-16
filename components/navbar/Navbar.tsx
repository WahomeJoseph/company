'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  X,
  Code,
  ChevronDown,
  Globe,
  Smartphone,
  Cloud,
  Network,
  MessageSquare,
} from 'lucide-react';

interface Service {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const services: Service[] = [
  { name: 'Web Development', href: '/services/web-development', icon: Globe },
  { name: 'Mobile Apps', href: '/services/mobile-apps', icon: Smartphone },
  { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
  { name: 'Network Infrastructure', href: '/services/network-infrastructure', icon: Network },
];

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();  // Use usePathname for the current path

  const isActive = (href: string): boolean => {
    if (href === '/services') {
      return pathname === href || pathname.startsWith('/services/');
    }
    return pathname === href;
  };

  // Check if a service is active
  const isServiceActive = (serviceHref: string): boolean => {
    return pathname === serviceHref;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur text-emerald-600 shadow-sm">
      <div className="container flex h-20 items-center text-emerald-600 justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center ml-14 space-x-3 transition-transform hover:scale-105"
        >
          <Image
          src={'/Logo.png'}
          className="rounded-full"
          alt='Credible WebWorks Logo'
          width={70}
          height={70}
          priority
          
          />
          <span className="text-xl font-bold text-emerald-700 transition-colors group-hover:text-primary">
            {/* 🅓🅘🅖🅘🅣🅐🅛 🅕🅘🅧🅔🅡🅢 */}
            𝓒𝓻𝓮𝓭𝓲𝓫𝓵𝓮 𝓦𝓮𝓫𝓦𝓸𝓻𝓴𝓼
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1.5">
          {/* About Link */}
          <Link
            href="/about"
            className={`group relative flex items-center space-x-2 rounded-lg px-4 py-2 text-md font-medium transition-all duration-200 hover:bg-blue/50 ${isActive('/about')
                ? 'text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg'
                : 'text-gray-600 hover:text-emerald-600'
              }`}
          >
            <span>About</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive('/about') ? "w-full" : "w-0 group-hover:w-full"
                }`}
            ></span>
          </Link>

          {/* Services Dropdown - Now between About and Portfolio */}
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className={`group relative flex items-center space-x-2 rounded-lg px-4 py-2 text-md font-medium transition-all duration-200 hover:bg-accent/50 ${isActive('/services')
                    ? 'text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive('/services') ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 p-2 bg-white animate-in slide-in-from-top-2 shadow-lg border border-gray-200 rounded-lg">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link
                    href={service.href}
                    className={`group flex items-center space-x-3 cursor-pointer rounded-md px-3 py-3 transition-all ${
                      isServiceActive(service.href)
                        ? 'bg-emerald-50 text-emerald-700 font-semibold border-l-2 border-emerald-600'
                        : 'hover:bg-emerald-600/10 text-emerald-600'
                    }`}
                  >
                    <service.icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                      isServiceActive(service.href) ? 'text-emerald-600' : 'text-emerald-800'
                    }`} />
                    <span className="font-medium">{service.name}</span>
                    {isServiceActive(service.href) && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500"></span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="mx-3 my-2 border-t" />
              <DropdownMenuItem asChild>
                <Link
                  href="/services"
                  className={`flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/services')
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Portfolio Link */}
          <Link
            href="/portfolio"
            className={`group relative flex items-center space-x-2 rounded-lg px-4 py-2 text-md font-medium transition-all duration-200 hover:bg-blue/50 ${isActive('/portfolio')
                ? 'text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg'
                : 'text-gray-600 hover:text-emerald-600'
              }`}
          >
            <span>Portfolio</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive('/portfolio') ? "w-full" : "w-0 group-hover:w-full"
                }`}
            ></span>
          </Link>

          {/* Remaining navigation items */}
          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative flex items-center space-x-2 rounded-lg px-4 py-2 text-md font-medium transition-all duration-200 hover:bg-blue/50 ${isActive(item.href)
                  ? 'text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg'
                  : 'text-gray-600 hover:text-emerald-600'
                }`}
            >
              <span>{item.name}</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}

          <Button variant="default" size="lg" asChild className="ml-4 shadow-lg bg-emerald-600 text-white hover:shadow-xl transition-all">
            <Link href="/quote" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Get Quote</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="relative overflow-hidden transition-all hover:bg-accent/50"
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu className="h-5 w-5" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <X className="h-5 w-5" />
              </div>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] animate-in slide-in-from-right-full">
            <div className="flex flex-col space-y-6 pt-6">
              {/* Mobile Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-lg">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Digital Fixers</span>
              </Link>

              {/* Mobile Navigation Items */}
              <div className="flex flex-col space-y-2">
                {/* About Link */}
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive('/about')
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                    }`}
                >
                  <span>About</span>
                </Link>

                {/* Mobile Services */}
                <div className="space-y-1">
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive('/services')
                        ? 'bg-accent text-primary'
                        : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                      }`}
                  >
                    <Network className="h-4 w-4" />
                    <span>Services</span>
                  </Link>

                  <div className="ml-4 space-y-1 border-l-2 border-border pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                          isServiceActive(service.href)
                            ? 'bg-emerald-50 text-emerald-700 font-semibold'
                            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                        }`}
                      >
                        <service.icon className="h-3 w-3" />
                        <span>{service.name}</span>
                        {isServiceActive(service.href) && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Portfolio Link */}
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive('/portfolio')
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                    }`}
                >
                  <span>Portfolio</span>
                </Link>

                {/* Remaining navigation items */}
                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive(item.href)
                        ? 'bg-accent text-primary'
                        : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}

                <div className="pt-4 border-t">
                  <Button variant="default" size="sm" asChild className="w-full shadow-lg">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Get Quote</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
};

export default Navbar;