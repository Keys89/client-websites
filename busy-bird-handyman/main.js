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
            desc: 'Busy Bird Handyman is licensed, insured, and certified in Wisconsin, tackling small home projects with professional, prompt, and easy-to-work-with service since 2018.',
            requests: ['Small drywall repairs', 'TV, mirror, and artwork mounting', 'Interior door and hardware repair', 'Grab bar and railing installation', 'Furniture assembly and repair', 'Storm door and mailbox installation']
        },
        mounting: {
            title: 'Mounting',
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
            desc: 'Mounting for TVs, mirrors, artwork, curtain rods, smoke detectors, shelving, and cabinets.',
            requests: ['TV mounting', 'Mirror and artwork mounting', 'Curtain rod and shelving mounting', 'Smoke detector and cabinet mounting']
        },
        safety: {
            title: 'Grab Bars & Railings',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
            desc: 'Grab bar and railing installation to make bathrooms and stairways safer.',
            requests: ['Grab bar installation', 'Railing installation', 'Shower door and rod installation']
        },
        carpentry: {
            title: 'Trim Carpentry',
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
            desc: 'Trim carpentry and small drywall repairs handled with care and attention to detail.',
            requests: ['Trim carpentry', 'Small drywall repairs']
        },
        doors: {
            title: 'Doors',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
            desc: 'Interior door and hardware repair and installation, plus storm door installation and repair.',
            requests: ['Interior door repair and installation', 'Door hardware repair', 'Storm door installation and repair']
        },
        assembly: {
            title: 'Furniture Assembly',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
            desc: 'Furniture assembly and repair done quickly and correctly.',
            requests: ['Furniture assembly', 'Furniture repair']
        },
        paint: {
            title: 'Paint',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&sepia=100',
            desc: 'Limited painting services to touch up and freshen a room.',
            requests: ['Interior touch-up painting']
        },
        exterior: {
            title: 'Exterior',
            image: 'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?q=80&w=2070&auto=format&fit=crop',
            desc: 'Mailbox installation, fence and gate repairs, and gutter cleaning to keep the outside of your home in shape.',
            requests: ['Mailbox installation', 'Fence and gate repairs', 'Gutter cleaning']
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
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd81bc32fe401b7c8f15_Photo-1.webp', quote: 'Brian helped me get a condo ready for sale. He replaced thresholds, repaired and caulked windowsills, replaced an outlet and an assortment of other items. His work is very professional and he was prompt and easy to work with.', name: 'Milwaukee Homeowner', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd8433cf86879aa132a5_Photo-5.webp', quote: 'Brian has done a lot of work for me and he does a great job.', name: 'Milwaukee Homeowner', stars: 5 },
        { image: 'https://cdn.prod.website-files.com/66dadfeb0e62f4e6b618e9d2/66debd82e6d567128c9ee4e9_Photo-4.webp', quote: 'Rated 5.0 stars on Yelp across 26 reviews from Milwaukee-area customers.', name: 'Yelp', stars: 5 }
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
