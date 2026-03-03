// ฟังก์ชันโหลด Header และ Footer มาแปะในหน้าเว็บ
async function loadComponents() {
    try {
        // ดึงไฟล์ header.html มาใส่ใน <div id="header-placeholder">
        const headerRes = await fetch('includes/header.html');
        const headerHtml = await headerRes.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        // ดึงไฟล์ footer.html มาใส่ใน <div id="footer-placeholder">
        const footerRes = await fetch('includes/footer.html');
        const footerHtml = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

    } catch (error) {
        console.error("Error loading components:", error);
    }
}

// ระบบ Dropdown สำหรับเมนู
// ควบคุม Dropdown (คำว่า Academic)
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// ควบคุมเมนูมือถือ (แฮมเบอร์เกอร์ คลุมครึ่งจอ)
function toggleMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// ถ้าคลิกพื้นที่อื่นบนจอ ให้หุบ Dropdown เก็บอัตโนมัติ
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.mobile-menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}
// ... (โค้ดด้านบนของคุณเหมือนเดิม) ...

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.mobile-menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}

// // COMMENT: บรรทัดนี้สำคัญมาก! สั่งให้ดึง Header/Footer ทันทีที่โหลดไฟล์ JS
loadComponents();