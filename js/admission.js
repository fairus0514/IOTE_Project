document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ระบบดึง Header และ Footer (จำลองการทำงาน)
    // ในโปรเจกต์จริง คุณอาจจะต้อง fetch('header.html') แต่เพื่อการทดสอบ ลองใส่เป็น HTML เข้าไปตรงๆ ก่อนได้
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

    document.getElementById("header-placeholder").innerHTML = headerHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // 2. ระบบ Accordion สำหรับหน้า Admission
    const acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            // ค้นหา div คลาส panel ที่อยู่ติดกับปุ่มที่กด
            let panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("show-border");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("show-border");
            } 
        });
    }
});