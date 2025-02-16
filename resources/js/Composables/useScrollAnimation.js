import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class visible ke elemen yang sedang diobservasi
                entry.target.classList.add('visible');

                // Tambahkan class visible ke semua child elements dengan class animasi
                const animatedChildren = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-up, .zoom-in, .rotate-in');
                animatedChildren.forEach(child => {
                    child.classList.add('visible');
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    });

    const observe = (el) => {
        if (!el) return;

        // Observe the section itself
        if (el.$el) {
            // If el is a Vue component ref, use $el
            observer.observe(el.$el);
        } else {
            // If el is a DOM element
            observer.observe(el);
        }

        // Also observe all elements with animation classes
        const elements = el.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-up, .zoom-in, .rotate-in');
        elements.forEach(element => {
            observer.observe(element);
        });
    };

    onMounted(() => {
        // Find all sections with ref="observe"
        const sections = document.querySelectorAll('[ref="observe"]');
        sections.forEach(section => {
            observe(section);
        });
    });

    onUnmounted(() => {
        observer.disconnect();
    });

    return { observe };
}
