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
       

  <div className="w-9/12 mt-20 mb-12 flex flex-col gap-8 items-start justify-self-center justify-start rounded-md bg-[#F2F8FF] p-10">

  <h1 className="text-6xl font-bold text-[#1D61AB] mb-6 ">
    Personal Data Collection and Protection Policy
  </h1>


  {/* Article 1 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 1 – Purpose</h2>
    <p className="text-lg leading-relaxed">
      This Privacy Policy aims to inform users of the AMS ALGERIE SPA website about the methods of collecting, processing, storing,
      and protecting their personal data. It is established in accordance with the provisions of Law No. 18-07 on the protection
      of individuals with regard to the processing of personal data.
    </p>
  </div>


  {/* Article 2 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 2 – Data Controller</h2>
    <p className="text-lg leading-relaxed">
      The data controller is: AMS Groupe<br />
      Address: Boulevard du 11 Décembre 1960, Bt 09, Val d’Hydra, Algiers<br />
      Phone: +213 (0) 23 30 66 53<br />
      Email: information@amsgroupe.com
    </p>
  </div>


  {/* Article 3 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 3 – Data Collected via the Website</h2>
    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Information entered in forms (first name, last name, email, phone, company, message)</li>
      <li>Connection data (IP address, browser type, date and time of connection)</li>
      <li>Cookies and browsing data</li>
    </ul>
  </div>


  {/* Article 4 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 4 – Purposes of Processing</h2>
    <p className="text-lg mb-3">Data collected via the website is used to:</p>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Respond to inquiries sent through the contact form</li>
      <li>Provide information about AMS Groupe services</li>
      <li>Improve the user experience</li>
      <li>Ensure the security and proper functioning of the website</li>
      <li>Comply with legal obligations</li>
    </ul>

    <p className="text-lg mt-3">
      Collected data is not sold, transferred, or commercially exploited to third parties.
    </p>
  </div>


  {/* Article 5 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 5 – Hosting and International Data Transfer</h2>
    <p className="text-lg leading-relaxed">
      Personal data collected via the website is hosted on servers located in France. This storage constitutes a transfer of data
      outside Algerian territory under the meaning of Law No. 18-07.
      The hosting provider is subject to applicable European regulations, notably the General Data Protection Regulation (GDPR),
      under the supervision of the National Commission on Informatics and Liberty (CNIL).
      The company ensures that appropriate technical and organizational measures are in place to guarantee data confidentiality and security.
    </p>
  </div>


  {/* Article 6 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 6 – Data Retention Period</h2>

    <p className="text-lg mb-3">
      In accordance with Law 18-07, personal data is retained only for the duration necessary for the purposes for which it was collected:
    </p>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Data from the contact form is kept for a maximum of twenty-four (24) months</li>
      <li>Data related to a professional relationship is retained for the duration of that relationship, plus any applicable legal periods</li>
    </ul>

    <p className="text-lg mt-3">
      After these periods, the data is securely deleted or archived.
    </p>
  </div>


  {/* Article 7 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 7 – Rights of Data Subjects</h2>

    <p className="text-lg mb-3">
      In accordance with Law 18-07, every data subject has the following rights:
    </p>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Right to access their personal data</li>
      <li>Right to rectify their data</li>
      <li>Right to object, under the conditions provided by law</li>
    </ul>

    <p className="text-lg mt-3">
      Requests can be submitted in writing to: information@amsgroupe.com
    </p>
  </div>


  {/* Article 8 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 8 – Cookies</h2>

    <p className="text-lg mb-3">
      The website uses cookies strictly necessary for its technical functioning:
    </p>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Cookies help secure navigation, remember settings, and analyze traffic anonymously</li>
      <li>No advertising or profiling cookies are used on the website</li>
      <li>Users can configure their browser to refuse cookies without preventing navigation on the site</li>
    </ul>
  </div>


  {/* Article 9 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 9 – Data Security</h2>

    <p className="text-lg mb-3">
      The company implements appropriate technical and organizational measures to ensure the security and confidentiality
      of personal data, including:
    </p>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Use of HTTPS protocol</li>
      <li>Restricted access to data</li>
      <li>Protection of administrative access</li>
      <li>Secure backups</li>
    </ul>
  </div>


  {/* Article 10 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 10 – Liability and Limitations of Liability</h2>

    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Direct or indirect damages resulting from the use of the website</li>
      <li>Temporary interruptions or unavailability of the website</li>
      <li>Errors or omissions in the content or information published</li>
    </ul>

    <p className="text-lg mt-3">
      The user is responsible for how they use the website and the information they enter.
    </p>
  </div>


  {/* Article 11 */}
  <div>
    <h2 className="text-3xl font-bold mb-3">Article 11 – Policy Modification</h2>

    <p className="text-lg leading-relaxed">
      This policy may be modified at any time to ensure compliance with current regulations.
      The applicable version is the one published on the website at the date of consultation.
    </p>
  </div>


</div>

    
        </>
        
    );
}