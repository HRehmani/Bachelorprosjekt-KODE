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

function selectRoom(btn) {
    document.querySelectorAll('.room-card').forEach(c => c.classList.remove('selected'));
    btn.parentElement.classList.add('selected');
    selectedRoomPrice = parseInt(btn.parentElement.dataset.price);
    selectedRoomName = btn.parentElement.querySelector('h4').textContent;
    document.getElementById('extras-section').style.display = 'block';
    updateTotal();
}

function prevImage(btn) {
    const container = btn.parentElement;
    const img = container.querySelector('.room-image');
    const card = container.parentElement;
    const index = parseInt(card.dataset.roomIndex);
    const images = roomImages[index];
    let current = images.findIndex(src => img.src.includes(src.split('/').pop()));
    let newIdx = (current - 1 + images.length) % images.length;
    img.src = images[newIdx];
}

function nextImage(btn) {
    const container = btn.parentElement;
    const img = container.querySelector('.room-image');
    const card = container.parentElement;
    const index = parseInt(card.dataset.roomIndex);
    const images = roomImages[index];
    let current = images.findIndex(src => img.src.includes(src.split('/').pop()));
    let newIdx = (current + 1) % images.length;
    img.src = images[newIdx];
}

function showRoomDetails(index) {
    const info = roomInfo[index];
    let html = `<h2>${info.title}</h2><p><strong>Størrelse:</strong> ${info.size}</p><ul>`;
    info.amenities.forEach(a => html += `<li>✓ ${a}</li>`);
    html += `</ul>`;
    document.getElementById('modalContent').innerHTML = html;
    document.getElementById('roomModal').style.display = 'flex';
}

function closeRoomModal() {
    document.getElementById('roomModal').style.display = 'none';
}

function updateTotal() {
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
        let html = '<strong>Valgt pakke:</strong><ul>';
        selectedExtras.forEach(item => html += `<li>${item}</li>`);
        html += '</ul>';
        document.getElementById('selected-items').innerHTML = html;
    }
}

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

// ====================== NY MODERNE HANDLEKURV ======================

function updateModernCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartCountEl = document.getElementById('cart-room-count');
    const bookBtn = document.getElementById('cart-book-btn');

    cartContainer.innerHTML = '';

    let itemsHTML = '';
    let total = 0;

    // Valgt rom
    if (selectedRoomPrice > 0) {
        itemsHTML += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${selectedRoomName}</div>
                    <small>Rom • per natt</small>
                </div>
                <div style="text-align:right">
                    <div class="cart-item-price">${selectedRoomPrice.toLocaleString('no-NO')} kr</div>
                    <button class="cart-item-remove" onclick="removeRoom()">✕</button>
                </div>
            </div>`;
        total += selectedRoomPrice;
    }

    // Valgte extras
    document.querySelectorAll('#extras-section input:checked').forEach(cb => {
        const price = parseInt(cb.dataset.price);
        const name = cb.dataset.name;
        total += price;

        itemsHTML += `
            <div class="cart-item">
                <div class="cart-item-name">${name}</div>
                <div style="text-align:right">
                    <div class="cart-item-price">+${price.toLocaleString('no-NO')} kr</div>
                    <button class="cart-item-remove" onclick="removeExtra(this)">✕</button>
                </div>
            </div>`;
    });

    cartContainer.innerHTML = itemsHTML || '<p style="color:#999; font-style:italic; text-align:center; padding:20px 0;">Ingen valg ennå</p>';

    cartTotalEl.textContent = total.toLocaleString('no-NO') + ' kr';
    cartCountEl.textContent = (selectedRoomPrice > 0 ? 1 : 0) + document.querySelectorAll('#extras-section input:checked').length;

    bookBtn.disabled = (selectedRoomPrice === 0);
    document.getElementById('modern-cart').style.display = 'block';
}

// Fjern rom
function removeRoom() {
    document.querySelectorAll('.room-card.selected').forEach(c => c.classList.remove('selected'));
    selectedRoomPrice = 0;
    selectedRoomName = '';
    document.getElementById('extras-section').style.display = 'none';
    updateTotal();        // oppdaterer den gamle summary også
    updateModernCart();
}

// Fjern enkelt extra
function removeExtra(btn) {
    const checkbox = btn.closest('.extra-card') ? btn.closest('.extra-card').querySelector('input') : null;
    if (checkbox) checkbox.checked = false;
    updateTotal();
    updateModernCart();
}

// Koble ny cart til eksisterende updateTotal
const originalUpdateTotal = updateTotal;
updateTotal = function() {
    originalUpdateTotal();
    updateModernCart();
};

// Initial kall
document.addEventListener('DOMContentLoaded', () => {
    updateModernCart();
});
// ====================== SLUTT NY HANDLEKURV ======================

// ====================== NY MODERNE BILDE LIGHTBOX ======================
let currentRoomIndex = 0;
let currentImageIndex = 0;

function openLightbox(imgElement) {
    const card = imgElement.closest('.room-card');
    currentRoomIndex = parseInt(card.dataset.roomIndex);
    const images = roomImages[currentRoomIndex];
    
    // Finn hvilket bilde som ble klikket
    currentImageIndex = images.findIndex(src => imgElement.src.includes(src.split('/').pop()));
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

// Klikk på bilde for å åpne lightbox (legger til event listeners)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.room-image').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(img));
    });

    // Tastatur-støtte (piler + Esc)
    document.addEventListener('keydown', e => {
        if (document.getElementById('lightbox').style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevLightboxImage();
            if (e.key === 'ArrowRight') nextLightboxImage();
        }
    });
});
// ====================== SLUTT LIGHTBOX ======================