# 🕒 Chrono

### A minimal digital clock built with JavaScript.

Chrono is a responsive digital clock that displays the **current time, date, day, month, and AM/PM period** in a clean neon-inspired interface.

**Live Demo:** [Chrono](https://suprio-dev.github.io/Chrono---Digital-Clock/)

---

## ✨ Features

- Real-time digital clock
- Live hours, minutes, and seconds
- AM/PM format
- Current date display
- Day and month display
- Automatic time updates
- Responsive design
- Dark neon-inspired UI
- Clean and minimal interface

---

## 🛠️ Tech Stack

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| HTML5        | Structure               |
| Tailwind CSS | Styling & responsive UI |
| JavaScript   | Clock logic & DOM updates |

---

## 🔄 How It Works
```text
Current Date & Time
        ↓
   JavaScript Date
        ↓
   Extract Time
        ↓
Format Hours / Minutes / Seconds
        ↓
 Update DOM
        ↓
   setInterval()
        ↓
 Refresh Every Second
```

JavaScript uses the **Date API** to retrieve the current date and time, formats the values, and updates the clock continuously.

---

## ⏱️ Real-Time Clock

The clock updates every second using `setInterval()` so that the displayed time stays synchronized with the current system time.

```javascript
setInterval(updateClock, 1000);
```

The `Date` object is used to retrieve values such as:

- Hours
- Minutes
- Seconds
- Date
- Day
- Month

---

## 🎯 Why I Built It

This project was built to practice working with:

- JavaScript `Date` API
- DOM manipulation
- `setInterval()`
- Dynamic content updates
- Time formatting
- JavaScript functions
- Responsive UI design
- Tailwind CSS

---

## 🚀 Run Locally
```bash
git clone https://github.com/suprio-dev/Chrono---Digital-Clock.git
cd Chrono---Digital-Clock
```

Open `index.html` in your browser.

No build tools or installation required.

---

## 📌 Project Status

**Completed — v1.0**

More features may be added as the project evolves.