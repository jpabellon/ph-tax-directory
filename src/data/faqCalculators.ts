import { FAQ } from '../types/directory';

export type FaqCalculator = 'vat' | 'percentage' | 'excise' | 'dst' | 'income' | 'withholding' | 'capital-gains';

export const FAQ_CALCULATORS: Record<FaqCalculator, { label: string; href: string }> = {
  vat: { label: 'VAT calculator', href: '#/tax-calculators/indirect?tax=vat' },
  percentage: { label: 'Percentage tax calculator', href: '#/tax-calculators/indirect?tax=percentage' },
  excise: { label: 'Excise tax calculator', href: '#/tax-calculators/indirect?tax=excise' },
  dst: { label: 'Documentary stamp tax calculator', href: '#/tax-calculators/indirect?tax=dst' },
  income: { label: 'Income tax calculator', href: '#/tax-calculators/income' },
  withholding: { label: 'Withholding tax calculator', href: '#/tax-calculators/income?taxpayer=withholding' },
  'capital-gains': { label: 'Capital gains tax calculator', href: '#/tax-calculators/income?taxpayer=individual&classification=resident-citizen&route=property' },
};

/** Calculators for a FAQ: the ones it names, otherwise the one for its tax topic. */
export function faqCalculators(faq: FAQ): FaqCalculator[] {
  if (faq.calculators) return faq.calculators;
  const topic = faq.taxType as FaqCalculator | undefined;
  return topic && topic in FAQ_CALCULATORS ? [topic] : [];
}
