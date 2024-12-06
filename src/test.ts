
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Inicializa o ambiente de teste
console.log('Iniciando o ambiente de teste...');
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
console.log('Ambiente de teste inicializado.');

// Lista manualmente os arquivos de teste
const tests = [
  './app/example.service.spec',
  './app/movies.service.spec',
  './app/list.component.spec',
];

console.log('Localizando arquivos de teste...');
tests.forEach((test) => {
  try {
    console.log(`Carregando o teste: ${test}`);
    require(test);
    console.log(`Teste carregado com sucesso: ${test}`);
  } catch (error) {
    console.error(`Erro ao carregar o teste ${test}:`, error);
  }
});
console.log('Processo de carregamento de testes concluído.');
