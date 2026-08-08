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
            desc: 'Kenny G\'s Handyman Services shows up on time and gets the job done right, whether it\'s a single small fix or a longer list of repairs around the house.',
            requests: ['General home repairs', 'TV and wall mounting', 'Light fixture and outlet replacement', 'Outdoor faucet repair', 'Rental unit turnover prep', 'Multi-item to-do lists']
        },
        paint: {
            title: 'Paint',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&sepia=100',
            desc: 'Clean, careful interior painting and touch-ups that freshen up a room without the hassle of managing it yourself.',
            requests: ['Interior wall painting', 'Trim and touch-up painting', 'Cabinet painting']
        },
        carpentry: {
            title: 'Carpentry',
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
            desc: 'Trim, shelving, and general carpentry repairs handled with care and attention to detail.',
            requests: ['Trim and molding repair', 'Custom shelving', 'Deck and patio repair']
        },
        mounting: {
            title: 'TV Mounting',
            image: 'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?q=80&w=2070&auto=format&fit=crop',
            desc: 'Secure, clean TV and wall mounting so your setup looks great and stays put -- one of our most requested jobs.',
            requests: ['TV wall mounting', 'Wire concealment', 'Shelf and bracket mounting']
        },
        electric: {
            title: 'Electric',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
            desc: 'Light fixture and outlet replacement handled safely and cleanly, without the wait for a full electrician appointment.',
            requests: ['Light fixture replacement', 'Electrical outlet replacement', 'Switch and dimmer swaps']
        },
        appliance: {
            title: 'Appliance',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
            desc: 'Appliance hookups and small repairs so your kitchen and laundry room equipment works the way it should.',
            requests: ['Appliance hookups', 'Minor appliance repair', 'Preventative maintenance checks']
        },
        plumbing: {
            title: 'Plumbing',
            image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop',
            desc: 'Outdoor faucet and fixture repair to stop leaks and get water flowing where it should.',
            requests: ['Outdoor faucet repair', 'Fixture replacement', 'Minor leak repair']
        },
        maintenance: {
            title: 'Rental Turnover',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
            desc: 'We help Milwaukee landlords get units ready for new tenants quickly, from repairs to a full turnover punch list.',
            requests: ['Unit turnover repairs', 'Fixture and outlet replacement', 'General turnover punch lists']
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
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd81bc32fe401b7c8f15_Photo-1.webp', quote: 'Kenny G\'s Handyman Services is responsive and easy to work with, showing up to get small fixes and repairs done right.', name: 'Milwaukee Homeowner', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd8433cf86879aa132a5_Photo-5.webp', quote: 'Quick to respond and handled our TV mounting and a few other small repairs in one visit.', name: 'Local Homeowner', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd82e6d567128c9ee4e9_Photo-4.webp', quote: 'Helped get our rental unit turned around quickly with fixture and outlet repairs before new tenants moved in.', name: 'Milwaukee Landlord', stars: 5 }
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
