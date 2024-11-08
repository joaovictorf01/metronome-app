# Metrônomo Musical com Angular

## Como Rodar o Projeto Localmente

### Passo 1: Instalar as Dependências
Certifique-se de ter o Node.js instalado em seu sistema. Depois, clone o repositório do projeto e, na raiz do projeto, execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

### Passo 2: Rodar o Servidor de Desenvolvimento
Depois de instalar as dependências, rode o servidor de desenvolvimento utilizando o seguinte comando:

```bash
ng serve
```

### Passo 3: Acessar a Aplicação
Após o comando ser executado, a aplicação estará disponível em seu navegador no endereço padrão:

```
http://localhost:4200
```

## Funcionalidades do Metrônomo

- **Definir Tempo (BPM)**: O usuário pode definir o tempo em Batidas Por Minuto (BPM) utilizando o campo de entrada disponível.
- **Iniciar e Parar o Metrônomo**: Utilize os botões para iniciar e parar o metrônomo.
- **Tap Tempo**: Clique no botão `Tap Tempo` ou use o atalho para definir o BPM com base no tempo entre os toques.
- **Atalhos de Teclado**: Atalhos são disponibilizados para facilitar a operação do metrônomo:
  - `s`: Iniciar o metrônomo.
  - `p`: Parar o metrônomo.
  - `t`: Tap Tempo.

## Próximos Passos e Funcionalidades Futuras

Aqui estão algumas sugestões de melhorias e funcionalidades futuras para o metrônomo:

1. **Salvar Configurações de Tempo**: Adicionar a funcionalidade de salvar e restaurar configurações de tempo (BPM) para que o usuário possa retomar seu uso no mesmo ponto.
2. **Personalizar Sons do Metrônomo**: Implementar a possibilidade de escolher diferentes tipos de sons de clique (ex: som de madeira, som digital, etc.) para tornar o uso mais agradável e customizável.
3. **Controle de Volume**: Adicionar um controle de volume para ajustar o nível sonoro do clique do metrônomo.
4. **Modo de Compasso**: Incluir opções para escolher compassos diferentes (ex: 3/4, 4/4, etc.), permitindo que o metrônomo indique acentuações específicas para cada compasso.
5. **Histórico de Tap Tempo**: Registrar os últimos tempos obtidos pelo `Tap Tempo` para que o usuário possa visualizar e ajustar de acordo com suas preferências.
## Acessibilidade
O metrônomo foi desenvolvido para ser acessível, incluindo descrições (`aria-label`) para todos os botões, atributos `aria-live` para informar aos usuários sobre o estado da batida do metrônomo e atalhos de teclado para controle completo da aplicação sem o uso do mouse. Isso garante uma experiência de uso melhorada para todos os usuários, incluindo aqueles que utilizam tecnologias assistivas.
