/**
 * Consistent Data Points Across Website
 * Single source of truth for all metrics and coverage data
 */

export const COVERAGE_DATA = {
  diagnostics: {
    pincodes: "9,000+",
    label: "Diagnostics Coverage"
  },
  centerVisit: {
    pincodes: "2,600+",
    label: "Center Visit Locations"
  },
  pharmacy: {
    pincodes: "15,000+",
    label: "Pharmacy Coverage"
  },
  consultation: {
    coverage: "Nationwide",
    label: "Consultation Availability"
  },
  homeCare: {
    pincodes: "5,000+",
    label: "Home Care Coverage"
  },
  emergency: {
    coverage: "Metros",
    label: "Emergency Services"
  },
  healthCamps: {
    coverage: "Nationwide",
    label: "Health Camps"
  }
} as const;

export const PLATFORM_STATS = {
  activePartners: "5,000+",
  ordersPerMonth: "30,000+",
  uptime: "99.5%",
  tierCoverage: "Metros to Tier-3",
  launchTime: "14 days"
} as const;

export const SERVICE_DESCRIPTIONS = {
  diagnostics: `Complete diagnostics network across ${COVERAGE_DATA.diagnostics.pincodes} pincodes with pathology, radiology, cardiac, and genetic testing.`,
  pharmacy: `Pharmacy delivery network across ${COVERAGE_DATA.pharmacy.pincodes} pincodes with cashless ordering and real-time tracking.`,
  consultation: `${COVERAGE_DATA.consultation.coverage} telemedicine platform with verified doctors and secure EMR integration.`,
  homeCare: `Home healthcare services across ${COVERAGE_DATA.homeCare.pincodes} pincodes including phlebotomy, nursing, and physiotherapy.`,
  emergency: `Emergency services in ${COVERAGE_DATA.emergency.coverage} with ambulance coordination and first responder networks.`
} as const;
