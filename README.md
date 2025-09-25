# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

live link: [Visit Now](https://customer-support-system-delta.vercel.app/)

## 📌 Features

### ✅ Navbar

- Website name/logo on the **left**.
- Menu items and **New Ticket** button on the **right**.

### ✅ Banner

- Displays ticket statistics:

  - **In Progress Count**
  - **Resolved Count** (default = 0).

### ✅ Main Section

2. **Ticket Cards**

   - Display all ticket information in a **card layout**.

3. **Task Status Section**

   - Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   - Task Status shows:

     - Ticket Title
     - **Complete Button**

   - Clicking **Complete Button**:

     - show alert

### ✅ Footer

### ✅ Responsiveness

- The entire website is **responsive** for mobile devices.

Clicking **Complete Button**:

1. It is **removed from Task Status**.
2. It is added to the **Resolved List**.
3. The **In Progress count decreases**.
4. The **Resolved count increases**.
5. It is removed from the **Customer Tickets list**.
