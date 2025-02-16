<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import LandingLayout from '@/Layouts/LandingLayout.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';
import { Building2, PaintBucket, Ruler, Wrench, Users, Clock, Trophy, Home } from 'lucide-vue-next';

defineOptions({ layout: LandingLayout });

const { observe } = useScrollAnimation();

// Buat refs untuk setiap section yang perlu diobservasi
const heroSection = ref(null);
const aboutSection = ref(null);
const servicesSection = ref(null);
const funFactsSection = ref(null);
const projectsSection = ref(null);
const testimonialsSection = ref(null);
const partnersSection = ref(null);
const ctaSection = ref(null);

// Setup observer setelah component mounted
onMounted(() => {
    observe(heroSection.value);
    observe(aboutSection.value);
    observe(servicesSection.value);
    observe(funFactsSection.value);
    observe(projectsSection.value);
    observe(testimonialsSection.value);
    observe(partnersSection.value);
    observe(ctaSection.value);
});

const partners = [
    { name: 'Company 1', logo: '/img/partners/1.png' },
    { name: 'Company 2', logo: '/img/partners/2.png' },
    // ... tambahkan partner lainnya
];

const services = [
    {
        icon: Building2,
        title: 'Konstruksi Bangunan',
        description: 'Layanan konstruksi berkualitas tinggi untuk berbagai jenis bangunan.',
        bgColor: 'bg-amber-50',
        iconColor: 'text-amber-500'
    },
    {
        icon: PaintBucket,
        title: 'Interior Design',
        description: 'Desain interior modern dan fungsional sesuai kebutuhan Anda.',
        bgColor: 'bg-sky-50',
        iconColor: 'text-sky-500'
    },
    {
        icon: Ruler,
        title: 'Perencanaan',
        description: 'Perencanaan detail dan matang untuk setiap proyek konstruksi.',
        bgColor: 'bg-slate-50',
        iconColor: 'text-slate-500'
    },
    {
        icon: Wrench,
        title: 'Renovasi',
        description: 'Layanan renovasi profesional untuk memperbarui bangunan Anda.',
        bgColor: 'bg-amber-50',
        iconColor: 'text-amber-500'
    }
];

const stats = [
    { value: 15, label: 'Tahun Pengalaman' },
    { value: 230, label: 'Proyek Selesai' },
    { value: 95, label: 'Klien Puas' },
    { value: 50, label: 'Tim Ahli' }
];

const projects = [
    {
        title: 'Modern Office Building',
        description: 'Konstruksi gedung perkantoran modern di Jakarta',
        image: '/img/sample1.jpg'
    },
    {
        title: 'Luxury Residence',
        description: 'Desain dan pembangunan rumah mewah',
        image: '/img/sample2.jpg'
    },
    {
        title: 'Commercial Complex',
        description: 'Pembangunan kompleks komersial multi-fungsi',
        image: '/img/sample1.jpg'
    }
];

const testimonials = [
    {
        name: 'Ahmad Rizki',
        role: 'CEO, PT Maju Bersama',
        content: 'Kualitas pekerjaan sangat memuaskan. Tim sangat profesional dan komunikatif selama proses konstruksi.',
        image: '/img/sample2.jpg'
    },
    {
        name: 'Sarah Wilson',
        role: 'Direktur, Wilson Properties',
        content: 'Hasil renovasi gedung kami melebihi ekspektasi. Tepat waktu dan sesuai budget.',
        image: '/img/sample1.jpg'
    },
    {
        name: 'Budi Santoso',
        role: 'Pemilik, Santoso Residence',
        content: 'Desain yang modern dan pengerjaan yang rapi. Sangat merekomendasikan jasa mereka.',
        image: '/img/sample2.jpg'
    }
];

// Tambahkan data untuk contact info
const contactInfo = {
    phone: '(+84) 867-557-243',
    email: 'Support@yourdomain.com'
};
</script>

