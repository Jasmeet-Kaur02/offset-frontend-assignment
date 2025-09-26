import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// ======= STYLES =======
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
    paddingVertical: 40,
    width: 595,
    border: "2px solid #e0e0e0",
    borderRadius: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  certificateId: {
    fontSize: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333333",
    textTransform: "uppercase",
    borderBottom: "2px solid #2e7d32",
    paddingBottom: 20,
    textAlign: "center",
  },
  issued: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  body: {
    fontSize: 18,
    color: "#444444",
    lineHeight: 1.6,
    marginTop: 20,
  },
  detailsBox: {
    marginTop: 30,
    padding: 20,
    border: "1px solid #d0d0d0",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  detailLine: {
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 10,
    color: "#555555",
  },
  bold: {
    fontWeight: "bold",
  },
});

// ======= COMPONENT =======
const CertificatePDF = ({ credit }) => {
  const { name, project_name, unic_id, vintage, status, retirement_date } =
    credit;

  // 2️⃣ Extract year from retirement date string (assuming format "DD-MM-YYYY")
  const dateParts = retirement_date.split("-");
  const retirementYear = dateParts[2];

  // 3️⃣ Generate certificate ID: combine year + UNIC ID
  const certificateId = `CERT-${retirementYear}-${unic_id}`;
  const issuedDate = new Date().toLocaleString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.companyName}>Offset</Text>
            <Text style={styles.certificateId}>
              Certificate ID: {certificateId}
            </Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Carbon Credit Retirement Certificate</Text>
          <Text style={styles.issued}>Certificate Issued: {issuedDate}</Text>

          {/* Body */}
          <View style={styles.body}>
            <Text>
              Offset verifies that <Text style={styles.bold}>{name}</Text>{" "}
              retired <Text style={styles.bold}>1</Text> tons of CO2 emissions
              by supporting <Text style={styles.bold}>{project_name}</Text>.
            </Text>

            <Text style={{ marginTop: 16 }}>
              This certifies that the following carbon credit has been retired:
            </Text>

            {/* Details */}
            <View style={styles.detailsBox}>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>Project Name:</Text> {project_name}
              </Text>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>UNIC ID:</Text> {unic_id}
              </Text>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>Vintage Year:</Text> {vintage}
              </Text>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>Status:</Text> {status}
              </Text>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>Carbon Offset:</Text> 1 Ton CO2
              </Text>
              <Text style={styles.detailLine}>
                <Text style={styles.bold}>Retirement Date:</Text>{" "}
                {retirement_date}
              </Text>
            </View>

            <Text style={{ marginTop: 20 }}>
              This retirement ensures that the carbon credit can no longer be
              sold or traded and represents a permanent offset of greenhouse gas
              emissions.
            </Text>
          </View>

          {/* Footer */}
          <Text style={styles.footer}>
            Verified and issued by{" "}
            <Text style={styles.bold}>Offset Platform</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default CertificatePDF;
