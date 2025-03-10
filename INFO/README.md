# web-kalkulator
Første steg besto av en node kjøring av Fakultet.js, som er udefinert som et skript.
' export function fakultet(tall) {
    return 120 // Not-yet-implemented
} '

Første test besto av at vi importerte fakultet.js funksjonen inn i et fakultet.test.js skript, som skal kalkulere hva enn verdi er plassert inn i fakultet funksjonen sammen med 120. Vi valgte 5. Resultatet av testen er ['IMAGES/exhibit_1']

Andre steg besto av at vi importerte fakultet funksjonen og fikk den til å kunne gjennomføre kalkulasjoner i Fakultet.test.js skriptet slik-

'   import { fakultet } from './fakultet.js';
    import test from 'node:test';
    import * as assert from "node:assert"; '

For å kjøre disse testene utfra hva som er gitt til fakultet funksjonen-

'   test('fakultet av negative tall er 1', () => {
        assert.strictEqual(fakultet(-5), 1);
    })
    test('fakultet av 0 er 1', () => {
        assert.strictEqual(fakultet(0), 1);
    })
    test('fakultet av 1 er 1', () => {
        assert.strictEqual(fakultet(1), 1);
    })
    test('fakultet av 2 er 2', () => {
        assert.strictEqual(fakultet(2), 2);
    })
    test('fakultet av 3 er 6', () => {
        assert.strictEqual(fakultet(3), 6);
    }) '

Resultatet av denne testen er ['IMAGES/exhibit_4'].