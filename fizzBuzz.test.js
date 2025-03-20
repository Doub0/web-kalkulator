import { fizzBuzz } from './fizzBuzz.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fizzBuzz av 1 er 1', () => {
    assert.strictEqual(fizzBuzz(1), '1');
})
test('fizzBuzz av 3 er Fizz', () => {
    assert.strictEqual(fizzBuzz(3), 'Fizz');
})
test('fizzBuzz av 5 er Buzz', () => {
    assert.strictEqual(fizzBuzz(5), 'Buzz');
})
test('fizzBuzz av 15 er Fizzbuzz', () => {
    assert.strictEqual(fizzBuzz(15), 'Fizzbuzz');
})