let selectedRoomPrice = 0;
let selectedRoomName = '';

const roomInfo = [
    {title:"Standard Double",size:"fra 20 m²",amenities:["Chromecast","TV","Skrivebord","Kjøleskap","Telefon","Vannkoker","Strykejern og strykebrett"]},
    {title:"Standard Single",size:"fra 18 m²",amenities:["Chromecast","TV","Skrivebord","Kjøleskap","Telefon","Hårføner","Vannkoker","Strykejern og strykebrett"]},
    {title:"Superior",size:"fra 20 m²",amenities:["Nespresso®-maskin","Morgenkåpe og tøfler","Chromecast","Dundyne og dunpute","Rikere utvalg toalettartikler","Sofa-/sittegruppe","Skrivebord","Kjøleskap","Vannkoker","Strykejern og strykebrett"]},
    {title:"Superior Twin",size:"fra 20 m²",amenities:["Nespresso®-maskin","Morgenkåpe og tøfler","Chromecast","Dundyne og dunpute","TV","Rikere utvalg toalettartikler","Sofa-/sittegruppe","Skrivebord","Kjøleskap","Hårføner","Vannkoker","Strykejern og strykebrett"]},
    {title:"Business",size:"fra 30 m²",amenities:["Nespresso®-maskin","Morgenkåpe og tøfler","Chromecast","Dundyne og dunpute","TV","Rikere utvalg toalettartikler","Sofa-/sittegruppe","Stue","Kjøleskap","Telefon","Hårføner","Vannkoker","Strykejern og strykebrett"]},
    {title:"Suite",size:"fra 66 m²",amenities:["Nespresso®-maskin","Morgenkåpe og tøfler","Chromecast","Dundyne og dunpute","TV","Rikere utvalg toalettartikler","Sofa-/sittegruppe","Stue","Skrivebord","Kjøleskap","Telefon","Hårføner","Vannkoker","Strykejern og strykebrett"]},
    {title:"Junior Suite",size:"fra 40 m²",amenities:["Nespresso®-maskin","Morgenkåpe og tøfler","Chromecast","Dundyne og dunpute","TV","Rikere utvalg toalettartikler","Sofa-/sittegruppe","Stue","Skrivebord","Kjøleskap","Telefon","Hårføner","Vannkoker","Strykejern og strykebrett"]},
    {title:"2-roms Leilighet",size:"fra 30–66 m²",amenities:["Nespresso®-maskin","Sofa-/sittegruppe","Stue","Spisestue","Skrivebord","Oppvaskmaskin","Kjøleskap","Komfyr","Telefon","Mikrobølgeovn","Hårføner","Vannkoker","Fullt utstyrt kjøkken","Strykejern og strykebrett"]}
];

const roomImages = [
    // 0 Standard Double
    [
        "bilder/Thon_Hotel_Slottsparken_Standard_Rom%201.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Rom%202.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Rom%203.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Rom%204.webp",
        "bilder/Thon_Hotel_Slottsparken_bad_Standard_Room%205.webp"
    ],
    // 1 Standard Single
    [
        "bilder/Thon_Hotel_Slottsparken_Standard_Room_Single%201.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Room_Single%202.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Room_Single_Bad%203.webp",
        "bilder/Thon_Hotel_Slottsparken_Standard_Room_Single_Bad%204.webp"
    ],
    // 2 Superior
    [
        "bilder/Thon_Hotel_Slottsparken_Superior_Room%201.webp",
        "bilder/Thon_Hotel_Slottsparken_Superior_Room%202.webp",
        "bilder/Thon_Hotel_Slottsparken_Superior_Room%203.webp",
        "bilder/thon-hotel-slottsparken-superior-room-9%202.webp"
    ],
    // 3 Superior Twin
    [
        "bilder/Thon_Hotel_Slottsparken_Superior_Rom_twin%201.webp"
    ],
    // 4 Business
    [
        "bilder/Thon_Hotel_Slottsparken_Business_Room%201.webp",
        "bilder/Thon_Hotel_Slottsparken_Business_Room%202.webp",
        "bilder/Thon_Hotel_Slottsparken_Business_Room%204.webp",
        "bilder/Thon_Hotel_Slottsparken_Business_Room%205.webp"
    ],
    // 5 Suite
    [
        "bilder/Thon_Hotel_Slottsparken_Suite%201.webp",
        "bilder/Thon_Hotel_Slottsparken_Suite%202.webp",
        "bilder/Thon_Hotel_Slottsparken_Suite%203.webp",
        "bilder/Thon_Hotel_Slottsparken_Suite%204.webp",
        "bilder/Thon_Hotel_Slottsparken_Suite%205.webp",
        "bilder/Thon_Hotel_Slottsparken_Bad_Suite%206.webp",
        "bilder/Thon_Hotel_Slottsparken_Bad_Suite%207.webp"
    ],
    // 6 Junior Suite
    [
        "bilder/thon-hotel-slottsparken-juniorsuite-1%201.webp",
        "bilder/thon-hotel-slottsparken-juniorsuite-2%202.webp",
        "bilder/thon-hotel-slottsparken-juniorsuite-3%203.webp",
        "bilder/thon-hotel-slottsparken-juniorsuite-4%204.webp",
        "bilder/thon-hotel-slottsparken-juniorsuite-5%205.webp",
        "bilder/thon-hotel-slottsparken-juniorsuite-6%206.webp"
    ],
    // 7 2-roms Leilighet
    [
        "bilder/thon-hotel-slottsparken-leilighet-64%201.webp"
    ]
];

