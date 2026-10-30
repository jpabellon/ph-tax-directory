// Guided questions for the quarterly VAT return. Each yes/no question reveals only the 2550Q amounts
// it needs, so the calculator in vatReturn.ts is untouched: unanswered fields are blank, which count as zero.

import { VAT_FIELDS, VatSection, VatValues } from './vatReturn';

export interface VatQuestion {
  id: string;
  section: VatSection;
  question: string;
  /** One plain-language line under the question. */
  plain: string;
  /** Keys of the VAT_FIELDS this question reveals, in display order. */
  fields: string[];
}

export const VAT_QUESTION_SECTIONS: VatSection[] = ['sales', 'purchases', 'carried', 'deductions', 'credits', 'penalties'];

export const VAT_QUESTIONS: VatQuestion[] = [
  { id: 'sellDomestic', section: 'sales', question: 'Did you sell goods or services in the Philippines?', plain: 'Regular sales to customers here that carry 12% VAT.', fields: ['vatableSales'] },
  { id: 'sellAbroad', section: 'sales', question: 'Did you sell abroad or to a zero-rated buyer?', plain: 'For example exports, or services paid for in foreign currency. These are taxed at 0%.', fields: ['zeroRatedSales'] },
  { id: 'sellExempt', section: 'sales', question: 'Did you make any VAT-exempt sales?', plain: 'Sales the law leaves out of VAT, such as some farm products or education.', fields: ['exemptSales'] },
  { id: 'uncollected', section: 'sales', question: 'Did you adjust VAT on unpaid customer accounts?', plain: 'VAT on sales you could not collect, or later collected after deducting it.', fields: ['uncollectedOutput', 'recoveredOutput'] },

  { id: 'buyDomestic', section: 'purchases', question: 'Did you buy goods or services from VAT-registered sellers here?', plain: 'Purchases with a VAT invoice. The VAT on them is your input VAT.', fields: ['domesticPurchases'] },
  { id: 'buyImport', section: 'purchases', question: 'Did you import goods?', plain: 'Goods you brought in from abroad and paid VAT on at customs.', fields: ['importPurchases'] },
  { id: 'buyNonResident', section: 'purchases', question: 'Did you pay a foreign company for services?', plain: 'Services from someone outside the Philippines, where you paid the VAT.', fields: ['nonResidentPurchases'] },
  { id: 'buyOther', section: 'purchases', question: 'Any other purchases with input VAT?', plain: 'Anything with input VAT that does not fit the questions above.', fields: ['otherPurchases'] },
  { id: 'buyNoVat', section: 'purchases', question: 'Did you buy anything that carried no VAT?', plain: 'Purchases without VAT, or VAT-exempt imports. These are reported for information only.', fields: ['noInputPurchases', 'exemptImportations'] },

  { id: 'carriedOver', section: 'carried', question: 'Do you have extra input VAT from last quarter?', plain: 'When last quarter’s input VAT was more than your output VAT, you can carry the extra forward.', fields: ['carriedOver'] },
  { id: 'specialInput', section: 'carried', question: 'Do you have any other input VAT to claim?', plain: 'Deferred capital goods, transitional, presumptive or other input VAT.', fields: ['deferredCapital', 'transitional', 'presumptive', 'otherInput'] },

  { id: 'exemptInput', section: 'deductions', question: 'Do you also make VAT-exempt sales?', plain: 'Input VAT used for exempt sales cannot be claimed, so we remove it.', fields: ['exemptDirectInput', 'exemptSharedInput'] },
  { id: 'deferredCapital', section: 'deductions', question: 'Are you spreading VAT on big equipment over later periods?', plain: 'Capital goods above ₱1 million are claimed over time, not all at once.', fields: ['deferredForNext'] },
  { id: 'otherDeductions', section: 'deductions', question: 'Do you have other input VAT you cannot claim now?', plain: 'Refunds already claimed, unpaid bills, or other deductions.', fields: ['refundClaimed', 'unpaidPayables', 'otherDeductions', 'settledUnpaid'] },

  { id: 'withheld', section: 'credits', question: 'Did customers withhold VAT or did you pay advance VAT?', plain: 'For example government offices that deduct VAT before paying you.', fields: ['creditableWithheld', 'advanceVat'] },
  { id: 'otherCredits', section: 'credits', question: 'Any earlier payment or other credit for this quarter?', plain: 'VAT paid on an earlier version of this return, or other credits.', fields: ['previousPaid', 'otherCredits'] },

  { id: 'late', section: 'penalties', question: 'Are you filing late?', plain: 'Then enter the surcharge, interest and compromise that BIR or eBIRForms shows.', fields: ['surcharge', 'interest', 'compromise'] },
];

/** Every value key a question owns, including the input-tax box beside a purchase amount. */
export function questionKeys(q: VatQuestion): string[] {
  return q.fields.flatMap(key => {
    const field = VAT_FIELDS.find(f => f.key === key);
    return field?.taxKey ? [key, field.taxKey] : [key];
  });
}

/** True when the user already typed something for the question, so it should show as answered Yes. */
export function questionFilled(q: VatQuestion, values: VatValues): boolean {
  return questionKeys(q).some(key => (values[key] ?? '').trim() !== '');
}

/** Blanks the question's amounts, for when the user switches it to No. */
export function clearQuestion(q: VatQuestion, values: VatValues): VatValues {
  const next = { ...values };
  for (const key of questionKeys(q)) delete next[key];
  return next;
}
