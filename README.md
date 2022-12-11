# WCAG Audit Discussies in Nederland en Vlaanderen

Deze GitHub repository bevat Nederlandstalige discussies over hoe [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) en de succescriteria te interpreteren en toe te passen.

Iedereen kan een probleem of vraag voorleggen door een [issue te openen](https://github.com/WCAG-Audit-Discussions/NL-BE/issues).

De uitkomst met een samenvatting van de discussie wordt daarna vastgelegd in de GitHub pages van deze repository:

GitHub pages: [WCAG Audit Discussion in Nederland en Vlaanderen](https://wcag-audit-discussions.github.io/NL-BE/)

De uitkomst wordt per succescriterium uitgeschreven en gelabeld:

- 👎 Failed
- 👍 Passes
- 🤔 Unclear

Het doel is om discussies vast te leggen en ernaar te naar verwijzen bij onderzoeken en audits. Iedereen is vrij om issues te openen en mee te discussiëren.

## Discussies

Deze omgeving is voor discussie over het interpreteren van de WCAG succescriteria.

- Hoe interpreteer je de succescriteria van WCAG bij audits en consultancy?
- Wat zijn uitzonderingen?
- Hoe pas je de regels toe voor bijzondere constructies die je bij audits of reviews tegenkomt?

Heb je vragen of opmerkingen over WCAG zelf, dan is dit niet de goede plek.
Hiervoor kun je terecht op de [Fronteers Slack](https://fronteersnl.slack.com) in het kanaal **#accessibility**.

## Code of conduct

We zijn lief en respectvol voor elkaar en voor elkaars mening.

## Beheerders

- [Rian Rietveld](https://github.com/rianrietveld) van Level Level
- [Brian Bors](https://github.com/ShadowBB) van Stichting Accessibility
- [Jules Ernst](https://github.com/julezrulez) van 200OK
- [Hidde de Vries](https://github.com/hidde) van Hidde de Vries
- [Ronny Hendriks](https://github.com/Aircl0wn) van Toegankelijk Online
- [Roel Van Gils](https://github.com/roelvangils) van Eleven Ways (België)

## Bijdragen aan de GitHub Pages

In principe onderhouden de beheerders de GitHub Pages.

De pagina’s zijn gemaakt en worden bijgehouden met de [NPM module Eleventy](https://www.11ty.dev/docs/getting-started/). Voor een local install heb je [node.js](https://nodejs.org/en/) versie 10 of hoger nodig.

### Opzetten locale omgeving

Stappen:

1. Clone deze repository op een voor jouw geschikte plek. Bijvoorbeeld met het commando `gh repo clone WCAG-Audit-Discussions/NL-BE`.
2. Open een terminal-venster.
3. Ga de directory waarin je de repository hebt gecloned. Bijvoorbeeld: `cd NL-BE`.
4. Voer `npm install` uit.
5. Start Eleventy met `npm start`.

Er start dan een lokale webserver op met de GitHub pages http://localhost:8080

Wil je discussies wijzigen of toevoegen?

- Maak een nieuwe branch aan in Git.
- Maak je wijzigingen in de `NL-BE/src/` directory.
- De files met de discussies staan in `src/discussion/`, kijk bij een bestaande file over een discussie naar de opzet.
- Draai in de terminal, in de `NL-BE/` directory, `npm run build`.
- MMak een pull request aan, publiceer deze op GitHub en vraag om een review.

Een pull request moet door andere **1 reviewer worden goedgekeurd** voordat het gemerged kan worden.
