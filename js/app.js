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


/* admission part */
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ระบบ Header/Footer ชั่วคราว (ถ้าคุณมีไฟล์แยกแล้ว ข้ามหรือลบส่วนนี้ได้) ---
    const headerHTML = `
        <header style="border-bottom: 2px solid black; padding: 20px; display: flex; justify-content: space-between;">
            <div style="font-weight: 900; font-size: 1.5rem;">IoT KMITL</div>
            <nav>
                <a href="index.html" style="margin-right: 15px; color: black; text-decoration: none; font-weight: bold;">HOME</a>
                <a href="admission.html" style="color: #E04500; text-decoration: none; font-weight: bold;">ADMISSION</a>
            </nav>
        </header>
    `;
    const footerHTML = `
        <footer style="border-top: 2px solid black; padding: 20px; text-align: center; margin-top: auto;">
            <p>© 2026 IoT & Information Engineering, KMITL</p>
        </footer>
    `;

    if(document.getElementById("header-placeholder")) {
        document.getElementById("header-placeholder").innerHTML = headerHTML;
    }
    if(document.getElementById("footer-placeholder")) {
        document.getElementById("footer-placeholder").innerHTML = footerHTML;
    }

    // --- 2. ระบบ Accordion สำหรับ TCAS ---
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("show-border");
            } else {
                panel.style.maxHeight = panel.scrollHeight + 40 + "px";
                panel.classList.add("show-border");
            } 
        });
    }
});

// --- 3. ระบบ Tab หลักสูตร + เปลี่ยนราคา (Dynamic Pricing) ---
// สังเกตว่าฟังก์ชันนี้รับ parameter ค่าธรรมเนียม (fee) และรายละเอียด (desc) มาด้วย
function openProgram(evt, programName, fee, desc) {
    // 3.1 ซ่อนเนื้อหาหลักสูตรทั้งหมด
    let programContents = document.getElementsByClassName("program-content");
    for (let i = 0; i < programContents.length; i++) {
        programContents[i].style.display = "none";
    }

    // 3.2 ลบสีดำ (สถานะ active) ออกจากปุ่มทั้งหมด
    let tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }

    // 3.3 แสดงเนื้อหาหลักสูตรที่ถูกคลิก และเปลี่ยนปุ่มให้เป็นสีดำ
    document.getElementById(programName).style.display = "block";
    evt.currentTarget.className += " active";

    // 3.4 ✨ ไฮไลต์สำคัญ: อัปเดตราคาในกล่อง INVESTMENT ✨
    const feeElement = document.getElementById("tuition-fee");
    const descElement = document.getElementById("tuition-desc");
    
    // ทำแอนิเมชันให้ตัวเลขกะพริบนิดนึงตอนเปลี่ยนราคา
    feeElement.style.opacity = 0; 
    setTimeout(() => {
        feeElement.innerText = fee;
        descElement.innerHTML = desc;
        feeElement.style.opacity = 1;
        // เปลี่ยนสีตัวเลขเล็กน้อยตอนเป็นสองปริญญาเพื่อความโดดเด่น
        if(fee === "฿45,000") {
            feeElement.style.color = "#FFD700"; // สีทอง
        } else {
            feeElement.style.color = "#fff"; // สีขาวปกติ
        }
    }, 200);

    // เลื่อนหน้าจอไปที่ช่องราคาแบบอัตโนมัติ (Optional: ลบออกได้ถ้าไม่อยากให้มันเลื่อน)
    // document.getElementById("tuition-fee").scrollIntoView({ behavior: 'smooth', block: 'center' });
}