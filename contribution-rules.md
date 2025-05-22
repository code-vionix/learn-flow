# 📜 LEARN FLOW FRONTEND - CONTRIBUTION RULES

এই ডকুমেন্টটি বিস্তারিতভাবে ব্যাখ্যা করবে কিভাবে এই রেপোজিটরিতে কাজ করতে হবে, কিভাবে ব্রাঞ্চ তৈরি করতে হবে, কিভাবে কমিট মেসেজ লিখতে হবে, এবং কীভাবে PR সাবমিট করতে হবে।

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Reactive-accelerator-batch-2/learn-flow.git
cd learn-flow
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

The application should now be running at `http://localhost:3000`.

---

## 🌲 Branching Strategy

আমরা **Git Flow** মডেল অনুসরণ করি।

- `main` → **Production** (শুধুমাত্র স্থিতিশীল এবং টেস্টেড কোড থাকবে)
- `develop` → **Development Branch** (সর্বশেষ ফিচারগুলোর কাজ চলবে)
- `username/pagename` → **UI pages** (যদি আপনি কোনো নির্দিষ্ট পেজ নিয়ে কাজ করেন)
- `feature/{feature-name}` → **নতুন ফিচারের জন্য ব্রাঞ্চ**
- `fix/{bug-name}` → **বাগ ফিক্স করার জন্য ব্রাঞ্চ**
- `docs/{documentation-portion}` → **ডকুমেন্টেশন আপডেটের জন্য ব্রাঞ্চ**

#### ব্রাঞ্চ তৈরির নিয়ম:
প্রথমে ডেভেলপ ব্রাঞ্চ থেকে নতুন ব্রাঞ্চ তৈরি করুন:
```sh
git checkout develop
git pull origin develop
git checkout -b feature/user-authentication
```

---

## 🔖 Issue Management

কোনো ফিচার, বাগ ফিক্স বা ডকুমেন্টেশন আপডেট করার আগে অবশ্যই একটি **GitHub Issue** তৈরি করতে হবে।

### 🔹 Issue তৈরির ধাপ:
1. **Issue Tab এ যান** → `https://github.com/Reactive-accelerator-batch-2/learn-flow.git`
2. **New Issue ক্লিক করুন**
3. **Issue টাইটেল দিন** (যেমন `Bug: Navbar overlapping on mobile`)
4. **Description এ বিস্তারিত লিখুন** (যেমন স্ক্রিনশট, স্টেপ-বাই-স্টেপ রিপ্রোডাকশন, ইত্যাদি)
5. **Labels যোগ করুন** (যেমন `bug`, `enhancement`, `documentation` ইত্যাদি)
6. **Assignee নির্বাচন করুন** (যদি আপনি নিজে করেন তাহলে assignyourself করুন)
7. **Create Issue করুন**

---

## ✍️ Commit Message Convention

আমরা **Conventional Commits** অনুসরণ করি।

**Commit Format:**
```
<type>(scope): <subject>
```

**উদাহরণ:**
```
design(homePage): complete Home Page Design
feat(auth): add JWT authentication system
fix(ui): resolve navbar overlap issue on mobile
docs(readme): update installation steps
```

### 🏷️ Allowed Commit Types:
- **feat** → নতুন ফিচার যোগ করা হলে
- **fix** → বাগ ফিক্স করা হলে
- **docs** → ডকুমেন্টেশন আপডেট করা হলে
- **style** → শুধুমাত্র কোড ফরম্যাটিং (কোনো লজিক পরিবর্তন নয়)
- **refactor** → কোড পুনর্গঠন (ফাংশনালিটি পরিবর্তন ছাড়া)
- **test** → টেস্ট যোগ করা বা আপডেট করা হলে
- **chore** → বিল্ড প্রসেস বা টুলিং সংক্রান্ত পরিবর্তন

---

## ⚖️ Contribution Steps

### ✅ Pull the latest changes
```sh
git pull origin develop
```

### ✅ Create a new branch
```sh
git checkout -b feature/user-authentication
```

### ✅ Add and commit your changes
```sh
git add .
git commit -m "feat(auth): add JWT authentication system"
```

### ✅ Push your changes
```sh
git push origin feature/user-authentication
```

### ✅ Create a Pull Request (PR)
1. GitHub এ যান
2. `Pull Requests` ট্যাবে ক্লিক করুন
3. `New Pull Request` ক্লিক করুন
4. `develop` ব্রাঞ্চে merge করার জন্য আপনার ব্রাঞ্চ নির্বাচন করুন
5. বিস্তারিত বর্ণনা লিখুন
6. `Reviewers` যুক্ত করুন (এখানে Syfuddin ভাইকে অ্যাড করুন)
7. `Create Pull Request` ক্লিক করুন

### ✅ PR Review Process
- PR তৈরি করার পর একজন মেইনটেইনার রিভিউ করবে
- অন্তত ১ জনের অ্যাপ্রুভাল প্রয়োজন
- প্রয়োজন হলে ফিডব্যাক অনুযায়ী কোড আপডেট করুন
- সব কিছু ঠিক থাকলে PR merge করা হবে

---

## ❗ Important Rules
✅ **Always write clean and modular code.**
✅ **Use meaningful variable names.**
✅ **Never push directly to `main` or `develop`.**
✅ **Always get code reviewed before merging.**
✅ **Use environment variables for sensitive information.**
✅ **Write proper documentation for every feature.**

---

### 🔗 Contact & Support
যদি কোনো সমস্যা হয়, তাহলে `Syfuddhin` এবং `Talha` এর সাথে যোগাযোগ করুন।

---

সবার প্রোগ্রামিং যাত্রা শুভ হোক। 🚀🎉

