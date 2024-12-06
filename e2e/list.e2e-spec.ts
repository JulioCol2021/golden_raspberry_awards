
/**
 * Teste de ponta a ponta (E2E) para o componente ListComponent.
 * Verifica o comportamento da página e seus elementos principais.
 */

import { browser, by, element } from 'protractor';

describe('ListComponent E2E Test', () => {
  it('Deve navegar para a página de lista', async () => {
    await browser.get('/list'); // Navega para a URL da página
    expect(browser.getCurrentUrl()).toContain('/list'); // Verifica se a URL está correta
  });

  it('Deve exibir as linhas corretas na tabela', async () => {
    const rows = await element.all(by.css('table tbody tr')); // Seleciona todas as linhas da tabela
    expect(rows.length).toBeGreaterThan(0); // Verifica se há pelo menos uma linha
  });
});
