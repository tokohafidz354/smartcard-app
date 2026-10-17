/**
 * SMART CARD PRO - LOGIC ENGINE (app.js)
 * Hosted via GitHub + jsDelivr CDN
 */

const IS_PREVIEW = true;
const GAS_URL = "https://script.google.com/macros/s/AKfycbwJjgfQcxgp4vzpzXFHHvSlNHCL93iGGtyZWRtelQn-ujvpnyR8Hv9bVIO38yHL9OD_xg/exec";

let currentUser = { username: 'admin', role: 'admin', isLoggedIn: true };

let schoolProfile = {
  header1: "PEMERINTAH PROVINSI SULAWESI SELATAN",
  header2: "DINAS PENDIDIKAN",
  schoolName: "UPT SMA NEGERI 3 LUWU",
  address: "Jl. Poros Palopo-Makassar Km. 70, Larompong Kec. Larompong, Kab. Luwu",
  logoLeft: "https://placehold.co/100x100/dc2626/ffffff?text=LOGO+1",
  logoRight: "https://placehold.co/100x100/1d4ed8/ffffff?text=TUT+WURI",
  kotaTgl: "Luwu, 14 Juli 2025",
  kepsek: "Irwanto Rahim, S.S., M.M.",
  nip: "19730717 201001 1 007",
  stempel: "",
  janjiSiswa: `1. Takwa terhadap Tuhan Yang Maha Esa, abdi terhadap Tanah Air dan Bangsa, setia kepada Pancasila dan Undang-Undang Dasar 1945.
2. Adab terhadap Orang Tua, hormat terhadap Guru, serta menjunjung tinggi derajat dan martabat sekolah.
3. Belajar dengan sungguh-sungguh, sebagai bekal masa depan Bangsa.
4. Berprestasi dalam rangka mengisi kemerdekaan.
5. Menjadi warga Masyarakat yang baik dan Pemuda Indonesia yang bertanggung jawab.`
};

const defaultLabelPositions = {
  photo: { top: 16.5, left: 4.5 },
  barcode: { top: 46.0, left: 4.5 },
  legal: { top: 40.5, left: 54.5 },
  row_no_induk: { top: 15.0, left: 61.5 },
  row_nisn: { top: 15.0, left: 27.0 },
  row_nama: { top: 18.6, left: 27.0 },
  row_ttl: { top: 22.2, left: 27.0 },
  row_jk: { top: 25.8, left: 27.0 },
  row_agama: { top: 29.4, left: 27.0 },
  row_alamat: { top: 33.0, left: 27.0 },
  row_berlaku: { top: 36.6, left: 27.0 },
  row_extra: { top: 40.2, left: 27.0 }
};

let cardDesignerConfig = {
  templatePreset: 'model4',
  bgFront: '',
  bgBack: '',
  photoVisible: true,
  photoBorder: true,
  photoH: '2.7',
  photoW: '2.0',
  stempelShow: true,
  stempelH: '24px',
  stempelW: 'auto',
  stempelImg: '',
  logosShow: true,
  logo1Img: '',
  logo2Img: '',
  logoH: '32px',
  logoW: '32px',
  extraShow: false,
  extraBorder: false,
  extraImg: '',
  barcodeType: 'CODE128',
  barcodeVal: 'nisn',
  fontSize: '8.5pt',
  fontFamily: 'Segoe UI, sans-serif',
  fontColor: '#0f172a',
  positions: JSON.parse(JSON.stringify(defaultLabelPositions)),
  labels: {
    lbl1Show: true, lbl1: "PEMERINTAH PROVINSI SULAWESI SELATAN",
    lbl2Show: true, lbl2: "DINAS PENDIDIKAN",
    lbl3Show: true, lbl3: "UPT SMA NEGERI 3 LUWU",
    lbl4Show: true, lbl4: "Jl. Poros Palopo-Makassar Km. 70, Larompong",
    lbl14Show: true, lbl14: "Luwu, 14 Juli 2025",
    lbl15Show: true, lbl15: "Kepala Sekolah,",
    lbl16Show: true, lbl16: "Irwanto Rahim, S.S., M.M.",
    lbl17Show: true, lbl17: "19730717 201001 1 007",
    lbl5Show: true, lbl5: "No Induk",
    lbl6Show: true, lbl6: "NISN",
    lbl7Show: true, lbl7: "Nama",
    lbl8Show: true, lbl8: "T.T.L",
    lbl9Show: true, lbl9: "Jenis Kelamin",
    lbl10Show: true, lbl10: "Agama",
    lbl11Show: true, lbl11: "Alamat",
    lbl12Show: true, lbl12: "Berlaku s/d",
    lblExtraShow: false, lblExtraTitle: "Keterangan", lblExtraVal: "Reguler",
    val5Bold: false, val6Bold: false, val7Bold: false, val8Bold: false,
    val9Bold: false, val10Bold: false, val11Bold: false, val12Bold: false,
    valExtraBold: false, backShow: true, backTitle: "JANJI SISWA",
    backContent: `1. Takwa terhadap Tuhan Yang Maha Esa, abdi terhadap Tanah Air dan Bangsa, setia kepada Pancasila dan Undang-Undang Dasar 1945.
2. Adab terhadap Orang Tua, hormat terhadap Guru, serta menjunjung tinggi derajat dan martabat sekolah.
3. Belajar dengan sungguh-sungguh, sebagai bekal masa depan Bangsa.
4. Berprestasi dalam rangka mengisi kemerdekaan.
5. Menjadi warga Masyarakat yang baik dan Pemuda Indonesia yang bertanggung jawab.`
  }
};

