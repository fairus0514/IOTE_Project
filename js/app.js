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
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}

// ระบบ Hamburger Menu สำหรับมือถือ
function toggleMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "70px";
        navMenu.style.right = "20px";
        navMenu.style.backgroundColor = "white";
        navMenu.style.padding = "20px";
        navMenu.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        navMenu.style.borderRadius = "8px";
    } else {
        navMenu.style.display = "none";
    }
}

// สั่งให้ทำงานทันทีที่โหลดไฟล์นี้
loadComponents();