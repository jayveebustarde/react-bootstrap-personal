// Setup file for Vitest
// jest-dom adds custom matchers for asserting on DOM nodes
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock react-pdf
vi.mock('react-pdf', () => ({
  Document: () => null,
  Page: () => null,
  pdfjs: {
    GlobalWorkerOptions: {},
  },
}));

// Mock react-chrono
vi.mock('react-chrono', () => ({
  Chrono: vi.fn(() => null),
}));

// Mock window.scrollTo
global.scrollTo = vi.fn();

// Polyfill window.matchMedia if needed
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}