// ====================== ROM-VALG ======================
function selectRoom(btn) {
    document.querySelectorAll('.room-card').forEach(c => c.classList.remove('selected'));
    btn.parentElement.classList.add('selected');
    selectedRoomPrice = parseInt(btn.parentElement.dataset.price);
    selectedRoomName = btn.parentElement.querySelector('h4').textContent;
    document.getElementById('extras-section').style.display = 'block';

    // Scroll til extras på mobil
    if (window.innerWidth < 768) {
        setTimeout(() => {
            document.getElementById('extras-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    updateTotal();
}

// ====================== BILDESLIDER ======================
function prevImage(btn) {
    const container = btn.parentElement;
    const img = container.querySelector('.room-image');
    const card = container.parentElement;
    const index = parseInt(card.dataset.roomIndex);
    const images = roomImages[index];
    let current = images.findIndex(src => img.src.includes(decodeURIComponent(src).split('/').pop()));
    if (current === -1) current = 0;
    let newIdx = (current - 1 + images.length) % images.length;
    img.src = images[newIdx];
}

function nextImage(btn) {
    const container = btn.parentElement;
    const img = container.querySelector('.room-image');
    const card = container.parentElement;
    const index = parseInt(card.dataset.roomIndex);
    const images = roomImages[index];
    let current = images.findIndex(src => img.src.includes(decodeURIComponent(src).split('/').pop()));
    if (current === -1) current = 0;
    let newIdx = (current + 1) % images.length;
    img.src = images[newIdx];
}

// ====================== ROMDETALJER MODAL ======================
function showRoomDetails(index) {
    const info = roomInfo[index];
    let html = `<h2>${info.title}</h2><p><strong>Størrelse:</strong> ${info.size}</p><ul>`;
    info.amenities.forEach(a => html += `<li>✓ ${a}</li>`);
    html += `</ul>`;
    document.getElementById('modalContent').innerHTML = html;
    document.getElementById('roomModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeRoomModal() {
    document.getElementById('roomModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Klikk utenfor modal for å lukke
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('roomModal').addEventListener('click', function(e) {
        if (e.target === this) closeRoomModal();
    });
});

// ====================== TOTALPRIS-OPPDATERING ======================
function _updateSummary() {
    let extrasTotal = 0;
    const selectedExtras = [];

    document.querySelectorAll('#extras-section input:checked').forEach(cb => {
        extrasTotal += parseInt(cb.dataset.price);
        selectedExtras.push(cb.dataset.name);
    });

    const grandTotal = selectedRoomPrice + extrasTotal;
    document.getElementById('total-price').textContent = grandTotal.toLocaleString('no-NO') + ' kr';

    if (selectedRoomPrice > 0) {
        document.getElementById('package-info').textContent = selectedRoomName;
        document.getElementById('book-btn').disabled = false;
        let html = '<strong>Valgt pakke:</strong><ul style="margin-top:10px; padding-left:4px; list-style:none;">';
        html += `<li style="padding:4px 0;">🛏 ${selectedRoomName}</li>`;
        selectedExtras.forEach(item => html += `<li style="padding:4px 0;">✓ ${item}</li>`);
        html += '</ul>';
        document.getElementById('selected-items').innerHTML = html;
    } else {
        document.getElementById('package-info').textContent = 'Velg rom for å starte pakken';
        document.getElementById('book-btn').disabled = true;
        document.getElementById('selected-items').innerHTML = '';
    }
}

// ====================== MODERNE HANDLEKURV ======================
function updateModernCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartCountEl = document.getElementById('cart-room-count');
    const bookBtn = document.getElementById('cart-book-btn');

    let itemsHTML = '';
    let total = 0;
    let itemCount = 0;

    if (selectedRoomPrice > 0) {
        itemsHTML += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${selectedRoomName}</div>
                    <small style="color:#94a3b8;font-size:0.82rem;">Rom • per natt</small>
                </div>
                <div style="text-align:right">
                    <div class="cart-item-price">${selectedRoomPrice.toLocaleString('no-NO')} kr</div>
                    <button class="cart-item-remove" onclick="removeRoom()">✕</button>
                </div>
            </div>`;
        total += selectedRoomPrice;
        itemCount++;
    }

    document.querySelectorAll('#extras-section input:checked').forEach(cb => {
        const price = parseInt(cb.dataset.price);
        const name = cb.dataset.name;
        total += price;
        itemCount++;

        itemsHTML += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${name}</div>
                </div>
                <div style="text-align:right">
                    <div class="cart-item-price">+${price.toLocaleString('no-NO')} kr</div>
                    <button class="cart-item-remove" onclick="removeExtraByName('${name}')">✕</button>
                </div>
            </div>`;
    });

    cartContainer.innerHTML = itemsHTML || '<p style="color:#999;font-style:italic;text-align:center;padding:20px 0;font-size:0.95rem;">Ingen valg ennå</p>';
    cartTotalEl.textContent = total.toLocaleString('no-NO') + ' kr';
    cartCountEl.textContent = itemCount;
    bookBtn.disabled = (selectedRoomPrice === 0);

    // Oppdater mobil floating bar
    updateMobileCartBar(total);
}

function updateMobileCartBar(total) {
    const bar = document.getElementById('mobile-cart-bar');
    const nameEl = document.getElementById('mobile-cart-name');
    const priceEl = document.getElementById('mobile-cart-price');

    if (selectedRoomPrice > 0) {
        bar.style.display = 'flex';
        nameEl.textContent = selectedRoomName;
        priceEl.textContent = total.toLocaleString('no-NO') + ' kr';
    } else {
        bar.style.display = 'none';
    }
}

function removeRoom() {
    document.querySelectorAll('.room-card.selected').forEach(c => c.classList.remove('selected'));
    selectedRoomPrice = 0;
    selectedRoomName = '';
    document.getElementById('extras-section').style.display = 'none';
    // Fjern alle extras
    document.querySelectorAll('#extras-section input:checked').forEach(cb => cb.checked = false);
    updateTotal();
}

function removeExtra(btn) {
    // Kompatibilitet med gammel kode
    const extraCard = btn.closest('.extra-card');
    if (extraCard) {
        const checkbox = extraCard.querySelector('input');
        if (checkbox) checkbox.checked = false;
    }
    updateTotal();
}

function removeExtraByName(name) {
    document.querySelectorAll('#extras-section input').forEach(cb => {
        if (cb.dataset.name === name) cb.checked = false;
    });
    updateTotal();
}

// ====================== VIRTUELT TOURS ======================
function openTour(url) {
    const modal = document.getElementById('tourModal');
    const frame = document.getElementById('tourFrame');
    frame.src = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeTour() {
    const modal = document.getElementById('tourModal');
    const frame = document.getElementById('tourFrame');
    frame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ====================== HAMBURGER-MENY (MOBIL) ======================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('header-close-btn');
    const header = document.getElementById('booking-bar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            header.classList.toggle('menu-open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            header.classList.remove('menu-open');
        });
    }

    // Skjul header ved scroll ned, vis ved scroll opp (kun mobil)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 767) return;
        if (header.classList.contains('menu-open')) return;

        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            header.classList.add('menu-hidden');
        } else {
            header.classList.remove('menu-hidden');
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
});

// ====================== LIGHTBOX ======================
let currentRoomIndex = 0;
let currentImageIndex = 0;

function openLightbox(imgElement) {
    const card = imgElement.closest('.room-card');
    currentRoomIndex = parseInt(card.dataset.roomIndex);
    const images = roomImages[currentRoomIndex];

    currentImageIndex = images.findIndex(src =>
        imgElement.src.includes(decodeURIComponent(src).split('/').pop())
    );
    if (currentImageIndex === -1) currentImageIndex = 0;

    document.getElementById('lightbox').style.display = 'flex';
    showLightboxImage();
    document.body.style.overflow = 'hidden';
}

function showLightboxImage() {
    const images = roomImages[currentRoomIndex];
    const imgEl = document.getElementById('lightbox-image');
    imgEl.src = images[currentImageIndex];
    document.getElementById('lightbox-counter').textContent =
        `${currentImageIndex + 1} / ${images.length}`;
}

function prevLightboxImage() {
    const images = roomImages[currentRoomIndex];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showLightboxImage();
}

function nextLightboxImage() {
    const images = roomImages[currentRoomIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showLightboxImage();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ====================== KOBLE ALT SAMMEN ======================

// Overskriv updateTotal med kombinert versjon
function updateTotal() {
    _updateSummary();
    updateModernCart();
}

// DOMContentLoaded-oppsett
document.addEventListener('DOMContentLoaded', () => {
    updateModernCart();

    // Klikk på bilde for å åpne lightbox
    document.querySelectorAll('.room-image').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(img));
    });

    // Tastatur-støtte for lightbox
    document.addEventListener('keydown', e => {
        if (document.getElementById('lightbox').style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevLightboxImage();
            if (e.key === 'ArrowRight') nextLightboxImage();
        }
        if (document.getElementById('roomModal').style.display === 'flex') {
            if (e.key === 'Escape') closeRoomModal();
        }
    });

    // Swipe-støtte for lightbox (touch)
    let touchStartX = 0;
    const lightbox = document.getElementById('lightbox');

    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextLightboxImage();
            else prevLightboxImage();
        }
    }, { passive: true });
});
