# Labstack Website

This is the official frontend repository for the **Labstack** website ([labstack.in](https://labstack.in)), built with React, Vite, and Tailwind CSS.

## 🏥 About Labstack

Labstack is a **B2B Healthcare Operating System**.

The platform provides a complete healthcare delivery stack via API, connecting businesses with a nationwide network of verified providers. This allows companies to embed healthcare services (like diagnostics, pharmacy, and consultations) directly into their own products.

This website serves as the primary informational and marketing hub for Labstack's key audiences:

* **B2B Customers:** Insurers, InsureTech platforms, Digital Health apps, Brokers, and Disease Management companies.
* **Provider Partners:** Hospitals, labs, clinics, doctors, and nutritionists looking to join the Labstack network.

## ✨ Key Pages & Features

The repository is structured around these core business sections:

* **`/pages/who-we-serve`**: Landing pages tailored to specific B2B customers.
    * `InsurersTPAs.tsx`
    * `InsureTech.tsx`
    * `BrokersCorporateWellness.tsx`
    * `DigitalHealthPlatforms.tsx`
    * `DiseaseManagement.tsx`

* **`/pages/platform`**: Details on the core healthcare services offered.
    * `Diagnostics.tsx`
    * `Pharmacy.tsx`
    * `Consultations.tsx`
    * `SpecializedNetworks.tsx`

* **`/pages/solutions`**: High-level solutions built on top of the platform.
    * `HealthcareInfrastructure.tsx`
    * `DigitalPlatform.tsx`
    * `APISolutions.tsx`
    * `CoverageExpansion.tsx`

* **`/pages/provider`**: Information and forms for healthcare providers to join the network.
    * `ProvidersOverview.tsx`
    * `HospitalsLabsJoin.tsx`
    * `DoctorsJoin.tsx`
    * `NutritionistsHealthCoaches.tsx`

* **`/pages/resources`**: Content marketing hub with blogs and case studies.
    * `Blog.tsx`
    * `case-studies/`

## 🥞 Tech Stack

* **Framework:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Routing:** [React Router](https://reactrouter.com/)

## 🚀 Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/[your-repo-name].git
    cd [your-repo-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) (or the port specified in your console) to view the site.
