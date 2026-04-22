// ฐานข้อมูลคะแนนจริงราย Business Unit ตามตาราง (อัปเดตเพิ่มคะแนน Compliance และรองรับ 'n/a')
const BU_DATA = {
    "Advance AQ": { g1_1: 5, g1_2: 0, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 4, g3_1: 5, g3_2: 5, g4_1: 8, g4_2: 5, extra_score: 1, c1_1: 16, c1_2: 12, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 'n/a', c3_3: 10, c3_4: 3, c4_1: 'n/a', c4_2: 5, c4_3: 10 },
    "AHBG": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 3, g3_1: 5, g3_2: 0, g4_1: 8, g4_2: 5, extra_score: 3, c1_1: 12, c1_2: 8, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 'n/a', c3_3: 10, c3_4: 5, c4_1: 'n/a', c4_2: 5, c4_3: 0 },
    "AERA1": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 10, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 16, c1_2: 12, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 0 },
    "Ascend": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 10, g4_1: 20, g4_2: 5, extra_score: 3, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 0 },
    "All Now Group (ANG)": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 12, g4_1: 20, g4_2: 5, extra_score: 6, c1_1: 12, c1_2: 12, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 10 },
    "Altervim": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 5, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 5, extra_score: 0, c1_1: 12, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "KPI-KSP": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 8, g4_1: 20, g4_2: 5, extra_score: 1, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 'n/a', c3_3: 10, c3_4: 5, c4_1: 'n/a', c4_2: 5, c4_3: 6 },
    "CP Consumer": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 3, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 8, c1_2: 8, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 'n/a', c3_3: 10, c3_4: 3, c4_1: 'n/a', c4_2: 5, c4_3: 0 },
    "CHIATAI": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 4, g3_2: 9, g4_1: 20, g4_2: 5, extra_score: 6, c1_1: 20, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "CPI (CPTG)": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 10, g2_2: 10, g3_1: 10, g3_2: 5, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "Crop": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 10, g2_2: 10, g3_1: 10, g3_2: 5, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "CPE": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 10, g2_2: 10, g3_1: 10, g3_2: 5, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "CPLAND": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 0, g2_2: 0, g3_1: 0, g3_2: 5, g4_1: 0, g4_2: 0, extra_score: 1, c1_1: 8, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 4, c3_4: 3, c4_1: 5, c4_2: 5, c4_3: 0 },
    "CPLI": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 10 },
    "CP Medical Center (CPMC)": { g1_1: 0, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 10, g4_1: 0, g4_2: 5, extra_score: 4, c1_1: 8, c1_2: 8, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "CPPC": { g1_1: 0, g1_2: 0, g1_3: 3, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 6, g3_2: 5, g4_1: 5, g4_2: 5, extra_score: 4, c1_1: 12, c1_2: 20, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "ECI": { g1_1: 5, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 2, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 5, extra_score: 2, c1_1: 8, c1_2: 12, c2_1: 3, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 2, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "Freewill": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 10, g4_2: 5, extra_score: 6, c1_1: 12, c1_2: 12, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 6, c3_4: 3, c4_1: 5, c4_2: 5, c4_3: 0 },
    "PCG": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 15, g4_2: 5, extra_score: 2, c1_1: 12, c1_2: 12, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 0 },
    "SLF": { g1_1: 5, g1_2: 5, g1_3: 0, g1_4: 5, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 5, g4_1: 15, g4_2: 5, extra_score: 3, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 10 },
    "Food Chain & Coffee House": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 3, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 12, c2_1: 4, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 3, c4_1: 5, c4_2: 5, c4_3: 6 },
    "Thana Digital Life (TDL)": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 5, extra_score: 2, c1_1: 8, c1_2: 12, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "True Leasing (TLS)": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 10, g4_1: 20, g4_2: 5, extra_score: 3, c1_1: 20, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "True Properties (TP)": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 10, g4_1: 20, g4_2: 5, extra_score: 3, c1_1: 20, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "Wire & Wireless": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 0, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 2, c1_1: 16, c1_2: 16, c2_1: 5, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "CPFC": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 1, c1_1: 20, c1_2: 8, c2_1: 4, c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 0 },
    "CP Bangladesh (CPB)": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 10, g2_2: 5, g3_1: 5, g3_2: 5, g4_1: 0, g4_2: 0, extra_score: 2, c1_1: 8, c1_2: 8, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 5, c3_3: 2, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 0 },
    "CP Myanmar (MCPL)": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 0, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 0, extra_score: 10, c1_1: 8, c1_2: 12, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 0, c3_3: 6, c3_4: 5, c4_1: 0, c4_2: 5, c4_3: 0 },
    "CP Pakistan": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 0, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 0, extra_score: 5, c1_1: 4, c1_2: 12, c2_1: 'n/a', c2_2: 'n/a', c3_1: 10, c3_2: 0, c3_3: 10, c3_4: 5, c4_1: 0, c4_2: 5, c4_3: 0 },
    "CPF": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 5, g3_1: 10, g3_2: 12, g4_1: 20, g4_2: 5, extra_score: 6, c1_1: 20, c1_2: 16, c2_1: 5, c2_2: 'n/a', c3_1: 'n/a', c3_2: 'n/a', c3_3: 'n/a', c3_4: 3, c4_1: 'n/a', c4_2: 5, c4_3: 'n/a' },
    "CPALL": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 7, c1_1: 20, c1_2: 20, c2_1: 5, c2_2: 'n/a', c3_1: 'n/a', c3_2: 'n/a', c3_3: 'n/a', c3_4: 5, c4_1: 'n/a', c4_2: 5, c4_3: 'n/a' },
    "TRUE": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 8, g3_2: 5, g4_1: 20, g4_2: 5, extra_score: 2, c1_1: 20, c1_2: 20, c2_1: 4, c2_2: 'n/a', c3_1: 'n/a', c3_2: 'n/a', c3_3: 'n/a', c3_4: 3, c4_1: 'n/a', c4_2: 3, c4_3: 'n/a' },
    "CP AXTRA": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 20, c2_1: 5, c2_2: 'n/a', c3_1: 'n/a', c3_2: 'n/a', c3_3: 'n/a', c3_4: 5, c4_1: 'n/a', c4_2: 5, c4_3: 'n/a' }
};

