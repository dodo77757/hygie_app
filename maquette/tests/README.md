# Tests de la maquette

Scénarios Playwright joués sur l'artboard `Main.dc.html` avec le moteur de Claude Design (`support.js`) et le bundle du design system StriveWell × Hygie, servis en local sur http://127.0.0.1:8765.

- `parcours-complet.js` : inscription et code, profil de départ (règles en kg et en lb), accueil, course, séance, ressenti, suivi, réservation kiné, agenda, annulation, assistant, profil, forfaits, compte, connexion et mot de passe oublié.
- `parcours-seance-assistant.js` : séance complète jusqu'à la fin automatique, premier praticien disponible, assistant, bilans, réservation d'un bilan.

Lancer : `NODE_PATH=$(npm root -g) node parcours-complet.js` depuis un dossier qui contient `Main.dc.html`, `support.js` (le `dc-runtime.js` du type Design) et `ds/strivewell/`.
