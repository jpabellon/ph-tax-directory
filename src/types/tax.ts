export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
  baseAmount: number;
}

export type IncomePeriod = 'annual' | 'monthly';

export type CompensationTaxpayer = 'resident-citizen' | 'non-resident-citizen' | 'resident-alien';

export interface TaxCalculation {
  annualTaxableIncome: number;
  monthlyTaxEquivalent: number;
  annualTax: number;
  marginalRate: number;
  effectiveRate: number;
  bracketMinimum: number;
  baseTax: number;
  excessIncome: number;
  taxOnExcess: number;
}

export interface TariffItem {
  ahtn: string;
  description: string;
  rate: number;
}

export interface CustomsCalculation {
  goods: {
    ahtnCode: string;
    description: string;
    rateOfDuty: number;
  };
  dutiableValue: {
    fobFcaValue: number;
    freight: number;
    insurance: number;
    totalDutiableValueForeign: number;
    exchangeRate: number;
    totalDutiableValuePHP: number;
  };
  charges: {
    customsDuty: number;
    exciseTax: number;
    brokerageFee: number;
    importProcessingCharge: number;
    birDocumentaryStampTax: number;
    customsDocumentaryStamp: number;
    totalLandedCost: number;
  };
  summary: {
    customsDuty: number;
    vat: number;
    exciseTax: number;
    importProcessingCharge: number;
    birDocumentaryStampTax: number;
    customsDocumentaryStamp: number;
    totalTaxAmount: number;
  };
}

export type TaxType =
  | 'income'
  | 'compensation'
  | 'vat'
  | 'customs';

export interface TaxTypeInfo {
  id: TaxType;
  name: string;
  description: string;
  rate?: string;
  applicableTo: string;
}

export const TAX_TYPES: TaxTypeInfo[] = [
  {
    id: 'income',
    name: 'Income Tax',
    description: 'Individual, business, corporate and investment income',
    rate: 'By taxpayer & income type',
    applicableTo: 'Individuals, entities and withholding agents'
  },
  {
    id: 'vat',
    name: 'Value Added Tax (VAT)',
    description: 'Tax on sale of goods and services',
    rate: '12%',
    applicableTo: 'VAT-registered businesses'
  },
  {
    id: 'customs',
    name: 'Customs Duty & Import Tax (Beta)',
    description: 'BOC Tax Estimator for imported goods via express couriers',
    rate: 'Variable',
    applicableTo: 'Importers and express shipments'
  }
];
