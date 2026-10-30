# Philippines Tax Directory

A free directory and set of guided calculators for Philippine taxes: what you owe, which BIR form to file, and when. It runs entirely in the browser (no backend) and is part of [BetterGov.ph](https://www.bettergov.ph/).

> General information only, not tax advice. See the [disclaimer](#disclaimer).

## What's in it

### Tax calculators (`#/tax-calculators`)

| Group | Calculator | What it does |
| --- | --- | --- |
| Direct taxes | **Income tax** | Guided form: who is filing → kind of income → period → amounts. Covers individuals, corporations, estates/trusts and withholding agents, graduated and 8% rates, RCIT/MCIT, credits, capital gains and selected final taxes. Shows the BIR forms to use and the filing deadline. Capital gains is also reachable from here. Estate and donor's tax are "coming soon". |
| Indirect taxes | **VAT** | Two tabs: *Add or remove 12% VAT* (price calculator) and *Filing VAT return* (a yes/no wizard that fills in the BIR Form 2550Q). |
| | **Percentage tax** | Quarterly return, BIR Form 2551Q. |
| | **Excise tax** | Alcohol, tobacco, petroleum, sweetened beverages and automobiles. |
| | **Documentary stamp tax** | Common instruments: loans, property sales, leases, shares, insurance. |
| Customs | **Customs duty** | Duty estimate from a tariff lookup. |

### Reference sections

Taxpayer categories, a BIR forms library, a filing calendar, tax rates and tables, and FAQs.

## Getting started

Requires Node.js 22 (the version CI uses) and npm.

```bash
git clone https://github.com/<your-username>/ph-tax-directory.git
cd ph-tax-directory
npm install
npm run dev        # http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm test` | Run all calculation and data tests |
| `npm run lint` | ESLint |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

Stack: Vite, React 18, TypeScript, Tailwind CSS, `react-router-dom` (hash routing, so it works on static hosting).

## How the project is organized

```
src/
  components/   Screens and calculators (IncomeTaxCalculator, VATFilingWizard, ...)
    calc/       Shared calculator pieces: MoneyInput, CalcSection, result panels
  data/         Rates, rules, form lists, glossary, FAQs (no logic)
  utils/        Calculation logic: pure TypeScript, no React
  types/        Shared types
tests/          Node test files (*.test.cjs)
docs/           Design notes and BIR form references
```

## How taxes are calculated

**All calculation lives in `src/utils/` and is pure TypeScript with no React imports.** Components only collect input and display the result. That is what makes the tests possible and keeps the numbers auditable.

| Tax | Logic | Rates and rules |
| --- | --- | --- |
| Income tax | `utils/incomeTaxCalculator.ts`; fields per case in `incomeTaxFields.ts`; periods, deadlines and forms in `incomeTaxPeriods.ts` | `data/incomeTax.ts` (taxpayers, classifications, income routes), `data/taxRules.ts` (brackets) |
| VAT return (2550Q) | `utils/vatReturn.ts` | The 2550Q fields are listed in `VAT_FIELDS`, keyed by the form's own item numbers |
| VAT wizard questions | `utils/vatWizard.ts` | Maps each yes/no question to the `VAT_FIELDS` it reveals |
| Add/remove 12% VAT | `utils/taxCalculator.ts` | |
| Percentage tax | `utils/percentageTax.ts` | `data/percentageTax.ts` |
| Excise | `utils/excise.ts` | `data/excise.ts` |
| Documentary stamp tax | `utils/dst.ts` | `data/dst.ts` |

Conventions:

- **Indirect-tax amounts are `bigint` centavos** (`utils/money.ts`), so rates apply without floating-point error. Use `parseAmount`, `half` (round half up), `ceilDiv` and `formatPesos` from there.
- **Income tax** works in whole pesos like the BIR forms, and parses decimal text exactly (`exactCents`).
- Result lines carry the **BIR form item number** where one exists, so users can copy answers onto the return.
- Each rate or rule should cite its legal basis or BIR source in a comment or in `data/`.

Background reading: [docs/tax-calculator-design.md](docs/tax-calculator-design.md) (the income tax design, calculation rules and worked examples), [docs/income-tax-forms.md](docs/income-tax-forms.md) (forms, periods and filing roles) and [docs/implementation-review.md](docs/implementation-review.md) (what is covered and what is out of scope).

## Tests

Tests are in [`tests/`](tests) and run with Node's built-in runner (`npm test`). There is no Jest or Vitest and no component tests. Each file compiles the TypeScript it needs with `tsc` into a temp folder, then `require`s it, which is why calculation code must not import React.

| File | Covers |
| --- | --- |
| `incomeTaxReturn.test.cjs` | Income tax: classifications, periods, brackets, credits, forms, deadlines |
| `vatReturn.test.cjs` | VAT return (2550Q) computation and amount parsing |
| `vatWizard.test.cjs` | Every 2550Q field belongs to exactly one wizard question |
| `vat.test.cjs` | VAT situations, form references, FAQ and glossary cross-checks |
| `indirectTax.test.cjs` | Percentage tax, excise and documentary stamp tax |
| `taxCalculator.test.cjs` | Add/remove 12% VAT |

To run one file: `node --test tests/vatReturn.test.cjs`.

## Contributing

Corrections to rates, deadlines and forms are the most valuable contributions. Please include a source (a law, BIR issuance, revenue regulation or the form's own instructions).

1. Fork the repo and create a branch (`git checkout -b fix/excise-rate`).
2. Change the code. For a calculation change, update the logic in `src/utils/`, the rates in `src/data/`, and **add or update a test** in `tests/` with the expected figure and where it comes from.
3. Run `npm test`, `npm run lint` and `npm run build`. All three must pass.
4. Open a pull request describing what changed and the source for any tax rule. Screenshots help for UI changes.

Tips:

- **Adding a calculator:** put the logic in `src/utils/`, rates in `src/data/`, build the screen from `src/components/calc/CalcParts.tsx` (see `PercentageTaxCalculator.tsx` as a model), register it in `IndirectTaxes.tsx` or `TaxDirectory.tsx`, and add a test file.
- **Adding a BIR form:** add it to `src/data/birForms.ts`; `tests/vat.test.cjs` checks that referenced forms exist.
- **Plain language:** keep wording simple and add unfamiliar terms to `src/data/taxGlossary.ts`.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md). Report security issues as described in [SECURITY.md](SECURITY.md).

## Deployment

Pushing to `main` deploys the site to GitHub Pages through `.github/workflows/github-pages.yml`, which runs lint, tests and the build first. A separate workflow deploys to Azure Static Web Apps.

## Disclaimer

This platform is intended for general informational and educational purposes only. It does not provide official tax, legal, or financial advice and should not be relied upon as a substitute for guidance from the Bureau of Internal Revenue (BIR) or a licensed professional. For advice specific to your situation, please consult the appropriate government agency or a qualified tax advisor.

## License

See [LICENSE](LICENSE). This project is part of [BetterGov.ph](https://www.bettergov.ph/).

## Related links

- [Bureau of Internal Revenue (BIR)](https://www.bir.gov.ph/)
- [BetterGov.ph](https://www.bettergov.ph/)