<template>
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen bg-black" ref="heroSection">
        <!-- Contact Info Bar -->
        <div class="absolute left-0 top-0 z-10 hidden w-full bg-black/80 backdrop-blur-sm text-white lg:block">
            <div class="mx-auto flex max-w-7xl justify-between px-4 py-2 text-sm sm:px-6 lg:px-8">
                <div class="flex items-center space-x-6">
                    <span class="flex items-center hover:text-amber-500 transition-colors duration-300">
                        <span class="text-amber-500">PHONE:</span>
                        <span class="ml-2">{{ contactInfo.phone }}</span>
                    </span>
                    <span class="flex items-center hover:text-amber-500 transition-colors duration-300">
                        <span class="text-amber-500">EMAIL:</span>
                        <span class="ml-2">{{ contactInfo.email }}</span>
                    </span>
                </div>
                <div class="flex space-x-4">
                    <!-- Social Media Icons -->
                    <a href="#" class="text-white hover:text-amber-500 transition-colors duration-300">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-white hover:text-amber-500 transition-colors duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-white hover:text-amber-500 transition-colors duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Hero Content -->
        <div class="relative min-h-screen">
            <!-- Hero image as full background with parallax effect -->
            <div
                class="absolute inset-0 bg-cover bg-center bg-fixed"
                style="background-image: url('/img/sample2.jpg'); opacity: 0.5;"
                alt="Modern Interior Design"
            ></div>
            <div class="relative mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8 z-10">
                <div class="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
                    <div class="space-y-8 text-white">
                        <p class="text-lg text-amber-500 opacity-0 animate-fadeInDown font-medium tracking-wider uppercase">
                            Selamat Datang di Hanasta Gama
                        </p>
                        <h1 class="text-5xl font-bold leading-tight lg:text-7xl opacity-0 animate-fadeInDown"
                            style="animation-delay: 100ms;">
                            Membangun Masa
                            <br/>
                            <span class="text-amber-500 relative group">
                                Depan Anda
                                <span class="absolute -bottom-2 left-0 w-full h-1 bg-amber-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                            </span>
                        </h1>
                        <p class="text-xl text-gray-300 opacity-0 animate-fadeInDown max-w-xl" style="animation-delay: 200ms;">
                            Kami adalah mitra terpercaya dalam mewujudkan proyek konstruksi Anda dengan kualitas terbaik dan profesionalisme tinggi.
                        </p>
                        <div class="pt-4 flex gap-4 flex-wrap">
                            <Link
                                href="#projects"
                                class="group inline-flex items-center rounded-full bg-amber-500 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg opacity-0 animate-fadeInUp"
                                style="animation-delay: 400ms;"
                            >
                                Lihat Proyek
                                <span class="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                            <Link
                                href="#contact"
                                class="group inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black opacity-0 animate-fadeInUp"
                                style="animation-delay: 500ms;"
                            >
                                Hubungi Kami
                                <span class="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                    <!-- Hero Stats -->
                    <div class="hidden lg:grid grid-cols-2 gap-6 opacity-0 animate-fadeInRight" style="animation-delay: 600ms;">
                        <div v-for="(stat, index) in stats.slice(0, 4)" :key="index"
                            class="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all duration-300 group">
                            <div class="text-4xl font-bold text-amber-500 mb-2">{{ stat.value }}+</div>
                            <div class="text-white/80 group-hover:text-white transition-colors duration-300">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-20 overflow-hidden bg-white" ref="aboutSection">
        <div class="absolute inset-0"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 scale-up">
                <h2 class="text-3xl font-bold text-slate-900">Tentang Kami</h2>
                <p class="mt-4 text-lg text-slate-600">
                    Membangun Kepercayaan Melalui Kualitas
                </p>
            </div>

            <div class="grid gap-12 lg:grid-cols-2 items-center">
                <!-- Left Column - Images -->
                <div class="relative fade-in-left">
                    <!-- Main Image -->
                    <div class="relative h-[600px] w-full">
                        <img
                            src="/img/sample1.jpg"
                            alt="Modern Building"
                            class="w-full h-full object-cover rounded-lg shadow-xl"
                        />
                        <!-- Experience Badge -->
                        <div class="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg scale-up">
                            <div class="text-3xl font-bold">15+</div>
                            <div class="text-sm">Tahun Pengalaman</div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Content -->
                <div class="space-y-6 fade-in-right">
                    <div class="space-y-4">
                        <h2 class="text-4xl font-bold">
                            Solusi Konstruksi
                            <br />
                            <span class="text-amber-500">Profesional & Terpercaya</span>
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            Hanasta Gama adalah perusahaan konstruksi terkemuka dengan pengalaman lebih dari 15 tahun dalam industri. Kami mengkhususkan diri dalam memberikan layanan konstruksi berkualitas tinggi, desain yang inovatif, dan solusi yang berkelanjutan untuk setiap proyek.
                        </p>
                        <ul class="space-y-3 mt-6">
                            <li class="flex items-center space-x-3">
                                <span class="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full"></span>
                                <span class="text-gray-700">Tim Profesional Berpengalaman</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span class="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full"></span>
                                <span class="text-gray-700">Kualitas Konstruksi Terjamin</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span class="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full"></span>
                                <span class="text-gray-700">Solusi Inovatif & Berkelanjutan</span>
                            </li>
                        </ul>
                    </div>

                    <Link
                        href="#contact"
                        class="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-medium uppercase tracking-wider hover:bg-amber-600 transition rounded-full hover:shadow-lg group"
                    >
                        Hubungi Kami
                        <span class="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-32 h-32">
            <div class="w-full h-full border-t-2 border-r-2 border-amber-500/20"></div>
        </div>
        <div class="absolute bottom-0 left-0 w-32 h-32">
            <div class="w-full h-full border-b-2 border-l-2 border-amber-500/20"></div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-slate-50 py-20 overflow-hidden" ref="servicesSection">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center scale-up">
                <h2 class="text-3xl font-bold text-slate-900">Layanan Kami</h2>
                <p class="mt-4 text-lg text-slate-600">
                    Solusi lengkap untuk kebutuhan konstruksi Anda
                </p>
            </div>
            <div class="mt-12 grid gap-8 lg:grid-cols-4">
                <div
                    v-for="(service, index) in services"
                    :key="index"
                    :class="['p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rotate-in', service.bgColor]"
                    :style="{ transitionDelay: `${index * 150}ms` }"
                >
                    <div :class="['w-14 h-14 rounded-lg mb-6 flex items-center justify-center', service.iconColor]">
                        <component :is="service.icon" class="w-8 h-8" />
                    </div>
                    <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Fun Facts Section -->
    <section class="bg-gradient-to-r from-amber-500 to-amber-600 py-20 text-white relative overflow-hidden" ref="funFactsSection">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div class="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(stat, index) in stats"
                    :key="index"
                    class="group scale-up"
                    :style="{ transitionDelay: `${index * 150}ms` }"
                >
                    <div class="text-6xl font-bold mb-3 transition-all duration-300 group-hover:scale-110">
                        {{ stat.value }}+
                    </div>
                    <div class="text-lg font-medium">{{ stat.label }}</div>
                </div>
            </div>
        </div>

        <!-- Decorative Patterns -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10">
            <div class="absolute inset-0 bg-repeat" style="background-image: url('/img/pattern.svg');"></div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 overflow-hidden bg-white" ref="projectsSection">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center scale-up">
                <h2 class="text-3xl font-bold text-slate-900">Proyek Kami</h2>
                <p class="mt-4 text-lg text-slate-600">
                    Portfolio proyek yang telah kami selesaikan
                </p>
            </div>
            <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    :class="['group relative overflow-hidden rounded-xl shadow-lg', index % 2 === 0 ? 'fade-in-left' : 'fade-in-right']"
                    :style="{ transitionDelay: `${index * 150}ms` }"
                >
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                            <p class="text-gray-200">{{ project.description }}</p>
                            <button class="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-amber-600">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="bg-slate-50 py-20 overflow-hidden" ref="testimonialsSection">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center scale-up">
                <h2 class="text-3xl font-bold text-slate-900">Testimoni</h2>
                <p class="mt-4 text-lg text-slate-600">
                    Apa kata klien kami
                </p>
            </div>
            <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="testimonial.name"
                    class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 scale-up"
                    :style="{ transitionDelay: `${index * 150}ms` }"
                >
                    <div class="mb-6">
                        <div class="flex gap-1">
                            <span v-for="star in 5" :key="star" class="text-amber-500">★</span>
                        </div>
                    </div>
                    <p class="text-slate-600 italic mb-6">"{{ testimonial.content }}"</p>
                    <div class="flex items-center">
                        <img
                            :src="testimonial.image"
                            :alt="testimonial.name"
                            class="h-14 w-14 rounded-full object-cover border-2 border-amber-500"
                        />
                        <div class="ml-4">
                            <div class="font-semibold text-slate-900">
                                {{ testimonial.name }}
                            </div>
                            <div class="text-sm text-slate-500">
                                {{ testimonial.role }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Partners Section -->
    <section class="py-20 overflow-hidden bg-white" ref="partnersSection">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center scale-up">
                <h2 class="text-3xl font-bold text-slate-900">Partner Kami</h2>
                <p class="mt-4 text-lg text-slate-600">
                    Perusahaan yang telah bekerja sama dengan kami
                </p>
            </div>
            <div class="mt-12 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div
                    v-for="(partner, index) in partners"
                    :key="partner.name"
                    class="group flex items-center justify-center rotate-in"
                    :style="{ transitionDelay: `${index * 100}ms` }"
                >
                    <img
                        :src="partner.logo"
                        :alt="partner.name"
                        class="h-16 w-auto filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden" ref="ctaSection">
        <div class="absolute inset-0">
            <img
                src="/img/sample1.jpg"
                alt="Background"
                class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto space-y-8">
                <h2 class="text-5xl font-bold text-white scale-up">
                    Siap Memulai Proyek Anda?
                </h2>
                <p class="text-xl text-gray-300 fade-in-left" style="transition-delay: 200ms;">
                    Mari diskusikan ide proyek Anda dengan tim kami dan wujudkan impian Anda menjadi kenyataan.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href="#contact"
                        class="group inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg fade-in-left"
                        style="transition-delay: 300ms;"
                    >
                        Hubungi Kami
                        <span class="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                    <Link
                        href="#projects"
                        class="group inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black fade-in-right"
                        style="transition-delay: 300ms;"
                    >
                        Lihat Portfolio
                        <span class="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </div>

        <!-- Enhanced Decorative Elements -->
        <div class="absolute top-0 right-0 w-32 h-32">
            <div class="w-full h-full border-t-2 border-r-2 border-amber-500/30 animate-pulse"></div>
        </div>
        <div class="absolute bottom-0 left-0 w-32 h-32">
            <div class="w-full h-full border-b-2 border-l-2 border-amber-500/30 animate-pulse"></div>
        </div>
    </section>
</template>
