<div align="center">

# 🎯 leads

**Formulário de captura de leads para corretora de seguros — projeto real de cliente**

[![Angular](https://img.shields.io/badge/Angular-19-dd0031)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

## 💡 O problema

Corretoras de seguros perdem prospects quando a captação depende só de telefone ou planilha. Este projeto — feito para um **cliente real** do meu trabalho como freelancer — é uma página de captura de leads: rápida, responsiva e pensada para **converter visitantes em contatos**.

## ✨ O que ele faz

- Formulário de captação com **validação reativa** (campos, formatos e feedback imediato ao usuário)
- Layout **responsivo mobile-first** — a maioria do tráfego de captação vem do celular
- **Sem framework de UI**: CSS próprio, bundle enxuto e carregamento rápido (crítico em páginas de conversão)
- **Pronto para IIS**: `Web.config` incluído com rewrite de URLs para SPA

## 🧰 Stack

`Angular 19` · `TypeScript` · `CSS` · `RxJS` · deploy em **IIS**

## 🚀 Como rodar

```bash
npm install
npm start        # ng serve → http://localhost:4200
```

## 📦 Build e deploy

```bash
npm run build    # gera dist/
```

O `Web.config` na raiz já resolve o roteamento SPA no IIS — a build é publicada diretamente no servidor de produção do cliente.

## 🧠 Decisões técnicas

- **Zero dependência de UI kit** — cada KB a mais na primeira carga derruba a conversão.
- **Formulário reativo do Angular** — validação centralizada e testável, longe da bagunça de validação por template.
- **Deploy em IIS** — o cliente já tinha infraestrutura Windows; o `Web.config` faz a SPA funcionar com URLs limpas.

## 🗺️ Roadmap

- [ ] Screenshots/GIF do formulário em produção
- [ ] Testes automatizados (unit + e2e)
- [ ] Score de Lighthouse documentado

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).
