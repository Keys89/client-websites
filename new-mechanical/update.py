import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'Premium Plumbing Services | Expert Repair & Installation': 'Premium HVAC Services | Expert Repair & Installation',
    'Trusted Premium Plumbing Services. Expert repair, installation, and maintenance. Experience luxury service with guaranteed satisfaction.': 'Trusted Premium HVAC Services. Expert AC repair, furnace installation, and maintenance. Experience luxury climate control with guaranteed satisfaction.',
    'Elite<span>Plumbing</span>': 'Aura<span>Climate</span>',
    'Masterful Plumbing, <br>Premium Service.': 'Masterful Climate Control, <br>Premium Service.',
    'Experience the pinnacle of plumbing services. From emergency repairs to luxury installations, we deliver excellence.': 'Experience the pinnacle of HVAC services. From emergency repairs to luxury installations, we deliver ultimate comfort.',
    'Our Premium Services': 'Our Premium HVAC Services',
    "Comprehensive plumbing solutions tailored to your home's needs.": "Comprehensive climate solutions tailored to your home's needs.",
    '<h3>Plumbing Repair</h3>\n                    <p>Expert diagnostics and lasting repairs for leaks, pipes, and fixtures.</p>': '<h3>AC Repair & Install</h3>\n                    <p>Expert diagnostics and lasting cooling solutions for peak summer comfort.</p>',
    '<h3>Water Heaters</h3>\n                    <p>Tankless and traditional water heater installation and maintenance.</p>': '<h3>Heating Systems</h3>\n                    <p>High-efficiency furnace and heat pump installation and maintenance.</p>',
    '<h3>Drain Cleaning</h3>\n                    <p>Advanced hydrojetting and camera inspections for clear pipes.</p>': '<h3>Air Quality</h3>\n                    <p>Advanced purification and humidity control for a healthier home environment.</p>',
    '<h3>Premium Installations</h3>\n                    <p>Luxury fixtures and comprehensive plumbing remodels.</p>': '<h3>Smart Climate Control</h3>\n                    <p>Luxury smart thermostat integrations and comprehensive home zoning.</p>',
    'alt="Master Plumber"': 'alt="HVAC Technician"',
    'Craftsmanship You Can Trust.': 'Comfort You Can Trust.',
    'At Elite Plumbing, we believe that your home deserves the highest standard of care. With over two decades of experience, our master plumbers deliver unmatched quality, precision, and cleanliness.': 'At Aura Climate Control, we believe that your home deserves the highest standard of care. With over two decades of experience, our certified technicians deliver unmatched quality, precision, and cleanliness.',
    'ensure your plumbing systems work flawlessly and look impeccable.': 'ensure your HVAC systems work flawlessly and efficiently.',
    'Highly Trained Master Plumbers': 'NATE-Certified Technicians',
    'A glimpse into our recent luxury plumbing installations and remodels.': 'A glimpse into our recent luxury HVAC installations and upgrades.',
    'alt="Luxury Bathroom Remodel"': 'alt="Luxury Whole-Home HVAC"',
    '<span class="project-badge">Full Remodel</span>\n                        <h3>Luxury Bathroom</h3>\n                        <p>Complete pipe replacement and freestanding tub installation.</p>': '<span class="project-badge">Full System</span>\n                        <h3>Whole-Home Climate</h3>\n                        <p>Complete system replacement with multi-zone smart control.</p>',
    'alt="Modern Kitchen Upgrade"': 'alt="Smart Thermostat Install"',
    '<span class="project-badge">Kitchen</span>\n                        <h3>Modern Kitchen</h3>\n                        <p>High-end sink and matte black fixture installation.</p>': '<span class="project-badge">Smart Home</span>\n                        <h3>Smart Integration</h3>\n                        <p>High-end thermostat and zoning system installation.</p>',
    'alt="Tankless Water Heater"': 'alt="High-Efficiency Heat Pump"',
    '<span class="project-badge">Installation</span>\n                        <h3>Tankless Heater</h3>\n                        <p>Energy-efficient water heating system setup.</p>': '<span class="project-badge">Installation</span>\n                        <h3>Premium Heat Pump</h3>\n                        <p>Energy-efficient, ultra-quiet heating and cooling setup.</p>',
    'Find answers to common questions about our premium plumbing services.': 'Find answers to common questions about our premium HVAC services.',
    "Yes, we understand that plumbing emergencies don't wait for business hours. Our master plumbers are on call 24/7 to handle critical leaks, backups, and repairs.": "Yes, we understand that HVAC emergencies don't wait for business hours. Our technicians are on call 24/7 to handle critical heating or cooling failures.",
    'Absolutely. Every member of our team is fully licensed, insured, and has undergone rigorous background checks. We only employ top-tier professionals.': 'Absolutely. Every member of our team is fully licensed, insured, and NATE-certified. We only employ top-tier professionals.',
    'We work with all major premium brands including Kohler, Moen, Delta, and Brizo. If you have a specific luxury fixture in mind, we can source and install it perfectly.': 'We work with all major premium brands including Carrier, Trane, Lennox, and Daikin. If you have a specific luxury system in mind, we can source and install it perfectly.',
    'exceptional plumbing solutions.': 'exceptional climate solutions.',
    'upgrade your plumbing experience': "upgrade your home's comfort",
    'service@eliteplumbing.com': 'service@auraclimate.com',
    'Setting the standard for premium plumbing services. Unmatched quality, precision, and cleanliness for your home.': 'Setting the standard for premium HVAC services. Unmatched quality, precision, and cleanliness for your ultimate comfort.',
    'About Our Master Plumbers': 'About Our Technicians',
    'Elite Plumbing': 'Aura Climate Control',
    'plumbing_side': 'hvac_side'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('HTML updated successfully.')
