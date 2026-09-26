const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errs = [];
  page.on('pageerror', e => errs.push('pageerror: ' + e.message.slice(0, 300)));
  page.on('console', m => { if (m.type() === 'error' && !/404/.test(m.text())) errs.push('console: ' + m.text().slice(0, 300)); });
  const W = (ms) => page.waitForTimeout(ms);
  const txt = async () => (await page.evaluate(() => document.body.innerText)).replace(/\s*\n\s*/g, ' | ');
  const click = async (t) => { try { await page.getByText(t, { exact: true }).first().click({ timeout: 2500 }); } catch (e) { try { await page.getByRole('button', { name: t }).first().click({ timeout: 2500 }); } catch (e2) { errs.push('CLICK FAIL: ' + t); } } await W(350); };
  const fill = async (sel, v) => { try { await page.locator(sel).first().fill(v); } catch (e) { errs.push('FILL FAIL ' + sel); } await W(150); };
  const shot = async (n) => page.screenshot({ path: 'f_' + n + '.png' });
  const log = async (label) => console.log('\n## ' + label + '\n' + (await txt()).slice(0, 700));
  await page.goto('http://127.0.0.1:8765/Main.dc.html'); await W(1500);

  // 1. Inscription
  await click('Créer un compte');
  await click('Créer mon compte'); await log('inscription vide');
  await fill('#inscription-nom', 'Camille Martin');
  await fill('#inscription-email', 'camille.martin@mail.fr');
  await fill('#inscription-mdp', 'motdepasse1');
  await fill('#inscription-mdp2', 'motdepasse2');
  await click('Créer mon compte'); await log('mdp différents');
  await fill('#inscription-mdp2', 'motdepasse1');
  await click('Créer mon compte'); await W(300); await log('code'); await shot('code');
  const boxes = page.locator('.sw-otp__box');
  const wrong = '1111';
  for (let i = 0; i < 4; i++) { await boxes.nth(i).fill(wrong[i]); }
  await W(200); await click('Vérifier'); await log('code faux');
  for (let i = 0; i < 4; i++) { await boxes.nth(i).fill('4821'[i]); }
  await W(200); await click('Vérifier'); await log('poids');
  const ruler = page.locator('.sw-ruler').first(); await ruler.focus();
  for (let i = 0; i < 6; i++) await page.keyboard.press('ArrowRight');
  await W(200); await log('poids +6'); await shot('poids');
  await click('lb'); await W(200); await log('poids en lb');
  await click('kg');
  await click('Suivant'); await log('taille');
  await click('Suivant'); await click('Préparer une compétition'); await log('objectif');
  await click('Commencer'); await W(300); await log('accueil'); await shot('accueil');

  // 2. Séance
  await click('Lancer'); await W(3200); await log('course 3 s'); await shot('course');
  await page.locator('.sw-run .sw-pause').first().click(); await W(300); await log('course pause');
  await click('Passer à la séance'); await W(2200); await log('seance 2 s'); await shot('seance');
  await page.locator('.sw-pause').first().click(); await W(300); await log('seance pause');
  await click('Terminer la séance'); await W(300); await log('reussite'); await shot('reussite');
  await click('Noter mon ressenti'); await log('ressenti');
  await page.locator('.sw-pain').first().getByText('8', { exact: true }).click(); await W(200);
  await fill('#ressenti-note', 'Genou droit sensible'); await log('ressenti rempli'); await shot('ressenti');
  await click('Envoyer'); await W(300); await log('suivi progres'); await shot('suivi');

  // 3. Suivi activité, accueil après séance
  await click('Activité'); await log('suivi activite'); await shot('suivi_activite');
  await page.getByRole('button', { name: 'Accueil' }).first().click(); await W(300); await log('accueil apres'); await shot('accueil2');

  // 4. Réservation
  await page.getByRole('button', { name: 'Prendre rendez-vous' }).first().click(); await W(300); await log('rdv soin');
  await click('Kinésithérapie et soins'); await click('Continuer'); await log('prestation');
  await click('Kinésithérapie'); await click('Continuer'); await log('praticien'); await shot('praticien');
  await click('Praticien Santé'); await click('Continuer'); await log('creneau');
  await page.locator('.sw-cal__day', { hasText: /^12$/ }).first().click(); await W(300); await log('jour 12'); await shot('creneau');
  const libre = page.locator('.sw-slot:not(.is-off)').first(); await libre.click(); await W(200);
  await click('Confirmer'); await W(300); await log('confirme'); await shot('confirme');
  await click('Voir mon agenda'); await W(300); await log('agenda'); await shot('agenda');
  await page.locator('.sw-card').first().click(); await W(300); await log('detail'); await shot('detail');
  await click('Annuler'); await W(200); await log('annulation ?');
  await click('Confirmer l’annulation'); await W(300); await log('agenda apres annulation');
  await page.getByRole('button', { name: 'Semaine suivante' }).first().click(); await W(300); await log('semaine suivante');

  // 5. Assistant
  await page.getByRole('button', { name: 'Accueil' }).first().click(); await W(200);
  await page.getByRole('button', { name: 'Parler à l’assistant Hygie' }).first().click(); await W(300);
  await click('Mon prochain rendez-vous'); await W(300);
  await fill('#composer-assistant', 'J’ai bu un verre d’eau'); await page.keyboard.press('Enter'); await W(300);
  await log('assistant'); await shot('assistant');
  await click('Déplacer un rendez-vous'); await W(1800); await log('assistant -> deplacer');

  // 6. Profil
  await page.goto('http://127.0.0.1:8765/Main.dc.html'); await W(1200);
  await click('Continuer sans compte'); await page.getByRole('button', { name: 'Profil' }).first().click(); await W(300); await log('profil'); await shot('profil');
  await click('Notifications'); await click('Taille du texte'); await log('profil reglages');
  await click('Forfaits et tarifs'); await click('Performance'); await log('forfaits'); await shot('forfaits');
  await click('Choisir Performance'); await log('profil forfait');
  await click('Informations du compte'); await fill('#compte-email', 'pasvalide'); await click('Enregistrer'); await log('compte erreur'); await shot('compte');
  await click('Se déconnecter'); await click('Se connecter');
  await fill('#connexion-email', 'youssef@exemple.fr'); await fill('#connexion-mdp', 'mauvais12'); await click('Se connecter'); await log('login faux');
  await click('Mot de passe oublié ?'); await click('Envoyer le code'); await W(300); await log('oubli code');

  console.log('\n\nERREURS:\n' + errs.join('\n'));
  await browser.close();
})();