// ข้อมูลโครงสร้างเกณฑ์การประเมิน
const CRITERIA_DATA = {
    governance: {
        title: "Governance",
        weight: 60,
        theme: "gov",
        iconId: "building-2",
        categories: [
            {
                id: "g1", title: "1. Board Governance (25%)", icon: "building-2",
                items: [
                    { id: "g1_1", title: "1.1 Attendance of Governing Body", max: 5 },
                    { id: "g1_2", title: "1.2 Circulation of Meeting Agendas...", max: 5 },
                    { id: "g1_3", title: "1.3 Implementation of Resolutions", max: 10 },
                    { id: "g1_4", title: "1.4 Performance Evaluations", max: 5 },
                ]
            },
            {
                id: "g2", title: "2. Governance Implementation (25%)", icon: "target",
                items: [
                    { id: "g2_1", title: "2.1 Completion of CG Plan", max: 15 },
                    { id: "g2_2", title: "2.2 Anti-Corruption Recommendations", max: 10 },
                ]
            },
            {
                id: "g3", title: "3. Ethical Culture (25%)", icon: "heart-handshake",
                items: [
                    { id: "g3_1", title: "3.1 Promoting Ethical Culture", max: 10 },
                    { id: "g3_2", title: "3.2 Employees Governance Training", max: 15 },
                ]
            },
            {
                id: "g4", title: "4. Transparency & Disclosure (25%)", icon: "search",
                items: [
                    { id: "g4_1", title: "4.1 CG Page on Company Website", max: 20 },
                    { id: "g4_2", title: "4.2 Governance Report to the Group", max: 5 },
                ]
            },
            {
                id: "g5", title: "Extra Points (Engagement Bonus)", icon: "star", isExtra: true,
                items: [
                    { id: "extra_score", title: "CG Sustainability Synergy Forum", max: 10 }
                ]
            }
        ]
    },
    compliance: {
        title: "Compliance",
        weight: 40,
        theme: "comp",
        iconId: "shield-check",
        categories: [
            {
                id: "c1", title: "1. Maturity Level (40%)", icon: "shield-check",
                items: [
                    { id: "c1_1", title: "1.1 Compliance Maturity Level", max: 20 },
                    { id: "c1_2", title: "1.2 Whistleblowing Maturity Level", max: 20 },
                ]
            },
            {
                id: "c2", title: "2. Activities Attendance (10%)", icon: "users",
                items: [
                    { id: "c2_1", title: "2.1 Compliance Network Meeting", max: 5 },
                    { id: "c2_2", title: "2.2 Procedure Training", max: 5 },
                ]
            },
            {
                id: "c3", title: "3. Compliance Implementation (30%)", icon: "file-text",
                items: [
                    { id: "c3_1", title: "3.1 Regulatory Compliance Universe", max: 10 },
                    { id: "c3_2", title: "3.2 Non-Compliance Incident Report", max: 5 },
                    { id: "c3_3", title: "3.3 CM Training", max: 10 },
                    { id: "c3_4", title: "3.4 Compliance Maturity Assessment", max: 5 },
                ]
            },
            {
                id: "c4", title: "4. Whistleblowing Implementation (20%)", icon: "megaphone",
                items: [
                    { id: "c4_1", title: "4.1 Whistleblowing Statistics Report", max: 5 },
                    { id: "c4_2", title: "4.2 Whistleblowing Maturity Assessment", max: 5 },
                    { id: "c4_3", title: "4.3 Whistleblowing Communication", max: 10 },
                ]
            }
        ]
    }
};

