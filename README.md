# Portfolio Website - Paundra Asfa

Portfolio website modern dengan arsitektur modular menggunakan ES6 Modules dan Tailwind CSS.

## 📁 Struktur Project

```
personal-branding/
├── index.html                      # Entry point HTML
├── app.js                          # Main application orchestrator
├── styles.css                      # Custom CSS styles
├── components/                     # Reusable UI components
│   ├── ProfileSection.js          # Profile & status section
│   ├── ProjectsSection.js         # Projects showcase
│   ├── SkillsSection.js           # Skills & tools
│   ├── InspirationsSection.js     # Inspirational quotes
│   └── Footer.js                  # Footer component
├── utils/                          # Utility functions
│   └── helpers.js                 # Helper functions (togglePreview, etc)
└── README.md                       # Documentation
```

## 🎯 Arsitektur

### **ES6 Modules Pattern**

Setiap section adalah component terpisah yang menggunakan `export default function`:

```javascript
// components/ProfileSection.js
export default function ProfileSection() {
	return `<section>...</section>`;
}
```

### **Main App Orchestrator**

`app.js` mengatur semua components:

```javascript
import ProfileSection from "./components/ProfileSection.js";
import ProjectsSection from "./components/ProjectsSection.js";
// ... imports lainnya

class App {
	render() {
		const html = `
            ${ProfileSection()}
            ${ProjectsSection()}
            // ... components lainnya
        `;
		appContainer.innerHTML = html;
	}
}
```

## 🎨 Fitur

- ✅ **Modular Architecture** - Setiap section dalam file terpisah
- ✅ **ES6 Modules** - Import/export modern JavaScript
- ✅ **Component-Based** - Reusable dan maintainable
- ✅ **Bento Box Layout** - Desain modern dengan grid
- ✅ **Live Preview Toggle** - Preview website dalam card
- ✅ **Responsive Design** - Optimal di semua ukuran layar
- ✅ **Smooth Animations** - Fade-in dan hover effects
- ✅ **SEO Optimized** - Meta tags dan semantic HTML

## 🛠️ Teknologi

- **HTML5** - Semantic markup
- **ES6 JavaScript** - Modern JavaScript dengan modules
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla CSS** - Custom styles
- **Phosphor Icons** - Modern icon library
- **Google Fonts** - Space Grotesk typography

## 🚀 Cara Menggunakan

### Development

1. Buka `index.html` di browser modern (Chrome, Firefox, Edge)
2. Atau gunakan live server:

   ```bash
   # Jika menggunakan VS Code Live Server
   # Klik kanan index.html > Open with Live Server

   # Atau gunakan Python
   python -m http.server 8000

   # Atau gunakan Node.js http-server
   npx http-server
   ```

### Production

Upload semua file ke hosting dengan struktur folder yang sama.

## 📝 Customization Guide

### 1. Menambah Component Baru

Buat file baru di `components/`:

```javascript
// components/NewSection.js
export default function NewSection() {
	return `
        <section class="mb-16">
            <h2 class="section-title">New Section</h2>
            <!-- Your content -->
        </section>
    `;
}
```

Import dan gunakan di `app.js`:

```javascript
import NewSection from './components/NewSection.js';

render() {
    const html = `
        ${ProfileSection()}
        ${NewSection()}  // Tambahkan di sini
        ${ProjectsSection()}
        // ...
    `;
}
```

### 2. Edit Informasi Personal

Edit `components/ProfileSection.js`:

- Ganti nama, deskripsi, dan foto
- Update email dan social links

### 3. Tambah/Edit Project

Edit `components/ProjectsSection.js`:

- Duplicate struktur project card
- Ganti gambar, link, dan deskripsi
- Update badge status

### 4. Ubah Skills

Edit `components/SkillsSection.js`:

- Tambah/hapus kategori skill
- Update list skills

### 5. Custom Styling

Edit `styles.css`:

- Ubah warna tema
- Modifikasi hover effects
- Sesuaikan spacing

## 🎨 Component API

### ProfileSection()

Menampilkan informasi personal dan status.

### ProjectsSection()

Showcase projects dengan live preview feature.

- Supports iframe preview toggle
- Project badges (In Dev, Live, etc)

### SkillsSection()

Grid layout untuk skills berdasarkan kategori.

### InspirationsSection()

Quote cards dari tokoh inspiratif.

### Footer()

Footer dengan copyright (tahun otomatis).

## 🔧 Utility Functions

### togglePreview(containerId)

Toggle antara image preview dan iframe preview.

```javascript
// Usage in HTML
<button onclick="togglePreview('preview-june')">Live Preview</button>
```

### initSmoothScroll()

Menambahkan smooth scrolling untuk anchor links.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet/Desktop**: ≥ 768px (Grid layout)

## 🎯 Best Practices

1. **Keep Components Pure** - Setiap component hanya return HTML string
2. **Use Semantic HTML** - Gunakan tag yang sesuai (section, article, etc)
3. **Consistent Naming** - Gunakan camelCase untuk functions, kebab-case untuk CSS
4. **Comment Your Code** - Tambahkan JSDoc untuk functions
5. **Optimize Images** - Gunakan format modern (WebP) dan lazy loading

## 🐛 Troubleshooting

### Module tidak load?

Pastikan menggunakan `type="module"` di script tag:

```html
<script type="module" src="app.js"></script>
```

### CORS Error saat development?

Gunakan local server, jangan buka file:// langsung.

### Styles tidak muncul?

Check path CSS di index.html dan pastikan styles.css ada.

## 📄 License

Personal use only.

---

**Tech Stack**: Vanilla JS + ES6 Modules + Tailwind CSS  
**Architecture**: Component-Based Modular Design  
**Made with** ❤️ **by Paundra Asfa**
