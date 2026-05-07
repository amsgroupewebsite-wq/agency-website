"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const groupContact = [
  "+213 (0) 20 30 68 28",
  "+213 (0) 770 93 69 65",
  "+213 (0) 770 77 09 92",
];
const groupEmail = ["contact@amsgroupe.com"];

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-[#FFF8E8] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-sm border border-[#252525]/5 p-6 sm:p-10 lg:p-16">
          
          {/* Header */}
          <header className="mb-10 sm:mb-14 lg:mb-16 pb-6 sm:pb-8 border-b border-[#E72048]/20">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#E72048] font-semibold mb-3 sm:mb-4">
              Legal · AMS Groupe
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#252525] leading-tight">
              Personal Data Collection <br className="hidden sm:block" />
              and <span className="text-[#E72048]">Protection Policy</span>
            </h1>
          </header>

          {/* Articles */}
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">

            <Article number="01" title="Purpose">
              <p>
                This Privacy Policy aims to inform users of the AMS ALGERIE SPA website about the methods of collecting, processing, storing,
                and protecting their personal data. It is established in accordance with the provisions of Law No. 18-07 on the protection
                of individuals with regard to the processing of personal data.
              </p>
            </Article>

            <Article number="02" title="Data Controller">
              <p>
                The data controller is: <strong>AMS Groupe</strong><br />
                Address: Boulevard du 11 Décembre 1960, Bt 09, Val d'Hydra, Algiers<br />
                Phone: +213 (0) 23 30 66 53<br />
                Email: information@amsgroupe.com
              </p>
            </Article>

            <Article number="03" title="Data Collected via the Website">
              <List items={[
                "Information entered in forms (first name, last name, email, phone, company, message)",
                "Connection data (IP address, browser type, date and time of connection)",
                "Cookies and browsing data",
              ]} />
            </Article>

            <Article number="04" title="Purposes of Processing">
              <p className="mb-4">Data collected via the website is used to:</p>
              <List items={[
                "Respond to inquiries sent through the contact form",
                "Provide information about AMS Groupe services",
                "Improve the user experience",
                "Ensure the security and proper functioning of the website",
                "Comply with legal obligations",
              ]} />
              <p className="mt-4">
                Collected data is not sold, transferred, or commercially exploited to third parties.
              </p>
            </Article>

            <Article number="05" title="Hosting and International Data Transfer">
              <p>
                Personal data collected via the website is hosted on servers located in France. This storage constitutes a transfer of data
                outside Algerian territory under the meaning of Law No. 18-07.
                The hosting provider is subject to applicable European regulations, notably the General Data Protection Regulation (GDPR),
                under the supervision of the National Commission on Informatics and Liberty (CNIL).
                The company ensures that appropriate technical and organizational measures are in place to guarantee data confidentiality and security.
              </p>
            </Article>

            <Article number="06" title="Data Retention Period">
              <p className="mb-4">
                In accordance with Law 18-07, personal data is retained only for the duration necessary for the purposes for which it was collected:
              </p>
              <List items={[
                "Data from the contact form is kept for a maximum of twenty-four (24) months",
                "Data related to a professional relationship is retained for the duration of that relationship, plus any applicable legal periods",
              ]} />
              <p className="mt-4">After these periods, the data is securely deleted or archived.</p>
            </Article>

            <Article number="07" title="Rights of Data Subjects">
              <p className="mb-4">
                In accordance with Law 18-07, every data subject has the following rights:
              </p>
              <List items={[
                "Right to access their personal data",
                "Right to rectify their data",
                "Right to object, under the conditions provided by law",
              ]} />
              <p className="mt-4">
                Requests can be submitted in writing to:{" "}
                <a href="mailto:information@amsgroupe.com" className="text-[#E72048] font-medium hover:underline">
                  information@amsgroupe.com
                </a>
              </p>
            </Article>

            <Article number="08" title="Cookies">
              <p className="mb-4">The website uses cookies strictly necessary for its technical functioning:</p>
              <List items={[
                "Cookies help secure navigation, remember settings, and analyze traffic anonymously",
                "No advertising or profiling cookies are used on the website",
                "Users can configure their browser to refuse cookies without preventing navigation on the site",
              ]} />
            </Article>

            <Article number="09" title="Data Security">
              <p className="mb-4">
                The company implements appropriate technical and organizational measures to ensure the security and confidentiality
                of personal data, including:
              </p>
              <List items={[
                "Use of HTTPS protocol",
                "Restricted access to data",
                "Protection of administrative access",
                "Secure backups",
              ]} />
            </Article>

            <Article number="10" title="Liability and Limitations of Liability">
              <List items={[
                "Direct or indirect damages resulting from the use of the website",
                "Temporary interruptions or unavailability of the website",
                "Errors or omissions in the content or information published",
              ]} />
              <p className="mt-4">
                The user is responsible for how they use the website and the information they enter.
              </p>
            </Article>

            <Article number="11" title="Policy Modification">
              <p>
                This policy may be modified at any time to ensure compliance with current regulations.
                The applicable version is the one published on the website at the date of consultation.
              </p>
            </Article>

          </div>

          {/* Footer signature */}
          <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#252525]/10">
            <p className="text-xs sm:text-sm text-[#252525]/60">
              Last updated · {new Date().getFullYear()} · AMS Groupe
            </p>
          </footer>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ── Sous-composants ── */

function Article({ number, title, children }) {
  return (
    <article className="scroll-mt-24">
      <div className="flex items-baseline gap-3 sm:gap-5 mb-4 sm:mb-5">
        <span className="text-xl sm:text-2xl font-bold text-[#E72048] tabular-nums">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#252525] leading-tight">
          {title}
        </h2>
      </div>
      <div className="text-sm sm:text-base lg:text-lg text-[#252525]/80 leading-relaxed pl-0 sm:pl-12">
        {children}
      </div>
    </article>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-2 sm:space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-[#E72048] font-bold mt-1 flex-shrink-0">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}