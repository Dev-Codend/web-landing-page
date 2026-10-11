import { test, expect } from '@playwright/test';

async function openForm(page) {
  if (page.viewportSize().width <= 1199) {
    await page.getByRole('button', { name: /Comienza aquí/ }).click();
  }
}

async function fillForm(page) {
  await page.getByRole('textbox', { name: 'Nombres', exact: true }).fill('Christian');
  await page.getByRole('textbox', { name: 'Apellidos', exact: true }).fill('Gutierrez');
  await page.getByRole('textbox', { name: 'DNI o carnet de extranjería' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('christian@example.com');
  await page.getByRole('textbox', { name: 'Celular' }).fill('999888777');
}

test('carga las secciones y los recursos sin errores', async ({ page }, testInfo) => {
  const errors = [];
  const failedAssets = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400) failedAssets.push(response.url());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('PÁGINAS WEB Y LANDING PAGES');
  await expect(page.getByRole('heading', { name: 'Soluciones web' })).toBeVisible();
  await expect(page.locator('.benefits__item')).toHaveCount(6);
  await expect(page.locator('.investment__installment')).toHaveCount(6);
  await expect(page.locator('.enrollment-panel__surface')).toBeVisible({ visible: page.viewportSize().width > 1199 });
  await page.screenshot({ path: testInfo.outputPath('landing.png'), fullPage: true });
  expect(errors).toEqual([]);
  expect(failedAssets).toEqual([]);
  expect(await page.evaluate(() => Boolean(window.jQuery))).toBe(false);
});

test('los carruseles avanzan, retroceden y vuelven al comienzo', async ({ page }) => {
  await page.goto('/');
  for (const label of ['Servicios de diseño web', 'Proyectos web']) {
    const carousel = page.getByRole('region', { name: label, exact: true });
    const position = carousel.locator('[aria-live]');
    await expect(position).toHaveText('1 de 2');
    await carousel.getByRole('button', { name: 'Siguiente' }).click();
    await expect(position).toHaveText('2 de 2');
    await expect(carousel.locator('.carousel__track')).not.toHaveClass(/animated/);
    await carousel.getByRole('button', { name: 'Siguiente' }).click();
    await expect(position).toHaveText('1 de 2');
    await expect(carousel.locator('.carousel__track')).not.toHaveClass(/animated/);
    await carousel.getByRole('button', { name: 'Anterior' }).press('ArrowLeft');
    await expect(position).toHaveText('2 de 2');
  }
});

test('términos se cierra con botón, Escape y fondo, restaurando el scroll', async ({ page }) => {
  await page.goto('/');
  await openForm(page);
  const initialOverflow = await page.evaluate(() => document.body.style.overflow);
  for (const method of ['button', 'escape', 'backdrop']) {
    await page.getByRole('button', { name: 'Términos y Condiciones', exact: true }).click();
    const dialog = page.getByRole('dialog', { name: 'Términos y condiciones', exact: true });
    await expect(dialog).toBeVisible();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
    if (method === 'button') await dialog.getByRole('button', { name: 'Cerrar términos y condiciones' }).click();
    if (method === 'escape') await page.keyboard.press('Escape');
    if (method === 'backdrop') {
      // The original terms panel fills the screen on narrow viewports.
      if (page.viewportSize().width > 836) await dialog.click({ position: { x: 5, y: 5 } });
      else await page.keyboard.press('Escape');
    }
    await expect(dialog).not.toBeVisible();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe(initialOverflow);
    await expect(page.getByRole('button', { name: 'Términos y Condiciones', exact: true })).toBeFocused();
  }
});

test('valida campos y aceptación antes de mostrar SweetAlert2 sin peticiones', async ({ page }) => {
  await page.goto('/');
  await openForm(page);
  const requests = [];
  page.on('request', (request) => {
    if (['fetch', 'xhr', 'document'].includes(request.resourceType())) requests.push(request.url());
  });
  await page.getByRole('button', { name: 'Enviar', exact: true }).click();
  await expect(page.locator('.swal2-popup')).toHaveCount(0);
  await fillForm(page);
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('correo-invalido');
  await page.getByRole('button', { name: 'Enviar', exact: true }).click();
  await expect(page.locator('.swal2-popup')).toHaveCount(0);
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('christian@example.com');
  await page.getByRole('checkbox', { name: 'Acepto Términos y Condiciones' }).uncheck();
  await page.getByRole('button', { name: 'Enviar', exact: true }).click();
  await expect(page.locator('.swal2-popup')).toHaveCount(0);
  await page.getByRole('checkbox', { name: 'Acepto Términos y Condiciones' }).check();
  await page.getByRole('button', { name: 'Enviar', exact: true }).click();
  await expect(page.getByRole('heading', { name: '¡Inscripción exitosa!' })).toBeVisible();
  if (page.viewportSize().width > 1199) {
    const layout = await page.evaluate(() => ({
      leftEdge: document.querySelector('.landing__content').getBoundingClientRect().right,
      rightEdge: document.querySelector('.enrollment-panel__surface').getBoundingClientRect().left,
      bodyPadding: getComputedStyle(document.body).paddingRight,
    }));
    expect(layout.leftEdge).toBeCloseTo(layout.rightEdge, 0);
    expect(layout.bodyPadding).toBe('0px');
  }
  await page.getByRole('button', { name: 'Aceptar', exact: true }).click();
  await expect(page.locator('.swal2-popup')).toHaveCount(0);
  await openForm(page);
  await expect(page.getByRole('textbox', { name: 'Nombres', exact: true })).toHaveValue('');
  expect(requests).toEqual([]);
});

test('el formulario conserva los datos al cerrar y al cambiar de tamaño', async ({ page }) => {
  await page.goto('/');
  await openForm(page);
  await page.getByRole('textbox', { name: 'Nombres', exact: true }).fill('Christian');
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator('.enrollment-panel')).toHaveJSProperty('tagName', 'DIALOG');
  if (!(await page.locator('.enrollment-panel__surface').isVisible())) await openForm(page);
  await page.getByRole('button', { name: 'Cerrar formulario' }).click();
  await expect(page.locator('.enrollment-panel__surface')).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  await openForm(page);
  await expect(page.getByRole('textbox', { name: 'Nombres', exact: true })).toHaveValue('Christian');
  await page.keyboard.press('Escape');
  await expect(page.locator('.enrollment-panel__surface')).not.toBeVisible();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.enrollment-panel__surface')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nombres', exact: true })).toHaveValue('Christian');
});

test('mantiene el bloqueo de scroll con términos abiertos al pasar de móvil a escritorio', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await openForm(page);
  await page.getByRole('button', { name: 'Términos y Condiciones', exact: true }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.enrollment-panel')).toHaveJSProperty('tagName', 'ASIDE');
  await expect(page.getByRole('dialog', { name: 'Términos y condiciones', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
});
