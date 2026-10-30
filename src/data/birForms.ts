import { BIRForm } from '../types/directory';

export const BIR_FORMS: BIRForm[] = [
  {
    "formNumber": "1700",
    "title": "Annual compensation income return",
    "description": "Pure compensation and eligible ordinary non-business income. Check substituted filing and exemptions before deciding that a return is required.",
    "category": "individual",
    "frequency": "annually",
    "role": "Individual, if self-filing is required",
    "dueDate": "April 15 following the calendar year",
    "applicableTo": [
      "Individual, if self-filing is required"
    ],
    "instructions": [
      "Consolidate applicable annual taxable income and 2316 certificates.",
      "Apply the applicable classification and graduated or NRANETB treatment.",
      "Deduct eligible withholding and credits once."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1700%20Jan%202018%20ENCS%20v6.pdf",
    "relatedForms": [
      "2316"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1701",
    "title": "Annual individual / mixed-income return",
    "description": "Business, professional, mixed-income and relevant estate/trust cases, including itemized and multiple-regime routes.",
    "category": "individual",
    "frequency": "annually",
    "role": "Individual / fiduciary",
    "dueDate": "April 15 following the calendar year",
    "applicableTo": [
      "Individual / fiduciary"
    ],
    "instructions": [
      "Reconcile compensation and business income for the whole year.",
      "Separate final-tax income and verify the elected deduction method.",
      "Deduct quarterly payments and eligible annual credits."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1701%20Jan%202018%20final%20with%20rates.pdf",
    "relatedForms": [
      "1701Q",
      "2316",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1701A",
    "title": "Annual pure business / profession return",
    "description": "Pure business/profession using graduated rates with OSD or eligible elected 8%; excludes mixed-income and itemized-deduction cases.",
    "category": "individual",
    "frequency": "annually",
    "role": "Eligible individual",
    "dueDate": "April 15 following the calendar year",
    "applicableTo": [
      "Eligible individual"
    ],
    "instructions": [
      "Confirm pure business income and the elected treatment.",
      "Use sales-based OSD or eligible 8% computation.",
      "Reconcile quarterly payments and credits."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1701A%20Jan%202018%20v5%20with%20rates.pdf",
    "relatedForms": [
      "1701Q",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1701-MS",
    "title": "Annual micro / small taxpayer return",
    "description": "Simplified annual route subject to registered size and activity/regime restrictions. Two or more activities or multiple regimes/rates require 1701.",
    "category": "individual",
    "frequency": "annually",
    "role": "Eligible registered micro/small individual / fiduciary",
    "dueDate": "April 15 following the calendar year",
    "applicableTo": [
      "Eligible registered micro/small individual / fiduciary"
    ],
    "instructions": [
      "Check registered micro/small status and the official eligibility instructions.",
      "Verify activity count and tax regimes before selecting this form.",
      "eBIRForms 7.9.6 support was introduced by RMC 37-2026."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/BIR/pdf/1701-MS%20August%202024%20Fillable_01.pdf",
    "relatedForms": [
      "1701",
      "1701A",
      "1701Q"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026",
    "guidanceUrl": "https://bir-cdn.bir.gov.ph/BIR/pdf/1701-MS%20Guide%20August%202024%20ENCS_Final.pdf"
  },
  {
    "formNumber": "1701Q",
    "title": "Quarterly individual / fiduciary income return",
    "description": "Cumulative business income through the selected quarter. Compensation is excluded and reconciled annually. No Q4 1701Q.",
    "category": "individual",
    "frequency": "quarterly",
    "role": "Applicable business/professional individual / fiduciary",
    "dueDate": "Q1 May 15; Q2 August 15; Q3 November 15",
    "applicableTo": [
      "Applicable business/professional individual / fiduciary"
    ],
    "instructions": [
      "Use year-to-date income, not an annualized quarter.",
      "Apply graduated rates or eligible elected 8% to the cumulative base.",
      "Deduct prior-quarter cash payments and eligible cumulative credits once."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1701Q%20Jan%202018%20final%20rev2_copy.pdf",
    "relatedForms": [
      "1701",
      "1701A",
      "1701-MS",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1702-RT",
    "title": "Annual regular corporate income return",
    "description": "Annual regular-income route, including applicable RCIT/MCIT reconciliation. Calendar or fiscal year.",
    "category": "business",
    "frequency": "annually",
    "role": "Regular-tax corporation / taxable entity",
    "dueDate": "15th day of fourth month after taxable-year close",
    "applicableTo": [
      "Regular-tax corporation / taxable entity"
    ],
    "instructions": [
      "Compute full-year regular tax and applicable MCIT.",
      "Use current rates; older form print may show superseded rates.",
      "Reconcile quarterly payments, withholding and permitted carryovers."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1702-RT%20Jan%202018%20ENCS%20Final%20v3.pdf",
    "relatedForms": [
      "1702Q",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1702-EX",
    "title": "Annual exempt-entity / GPP return",
    "description": "Exempt/pass-through income-information route where legally applicable, with no other taxable income.",
    "category": "business",
    "frequency": "annually",
    "role": "Qualified exempt entity / applicable GPP",
    "dueDate": "15th day of fourth month after taxable-year close",
    "applicableTo": [
      "Qualified exempt entity / applicable GPP"
    ],
    "instructions": [
      "Confirm the legal exemption and scope of activities.",
      "Do not choose EX automatically if taxable activities exist.",
      "Disclose GPP allocations and required financial information where applicable."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1702-EX%20Jan%202018%20ENCS%20v2.pdf",
    "relatedForms": [
      "1702-MX"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1702-MX",
    "title": "Annual special / multiple-rate corporate return",
    "description": "Separate special/preferential, regular and exempt activity computations. Corporate mixed rates differ from individual mixed income.",
    "category": "business",
    "frequency": "annually",
    "role": "Corporate/entity filer with special or multiple regimes",
    "dueDate": "15th day of fourth month after taxable-year close",
    "applicableTo": [
      "Corporate/entity filer with special or multiple regimes"
    ],
    "instructions": [
      "Verify approved incentive or preferential treatment and dates.",
      "Calculate each activity on its own correct base.",
      "Consolidate eligible liabilities and credits without mixing bases."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1702-MX%20Jan%202018%20ENCS%20Final%20with%20OSDv2.pdf",
    "relatedForms": [
      "1702Q",
      "1702-RT"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1702Q",
    "title": "Quarterly corporate income return",
    "description": "Cumulative regular and applicable special-activity computations. Fiscal quarters follow the entity year. No Q4 1702Q.",
    "category": "business",
    "frequency": "quarterly",
    "role": "Applicable taxable corporation / entity",
    "dueDate": "Within 60 days after each of the first three taxable quarters",
    "applicableTo": [
      "Applicable taxable corporation / entity"
    ],
    "instructions": [
      "Identify calendar/fiscal year and quarter-end.",
      "Compare cumulative RCIT and MCIT where applicable.",
      "Reconcile prior payments and permitted cumulative credits."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1702Q%202018ENCS%20final2.pdf",
    "relatedForms": [
      "1702-RT",
      "1702-MX",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1706",
    "title": "Real-property capital gains return",
    "description": "Transaction-based capital-asset treatment. Ordinary assets and foreign-corporate sellers need different classification checks.",
    "category": "capital-gains",
    "frequency": "as-needed",
    "role": "Qualifying seller of Philippine capital-asset property",
    "dueDate": "Within 30 days after transfer; qualifying installments have receipt-based schedules",
    "applicableTo": [
      "Qualifying seller of Philippine capital-asset property"
    ],
    "instructions": [
      "Confirm Philippine property, capital-asset status and seller eligibility.",
      "Use the highest applicable price or fair market value.",
      "Check exemptions and installment requirements."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1706%20Jan%202018%20ENCS%20Final%20version.pdf",
    "relatedForms": [
      "1606"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1707",
    "title": "Unlisted-share transaction capital gains return",
    "description": "Transaction CGT on eligible net gains. Current foreign-share law and older form wording require separate filing confirmation.",
    "category": "capital-gains",
    "frequency": "as-needed",
    "role": "Qualifying seller of covered unlisted shares",
    "dueDate": "Within 30 days after transaction; qualifying installments have separate schedules",
    "applicableTo": [
      "Qualifying seller of covered unlisted shares"
    ],
    "instructions": [
      "Confirm issuer, exchange status and capital-asset treatment.",
      "Deduct allowable basis and transaction costs.",
      "Retain transaction tax payments for annual consolidation."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1707%20April%202021%20ENCS.pdf",
    "relatedForms": [
      "1707-A"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1707-A",
    "title": "Annual unlisted-share capital gains return",
    "description": "Annual gain/loss consolidation and reconciliation of transaction CGT already paid.",
    "category": "capital-gains",
    "frequency": "annually",
    "role": "Individual or corporate seller of covered shares",
    "dueDate": "Individuals: April 15 next year; corporations: 15th day of fourth month after year close",
    "applicableTo": [
      "Individual or corporate seller of covered shares"
    ],
    "instructions": [
      "Aggregate permitted capital gains and losses.",
      "Apply the applicable capital gains rate.",
      "Credit transaction tax payments; do not charge tax twice on the same gain."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1707-A%20April%202021%20ENCS.pdf",
    "relatedForms": [
      "1707"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Income+Tax+Return",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1601-C",
    "title": "Monthly compensation-tax remittance",
    "description": "Remit actual payroll tax withheld, including proper adjustments. This is the employer’s return, not an employee’s monthly ITR.",
    "category": "withholding",
    "frequency": "monthly",
    "role": "Employer / payroll withholding agent",
    "dueDate": "Non-eFPS: 10th following month; December: January 15; eFPS group rules apply",
    "applicableTo": [
      "Employer / payroll withholding agent"
    ],
    "instructions": [
      "Aggregate actual income tax withheld from payroll.",
      "Reconcile adjustments and prior remittances.",
      "Use the correct filing-channel deadline."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1601C%20final%20Jan%202018%20with%20DPA.pdf",
    "relatedForms": [
      "1604-C",
      "2316"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "0619-E",
    "title": "Monthly expanded-withholding remittance",
    "description": "Monthly remittance feeding the expanded-withholding quarterly reconciliation.",
    "category": "withholding",
    "frequency": "monthly",
    "role": "Payor / expanded-withholding agent",
    "dueDate": "First two months each calendar quarter; 10th following month for non-eFPS, eFPS group rules apply",
    "applicableTo": [
      "Payor / expanded-withholding agent"
    ],
    "instructions": [
      "Confirm payment category and withholding obligation.",
      "Remit covered month amounts.",
      "Include remittances once in 1601-EQ reconciliation."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/0619-E%20Jan%202018%20rev%20final.pdf",
    "relatedForms": [
      "1601-EQ",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "0619-F",
    "title": "Monthly final-withholding remittance",
    "description": "Covered monthly final-tax remittances; specialized categories may require a different form.",
    "category": "withholding",
    "frequency": "monthly",
    "role": "Payor / final-withholding agent",
    "dueDate": "First two months each calendar quarter; 10th following month for non-eFPS, eFPS group rules apply",
    "applicableTo": [
      "Payor / final-withholding agent"
    ],
    "instructions": [
      "Verify recipient classification and income category.",
      "Use current final-tax treatment and eligibility.",
      "Reconcile these remittances on the appropriate quarterly return."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/0619-F%20Jan%202018%20rev%20final.pdf",
    "relatedForms": [
      "1601-FQ",
      "2306"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1601-EQ",
    "title": "Quarterly expanded-withholding return",
    "description": "Quarter-only withholding reconciliation, including Q4. Not the cumulative graduated business-income calculation.",
    "category": "withholding",
    "frequency": "quarterly",
    "role": "Payor / expanded-withholding agent",
    "dueDate": "Last day of month following the calendar quarter",
    "applicableTo": [
      "Payor / expanded-withholding agent"
    ],
    "instructions": [
      "Aggregate covered payments and withholding for this quarter.",
      "Deduct earlier remittances once.",
      "Issue applicable creditable-withholding certificates."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1601-EQ%20January%202019%20ENCS%20final.pdf",
    "relatedForms": [
      "0619-E",
      "1604-E",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1601-FQ",
    "title": "Quarterly final-withholding return",
    "description": "Covered dividends, royalties and other final-tax payments. Deposit-interest and fringe-benefit remittances have specialized returns.",
    "category": "withholding",
    "frequency": "quarterly",
    "role": "Payor / final-withholding agent",
    "dueDate": "Last day of month following the calendar quarter",
    "applicableTo": [
      "Payor / final-withholding agent"
    ],
    "instructions": [
      "Classify payment and recipient before selecting the rate.",
      "Reconcile this quarter’s withholding and prior remittances.",
      "Use 1602Q/1603Q where those categories apply."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1601-FQ%202020%20final.pdf",
    "relatedForms": [
      "0619-F",
      "1602Q",
      "1603Q",
      "1604-F",
      "2306"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1602Q",
    "title": "Quarterly deposit-interest final-tax remittance",
    "description": "Final withholding on covered deposit interest and similar yields; not generic 1601-FQ.",
    "category": "withholding",
    "frequency": "quarterly",
    "role": "Covered bank / financial institution",
    "dueDate": "Last day of month following the calendar quarter",
    "applicableTo": [
      "Covered bank / financial institution"
    ],
    "instructions": [
      "Verify recipient and deposit/instrument treatment.",
      "Check pre-July-2025 grandfathering where relevant.",
      "Reconcile covered interest withholding for the quarter."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1602Q%20Jan%202019.pdf",
    "relatedForms": [
      "1604-F",
      "2306"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1603Q",
    "title": "Quarterly fringe-benefit tax remittance",
    "description": "Employer-borne final tax on covered fringe benefits of employees other than rank and file.",
    "category": "withholding",
    "frequency": "quarterly",
    "role": "Employer providing covered taxable benefits",
    "dueDate": "Last day of month following the calendar quarter",
    "applicableTo": [
      "Employer providing covered taxable benefits"
    ],
    "instructions": [
      "Establish taxable fringe-benefit eligibility.",
      "Apply the proper monetary valuation, gross-up and rate.",
      "Remit covered quarterly liability."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1603Q%20Jan%202018%20final.pdf",
    "relatedForms": [
      "1604-F"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1606",
    "title": "Ordinary-asset property withholding remittance",
    "description": "Withholding on covered ordinary-asset property transfers; not capital-asset 1706 CGT.",
    "category": "withholding",
    "frequency": "as-needed",
    "role": "Buyer / withholding agent",
    "dueDate": "Baseline: 10th following the transaction month",
    "applicableTo": [
      "Buyer / withholding agent"
    ],
    "instructions": [
      "Confirm ordinary-asset classification.",
      "Verify the applicable withholding category and base.",
      "Retain evidence for the seller’s permitted income-tax credit."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1606%20Jan%202018%20ENCS%20Final%20version.pdf",
    "relatedForms": [
      "1706",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "2316",
    "title": "Compensation / tax-withheld certificate",
    "description": "Evidence supporting annual compensation reconciliation or qualified substituted filing. Not a tax return.",
    "category": "certificate",
    "frequency": "annually",
    "role": "Employer issues to employee",
    "dueDate": "January 31 next year; on termination, last wage-payment date",
    "applicableTo": [
      "Employer issues to employee"
    ],
    "instructions": [
      "Obtain one from each applicable employer.",
      "Check annual taxable compensation and tax actually withheld.",
      "Avoid duplicate prior-employer figures transferred through payroll."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/2316%20Sep%202021%20ENCS_Final_corrected.pdf",
    "relatedForms": [
      "1700",
      "1701"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Certificates",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "2307",
    "title": "Creditable tax-withheld certificate",
    "description": "Evidence for eligible income-tax credits. The certificate may also contain non-income-tax withholding: distinguish those amounts.",
    "category": "certificate",
    "frequency": "quarterly",
    "role": "Payor issues to income recipient",
    "dueDate": "Income EWT: within 20 days after quarter close; with payment on payee request",
    "applicableTo": [
      "Payor issues to income recipient"
    ],
    "instructions": [
      "Match income-tax credits to the correct period and recipient.",
      "Claim supported credits once.",
      "Do not mix VAT/percentage-tax withholding with income-tax credits."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/2307%20Jan%202018%20ENCS%20v3.pdf",
    "relatedForms": [
      "1701Q",
      "1702Q"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Certificates",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "2306",
    "title": "Final tax-withheld certificate",
    "description": "Evidence of final withholding. The catalogue still displays January 31; the amended regulation specifies quarterly statements. Not a generic ordinary-income credit.",
    "category": "certificate",
    "frequency": "quarterly",
    "role": "Payor issues to recipient",
    "dueDate": "RR 11-2018: within 20 days after quarter close; catalogue timing conflict requires confirmation",
    "applicableTo": [
      "Payor issues to recipient"
    ],
    "instructions": [
      "Confirm the applicable issuance timing with the governing rule.",
      "Keep final-tax income separate from ordinary taxable income.",
      "Do not automatically credit final tax against regular income tax."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/2306%20Jan%202018%20ENCS%20v4.pdf",
    "relatedForms": [
      "1601-FQ",
      "1602Q"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Certificates",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1604-C",
    "title": "Annual compensation-withholding information return",
    "description": "Annual information reporting; not an additional income-tax charge.",
    "category": "withholding",
    "frequency": "annually",
    "role": "Employer / withholding agent",
    "dueDate": "January 31 following the calendar year",
    "applicableTo": [
      "Employer / withholding agent"
    ],
    "instructions": [
      "Reconcile annual compensation and tax withheld.",
      "Prepare the required alphalist.",
      "Match employee certificates and monthly remittances."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1604-C%20Jan%202018%20Final.pdf",
    "relatedForms": [
      "1601-C",
      "2316"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1604-F",
    "title": "Annual final-withholding information return",
    "description": "Annual final-tax information reporting for covered payments.",
    "category": "withholding",
    "frequency": "annually",
    "role": "Final-withholding agent",
    "dueDate": "January 31 following the calendar year",
    "applicableTo": [
      "Final-withholding agent"
    ],
    "instructions": [
      "Reconcile quarterly final-tax returns.",
      "Prepare applicable payee information.",
      "Retain remittance and certificate evidence."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1604-F%20Jan%202018%20Final%202.pdf",
    "relatedForms": [
      "1601-FQ",
      "1602Q",
      "1603Q",
      "2306"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  },
  {
    "formNumber": "1604-E",
    "title": "Annual expanded-withholding information return",
    "description": "Annual information on expanded withholding and covered exempt payments.",
    "category": "withholding",
    "frequency": "annually",
    "role": "Expanded-withholding agent",
    "dueDate": "March 1 following the calendar year",
    "applicableTo": [
      "Expanded-withholding agent"
    ],
    "instructions": [
      "Reconcile quarterly returns and certificates.",
      "Prepare applicable payee information.",
      "Separate exempt payments from taxes withheld."
    ],
    "downloadUrl": "https://bir-cdn.bir.gov.ph/local/pdf/1604E%20Jan%202018%20ENCS%20Final2.pdf",
    "relatedForms": [
      "1601-EQ",
      "2307"
    ],
    "sourceUrl": "https://www.bir.gov.ph/bir-forms?tab=Payment%2FRemittance+Forms",
    "verifiedDate": "October 18, 2026"
  }
];

export const FORM_BY_NUMBER = BIR_FORMS.reduce<Record<string, BIRForm>>((forms, form) => {
  forms[form.formNumber] = form;
  return forms;
}, Object.create(null) as Record<string, BIRForm>);
