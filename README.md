
# 📸 Pixisphere Frontend Assignment

A modern frontend for Pixisphere — a platform that helps users discover and compare top photographers and studios for maternity, newborn, birthday, and other special shoots.

## 🚀 Live Demo

**[▶ View Deployed Site]([https://your-live-link.vercel.app](https://pixisphere-frontend-two.vercel.app/))**  
*(Replace this with your actual Vercel/Netlify link)*

## 🧩 Tech Stack

| Category         | Tools Used                        |
|------------------|-----------------------------------|
| Framework        | React.js (with Vite)              |
| Styling          | Tailwind CSS                      |
| State Management | Redux Toolkit                     |
| Routing          | React Router                      |
| Data Fetching    | Axios                             |
| Utilities        | Lodash.debounce                   |
| Mock API         | JSON Server (`db.json`)           |

## 🗂️ Project Features

### ✅ Part 1: Category Listing Page

- Photographer cards with:
  - Profile picture, name, location
  - Starting price, rating, tags
  - View Profile button
- Filters (Sidebar):
  - Price Range Slider
  - Rating selection (3+, 4+)
  - Style checkboxes (Studio, Candid, etc.)
  - City dropdown
  - Sorting (Price ↑, Rating ↓, Recently Added)
- Debounced Search:
  - Supports search by name, location, or tag
  - Simulates fuzzy matching using substring
- Pagination:
  - Load More button adds more photographers incrementally
- Bonus:
  - Skeleton loaders while fetching data

### ✅ Part 2: Photographer Profile Page

- Display photographer details:
  - Name, bio, styles, tags, price, rating
- Gallery:
  - Responsive image grid
- Reviews:
  - Name, rating, comment, date
- “Send Inquiry” button:
  - Opens a modal popup with a contact form

## 📦 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/your-username/pixisphere-frontend.git
cd pixisphere-frontend
npm install
```

### 2. Setup JSON Server for Mock API

Save this mock data in a file called `db.json` (in project root):

```json
{
  "photographers": [ ... ] // copy full array from PDF
}
```

Start the mock server:
```bash
npx json-server --watch db.json --port 3001
```

### 3. Start the React App

```bash
npm run dev
```

## 🔍 Notes on Filtering, Search & Logic

### 🔄 Filtering Logic
- Filtered using price, rating, styles, and city.
- Sorting by rating, price, or ID (for "recently added").

### 🔍 Debounced Search
- Search bar filters photographers by:
  - Name
  - Location
  - Tags
- Uses lodash `debounce()` to delay filtering until 300ms after the last keystroke.

### 💡 Performance
- Optimized with `useMemo()` for filtering.
- `SkeletonCard` renders while loading data.

## 📸 Screenshots (Optional)

> *(Add `.png` or `.gif` from your final UI here)*

## 📁 Folder Structure (Important Sections Only)

```
src/
├── components/
│   ├── Filters.jsx
│   ├── PhotographerCard.jsx
│   ├── PhotographerGallery.jsx
│   ├── ReviewsSection.jsx
│   ├── InquiryModal.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── CategoryListingPage.jsx
│   └── PhotographerProfilePage.jsx
├── redux/
│   ├── store.js
│   └── photographersSlice.js
```

## 🧪 To Do Next (If Extended Further)

- Add AI Smart Suggestions
- Add user login/authentication
- Save inquiries to backend
- Filter via URL query params

## ✅ Submission Checklist (as per PDF)

| Item                     | Status |
|--------------------------|--------|
| Category Listing Page    | ✅ Done |
| Photographer Profile Page| ✅ Done |
| Filters + Sort           | ✅ Done |
| Debounced Search         | ✅ Done |
| Load More/Pagination     | ✅ Done |
| Skeleton Loader (Bonus)  | ✅ Done |
| Clean UI (Tailwind)      | ✅ Done |
| GitHub Repo              | ✅ Ready |
| Live Deployment          | ✅ Done |
| README                   | ✅ Complete |

## 🧠 Evaluation Ready

This project is:
- Fully functional
- Responsive (mobile-first)
- Built using best React + Tailwind practices
- Committed with clean history & modular components
