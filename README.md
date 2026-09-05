# leads

Formulário de captura de leads para uma corretora de seguros — projeto feito para um cliente do meu trabalho como freelancer.

## Sobre

Página de captação de contatos, pensada para carregar rápido e funcionar bem no celular. O `Web.config` na raiz deixa a build pronta para deploy em IIS.

## Tecnologias

- Angular 19 + TypeScript
- CSS próprio
- RxJS (formulário reativo)

## Funcionalidades

- formulário reativo com validação: nome (obrigatório, mínimo 3 caracteres), telefone (10 ou 11 dígitos) e e-mail
- layout responsivo
- build configurada para publicação em IIS

## Como executar

```bash
npm install
npm start   # http://localhost:4200
```

## Próximos passos

- adicionar prints da página
