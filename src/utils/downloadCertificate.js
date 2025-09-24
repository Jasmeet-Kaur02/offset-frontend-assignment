import html2pdf from "html2pdf.js";

export async function downloadCertificate(credit) {
  try {
    // 1️⃣ Fetch HTML template
    const res = await fetch("/certificate.html");
    let html = await res.text();

    // 2️⃣ Extract year from retirement date string (assuming format "DD-MM-YYYY")
    const dateParts = credit.retirement_date.split("-");
    const retirementYear = dateParts[2];

    // 3️⃣ Generate certificate ID: combine year + UNIC ID
    const certificateId = `CERT-${retirementYear}-${credit.unic_id}`;
    const issuedDate = new Date().toLocaleString();

    // 4️⃣ Replace placeholders in HTML
    html = html
      .replace(/{{project_name}}/g, credit.project_name)
      .replace(/{{unic_id}}/g, credit.unic_id)
      .replace(/{{vintage}}/g, credit.vintage)
      .replace(/{{status}}/g, credit.status)
      .replace(/{{retirement_date}}/g, credit.retirement_date)
      .replace(/{{name}}/g, credit.name || "Anonymous") // person/company name
      .replace(/{{tons}}/g, 1) // default 1 ton
      .replace(/{{certificate_id}}/g, certificateId)
      .replace(/{{certificate_issued}}/g, issuedDate);

    // 5️⃣ PDF options
    const options = {
      margin: 0.5,
      filename: `Carbon_Credit_${certificateId}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // 6️⃣ Generate and download PDF
    html2pdf().from(html).set(options).save();
  } catch (error) {
    console.error("Error generating certificate:", error);
  }
}
