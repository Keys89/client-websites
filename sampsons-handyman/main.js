document.addEventListener('DOMContentLoaded', function () {

    // Footer year
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Header scroll state
    var header = document.getElementById('header');
    function onScroll() {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Mobile menu toggle
    var mobileToggle = document.getElementById('mobileMenuToggle');
    var mobileNav = document.getElementById('mobileNav');
    mobileToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });

    // Services tab switcher
    var services = {
        handyman: {
            title: 'Handyman',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop',
            desc: 'Dwayne Sampson brings 8+ years of construction experience and a union sheet metal apprenticeship background to every job, with punctual, clear communication from start to finish.',
            requests: ['General home repairs and maintenance', 'Basement finishing and drywall', 'Ceiling fan installation', 'TV mounting', 'Furniture assembly', 'Fence installation']
        },
        paint: {
            title: 'Paint',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&sepia=100',
            desc: 'Interior and exterior painting with a smooth, clean, high-end finish and detail-oriented prep work.',
            requests: ['Interior painting', 'Exterior painting', 'Trim and detail painting']
        },
        remodel: {
            title: 'Remodeling',
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
            desc: 'Kitchen and bathroom remodeling along with basement finishing and drywall, handled with thorough, detail-oriented craftsmanship.',
            requests: ['Kitchen remodeling', 'Bathroom remodeling', 'Basement finishing', 'Drywall installation and repair']
        },
        flooring: {
            title: 'Flooring',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
            desc: 'Flooring installation and repair to refresh any room in your home.',
            requests: ['Flooring installation', 'Flooring repair']
        },
        fence: {
            title: 'Fence',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
            desc: 'Fence installation to add security and curb appeal to your property.',
            requests: ['Fence installation']
        },
        ceilingfan: {
            title: 'Ceiling Fans',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
            desc: 'Ceiling fan installation done quickly and safely.',
            requests: ['Ceiling fan installation']
        },
        mounting: {
            title: 'TV Mounting',
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
            desc: 'Secure TV mounting so your setup looks clean and stays put.',
            requests: ['TV wall mounting']
        },
        assembly: {
            title: 'Furniture Assembly',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&sepia=30',
            desc: 'Furniture assembly done quickly and correctly, so you can skip the instructions.',
            requests: ['Furniture assembly']
        }
    };

    var tabs = document.querySelectorAll('.service-tab');
    var panelImg = document.getElementById('servicePanelImg');
    var panelTitle = document.getElementById('servicePanelTitle');
    var panelDesc = document.getElementById('servicePanelDesc');
    var panelRequests = document.getElementById('servicePanelRequests');
    var panelText = document.getElementById('servicePanelText');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            if (tab.classList.contains('active')) return;
            tabs.forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            var data = services[tab.dataset.service];
            panelText.style.opacity = '0';
            setTimeout(function () {
                panelImg.src = data.image;
                panelTitle.textContent = data.title;
                panelDesc.textContent = data.desc;
                panelRequests.innerHTML = data.requests.map(function (r) { return '<li>' + r + '</li>'; }).join('');
                panelText.style.opacity = '1';
            }, 200);
        });
    });
    panelText.style.transition = 'opacity 0.2s ease';

    // Testimonials carousel
    var reviews = [
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd81bc32fe401b7c8f15_Photo-1.webp', quote: 'His communication was prompt, and he was adaptive to my schedule. He was quick and got in and out in under an hour.', name: 'Kenya Green', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd8433cf86879aa132a5_Photo-5.webp', quote: 'Professional, detail-oriented, and incredibly thorough. The final finish looks smooth, clean, and high-end.', name: 'Alexia Jae', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd82e6d567128c9ee4e9_Photo-4.webp', quote: 'Each time he communicated well, was quick & educational.', name: 'Adrianna Williams', stars: 5 }
    ];
    var reviewIndex = 0;
    var reviewImage = document.getElementById('reviewImage');
    var reviewQuote = document.getElementById('reviewQuote');
    var reviewName = document.getElementById('reviewName');
    var reviewStars = document.getElementById('reviewStars');
    var reviewText = document.getElementById('reviewText');

    function starSvg() {
        return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z"></path></svg>';
    }
    function renderReview() {
        var r = reviews[reviewIndex];
        reviewText.style.transition = 'opacity 0.3s ease';
        reviewText.style.opacity = '0';
        setTimeout(function () {
            reviewImage.style.backgroundImage = "url('" + r.image + "')";
            reviewQuote.textContent = r.quote;
            reviewName.textContent = r.name;
            reviewStars.innerHTML = starSvg().repeat(r.stars);
            reviewText.style.opacity = '1';
        }, 200);
    }
    document.getElementById('reviewNext').addEventListener('click', function () {
        reviewIndex = (reviewIndex + 1) % reviews.length;
        renderReview();
    });
    document.getElementById('reviewPrev').addEventListener('click', function () {
        reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        renderReview();
    });
    renderReview();

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(function (item) {
        var btn = item.querySelector('.faq-question-btn');
        var pane = item.querySelector('.faq-answer-pane');
        var chevron = item.querySelector('.faq-chevron');
        btn.addEventListener('click', function () {
            var isOpen = pane.classList.contains('open');
            document.querySelectorAll('.faq-answer-pane.open').forEach(function (p) { p.classList.remove('open'); });
            document.querySelectorAll('.faq-chevron.open').forEach(function (c) { c.classList.remove('open'); });
            document.querySelectorAll('.faq-question-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
            if (!isOpen) {
                pane.classList.add('open');
                chevron.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Contact form submit
    var contactForm = document.getElementById('contactForm');
    var contactThanks = document.getElementById('contactThanks');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        contactForm.style.display = 'none';
        contactThanks.classList.add('visible');
    });
    document.getElementById('contactReset').addEventListener('click', function () {
        contactForm.reset();
        contactForm.style.display = 'block';
        contactThanks.classList.remove('visible');
    });

    // Scroll reveal
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });
    document.querySelectorAll('.reveal-section').forEach(function (el) { observer.observe(el); });

});
