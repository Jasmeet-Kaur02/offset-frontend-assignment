import { PDFDownloadLink } from "@react-pdf/renderer";
import CertificatePDF from "../utils/CertificatePDF";

export function CarbonCreditCard({ credit }) {
  const { project_name, unic_id, vintage, status } = credit;

  return (
    <div className="bg-white rounded-md py-4 px-4 border border-black border-opacity-10">
      <h5 className="font-robotoSemibold text-lg md:text-xl xl:text-lg 2xl:text-2xl">
        {project_name}
      </h5>
      <p className="text-sm md:text-base xl:text-sm mt-2 2xl:text-lg text-black">
        <span className="text-opacity-50 text-black font-robotoNormal">
          Vintage
        </span>{" "}
        <span className="font-robotoMedium">{vintage}</span>
      </p>
      <p className="text-sm md:text-base xl:text-sm mt-2 2xl:text-lg text-black">
        <span className="text-opacity-50 text-black font-robotoNormal">
          UNIC ID
        </span>{" "}
        <span className="font-robotoMedium">{unic_id}</span>
      </p>
      <div className="flex items-center mt-6 justify-between">
        <span
          className={`${
            status === "Active" ? "bg-lightGreen" : "bg-gray"
          } font-robotoMedium text-white py-1 px-4 rounded-full text-sm`}
        >
          {status}
        </span>
        {status !== "Active" && (
          <PDFDownloadLink
            document={
              <CertificatePDF credit={{ ...credit, name: "Jasmeet Kaur" }} />
            }
            fileName={`certificate-${credit.unic_id}.pdf`}
            style={{
              textDecoration: "none",
              padding: "8px 12px",
              color: "#fff",
              backgroundColor: "#1976D2",
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {({ loading }) =>
              loading ? "Downloading..." : "Download Certificate"
            }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}
