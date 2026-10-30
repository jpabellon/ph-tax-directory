const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = mkdtempSync(path.join(tmpdir(), 'ph-tax-vat-wizard-'));
after(() => rmSync(output, { recursive: true, force: true }));
execFileSync(process.execPath, [
  path.join(root, 'node_modules/typescript/bin/tsc'),
  '--outDir', output, '--module', 'commonjs', '--target', 'ES2020', '--skipLibCheck', 'src/utils/vatWizard.ts',
], { cwd: root });
const { VAT_QUESTIONS, questionKeys, questionFilled, clearQuestion } = require(path.join(output, 'vatWizard.js'));
const { VAT_FIELDS } = require(path.join(output, 'vatReturn.js'));

test('every VAT return field belongs to exactly one question, in its own section', () => {
  const owners = {};
  for (const q of VAT_QUESTIONS) for (const key of q.fields) {
    assert.equal(owners[key], undefined, `${key} is in two questions`);
    owners[key] = q;
  }
  for (const f of VAT_FIELDS) {
    assert.ok(owners[f.key], `${f.key} has no question`);
    assert.equal(owners[f.key].section, f.section, `${f.key} is in the wrong section`);
  }
  assert.deepEqual(Object.keys(owners).sort(), VAT_FIELDS.map(f => f.key).sort());
});

test('purchase questions also own the input-tax box beside the amount', () => {
  const q = VAT_QUESTIONS.find(x => x.id === 'buyDomestic');
  assert.deepEqual(questionKeys(q), ['domesticPurchases', 'domesticTax']);
});

test('questionFilled and clearQuestion only touch their own amounts', () => {
  const q = VAT_QUESTIONS.find(x => x.id === 'buyDomestic');
  const values = { domesticTax: '120', vatableSales: '1000' };
  assert.equal(questionFilled(q, values), true);
  assert.equal(questionFilled(q, { vatableSales: '1000' }), false);
  assert.deepEqual(clearQuestion(q, values), { vatableSales: '1000' });
});
