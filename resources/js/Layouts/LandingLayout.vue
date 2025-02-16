<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { Menu, X, ChevronDown } from 'lucide-vue-next';

const showMobileMenu = ref(false);
const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '#blog' },
    { name: 'SHOP', href: '#shop' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'PAGES', href: '#pages' },
];
</script>

<template>
    <div class="min-h-screen bg-black">
        <!-- Navigation -->
        <nav class="fixed top-0 z-50 w-full bg-black/95">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <Link href="/">
                            <ApplicationLogo class="h-12 w-auto text-amber-500" />
                        </Link>
                    </div>

                    <!-- Desktop Menu -->
                    <div class="hidden md:block">
                        <div class="flex items-center space-x-8">
                            <Link
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                class="text-sm font-medium tracking-wider text-white transition hover:text-amber-500"
                            >
                                {{ item.name }}
                            </Link>
                            <button class="text-amber-500">
                                <Menu class="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button
                            @click="showMobileMenu = !showMobileMenu"
                            class="text-white"
                        >
                            <Menu v-if="!showMobileMenu" class="h-6 w-6" />
                            <X v-else class="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div
                v-show="showMobileMenu"
                class="md:hidden"
            >
                <div class="space-y-1 px-4 pb-3 pt-2">
                    <Link
                        v-for="item in navigation"
                        :key="item.name"
                        :href="item.href"
                        class="block px-3 py-2 text-slate-600"
                        @click="showMobileMenu = false"
                    >
                        {{ item.name }}
                    </Link>
                    <Link
                        href="/contact"
                        class="mt-4 block rounded-full bg-amber-500 px-4 py-2 text-center text-white"
                        @click="showMobileMenu = false"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-slate-900 text-white">
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <!-- Company Info -->
                    <div class="space-y-4">
                        <ApplicationLogo class="h-12 w-auto" />
                        <p class="text-slate-400">
                            Solusi konstruksi terpercaya untuk proyek Anda
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="mb-4 text-lg font-semibold">Tautan Cepat</h3>
                        <ul class="space-y-2 text-slate-400">
                            <li><Link href="#about">Tentang Kami</Link></li>
                            <li><Link href="#services">Layanan</Link></li>
                            <li><Link href="#projects">Proyek</Link></li>
                            <li><Link href="#contact">Kontak</Link></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div>
                        <h3 class="mb-4 text-lg font-semibold">Layanan Kami</h3>
                        <ul class="space-y-2 text-slate-400">
                            <li>Konstruksi Bangunan</li>
                            <li>Renovasi</li>
                            <li>Desain Arsitektur</li>
                            <li>Supplier Material</li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="mb-4 text-lg font-semibold">Kontak</h3>
                        <ul class="space-y-2 text-slate-400">
                            <li>info@perusahaan.com</li>
                            <li>+62 123 4567 890</li>
                            <li>Jl. Contoh No. 123, Jakarta</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
                    <p>&copy; 2024 Nama Perusahaan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>