// สถานะคะแนน (ดึงค่าตั้งต้นไว้ให้เหมือนพิมพ์ 0)
let scores = {
    g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0,
    g2_1: 0, g2_2: 0,
    g3_1: 0, g3_2: 0,
    g4_1: 0, g4_2: 0,
    extra_score: 0,
    c1_1: 15, c1_2: 15,
    c2_1: 4, c2_2: 4,
    c3_1: 8, c3_2: 4, c3_3: 8, c3_4: 4,
    c4_1: 4, c4_2: 4, c4_3: 8
};

// ฟังก์ชันโหลดข้อมูลเข้า Dropdown
function initBUDropdown() {
    const select = document.getElementById('bu-selector');
    Object.keys(BU_DATA).forEach(bu => {
        const opt = document.createElement('option');
        opt.value = bu;
        opt.innerText = bu;
        select.appendChild(opt);
    });
}

// เมื่อเลือก BU จาก Dropdown ให้โหลดคะแนนลง slider อัตโนมัติ
function loadBUData() {
    const buSelect = document.getElementById('bu-selector');
    const buName = buSelect.value;
    
    if(buName && BU_DATA[buName]) {
        const data = BU_DATA[buName];
        Object.keys(data).forEach(key => scores[key] = data[key]);
    } else {
        // หากไม่เลือก BU ให้รีเซ็ตคะแนนเป็น 0
        scores = {
            g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 0, g2_2: 0, g3_1: 0, g3_2: 0, g4_1: 0, g4_2: 0, extra_score: 0,
            c1_1: 0, c1_2: 0, c2_1: 0, c2_2: 0, c3_1: 0, c3_2: 0, c3_3: 0, c3_4: 0, c4_1: 0, c4_2: 0, c4_3: 0
        };
    }
    
    // รีโหลดหน้าต่างรายละเอียดใหม่ทั้งหมดเพื่อให้แสดงผล N/A ถูกต้อง
    const sectionsContainer = document.getElementById('detail-sections');
    sectionsContainer.innerHTML = generateSectionHTML(CRITERIA_DATA.governance) + generateSectionHTML(CRITERIA_DATA.compliance);
    
    calculateAndUpdate();
    lucide.createIcons();
}