const initialSampleStudents = [
  { id: 'std-1', no_induk: '8336', nisn: '0035754483', nama: 'NASDIR', tempat_lahir: 'Tawondu', tanggal_lahir: '15 Januari 2003', ttl: 'Tawondu, 15 Januari 2003', jk: 'Laki-laki', agama: 'Islam', alamat: 'Tawondu Kec. Suli', berlaku: '30 Juni 2028', extra_val: 'Reguler', kelas: 'X - MIPA 1', foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=260&fit=crop', status_cetak: 'BELUM' },
  { id: 'std-2', no_induk: '8337', nisn: '0035754484', nama: 'NURHALISA', tempat_lahir: 'Binturu', tanggal_lahir: '29 September 2009', ttl: 'Binturu, 29 September 2009', jk: 'Perempuan', agama: 'Islam', alamat: 'Binturu, Kec. Larompong', berlaku: '30 Juni 2028', extra_val: 'Reguler', kelas: 'X - MIPA 1', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=260&fit=crop', status_cetak: 'BELUM' },
  { id: 'std-3', no_induk: '8338', nisn: '0035754485', nama: 'RENO SAPUTRA', tempat_lahir: 'Batulotong', tanggal_lahir: '25 Januari 2009', ttl: 'Batulotong, 25 Januari 2009', jk: 'Laki-laki', agama: 'Islam', alamat: 'Batulotong, Luwu', berlaku: '30 Juni 2028', extra_val: 'Reguler', kelas: 'X - MIPA 1', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=260&fit=crop', status_cetak: 'BELUM' },
  { id: 'std-4', no_induk: '8339', nisn: '0035754486', nama: 'RESTI AULIA', tempat_lahir: 'Binturu', tanggal_lahir: '25 Januari 2010', ttl: 'Binturu, 25 Januari 2010', jk: 'Perempuan', agama: 'Islam', alamat: 'Binturu, Luwu', berlaku: '30 Juni 2028', extra_val: 'Reguler', kelas: 'X - MIPA 2', foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=260&fit=crop', status_cetak: 'BELUM' },
  { id: 'std-5', no_induk: '8340', nisn: '0035754487', nama: 'RIFZHA YUDIRA', tempat_lahir: 'Palopo', tanggal_lahir: '04 Oktober 2009', ttl: 'Palopo, 04 Oktober 2009', jk: 'Perempuan', agama: 'Islam', alamat: 'Palopo, Luwu', berlaku: '30 Juni 2028', extra_val: 'Reguler', kelas: 'X - MIPA 2', foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=260&fit=crop', status_cetak: 'BELUM' }
];

let students = [];
let selectedStudentIds = new Set();
let pendingExcelStudents = [];
let webcamStream = null;
let tableCurrentPage = 1;
let tableRowsPerPage = 15;
let filteredStudentsCache = [];
let currentPrintTargetMode = 'all';
let currentPrintStudents = [];
let printCurrentSheetIndex = 0;

function formatIndonesianDate(input) {
  if (!input) return '';
  const str = String(input).trim();
  const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const dmyMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (dmyMatch) {
    const d = parseInt(dmyMatch[1], 10);
    const m = parseInt(dmyMatch[2], 10) - 1;
    if (m >= 0 && m < 12) return `${d} ${namaBulan[m]} ${dmyMatch[3]}`;
  }
  const ymdMatch = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (ymdMatch) {
    const d = parseInt(ymdMatch[3], 10);
    const m = parseInt(ymdMatch[2], 10) - 1;
    if (m >= 0 && m < 12) return `${d} ${namaBulan[m]} ${ymdMatch[1]}`;
  }
  if (!isNaN(str) && Number(str) > 20000 && Number(str) < 60000) {
    const excelDate = new Date(Math.round((Number(str) - 25569) * 86400 * 1000));
    return `${excelDate.getDate()} ${namaBulan[excelDate.getMonth()]} ${excelDate.getFullYear()}`;
  }
  return str;
}

function saveLocalData() {
  try {
    localStorage.setItem('SMARTCARD_STUDENTS_V5', JSON.stringify(students));
    localStorage.setItem('SMARTCARD_PROFILE_V5', JSON.stringify(schoolProfile));
    localStorage.setItem('SMARTCARD_DESIGNER_V5', JSON.stringify(cardDesignerConfig));
    localStorage.setItem('SMARTCARD_USER_V5', JSON.stringify(currentUser));
  } catch (e) { console.error(e); }
}

function loadLocalData() {
  try {
    const u = localStorage.getItem('SMARTCARD_USER_V5');
    if (u) currentUser = JSON.parse(u);
    const s = localStorage.getItem('SMARTCARD_STUDENTS_V5');
    students = s ? JSON.parse(s) : [...initialSampleStudents];
    const p = localStorage.getItem('SMARTCARD_PROFILE_V5');
    if (p) Object.assign(schoolProfile, JSON.parse(p));
    const d = localStorage.getItem('SMARTCARD_DESIGNER_V5');
    if (d) {
      Object.assign(cardDesignerConfig, JSON.parse(d));
      if (!cardDesignerConfig.positions) cardDesignerConfig.positions = JSON.parse(JSON.stringify(defaultLabelPositions));
    }
  } catch (e) {
    students = [...initialSampleStudents];
  }
}

function switchWorkspaceTab(tabName) {
  if (!currentUser.isLoggedIn) { openModalLogin(); return; }
  ['dashboard', 'input_data', 'print', 'setting', 'tools', 'aktivasi'].forEach(t => {
    const s = document.getElementById(`workspace-${t}`);
    const b = document.getElementById(`nav-${t}`);
    if (s) s.classList.add('hidden');
    if (b) { b.classList.remove('bg-indigo-600', 'text-white'); b.classList.add('text-slate-400'); }
  });
  const as = document.getElementById(`workspace-${tabName}`);
  const ab = document.getElementById(`nav-${tabName}`);
  if (as) as.classList.remove('hidden');
  if (ab) { ab.classList.remove('text-slate-400'); ab.classList.add('bg-indigo-600', 'text-white'); }
  if (tabName === 'dashboard') renderDashboardStats();
  if (tabName === 'setting') renderDesignStudioPreviews();
}

function renderDashboardStats() {
  document.getElementById('stat-total-siswa').textContent = students.length;
  document.getElementById('stat-siap-cetak').textContent = students.filter(s => s.status_cetak !== 'SUDAH').length;
  document.getElementById('stat-selesai-cetak').textContent = students.filter(s => s.status_cetak === 'SUDAH').length;
  const cls = Array.from(new Set(students.map(s => s.kelas || 'Umum')));
  document.getElementById('stat-total-kelas').textContent = cls.length;
  const list = document.getElementById('dashboard-rombel-list');
  if (list) {
    list.innerHTML = cls.map(c => `
      <div class="p-2 rounded bg-slate-950 border border-slate-800 text-xs flex justify-between">
        <span>${c}</span>
        <span class="text-indigo-400 font-mono">${students.filter(s => s.kelas === c).length} siswa</span>
      </div>
    `).join('');
  }
  document.getElementById('dash-client-name').textContent = schoolProfile.schoolName || '-';
  document.getElementById('dash-client-headers').textContent = `${schoolProfile.header1} • ${schoolProfile.header2}`;
  document.getElementById('dash-client-address').textContent = schoolProfile.address || '-';
  document.getElementById('dash-client-kepsek').textContent = schoolProfile.kepsek || '-';
}

function generateCardHTML(student, side = 'front', isInteractive = false) {
  const cfg = cardDesignerConfig;
  const prof = schoolProfile;
  const st = student || (students[0] || initialSampleStudents[0]);
  const pos = Object.assign({}, defaultLabelPositions, cfg.positions || {});
  const dragClass = isInteractive ? 'drag-label-item' : 'absolute';
  const customFont = cfg.fontFamily || 'Segoe UI, sans-serif';
  const customSize = cfg.fontSize || '8.5pt';
  const customColor = cfg.fontColor || '#0f172a';

  if (side === 'front') {
    return `
      <div class="card-canvas border border-slate-300 bg-white text-slate-900 select-none shadow-md" style="width: 88.6mm; height: 57.0mm; ${cfg.bgFront ? `background-image: url('${cfg.bgFront}'); background-size: 100% 100%;` : ''} font-family: ${customFont}; color: ${customColor}; font-weight: 400; line-height: 1.15;">
        ${!cfg.bgFront ? `
          <div class="relative px-3 pt-1.5 pb-1 flex items-center justify-between bg-gradient-to-r from-red-700 via-rose-600 to-red-800 text-white">
            <img src="${prof.logoLeft || 'https://placehold.co/100x100/dc2626/ffffff?text=L1'}" class="h-8 w-8 object-contain">
            <div class="text-center flex-1 px-1 leading-tight">
              <p class="text-[6.5px] uppercase font-bold">${cfg.labels.lbl1 || prof.header1}</p>
              <p class="text-[6px] uppercase font-semibold">${cfg.labels.lbl2 || prof.header2}</p>
              <h3 class="text-[9.5px] uppercase font-black text-amber-200">${cfg.labels.lbl3 || prof.schoolName}</h3>
              <p class="text-[5.2px] truncate">${cfg.labels.lbl4 || prof.address}</p>
            </div>
            <img src="${prof.logoRight || 'https://placehold.co/100x100/1d4ed8/ffffff?text=L2'}" class="h-8 w-8 object-contain">
          </div>
          <div class="text-center py-0.5 bg-red-800 text-white text-[7.5px] font-black uppercase tracking-widest">KARTU PELAJAR</div>
        ` : ''}

        ${cfg.photoVisible ? `
          <div class="${dragClass}" style="top: ${pos.photo.top}mm; left:${pos.photo.left}mm; z-index: 22;" data-target="photo">
            <div class="bg-slate-100 ${cfg.photoBorder ? 'border border-slate-400' : ''} overflow-hidden" style="width: ${parseFloat(cfg.photoW) * 10}mm; height:${parseFloat(cfg.photoH) * 10}mm;">
              <img src="${st.foto || 'https://placehold.co/150x200/cbd5e1/0f172a?text=FOTO'}" class="w-full h-full object-cover pointer-events-none">
            </div>
          </div>
        ` : ''}

        <div class="${dragClass} flex items-center" style="top: ${pos.row_no_induk.top}mm; left: ${pos.row_no_induk.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_no_induk">
          <span>${cfg.labels.lbl5 || 'No Induk'}&nbsp;:&nbsp;&nbsp;</span><span class="font-mono">${st.no_induk}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_nisn.top}mm; left: ${pos.row_nisn.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_nisn">
          <span style="width: 16.8mm;">${cfg.labels.lbl6 || 'NISN'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="font-mono">${st.nisn}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_nama.top}mm; left: ${pos.row_nama.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_nama">
          <span style="width: 16.8mm;">${cfg.labels.lbl7 || 'Nama'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="uppercase truncate font-bold">${st.nama}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_ttl.top}mm; left: ${pos.row_ttl.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_ttl">
          <span style="width: 16.8mm;">${cfg.labels.lbl8 || 'T.T.L'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="truncate">${st.ttl || '-'}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_jk.top}mm; left: ${pos.row_jk.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_jk">
          <span style="width: 16.8mm;">${cfg.labels.lbl9 || 'JK'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.jk}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_agama.top}mm; left: ${pos.row_agama.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_agama">
          <span style="width: 16.8mm;">${cfg.labels.lbl10 || 'Agama'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.agama || 'Islam'}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_alamat.top}mm; left: ${pos.row_alamat.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_alamat">
          <span style="width: 16.8mm;">${cfg.labels.lbl11 || 'Alamat'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="truncate">${st.alamat || '-'}</span>
        </div>
        <div class="${dragClass} flex items-center" style="top: ${pos.row_berlaku.top}mm; left: ${pos.row_berlaku.left}mm; font-size: ${customSize}; z-index: 21;" data-target="row_berlaku">
          <span style="width: 16.8mm;">${cfg.labels.lbl12 || 'Berlaku'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.berlaku || '30 Juni 2028'}</span>
        </div>

        <div class="${dragClass} bg-white/95 px-1 py-0.5 rounded shadow-sm flex flex-col items-center" style="top: ${pos.barcode.top}mm; left: ${pos.barcode.left}mm; z-index: 23;" data-target="barcode">
          <svg class="barcode-render-item h-6 max-w-[105px] pointer-events-none" data-val="${st.nisn}"></svg>
        </div>

        <div class="${dragClass} text-center leading-tight" style="top: ${pos.legal.top}mm; left: ${pos.legal.left}mm; font-size: 5.6pt; z-index: 20;" data-target="legal">
          <p>${cfg.labels.lbl14 || prof.kotaTgl}</p>
          <p class="font-semibold">${cfg.labels.lbl15 || 'Kepala Sekolah,'}</p>
          <div style="height: 6mm; display: flex; align-items: center; justify-content: center;">
            ${cfg.stempelImg ? `<img src="${cfg.stempelImg}" style="height: ${cfg.stempelH}; opacity: 0.85;">` : ''}
          </div>
          <p class="font-bold underline">${cfg.labels.lbl16 || prof.kepsek}</p>
          <p class="font-mono text-[5pt]">NIP. ${cfg.labels.lbl17 || prof.nip}</p>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="card-canvas border border-slate-300 bg-white text-slate-900 select-none p-3.5 shadow-md flex flex-col justify-between" style="width: 88.6mm; height: 57.0mm; ${cfg.bgBack ? `background-image: url('${cfg.bgBack}'); background-size: 100% 100%;` : ''} font-family: ${customFont};">
        ${cfg.labels.backShow !== false ? `
          <div>
            <div class="text-center mb-1.5">
              <span class="inline-block px-4 py-0.5 rounded bg-red-800 text-white text-[8pt] font-black uppercase tracking-wider">${cfg.labels.backTitle || 'JANJI SISWA'}</span>
            </div>
            <div class="text-[6.8pt] leading-relaxed space-y-1">
              ${(cfg.labels.backContent || '').split('\n').filter(l => l.trim()).map(line => `<p class="text-justify">${line}</p>`).join('')}
            </div>
          </div>
        ` : ''}
        <div class="text-center border-t border-slate-200 pt-1 text-[5.5pt] text-slate-500 italic">
          Kartu identitas resmi siswa ${prof.schoolName}.
        </div>
      </div>
    `;
  }
}

function triggerBarcodeRendering(parentEl) {
  if (typeof JsBarcode === 'undefined') return;
  parentEl.querySelectorAll('.barcode-render-item').forEach(el => {
    try {
      JsBarcode(el, el.getAttribute('data-val') || '123456', { format: 'CODE128', width: 1.1, height: 22, displayValue: false, margin: 0 });
    } catch (e) {}
  });
}

function triggerPrintModal(mode) {
  currentPrintTargetMode = mode;
  printCurrentSheetIndex = 0;
  if (mode === 'all') currentPrintStudents = [...students];
  else if (mode === 'kelas') {
    const c = (students[0] && students[0].kelas) || 'Umum';
    currentPrintStudents = students.filter(s => s.kelas === c);
  } else if (mode === 'nis') {
    currentPrintStudents = students.length > 0 ? [students[0]] : [];
  } else {
    const chk = students.filter(s => selectedStudentIds.has(s.id));
    currentPrintStudents = chk.length > 0 ? chk : [...students];
  }

  // 1. Media Default PVC Sheet
  const mSel = document.getElementById('print-media-select');
  if (mSel) mSel.value = 'pvc_sheet';

  // 2. Zoom Default 100%
  const zSel = document.getElementById('select-print-zoom');
  if (zSel) zSel.value = '1.0';
  applyPrintZoom('1.0');

  document.getElementById('modal-print-dialog').classList.remove('hidden');
  renderPrintPreviewSheet();
}

function closeModalPrintDialog() {
  document.getElementById('modal-print-dialog').classList.add('hidden');
}

function applyPrintZoom(val) {
  const c = document.getElementById('print-zoom-container');
  const w = document.getElementById('print-preview-workspace');
  if (!c || !w) return;
  const media = document.getElementById('print-media-select') ? document.getElementById('print-media-select').value : 'pvc_sheet';
  const widthMm = (media === 'pvc_sheet') ? 200 : (media === 'a4' ? 210 : 88.6);
  const pxWidth = (widthMm + 10) * 3.7795;

  let scale = 1.0;
  if (val === 'page_width') scale = Math.max(0.25, Math.min(2.0, (w.clientWidth - 40) / pxWidth));
  else if (val === 'whole_page') scale = Math.max(0.25, Math.min(2.0, (w.clientHeight - 60) / (pxWidth * 1.4)));
  else scale = parseFloat(val) || 1.0;

  c.style.transform = `scale(${scale})`;
}

function renderAccurateRulers(widthMm, heightMm) {
  const rH = document.getElementById('ruler-horizontal-container');
  const rV = document.getElementById('ruler-vertical-container');
  if (!rH || !rV) return;
  rH.style.width = `${widthMm}mm`;
  rV.style.height = `${heightMm}mm`;

  let svgH = `<svg width="${widthMm}mm" height="22px" viewBox="0 0 ${widthMm} 22" style="display:block;"><rect width="${widthMm}" height="22" fill="#e2e8f0"/><line x1="0" y1="21.5" x2="${widthMm}" y2="21.5" stroke="#94a3b8" stroke-width="0.5"/>`;
  for (let mm = 0; mm <= widthMm; mm++) {
    if (mm % 10 === 0) {
      svgH += `<line x1="${mm}" y1="8" x2="${mm}" y2="21" stroke="#0f172a" stroke-width="0.5"/><text x="${mm+1}" y="12" font-size="6" font-family="monospace" font-weight="bold">${mm/10}</text>`;
    } else if (mm % 5 === 0) {
      svgH += `<line x1="${mm}" y1="13" x2="${mm}" y2="21" stroke="#475569" stroke-width="0.35"/>`;
    } else {
      svgH += `<line x1="${mm}" y1="17" x2="${mm}" y2="21" stroke="#94a3b8" stroke-width="0.25"/>`;
    }
  }
  svgH += `</svg>`;
  rH.innerHTML = svgH;

  let svgV = `<svg width="22px" height="${heightMm}mm" viewBox="0 0 22 ${heightMm}" style="display:block;"><rect width="22" height="${heightMm}" fill="#e2e8f0"/><line x1="21.5" y1="0" x2="21.5" y2="${heightMm}" stroke="#94a3b8" stroke-width="0.5"/>`;
  for (let mm = 0; mm <= heightMm; mm++) {
    if (mm % 10 === 0) {
      svgV += `<line x1="8" y1="${mm}" x2="21" y2="${mm}" stroke="#0f172a" stroke-width="0.5"/><text x="1" y="${mm+2.5}" font-size="5.5" font-family="monospace" font-weight="bold">${mm/10}</text>`;
    } else if (mm % 5 === 0) {
      svgV += `<line x1="13" y1="${mm}" x2="21" y2="${mm}" stroke="#475569" stroke-width="0.35"/>`;
    } else {
      svgV += `<line x1="17" y1="${mm}" x2="21" y2="${mm}" stroke="#94a3b8" stroke-width="0.25"/>`;
    }
  }
  svgV += `</svg>`;
  rV.innerHTML = svgV;
}

function renderPrintPreviewSheet() {
  const media = document.getElementById('print-media-select').value;
  const side = document.getElementById('print-side-select').value;
  const viewport = document.getElementById('print-sheet-preview-viewport');
  const countLabel = document.getElementById('print-preview-count');
  const ind = document.getElementById('print-sheet-indicator');

  countLabel.textContent = currentPrintStudents.length;
  viewport.innerHTML = '';

  const isPVC = media === 'pvc_sheet';
  const isTray = media === 'pvc';
  const wMm = isPVC ? 200 : (isTray ? 88.6 : 210);
  const hMm = isPVC ? 300 : (isTray ? 57.0 : 297);

  renderAccurateRulers(wMm, hMm);

  const perPage = isTray ? 1 : 10;
  const totalSheets = Math.ceil(currentPrintStudents.length / perPage) || 1;
  ind.textContent = `${printCurrentSheetIndex + 1} / ${totalSheets}`;
  document.getElementById('btn-print-prev').disabled = printCurrentSheetIndex === 0;
  document.getElementById('btn-print-next').disabled = printCurrentSheetIndex === totalSheets - 1;

  viewport.style.width = `${wMm}mm`;
  viewport.style.height = `${hMm}mm`;
  viewport.style.paddingTop = isTray ? '0' : '2.0mm';

  const sheetItems = currentPrintStudents.slice(printCurrentSheetIndex * perPage, (printCurrentSheetIndex + 1) * perPage);

  if (isTray) {
    if (sheetItems[0]) viewport.innerHTML = generateCardHTML(sheetItems[0], side);
  } else {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '88.6mm 88.6mm';
    grid.style.columnGap = '10.0mm';
    grid.style.rowGap = '0mm';
    grid.style.justifyContent = 'center';

    sheetItems.forEach(st => {
      const box = document.createElement('div');
      box.style.width = '88.6mm';
      box.style.height = '57.0mm';
      box.style.border = '0.5px solid #cbd5e1';
      box.innerHTML = generateCardHTML(st, side);
      grid.appendChild(box);
    });
    viewport.appendChild(grid);
  }
  triggerBarcodeRendering(viewport);
}

function prevPrintPage() {
  if (printCurrentSheetIndex > 0) { printCurrentSheetIndex--; renderPrintPreviewSheet(); }
}
function nextPrintPage() {
  const perPage = document.getElementById('print-media-select').value === 'pvc' ? 1 : 10;
  if (printCurrentSheetIndex < Math.ceil(currentPrintStudents.length / perPage) - 1) {
    printCurrentSheetIndex++; renderPrintPreviewSheet();
  }
}

function executeBrowserPrint(isDirectPrint = true) {
  if (currentPrintStudents.length === 0) { showToast('Tidak ada siswa dipilih!', 'error'); return; }
  const media = document.getElementById('print-media-select').value;
  const side = document.getElementById('print-side-select').value;

  let f = document.getElementById('print-iframe');
  if (f) f.remove();
  f = document.createElement('iframe');
  f.id = 'print-iframe';
  f.style.position = 'fixed';
  f.style.width = '0';
  f.style.height = '0';
  f.style.visibility = 'hidden';
  document.body.appendChild(f);

  const isPVC = media === 'pvc_sheet';
  const isTray = media === 'pvc';
  const pageSize = isTray ? '88.6mm 57.0mm' : (isPVC ? '200mm 300mm' : '210mm 297mm');
  const padX = isPVC ? '6.4mm' : '11.4mm';

  const doc = f.contentDocument || f.contentWindow.document;
  const total = Math.ceil(currentPrintStudents.length / (isTray ? 1 : 10));

  let bodyHtml = '';
  for (let p = 0; p < total; p++) {
    const items = currentPrintStudents.slice(p * (isTray ? 1 : 10), (p + 1) * (isTray ? 1 : 10));
    if (isTray) {
      bodyHtml += `<div style="page-break-after:always; width:88.6mm; height:57mm;">${generateCardHTML(items[0], side)}</div>`;
    } else {
      let cards = items.map(st => `<div style="width:88.6mm; height:57mm; border:0.2px solid #cbd5e1;">${generateCardHTML(st, side)}</div>`).join('');
      bodyHtml += `
        <div style="page-break-after:${p === total-1 ? 'auto':'always'}; width:${isPVC?'200mm':'210mm'}; height:${isPVC?'300mm':'297mm'}; padding:2mm ${padX} 0 ${padX}; box-sizing:border-box;">
          <div style="display:grid; grid-template-columns:88.6mm 88.6mm; column-gap:10mm; row-gap:0mm; justify-content:center;">${cards}</div>
        </div>
      `;
    }
  }

  doc.open();
  doc.write(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script><script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
    <style>
      @page { size: ${pageSize}; margin: 0; }
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; box-sizing: border-box !important; }
      html, body { margin: 0; padding: 0; background: #fff; }
      .card-canvas { width:88.6mm !important; height:57mm !important; position:relative; overflow:hidden; }
    </style></head><body>${bodyHtml}</body></html>
  `);
  doc.close();

  setTimeout(() => {
    triggerBarcodeRendering(doc.body);
    currentPrintStudents.forEach(st => st.status_cetak = 'SUDAH');
    saveLocalData();
    renderDashboardStats();
    f.contentWindow.focus();
    f.contentWindow.print();
    showToast(isDirectPrint ? 'Mengirim perintah cetak langsung...' : 'Membuka dialog cetak...', 'success');
  }, 400);
}

function openModalDataMaster() {
  document.getElementById('modal-data-master').classList.remove('hidden');
  renderTableMasterPage();
}
function closeModalDataMaster() {
  document.getElementById('modal-data-master').classList.add('hidden');
}

function renderTableMasterPage() {
  const tbody = document.getElementById('master-student-tbody');
  if (!tbody) return;
  tbody.innerHTML = students.map(st => `
    <tr class="hover:bg-slate-800/40 text-xs">
      <td class="p-3 font-mono text-slate-200">${st.no_induk}</td>
      <td class="p-3 font-mono text-indigo-400">${st.nisn}</td>
      <td class="p-3 text-white uppercase">${st.nama}</td>
      <td class="p-3 text-slate-400">${st.ttl}</td>
      <td class="p-3 text-sky-400 font-mono">${st.kelas}</td>
      <td class="p-3 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-mono ${st.status_cetak === 'SUDAH' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'}">${st.status_cetak}</span>
      </td>
    </tr>
  `).join('');
  document.getElementById('master-total-count').textContent = students.length;
}

function renderDesignStudioPreviews() {
  const f = document.getElementById('designer-preview-front');
  const b = document.getElementById('designer-preview-back');
  const sample = students[0] || initialSampleStudents[0];
  if (f) { f.innerHTML = generateCardHTML(sample, 'front', true); triggerBarcodeRendering(f); }
  if (b) { b.innerHTML = generateCardHTML(sample, 'back'); }
}

function openModalLogin() { document.getElementById('modal-login').classList.remove('hidden'); }
function closeModalLogin() { document.getElementById('modal-login').classList.add('hidden'); }
function executeLogin(e) {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value.trim();
  if (u === 'admin' && p === 'edudigital') {
    currentUser = { username: 'admin', role: 'admin', isLoggedIn: true };
    saveLocalData();
    closeModalLogin();
    switchWorkspaceTab('dashboard');
    showToast('Login berhasil!', 'success');
  } else {
    document.getElementById('login-error-msg').classList.remove('hidden');
  }
}
function handleLogout() {
  currentUser.isLoggedIn = false;
  saveLocalData();
  openModalLogin();
}

function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `p-3 rounded-xl border text-xs text-white shadow-2xl bg-slate-900 border-slate-700`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  loadLocalData();
  setInterval(() => {
    const now = new Date();
    const c = document.getElementById('runtime-clock');
    const d = document.getElementById('runtime-date');
    if (c) c.textContent = now.toLocaleTimeString('id-ID');
    if (d) d.textContent = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  }, 1000);
  renderDashboardStats();
  renderDesignStudioPreviews();
});
