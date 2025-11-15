# Тестування бібліотеки UI‑компонентів (React + Tailwind CSS + Storybook)

Цей документ описує підхід до тестування в проєкті «Розробка адаптивної та масштабованої бібліотеки UI‑компонентів з підтримкою конфігурації на основі технологій React, Tailwind CSS та Storybook: архітектурні рішення та підходи до забезпечення повторного використання коду».

Мета: гарантувати коректність, доступність та стабільність зовнішнього API компонентів, а також їх передбачуваний вигляд у різних станах і середовищах.

## Огляд стратегії тестування

- **Юніт‑тести (Vitest + Testing Library)**: швидка перевірка API, ролей/атрибутів, відмальовування та простих взаємодій.
- **Тести Storybook у браузері (addon‑vitest)**: рендер кожної історії в реальному браузері (Chromium) як «канонічний» сценарій використання компонента.
- **Візуальні тести (Playwright)**: регресійні скріншот‑порівняння Storybook‑історій, що виявляють будь‑які неочікувані зміни стилів/верстки.
- **Доступність (a11y)**: інтеграція Storybook addon‑a11y для автоматизованих перевірок.
- **Покриття тестами (coverage)**: збір покриття для орієнтації на ризикові ділянки (опційно).

Джерела/довідник:

- Тестування у Storybook: [Storybook Testing](https://storybook.js.org/docs/writing-tests)
- Візуальне тестування: [Visual testing](https://storybook.js.org/docs/writing-tests/visual-testing)

## Стек інструментів

- **Vitest** — тест‑раннер, інтегрований із Vite.
- **@testing-library/react** — декларативні тести ознак/поведінки з фокусов на користувацьких сценаріях.
- **@storybook/addon-vitest** — автоматичне перетворення історій у тести, запуск у браузері.
- **Playwright** — контроль браузера, зняття скріншотів, порівняння зі «золотими» зразками.
- **Storybook addon‑a11y** — автоматизовані перевірки доступності.
- **Tailwind CSS** — стилі компонентів; у тестах фіксуємо оточення (viewport, reduced motion), аби уникнути флаків.

## Структура тестів у репозиторії

- Юніт‑тести: `src/components/ui/**/__tests__/*.test.tsx`
- Історії: `src/components/ui/**/__stories__/*.stories.tsx`
- Візуальні тести: `tests/visual/*.visual.spec.ts`
- Налаштування Storybook: `.storybook/*`
- Налаштування Vitest: `vite.config.ts` (окремі проєкти `unit` і `storybook`)

## Юніт‑тести (Vitest + Testing Library)

Мета: швидка перевірка базових інваріантів кожного компонента.

Приклад (перевірка відмальовування та тексту):

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

Налаштування:

- Середовище: `jsdom` для юніт‑проєкту.
- Глобальні матчери: `@testing-library/jest-dom` підключено через `vitest.setup.ts` (або через `vite.config.ts` → `test.projects[].test.setupFiles`).

Запуск:

```bash
npm test                  # (за замовчуванням - юніт-проєкт)
npm run test:storybook    # тести історій у браузері
```

Рекомендації:

- Тестуйте публічне API: пропси, ролі, aria‑атрибути, класи за варіантами.
- Уникайте прив’язки до внутрішньої верстки, віддавайте перевагу пошуку за рольовими селекторами.

## Тести Storybook у браузері

Мета: перевірити реальні історії як «інтеграційні специ» компонентів. Вони відмальовуються в Chromium, що максимально наближає умови до реального переглядача.

Особливості:

- Автоматична трансформація історій у тести (плагін Storybook Test).
- Перевірка, що історія рендериться без помилок (render test).
- Підтримка interaction‑тестів через `play` (можна додати за потреби).

Приклад interaction‑тесту через `play` (ілюстративно):

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { Dialog } from "./Dialog";

const meta = { component: Dialog } satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Opens: Story = {
  play: async ({ canvas }) => {
    const c = within(canvas.container);
    await userEvent.click(c.getByRole("button", { name: /open/i }));
    expect(c.getByRole("dialog")).toBeInTheDocument();
  },
};
```

Запуск:

```bash
npm run test:storybook
```

## Візуальні тести (Playwright)

Мета: детектувати незаплановані зміни у вигляді (CSS/верстка). Кожна історія отримує скріншот, що порівнюється зі «золотим» зразком.

Організація:

- `playwright.config.ts` піднімає Storybook як `webServer` (порт 6007).
- `tests/visual/ui.visual.spec.ts` за списком ID історій відкриває `iframe.html?id=...` і порівнює скріншоти контейнера `#storybook-root`.
- Знімки зберігаються у `tests/visual/__screenshots__/...`.

Запуск (перший раз створюємо еталони):

```bash
npx playwright install --with-deps
npm run test:visual -- --update-snapshots
npm run test:visual
```

Стабільність:

- Фіксований viewport, headless, мінімальна кількість анімацій (можна додати `prefers-reduced-motion` стилі).
- Невеликий `waitForTimeout(200)` перед скріншотом для стабілізації layout.

## Доступність (a11y)

- У Storybook підключений addon‑a11y. На кожній історії можна швидко побачити порушення доступності (контраст, ролі, aria‑атрибути тощо).
- Рекомендовано регулярно переглядати панель a11y для ключових історій та виправляти порушення.

## Покриття тестами

- Збір покриття можна увімкнути флагом Vitest `--coverage` (або додати `@vitest/coverage-v8` у конфіг).
- Покриття дає індикатор проблемних зон, але метою не є 100%.

## Інтеграція у CI/CD (приклад)

GitHub Actions (скорочено):

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm test
      - run: npm run test:storybook
  visual:
    runs-on: ubuntu-latest
    container:
      image: mcr.microsoft.com/playwright:v1.52.0-noble
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:visual
```

## Практики та договірності

- **Структура**: одна історія «Default» для базового стану; додаткові історії для важливих варіантів/розмірів/станів.
- **Назви історій**: `UI/[Component]` для єдиної ієрархії в каталозі Storybook.
- **Юніт‑тести**: короткі, читабельні, без надмірного мокінгу. Фокус на API і поведінку, а не на внутрішню розмітку.
- **Візуальні тести**: знімки лише базових і ключових станів (уникати вибухового росту зразків).
- **Детермінізм**: у тестах не покладатися на випадкові значення, час/таймери/асинхронні події — усе фіксувати.
- **Швидкість**: відокремлюємо юніт‑тести (`npm test`) від браузерних (`npm run test:storybook`) та візуальних (`npm run test:visual`), щоб щоденні перевірки були швидкими.

## Команди

```bash
# Юніт‑тести (jsdom)
npm test

# Тести історій у браузері
npm run test:storybook

# Візуальні тести (створити/оновити зразки → прогін)
npx playwright install --with-deps
npm run test:visual -- --update-snapshots
npm run test:visual
```

## Висновки

Комбінування юніт‑, браузерних (через Storybook) та візуальних тестів забезпечує:

- контроль API та поведінки компонентів (юніт),
- гарантію працездатності «канонічних сценаріїв» з історій (storybook tests),
- стабільність зовнішнього вигляду при еволюції стилів (visual regression).

Ця стратегія добре масштабується: новий компонент отримує історії, мінімальний набір юніт‑тестів і, за потреби, візуальний знімок для «Default» стану. Це підтримує високу швидкість розробки та надійність бібліотеки під час інтеграції у різні продукти.
