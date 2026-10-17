/**
 * SMART CARD PRO - LOGIC ENGINE (app.js)
 * Versi Stabil Kebal Error DOM
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
let currentPrintStudents = [];
let printCurrentSheetIndex = 0;

function setSafeText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
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
  setSafeText('stat-total-siswa', students.length);
  setSafeText('stat-siap-cetak', students.filter(s => s.status_cetak !== 'SUDAH').length);
  setSafeText('stat-selesai-cetak', students.filter(s => s.status_cetak === 'SUDAH').length);
  const cls = Array.from(new Set(students.map(s => s.kelas || 'Umum')));
  setSafeText('stat-total-kelas', cls.length);
  
  const list = document.getElementById('dashboard-rombel-list');
  if (list) {
    list.innerHTML = cls.map(c => `
      <div class="p-2 rounded bg-slate-950 border border-slate-800 text-xs flex justify-between">
        <span>${c}</span>
        <span class="text-indigo-400 font-mono">${students.filter(s => s.kelas === c).length} siswa</span>
      </div>
    `).join('');
  }
  setSafeText('dash-client-name', schoolProfile.schoolName || '-');
  setSafeText('dash-client-headers', `${schoolProfile.header1} •${schoolProfile.header2}`);
  setSafeText('dash-client-address', schoolProfile.address || '-');
  setSafeText('dash-client-kepsek', schoolProfile.kepsek || '-');
  setSafeText('badge-user-role', (currentUser.role || 'admin').toUpperCase());
}

function generateCardHTML(student, side = 'front') {
  const cfg = cardDesignerConfig;
  const prof = schoolProfile;
  const st = student || (students[0] || initialSampleStudents[0]);
  const pos = Object.assign({}, defaultLabelPositions, cfg.positions || {});
  const customFont = cfg.fontFamily || 'Segoe UI, sans-serif';
  const customSize = cfg.fontSize || '8.5pt';
  const customColor = cfg.fontColor || '#0f172a';

  if (side === 'front') {
    return `
      <div class="card-canvas border border-slate-300 bg-white text-slate-900 select-none shadow-md" style="width: 88.6mm; height: 57.0mm; ${cfg.bgFront ? `background-image: url('${cfg.bgFront}'); background-size: 100% 100%;` : ''} font-family: ${customFont}; color:${customColor}; font-weight: 400; line-height: 1.15;">
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
          <div class="absolute" style="top: ${pos.photo.top}mm; left: ${pos.photo.left}mm; z-index: 22;">
            <div class="bg-slate-100 ${cfg.photoBorder ? 'border border-slate-400' : ''} overflow-hidden" style="width: ${parseFloat(cfg.photoW) * 10}mm; height: ${parseFloat(cfg.photoH) * 10}mm;">
              <img src="${st.foto || 'https://placehold.co/150x200/cbd5e1/0f172a?text=FOTO'}" class="w-full h-full object-cover">
            </div>
          </div>
        ` : ''}

        <div class="absolute flex items-center" style="top: ${pos.row_no_induk.top}mm; left: ${pos.row_no_induk.left}mm; font-size:${customSize}; z-index: 21;">
          <span>${cfg.labels.lbl5 || 'No Induk'}&nbsp;:&nbsp;&nbsp;</span><span class="font-mono">${st.no_induk}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_nisn.top}mm; left: ${pos.row_nisn.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl6 || 'NISN'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="font-mono">${st.nisn}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_nama.top}mm; left: ${pos.row_nama.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl7 || 'Nama'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="uppercase truncate font-bold">${st.nama}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_ttl.top}mm; left: ${pos.row_ttl.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl8 || 'T.T.L'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="truncate">${st.ttl || '-'}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_jk.top}mm; left: ${pos.row_jk.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl9 \vert{}\vert{} 'JK'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.jk}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_agama.top}mm; left: ${pos.row_agama.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl10 \vert{}\vert{} 'Agama'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.agama || 'Islam'}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_alamat.top}mm; left: ${pos.row_alamat.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl11 || 'Alamat'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span class="truncate">${st.alamat || '-'}</span>
        </div>
        <div class="absolute flex items-center" style="top: ${pos.row_berlaku.top}mm; left: ${pos.row_berlaku.left}mm; font-size:${customSize}; z-index: 21;">
          <span style="width: 16.8mm;">${cfg.labels.lbl12 \vert{}\vert{} 'Berlaku'}</span><span>&nbsp;:&nbsp;&nbsp;</span><span>${st.berlaku || '30 Juni 2028'}</span>
        </div>

        <div class="absolute bg-white/95 px-1 py-0.5 rounded shadow-sm flex flex-col items-center" style="top: ${pos.barcode.top}mm; left:${pos.barcode.left}mm; z-index: 23;">
          <svg class="barcode-render-item h-6 max-w-[105px]" data-val="${st.nisn}"></svg>
        </div>

        <div class="absolute text-center leading-tight" style="top: ${pos.legal.top}mm; left:${pos.legal.left}mm; font-size: 5.6pt; z-index: 20;">
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
      <div class="card-canvas border border-slate-300 bg-white text-slate-900 select-none p-3.5 shadow-md flex flex-col justify-between" style="width: 88.6mm; height: 57.0mm; ${cfg.bgBack ? `background-image: url('${cfg.bgBack}'); background-size: 100% 100%;` : ''} font-family: ${custom