// ฟังก์ชันสร้าง UI ของฝั่งซ้ายและขวา
function generateSectionHTML(sectionData) {
    let html = `
        <div class="section-card section-${sectionData.theme}">
            <div class="section-header">
                <h2 class="section-title">
                    <i data-lucide="${sectionData.iconId}"></i>
                    ${sectionData.title} (${sectionData.weight}%)
                </h2>
                <div class="text-right">
                    <div class="section-raw-score">
                        <span id="${sectionData.title.toLowerCase()}-raw-score">0</span><span class="raw-percent">%</span>
                    </div>
                    <div class="raw-label">Raw Score</div>
                </div>
            </div>
            <div class="categories">
    `;

    sectionData.categories.forEach(category => {
        const extraClass = category.isExtra ? "category-extra" : "";
        const sliderClass = category.isExtra ? "slider-extra" : `slider-${sectionData.theme}`;
        
        html += `
            <div class="category-card ${extraClass}">
                <h3 class="category-title">
                    <i data-lucide="${category.icon}" style="width: 16px; height: 16px;"></i>
                    ${category.title}
                </h3>
                <div class="item-list">
        `;

        category.items.forEach(item => {
            let valueDisplay = scores[item.id];
            let isNA = valueDisplay === 'n/a';
            let sliderVal = isNA ? 0 : (valueDisplay || 0);
            let disabledAttr = isNA ? 'disabled' : '';

            html += `
                <div class="item-row">
                    <div class="item-name">${item.title}</div>
                    <div>
                        <input 
                            type="range" 
                            id="slider-${item.id}"
                            min="0" 
                            max="${item.max}" 
                            step="1"
                            value="${sliderVal}"
                            oninput="handleScoreChange('${item.id}', this.value)"
                            class="${sliderClass}"
                            ${disabledAttr}
                        />
                    </div>
                    <div class="text-right">
                        <span class="item-score-box" style="${isNA ? 'background: var(--gray-200); color: var(--gray-500);' : ''}">
                            ${isNA ? 'N/A' : `<span id="val-${item.id}">${sliderVal}</span> / ${item.max}`}
                        </span>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    html += `</div></div>`;
    return html;
}

// ฟังก์ชันคำนวณและอัปเดตหน้าจอ (อัปเดตเรื่องทศนิยม 2 ตำแหน่งแล้ว)
function calculateAndUpdate() {
    const currentBU = document.getElementById('bu-selector').value;
    let govBaseTotal = 0;
    let govMax = 0;
    let extraTotal = scores['extra_score'] || 0;

    CRITERIA_DATA.governance.categories.forEach(cat => {
        cat.items.forEach(item => {
            if(item.id !== 'extra_score' && scores[item.id] !== 'n/a') {
                govBaseTotal += Number(scores[item.id]) || 0;
                govMax += item.max;
            }
        });
    });

    // ปรับสูตรให้รองรับกรณีฐานคะแนนไม่ถึง 100
    let govPercent = govMax > 0 ? (govBaseTotal / govMax) * 100 : 0;
    let govTotalWithExtra = govPercent + extraTotal;
    let finalGovRaw = Math.min(100, govTotalWithExtra);

    // แจ้งเตือนผู้ใช้งานหากคะแนนถูก Cap (ยกเว้น CPLI และ CP AXTRA)
    const capIndicator = document.getElementById('cap-indicator');
    if(govTotalWithExtra > 100 && currentBU !== "CPLI" && currentBU !== "CP AXTRA") {
        capIndicator.innerText = `(Capped at 100%)`;
    } else {
        capIndicator.innerText = ``;
    }

    let compTotal = 0;
    let compMax = 0;
    CRITERIA_DATA.compliance.categories.forEach(cat => {
        cat.items.forEach(item => {
            // คิดคะแนนและฐานคะแนนเฉพาะข้อที่ไม่ใช่ 'n/a'
            if(scores[item.id] !== 'n/a') {
                compTotal += Number(scores[item.id]) || 0;
                compMax += item.max;
            }
        });
    });

    // คำนวณเปอร์เซ็นต์ของ Compliance จากฐานคะแนนจริงที่คิดได้
    let compPercent = compMax > 0 ? (compTotal / compMax) * 100 : 0;

    const weightedGov = finalGovRaw * 0.6;
    const weightedComp = compPercent * 0.4;
    const finalScore = weightedGov + weightedComp;

    // บังคับให้แสดงทศนิยม 2 ตำแหน่งสำหรับทุกตัวเลข
    const displayGovWeighted = weightedGov.toFixed(2);
    const displayCompWeighted = weightedComp.toFixed(2);
    const displayFinalScore = finalScore.toFixed(2);
    const displayGovRaw = finalGovRaw.toFixed(2);
    const displayCompRaw = compPercent.toFixed(2);

    // อัปเดต Summary (ตัวเลข)
    document.getElementById('gov-weighted-score').innerText = displayGovWeighted;
    document.getElementById('comp-weighted-score').innerText = displayCompWeighted;
    document.getElementById('final-score').innerText = displayFinalScore;

    // อัปเดต Progress Bars
    document.getElementById('gov-progress-text').innerText = displayGovRaw + '%';
    document.getElementById('gov-progress-bar').style.width = Math.min(100, finalGovRaw) + '%';
    
    document.getElementById('comp-progress-text').innerText = displayCompRaw + '%';
    document.getElementById('comp-progress-bar').style.width = Math.min(100, compPercent) + '%';

    // อัปเดต Raw Score ตรงหัวข้อใหญ่
    document.getElementById('governance-raw-score').innerText = displayGovRaw;
    document.getElementById('compliance-raw-score').innerText = displayCompRaw;
}

// Event listener สำหรับเมื่อผู้ใช้เลื่อน Slider เองด้วยมือ
function handleScoreChange(id, value) {
    if(scores[id] !== 'n/a') {
        scores[id] = Number(value);
        document.getElementById(`val-${id}`).innerText = scores[id];
        
        // หากเลื่อนมือ ให้รีเซ็ต Dropdown เป็นค่าว่างเพราะไม่ได้เป็นคะแนนที่ตรงกับข้อมูลดั้งเดิม 100% อีกต่อไป
        document.getElementById('bu-selector').value = ""; 
        
        calculateAndUpdate();
    }
}

// เริ่มต้นการทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    // สร้าง HTML 
    const sectionsContainer = document.getElementById('detail-sections');
    sectionsContainer.innerHTML = generateSectionHTML(CRITERIA_DATA.governance) + generateSectionHTML(CRITERIA_DATA.compliance);

    initBUDropdown();
    calculateAndUpdate();
    lucide.createIcons();
});