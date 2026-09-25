# Contenu de la page unique Hygie

Texte réel, données d'exemple et comportements de chaque section de la page mobile. Les valeurs visuelles (couleurs, polices, tailles) viendront du design system du kit Figma, dans `design-system/`.

Les faits manquants sont écrits entre crochets, par exemple `[prix]`. Les chiffres de démonstration (pas, calories, résultats de bilan) sont des exemples : la journée de référence de la maquette est le mercredi 23 septembre 2026.

## Sommaire

1. [Cadre de page et navigation](#navigation) · kit+hygie
2. [Bienvenue et connexion](#acces) · kit
3. [Parlons de vous](#profil-depart) · kit+hygie
4. [Aujourd’hui](#aujourdhui) · kit+hygie
5. [Statistiques](#statistiques) · kit
6. [Agenda](#agenda) · kit+hygie
7. [Votre planning du jour](#planning-jour) · kit+hygie
8. [Séance en cours](#seance) · kit+hygie
9. [Exercices à la maison](#exercices-maison) · hygie
10. [Fiche exercice](#fiche-exercice) · hygie
11. [Prendre rendez-vous](#rendez-vous) · hygie
12. [L’équipe](#equipe) · hygie
13. [Mes bilans](#bilans) · hygie
14. [Suivi personnalisé](#suivi) · hygie
15. [Messages et documents](#messages-documents) · hygie
16. [Récupération & bien-être](#recuperation) · hygie
17. [Nutrition](#nutrition) · kit+hygie
18. [Coach IA](#coach-ia) · kit+hygie
19. [Communauté](#communaute) · kit
20. [Forfaits et tarifs](#offres) · kit+hygie
21. [Le centre Hygie](#centre) · hygie
22. [Profil et réglages](#profil) · kit+hygie

<a id="navigation"></a>
## 1. Cadre de page et navigation

**Origine** : kit+hygie · **Écran du kit** : Barre d’onglets flottante en pilule avec boutons ronds, présente sur les écrans principaux du kit

**But** : Donner un repère constant sur la page unique : en-tête compact, barre d’onglets flottante qui mène aux sections, notifications et bandeau d’état du réseau.

**Composants** : `Header`, `TabBar`, `IconButton`, `Avatar`, `StatusBanner`, `Sheet`, `ListRow`, `Toast`

### Texte

### En-tête
- Logo Hygie : trois points, un par pôle (Santé, Sport, Récupération & bien-être)
- Bonjour {prenom}
- Bouton icône « Ouvrir les notifications » (pastille du nombre de non-lus)
- Bouton icône « Ouvrir votre profil » (avatar dans un anneau rose)

### Barre d’onglets flottante
Pilule aubergine, boutons ronds, icônes au trait arrondi. Libellés accessibles :
- « Voir votre journée » : section Aujourd’hui
- « Voir votre agenda » : section Agenda
- « Prendre rendez-vous » : section Prendre rendez-vous (bouton central, bleu électrique, plus grand)
- « Parler au Coach IA » : section Coach IA
- « Voir votre suivi » : section Suivi personnalisé

### Notifications
Titre : Notifications
Gabarits :
- Rappel : {prestation} aujourd’hui à {heure}.
- Rappel : {prestation} demain à {heure}.
- {praticien} vous a envoyé un message.
- Le rapport de votre {bilan} est disponible.
- Vos exercices du jour vous attendent.
- Votre carnet du jour vous attend.
- Bouton « Tout marquer comme lu »
- Vide : Aucune notification pour le moment.

### Bandeau hors ligne
Vous êtes hors ligne. Vos saisies restent sur votre téléphone et partiront au retour du réseau.

### Retour du réseau
Connexion rétablie. Vos données sont à jour.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Journée de référence de toute la maquette : mercredi 23 septembre 2026, vers 13 h.",
  "date_reference_maquette": "mercredi 23 septembre 2026",
  "prenom": "Camille",
  "non_lus": 3,
  "notifications": [
    {
      "texte": "Rappel : Pressothérapie aujourd’hui à 19 h 15.",
      "section": "agenda"
    },
    {
      "texte": "Johan Pereira vous a envoyé un message.",
      "section": "messages-documents"
    },
    {
      "texte": "Le rapport de votre bilan des forces musculaires est disponible.",
      "section": "bilans"
    }
  ]
}
```

### Interactions

- Toucher un onglet fait défiler la page jusqu’à l’ancre de la section ; défilement sans animation si l’utilisateur a demandé de réduire les animations.
- L’onglet actif suit la section visible pendant le défilement.
- La barre d’onglets se masque quand on descend et revient quand on remonte ; elle reste visible à la navigation au clavier.
- L’en-tête se réduit après 48 px de défilement : logo et boutons ronds seulement.
- Le bouton des notifications ouvre une feuille montante ; toucher une notification mène à la section concernée et la marque comme lue.
- Les rappels suivent les réglages de la rubrique Rappels, dans Profil et réglages.
- Dans la maquette, toutes les sections sont visibles à la suite ; en production, les sections après « Bienvenue et connexion » demandent une connexion.

### États

- Défaut : onglet « Voir votre journée » actif.
- Non-lus : pastille rose avec le nombre sur le bouton des notifications.
- Chargement : avatar et salutation en squelette.
- Vide : feuille des notifications avec « Aucune notification pour le moment. »
- Hors ligne : bandeau aubergine sous l’en-tête, icône nuage barré.
- Retour du réseau : message court « Connexion rétablie. Vos données sont à jour. » pendant 3 s.

<a id="acces"></a>
## 2. Bienvenue et connexion

**Origine** : kit · **Écran du kit** : Connexion, Création de compte, Code de vérification, Mot de passe oublié et Nouveau mot de passe

**But** : Présenter Hygie en une phrase, puis permettre de créer un compte, se connecter, vérifier son adresse et retrouver l’accès.

**Composants** : `Card`, `Segmented`, `TextField`, `OtpInput`, `Checkbox`, `Button`, `StatusBanner`, `Toast`

### Texte

### Hygie Sport Santé et Performance
Évaluer, bouger, être accompagné dans la durée.
Votre programme, vos rendez-vous et votre suivi au même endroit.

Sélecteur : Se connecter · Créer un compte

### Se connecter
- Champ « Adresse e-mail »
- Champ « Mot de passe », avec Bouton icône « Afficher le mot de passe »
- Lien « Retrouver votre mot de passe »
- Bouton « Se connecter »

### Créer un compte
- Champ « Prénom »
- Champ « Nom »
- Champ « Adresse e-mail »
- Champ « Téléphone »
- Champ « Mot de passe » ; aide : Au moins 8 caractères, dont un chiffre.
- Case « J’accepte les conditions d’utilisation et la politique de confidentialité. »
- Case « J’accepte que mes données de santé servent à mon suivi par l’équipe Hygie. »
- Bouton « Créer votre compte »

### Code de vérification
Saisissez le code reçu à l’adresse {email}.
- Cases du code
- Bouton « Vérifier le code »
- Lien « Renvoyer le code » ; avant le délai : Nouveau code possible dans {secondes} s.

### Mot de passe oublié
Indiquez votre adresse e-mail. Nous vous envoyons un lien pour choisir un nouveau mot de passe.
- Champ « Adresse e-mail »
- Bouton « Envoyer le lien »
- Confirmation : Si un compte existe pour cette adresse, un e-mail vient de partir.

### Nouveau mot de passe
- Champ « Nouveau mot de passe »
- Champ « Confirmer le mot de passe »
- Bouton « Enregistrer le mot de passe »

### Messages
- Adresse e-mail ou mot de passe incorrect.
- Ce code n’est plus valide. Demandez un nouveau code.
- Les deux mots de passe sont différents.
- Cette adresse e-mail a déjà un compte. Connectez-vous.
- Votre mot de passe est enregistré. Vous pouvez vous connecter.
- Connexion impossible pour le moment. Vérifiez votre réseau, puis réessayez.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "email": "camille.exemple@mail.fr",
  "longueur_code": "[4 ou 6 chiffres, à confirmer]",
  "secondes": 30
}
```

### Interactions

- Le sélecteur bascule entre les deux formulaires sans quitter la section.
- Les champs se valident à la sortie du champ, pas à chaque frappe.
- Le code se valide seul quand la dernière case est remplie ; le collage du code complet est accepté.
- « Retrouver votre mot de passe » remplace le formulaire par l’étape Mot de passe oublié ; le lien reçu ouvre l’étape Nouveau mot de passe.
- « Créer votre compte » reste inactif tant que les deux cases de consentement ne sont pas cochées.
- Après vérification du code, la page défile jusqu’à « Parlons de vous ».

### États

- Défaut : Se connecter sélectionné.
- Chargement : indicateur dans la pilule du bouton, champs figés.
- Erreur de champ : filet rose sous le champ et message en dessous.
- Erreur serveur : bandeau d’erreur en haut de la carte.
- Succès : message de confirmation, puis étape suivante.
- Hors ligne : bouton inactif et message « Connexion impossible pour le moment. Vérifiez votre réseau, puis réessayez. »

<a id="profil-depart"></a>
## 3. Parlons de vous

**Origine** : kit+hygie · **Écran du kit** : Onboarding « Parlons de vous » : barres d’étapes en haut, choix d’objectifs, poids sur grande carte bleue, taille sur règle graduée, bouton sombre à trois chevrons

**But** : Recueillir objectifs, parcours, mesures et habitudes pour préparer le bilan d’entrée et proposer un premier programme.

**Composants** : `StepProgress`, `Chip`, `StatCard`, `IconButton`, `Button`, `Segmented`, `ScaleInput`, `Card`

### Texte

### Parlons de vous
Étape {etape} sur 6
Ces réponses préparent votre bilan d’entrée. Elles ne remplacent pas un avis médical.

### 1. Votre objectif
Que souhaitez-vous d’abord ? Choisissez jusqu’à trois objectifs.
Puces : Reprendre une activité physique · Soulager une douleur · Reprendre le sport après une blessure · Préparer une compétition · Gagner en force · Gagner en mobilité · Mieux dormir · Mieux manger · Perdre du poids · Garder la forme dans la durée

### 2. Votre parcours
- **Bien-être** : bouger mieux, prévenir les douleurs, garder la forme.
- **Performance** : progresser, préparer une échéance, retrouver votre niveau après une blessure.
- Lien « Comparer les deux parcours »

### 3. Votre poids
Grande carte bleue : {poids} kg
Bouton icône « Retirer 1 kg » · Bouton icône « Ajouter 1 kg »
Vous pourrez le modifier à tout moment.

### 4. Votre taille
Règle graduée, aiguille au centre : {taille} cm
Bouton icône « Retirer 1 cm » · Bouton icône « Ajouter 1 cm »

### 5. Votre quotidien
- Combien d’heures dormez-vous par nuit ? Moins de 6 h · 6 à 8 h · Plus de 8 h
- Combien de fois bougez-vous par semaine ? Jamais · 1 à 2 fois · 3 fois ou plus
- Comment jugez-vous votre alimentation ? À revoir · Correcte · Équilibrée
- Votre niveau de stress, de 1 à 5

### 6. Douleurs et suivi
- Avez-vous une douleur en ce moment ? Oui · Non
- Si oui : Où ? Cou · Épaules · Dos · Hanches · Genoux · Chevilles · Autre. Quelle intensité, de 0 à 10 ?
- Avez-vous une ordonnance d’activité physique adaptée ? Oui · Non
- Un kinésithérapeute vous suit-il en ce moment ? Oui · Non

### Boutons
- Bouton « Continuer » (sombre, trois chevrons qui s’éclaircissent)
- Bouton icône « Revenir à l’étape précédente »
- Lien « Passer cette étape » (étapes 5 et 6)

### Message douleur forte
Une douleur forte mérite un avis. Nous vous conseillons un rendez-vous en kinésithérapie avant de reprendre.
Bouton « Prendre rendez-vous en kinésithérapie »

### Fin du parcours
Votre profil est prêt.
Prochaine étape : votre bilan d’entrée au centre. Il fixe vos objectifs et construit votre programme.
Bilan offert pour un engagement de 3 mois, sinon 145 €.
- Bouton « Réserver votre bilan d’entrée »
- Lien « Découvrir votre tableau de bord »

### Messages d’erreur
- Indiquez un poids entre {poids_min} et {poids_max} kg.
- Indiquez une taille entre {taille_min} et {taille_max} cm.
- Vos réponses n’ont pas pu être enregistrées. Bouton « Réessayer »

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Bornes et seuil non validés par le centre : ne pas les présenter comme des règles.",
  "etape": 3,
  "poids": 70,
  "taille": 170,
  "objectifs_choisis": [
    "Reprendre le sport après une blessure",
    "Gagner en force"
  ],
  "parcours": "Performance",
  "bornes": {
    "poids_min": "[à valider par le centre]",
    "poids_max": "[à valider par le centre]",
    "taille_min": "[à valider par le centre]",
    "taille_max": "[à valider par le centre]"
  },
  "seuil_douleur_forte": "[seuil fixé par le centre]"
}
```

### Interactions

- Chaque étape remplit une petite barre en haut : étape courante en bleu électrique, étapes faites en aubergine.
- Objectifs : sélection multiple, trois au plus ; une quatrième puce affiche « Trois objectifs au plus. Retirez-en un pour changer. »
- Poids : − et + par pas de 1 kg, appui long pour défiler ; toucher le chiffre ouvre un clavier numérique (pas de 0,1 kg).
- Taille : glisser la règle, l’aiguille centrale reste fixe, aimantation au centimètre ; − et + par pas de 1 cm.
- « Continuer » reste inactif tant qu’une étape obligatoire (1 à 4) n’a pas de réponse.
- Une douleur déclarée au-dessus du seuil fixé par le centre affiche le message douleur forte ; « Prendre rendez-vous en kinésithérapie » ouvre Prendre rendez-vous à l’étape « Choisir votre motif ».
- Ordonnance d’activité physique adaptée = Oui : la fin du parcours propose aussi le sport-santé en petit groupe.
- « Réserver votre bilan d’entrée » ouvre Prendre rendez-vous, Bilan d’entrée choisi, à l’étape « Quelques questions avant votre bilan ».
- Les réponses s’enregistrent à chaque étape ; on peut reprendre plus tard.

### États

- Défaut : étape 1, aucune puce choisie, « Continuer » inactif.
- En cours : barres partiellement remplies.
- Erreur de valeur : « Indiquez un poids entre {poids_min} et {poids_max} kg. » ou « Indiquez une taille entre {taille_min} et {taille_max} cm. », bornes à valider par le centre.
- Erreur d’enregistrement : « Vos réponses n’ont pas pu être enregistrées. » avec Bouton « Réessayer ».
- Hors ligne : réponses gardées sur l’appareil, envoi au retour du réseau.
- Succès : écran de fin avec le bouton de réservation du bilan d’entrée.

<a id="aujourdhui"></a>
## 4. Aujourd’hui

**Origine** : kit+hygie · **Écran du kit** : Activité du jour : date en étiquette, courbe, carte Calories à barres fines avec barre mise en avant coiffée d’une pastille icône

**But** : Montrer en un coup d’œil l’activité du jour, le carnet à remplir, le prochain rendez-vous, les exercices à faire, le défi en cours et le dernier message du référent.

**Composants** : `Header`, `DateTag`, `StatCard`, `SessionCard`, `ExerciseCard`, `ChallengeCard`, `SectionHeader`, `Button`, `IconButton`

### Texte

Étiquette : {date_du_jour}
### Votre journée

### Pas
{pas} pas · objectif {objectif_pas}
Courbe de la journée

### Calories brûlées
{kcal} kcal
Barres fines par tranche horaire ; la barre en cours est mise en avant et coiffée d’une pastille flamme.

### Hydratation
{eau} L sur {objectif_eau} L
Bouton icône « Ajouter un verre d’eau »

### Sommeil
{sommeil} cette nuit (pastille lune)

### Votre carnet
Notez votre douleur, votre forme et votre sommeil, de 0 à 10.
Bouton « Remplir votre carnet »
Une fois rempli : Carnet rempli à {heure_carnet}.

### Prochain rendez-vous
{prestation} avec {praticien}
{jour} à {heure} · Hygie, Avon
- Bouton « Voir le détail »
- Bouton « Ajouter à votre calendrier »

### Rendez-vous kiné à enregistrer
Le {date_doctolib}, vous avez continué sur Doctolib pour prendre rendez-vous avec {praticien_doctolib}.
Ajoutez ce rendez-vous pour le retrouver dans votre agenda.
- Bouton « Ajouter à votre agenda »
- Lien « Je n’ai pas pris de rendez-vous »

### Vos exercices à la maison
{nb_exercices} exercices · {duree} min · prescrits par {referent}
Bouton « Commencer les exercices »

### Votre défi — {titre_defi} · {progression_defi} %
Jauge de progression
Bouton « Voir le défi »

### Message de votre référent
{referent} : « {extrait_message} »
Bouton « Répondre »

### Accès rapides
- Bouton « Prendre rendez-vous »
- Bouton « Scanner un aliment »
- Bouton « Noter une douleur »
- Bouton « Parler au Coach IA »

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "date_du_jour": "MERCREDI 23 SEPTEMBRE",
  "pas": 6240,
  "objectif_pas": 8000,
  "courbe_pas": [
    0,
    120,
    850,
    1400,
    2100,
    2900,
    3600,
    4800,
    5500,
    6240
  ],
  "kcal": 412,
  "calories_par_tranche": [
    {
      "tranche": "8 h",
      "kcal": 35
    },
    {
      "tranche": "10 h",
      "kcal": 60
    },
    {
      "tranche": "12 h",
      "kcal": 95,
      "mise_en_avant": true,
      "pastille": "flamme"
    }
  ],
  "eau": 1.2,
  "objectif_eau": 2,
  "sommeil": "7 h 10",
  "carnet_rempli": false,
  "prochain_rdv": {
    "prestation": "Coaching individuel",
    "praticien": "Johan Pereira",
    "jour": "Aujourd’hui",
    "heure": "18 h"
  },
  "kine_a_enregistrer": {
    "affichee": true,
    "date_doctolib": "lundi 21 septembre",
    "praticien_doctolib": "Romain Brelier-Murry",
    "affichage": "7 jours après le passage par Doctolib"
  },
  "nb_exercices": 5,
  "duree": 15,
  "referent": "Johan Pereira",
  "defi": {
    "titre_defi": "8 000 pas par jour",
    "progression_defi": 29
  },
  "extrait_message": "Pensez à noter votre ressenti après la séance de ce soir."
}
```

### Interactions

- Toucher une carte chiffrée mène à Statistiques, sélecteur réglé sur Jour.
- Toucher une barre de calories affiche la valeur de la tranche dans une infobulle.
- « Ajouter un verre d’eau » ajoute 0,25 L avec un retour visuel sur la jauge ; appui long pour choisir la quantité.
- « Remplir votre carnet » et « Noter une douleur » ouvrent le carnet dans Suivi personnalisé ; la carte affiche ensuite « Carnet rempli à {heure_carnet}. »
- « Ajouter à votre agenda » ouvre l’étape « Votre rendez-vous » de Prendre rendez-vous, praticien prérempli ; la carte kiné reste 7 jours après le passage par Doctolib, puis disparaît.
- « Je n’ai pas pris de rendez-vous » retire la carte kiné.
- « Commencer les exercices » ouvre la séance à la maison en mode guidé, depuis Exercices à la maison.
- « Voir le défi » ouvre Communauté, onglet Défis ; la carte du défi n’apparaît que si vous avez rejoint un défi.
- « Répondre » ouvre la conversation dans Messages et documents.
- « Parler au Coach IA » fait défiler jusqu’à Coach IA.
- Tirer vers le bas pour actualiser.

### États

- Chargement : squelettes des cartes.
- Vide, aucun appareil connecté : « Connectez une montre ou saisissez vos pas pour suivre votre activité. » avec Bouton « Connecter un appareil ».
- Carnet à remplir : Bouton « Remplir votre carnet » mis en avant.
- Carnet rempli : « Carnet rempli à {heure_carnet}. »
- Vide, aucun rendez-vous : « Aucun rendez-vous prévu. » avec Bouton « Prendre rendez-vous ».
- Vide, aucun exercice prescrit : « Votre référent vous proposera des exercices après votre bilan. »
- Sans défi : la carte du défi est masquée.
- Erreur de synchronisation : « Synchronisation impossible. Dernière mise à jour à {heure_maj}. » avec Bouton « Réessayer ».
- Hors ligne : valeurs en gris clair avec l’heure de la dernière mise à jour.
- Succès : objectif de pas atteint, jauge pleine et mention « Objectif atteint ».

<a id="statistiques"></a>
## 5. Statistiques

**Origine** : kit · **Écran du kit** : Statistics : courbes, calories, distance, hydratation, sélecteur en pilule « Jour · Semaine · Mois »

**But** : Suivre les tendances d’activité, de récupération et de santé par jour, semaine ou mois, et les partager avec le référent.

**Composants** : `Segmented`, `StatCard`, `IconButton`, `Button`, `EmptyState`, `Skeleton`

### Texte

### Vos statistiques
Sélecteur : Jour · Semaine · Mois
Bouton icône « Voir la période précédente » · {periode} · Bouton icône « Voir la période suivante »

### Activité
Courbe des pas · moyenne {moyenne_pas} pas par jour (pastille éclair sur le jour mis en avant)

### Calories
{kcal_total} kcal brûlées · barres fines étiquetées par jour

### Distance
{distance} km parcourus

### Hydratation
{eau_moyenne} L par jour en moyenne · objectif {objectif_eau} L

### Sommeil
{sommeil_moyen} par nuit · barres des nuits, pastille lune sur la nuit sélectionnée

### Fréquence cardiaque
Au repos {fc_repos} bpm · moyenne {fc_moyenne} bpm · pic {fc_pic} bpm
Courbe avec zone de repos teintée

### Séances
{seances_centre} séances au centre · {seances_maison} séances à la maison

### Poids
{poids} kg · {variation_poids} kg sur la période

Données issues de {source}. Elles montrent des tendances. Elles ne constituent pas un diagnostic.
Bouton « Partager avec votre référent »

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. La semaine affichée est la dernière semaine terminée avant le mercredi 23 septembre 2026.",
  "periode": "Semaine du 14 au 20 septembre",
  "pas_par_jour": [
    {
      "jour": "L",
      "date": "lun. 14",
      "pas": 7200
    },
    {
      "jour": "M",
      "date": "mar. 15",
      "pas": 6800
    },
    {
      "jour": "M",
      "date": "mer. 16",
      "pas": 9100,
      "mise_en_avant": true
    },
    {
      "jour": "J",
      "date": "jeu. 17",
      "pas": 5400
    },
    {
      "jour": "V",
      "date": "ven. 18",
      "pas": 8050
    },
    {
      "jour": "S",
      "date": "sam. 19",
      "pas": 10300
    },
    {
      "jour": "D",
      "date": "dim. 20",
      "pas": 4100
    }
  ],
  "moyenne_pas": 7280,
  "kcal_total": 3150,
  "distance": 38.4,
  "eau_moyenne": 1.6,
  "objectif_eau": 2,
  "sommeil_moyen": "7 h 05",
  "fc_repos": 58,
  "fc_moyenne": 74,
  "fc_pic": 162,
  "seances_centre": 3,
  "seances_maison": 4,
  "poids": 69.4,
  "variation_poids": -0.6,
  "source": "votre montre et vos saisies"
}
```

### Interactions

- Le sélecteur Jour · Semaine · Mois recalcule toutes les cartes ; transition des courbes de 200 ms.
- Glisser le doigt sur une courbe affiche un curseur vertical et la valeur exacte.
- Les flèches changent de période ; la flèche suivante est inactive sur la période en cours.
- Toucher une carte l’ouvre en plein écran avec l’historique.
- « Partager avec votre référent » envoie un résumé de la période dans Messages, après confirmation.

### États

- Chargement : squelettes des courbes.
- Vide : « Pas encore de données pour cette période. »
- Partiel : carte Fréquence cardiaque remplacée par « Connectez une montre pour suivre votre fréquence cardiaque. » avec Bouton « Connecter un appareil ».
- Erreur : « Impossible d’afficher vos statistiques. » avec Bouton « Réessayer ».
- Succès du partage : « Résumé envoyé à votre référent. »
- Hors ligne : dernières données connues et date de mise à jour.

<a id="agenda"></a>
## 6. Agenda

**Origine** : kit+hygie · **Écran du kit** : Agenda / calendrier et liste de sessions colorées

**But** : Voir toutes les séances et tous les rendez-vous, colorés par pôle, et les gérer selon leur origine : réservés dans l’application, pris sur Doctolib ou pris par téléphone.

**Composants** : `Segmented`, `Calendar`, `Chip`, `SessionCard`, `Button`, `Sheet`, `EmptyState`, `Toast`

### Texte

### Votre agenda
Sélecteur : Semaine · Mois
Légende : Santé · Sport · Récupération & bien-être · Bilans · À la maison
Filtres : Tout · Santé · Sport · Récupération · Bilans · À la maison
Bouton « Revenir à aujourd’hui »

### {jour_selectionne}
Carte séance : {heure_debut} – {heure_fin} · {titre} · {lieu_ou_praticien} · pastille du pôle
- Bouton « Voir le détail »
- Bouton « Déplacer le rendez-vous »
- Bouton « Annuler le rendez-vous »
- Bouton « Ajouter à votre calendrier »
Un rendez-vous commencé ou passé ne peut plus être déplacé ni annulé.
Rendez-vous au centre non réalisé : mention « Non réalisée » et Bouton « Prendre un autre rendez-vous »

### Annulation
Annuler ce rendez-vous ?
{titre}, {jour} à {heure}.
Voulez-vous nous dire pourquoi ? Empêchement · Maladie ou blessure · Autre
[conditions d’annulation]
- Bouton « Confirmer l’annulation »
- Bouton « Garder le rendez-vous »

### Rendez-vous pris sur Doctolib
Mention sur la carte : Pris sur Doctolib
Ce rendez-vous se gère sur Doctolib.
- Bouton « Gérer sur Doctolib »
- Bouton « Retirer de votre agenda »
Avant de retirer : Ce rendez-vous reste actif sur Doctolib. Pensez à l’annuler aussi.

### Rendez-vous pris par téléphone
Ce rendez-vous a été pris par téléphone.
- Bouton « Appeler Malika Pereira » (06 24 11 42 19)
- Bouton « Retirer de votre agenda »

### Horaires du centre
Du lundi au vendredi, de 8 h à 20 h. Le samedi, de 9 h à 13 h.

### Messages
- Aucune séance ce jour. Bouton « Prendre rendez-vous »
- Rendez-vous annulé.
- Rendez-vous déplacé au {date} à {heure}.
- Rendez-vous retiré de votre agenda.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Même liste que le planning du jour, sans la marche.",
  "jour_selectionne": "Mercredi 23 septembre",
  "seances": [
    {
      "heure_debut": "7 h 30",
      "heure_fin": "7 h 40",
      "titre": "Mobilité du matin",
      "lieu_ou_praticien": "À la maison",
      "pole": "maison",
      "statut": "faite"
    },
    {
      "heure_debut": "8 h 30",
      "heure_fin": "[heure de fin]",
      "titre": "Kinésithérapie",
      "lieu_ou_praticien": "Romain Brelier-Murry",
      "pole": "sante",
      "source": "doctolib",
      "mention": "Pris sur Doctolib",
      "statut": "faite"
    },
    {
      "heure_debut": "18 h",
      "heure_fin": "[heure de fin]",
      "titre": "Coaching individuel",
      "lieu_ou_praticien": "Johan Pereira",
      "pole": "sport",
      "source": "hygie",
      "statut": "a_venir"
    },
    {
      "heure_debut": "19 h 15",
      "heure_fin": "[heure de fin]",
      "titre": "Pressothérapie",
      "lieu_ou_praticien": "Hygie, Avon",
      "pole": "recuperation",
      "source": "hygie",
      "statut": "a_venir"
    },
    {
      "heure_debut": "21 h",
      "heure_fin": "21 h 08",
      "titre": "Étirements du soir",
      "lieu_ou_praticien": "À la maison",
      "pole": "maison",
      "statut": "a_venir"
    }
  ],
  "variante_telephone": {
    "titre": "Massage bien-être",
    "lieu_ou_praticien": "Malika Pereira",
    "date": "samedi 3 octobre",
    "heure_debut": "10 h",
    "heure_fin": "[heure de fin]",
    "pole": "recuperation",
    "source": "telephone"
  },
  "jours_marques_mois": {
    "2": [
      "sport"
    ],
    "7": [
      "sport"
    ],
    "9": [
      "sport"
    ],
    "12": [
      "bilans"
    ],
    "14": [
      "sport"
    ],
    "16": [
      "sport",
      "recuperation"
    ],
    "21": [
      "sport"
    ],
    "23": [
      "sante",
      "sport",
      "recuperation",
      "maison"
    ],
    "28": [
      "sport"
    ],
    "30": [
      "sport"
    ]
  }
}
```

### Interactions

- Semaine : bande de 7 jours glissable. Mois : grille avec pastilles colorées sous les jours.
- Toucher un jour affiche ses séances en dessous ; le jour courant est cerclé de bleu électrique.
- Filtres par pôle combinables ; « Tout » les retire.
- Rendez-vous réservé dans l’application et pas encore commencé : glisser la carte vers la gauche révèle « Déplacer » et « Annuler ».
- « Déplacer le rendez-vous » ouvre Prendre rendez-vous, prérempli à l’étape Créneau.
- L’annulation se confirme dans une feuille montante ; la raison est facultative.
- Rendez-vous pris sur Doctolib : « Déplacer » et « Annuler » sont remplacés par « Gérer sur Doctolib » et « Retirer de votre agenda » ; le retrait affiche d’abord « Ce rendez-vous reste actif sur Doctolib. Pensez à l’annuler aussi. »
- Rendez-vous pris par téléphone : « Appeler Malika Pereira » lance l’appel ; « Retirer de votre agenda » retire la carte après confirmation.
- Rendez-vous au centre non réalisé : « Prendre un autre rendez-vous » ouvre Prendre rendez-vous à l’étape Créneau, prestation préremplie.

### États

- Chargement : grille en squelette.
- Vide : « Aucune séance ce jour. » avec Bouton « Prendre rendez-vous ».
- Séance passée : carte grisée avec coche « Faite » ou mention « Non réalisée » ; plus de bouton Déplacer ni Annuler.
- Doctolib : mention « Pris sur Doctolib » sur la carte.
- Téléphone : mention « Pris par téléphone » sur la carte.
- Erreur : « Impossible de charger votre agenda. » avec Bouton « Réessayer ».
- Succès : « Rendez-vous annulé. », « Rendez-vous déplacé au {date} à {heure}. » ou « Rendez-vous retiré de votre agenda. »
- Hors ligne : consultation seule, boutons d’action inactifs.

<a id="planning-jour"></a>
## 7. Votre planning du jour

**Origine** : kit+hygie · **Écran du kit** : Your Schedule : timeline à rail et points, bouton « Commencer » sur l’étape active ; listes à sous-titres « Run 02 km »

**But** : Dérouler les étapes du jour sur une timeline et lancer l’étape active ; montrer le programme de la semaine établi par le référent.

**Composants** : `Timeline`, `Button`, `Calendar`, `SessionCard`, `ListRow`, `EmptyState`

### Texte

### Votre planning
{date_du_jour}

Rail vertical, un point par étape :
- {heure} · {titre} · {sous_titre}
- Étape faite à la maison : point plein et coche, « Fait à {heure_faite} »
- Étape faite au centre : point plein et coche, « Faite »
- Étape active : carte agrandie et Bouton « Commencer » (icône lecture)
- Étape à venir : point vide
- Étape manquée à la maison : « Non réalisée » et Bouton « Reporter à demain »
- Étape manquée au centre : « Non réalisée » et Bouton « Prendre un autre rendez-vous »

{faites} étapes faites sur {total}

### Votre programme de la semaine
Établi par {referent} après votre bilan du {date_bilan}.
Bande des jours : L · M · M · J · V · S · D, une pastille par séance prévue
Carte séance : {titre} · {duree} · {lieu}
Le Coach IA peut proposer un ajustement. Votre référent le valide avant qu’il n’apparaisse ici.
Bouton « Voir le programme complet »

### Messages
- Rien de prévu aujourd’hui. Profitez-en pour récupérer. Bouton « Voir les exercices à la maison »
- Toutes vos étapes sont faites.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Même liste que l’agenda, plus la marche.",
  "date_du_jour": "MERCREDI 23 SEPTEMBRE",
  "faites": 3,
  "total": 6,
  "etapes": [
    {
      "heure": "7 h 30",
      "titre": "Mobilité du matin",
      "sous_titre": "À la maison · 10 min",
      "pole": "maison",
      "lieu": "maison",
      "statut": "faite",
      "heure_faite": "7 h 42"
    },
    {
      "heure": "8 h 30",
      "titre": "Kinésithérapie",
      "sous_titre": "Au centre · avec Romain Brelier-Murry · pris sur Doctolib",
      "pole": "sante",
      "lieu": "centre",
      "statut": "faite"
    },
    {
      "heure": "12 h 30",
      "titre": "Marche",
      "sous_titre": "Marche 02 km",
      "pole": "sport",
      "lieu": "maison",
      "statut": "faite",
      "heure_faite": "12 h 58"
    },
    {
      "heure": "18 h",
      "titre": "Coaching individuel",
      "sous_titre": "Au centre · avec Johan Pereira",
      "pole": "sport",
      "lieu": "centre",
      "statut": "active"
    },
    {
      "heure": "19 h 15",
      "titre": "Pressothérapie",
      "sous_titre": "Au centre · [durée]",
      "pole": "recuperation",
      "lieu": "centre",
      "statut": "a_venir"
    },
    {
      "heure": "21 h",
      "titre": "Étirements du soir",
      "sous_titre": "À la maison · 8 min",
      "pole": "maison",
      "lieu": "maison",
      "statut": "a_venir"
    }
  ],
  "programme_semaine": {
    "referent": "Johan Pereira",
    "date_bilan": "12 septembre",
    "jours": {
      "lun": [
        "Coaching individuel · [durée] · au centre"
      ],
      "mar": [
        "Mobilité · 15 min · à la maison"
      ],
      "mer": [
        "Mobilité du matin · 10 min · à la maison",
        "Coaching individuel · [durée] · au centre",
        "Étirements du soir · 8 min · à la maison"
      ],
      "jeu": [],
      "ven": [
        "Mobilité · 15 min · à la maison"
      ],
      "sam": [],
      "dim": []
    }
  }
}
```

### Interactions

- « Commencer » ouvre Séance en cours pour une séance, ou la fiche de l’étape pour une marche ou une pause hydratation.
- Toucher une étape faite affiche son résumé (durée, ressenti).
- À l’ouverture, la timeline défile jusqu’à l’étape active ; le rail se remplit au fil de la journée.
- « Reporter à demain » ne concerne que les étapes à la maison : il les déplace au lendemain.
- Étape au centre manquée : « Prendre un autre rendez-vous » ouvre Prendre rendez-vous à l’étape Créneau, prestation préremplie. Un rendez-vous commencé ou passé ne peut plus être déplacé ni annulé.
- Toucher un jour de la bande affiche les séances prévues ce jour-là.

### États

- Chargement : rail et cartes en squelette.
- Vide : « Rien de prévu aujourd’hui. Profitez-en pour récupérer. »
- Journée terminée : « Toutes vos étapes sont faites. »
- Étape manquée : mention « Non réalisée », bouton selon le lieu (maison ou centre).
- Ajustement en attente : pastille « En attente de validation » sur la séance concernée.
- Erreur : « Impossible de charger votre planning. » avec Bouton « Réessayer ».
- Hors ligne : étapes à la maison utilisables, étapes au centre en lecture seule.

<a id="seance"></a>
## 8. Séance en cours

**Origine** : kit+hygie · **Écran du kit** : Planificateur d’entraînement intelligent avec suivi des répétitions

**But** : Guider une séance exercice par exercice, compter séries et répétitions, gérer le repos et permettre de signaler une douleur.

**Composants** : `DateTag`, `RepCounter`, `Timer`, `StatCard`, `IconButton`, `Button`, `ScaleInput`, `Chip`, `Sheet`, `ExerciseCard`, `TextField`

### Texte

Étiquette : SÉANCE EN COURS
### {nom_seance}
Exercice {i} sur {n} · {nom_exercice}
Série {serie} sur {series}

Grand chiffre : {reps_faites} / {reps_cibles} répétitions
Bouton icône « Retirer une répétition » · Bouton icône « Ajouter une répétition »
Charge : {charge} kg · Bouton icône « Baisser la charge » · Bouton icône « Augmenter la charge »
Tempo : {tempo}
Bouton « Valider la série »
Lien « Voir la fiche de l’exercice »
Bouton icône « Mettre la séance en pause »

### Repos
Minuteur : {repos} s
- Bouton « Passer le repos »
- Bouton « Ajouter 15 secondes »
Ensuite : {exercice_suivant}

### Douleur
Bouton « Signaler une douleur »
Où avez-vous mal ? Cou · Épaules · Dos · Hanches · Genoux · Chevilles · Autre
Quelle intensité, de 0 à 10 ?
Bouton « Enregistrer et adapter la séance »
Arrêtez l’exercice. Votre douleur est notée dans votre carnet.
Voulez-vous prévenir votre référent ?
- Bouton « Prévenir votre référent »
- Bouton « Continuer sans prévenir »
Si la douleur est forte ou inhabituelle, appelez le centre au 01 84 74 34 20. En cas d’urgence, appelez le 15 ou le 112.

### Séance terminée
{duree} · {kcal} kcal · {series_total} séries
Quel effort avez-vous ressenti, de 1 à 10 ?
Champ « Un mot pour votre référent »
Bouton « Enregistrer la séance »
Séance enregistrée. Votre référent la verra dans votre suivi.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "nom_seance": "Renforcement bas du corps",
  "i": 2,
  "n": 5,
  "nom_exercice": "Squat goblet",
  "serie": 2,
  "series": 3,
  "reps_faites": 8,
  "reps_cibles": 12,
  "charge": 12,
  "tempo": "descente 3 s, remontée 1 s",
  "repos": 60,
  "exercice_suivant": "Fente arrière",
  "seuil_alerte": "[seuil d’alerte]",
  "fin": {
    "duree": "42 min",
    "kcal": 285,
    "series_total": 14
  }
}
```

### Interactions

- − et + ajustent les répétitions ; « Valider la série » lance le minuteur de repos.
- Le minuteur vibre 3 s avant la fin puis à zéro ; la série suivante s’affiche seule.
- Charge : − et + par pas de 1 kg ; toucher la valeur ouvre un clavier numérique.
- Glisser vers la gauche passe à l’exercice suivant ; confirmation si la série n’est pas validée.
- « Signaler une douleur » met la séance en pause et ouvre une feuille ; la douleur s’enregistre dans le carnet.
- À [seuil d’alerte] ou plus, l’exercice est retiré de la séance. Le référent n’est prévenu que si vous touchez « Prévenir votre référent » : aucun envoi automatique.
- L’écran reste allumé pendant la séance.
- Pour une séance à la maison, chaque exercice affiche d’abord ses photos et ses consignes.

### États

- Prête : récapitulatif des exercices et Bouton « Commencer la séance ».
- En cours : compteur actif.
- Repos : minuteur plein écran sur fond bleu électrique.
- Pause : « Séance en pause » avec Bouton « Reprendre la séance » et Bouton « Terminer maintenant ».
- Douleur signalée : message d’alerte, exercice barré si le seuil est atteint, Boutons « Prévenir votre référent » et « Continuer sans prévenir ».
- Référent prévenu : « Votre référent est prévenu. »
- Succès : écran « Séance terminée ».
- Erreur d’enregistrement : « La séance n’a pas pu être envoyée. Elle est gardée sur votre téléphone. » avec Bouton « Réessayer ».
- Hors ligne : séance complète utilisable, envoi au retour du réseau.

<a id="exercices-maison"></a>
## 9. Exercices à la maison

**Origine** : hygie · **Écran du kit** : Listes à sous-titres (« Run 02 km ») et cartes de séance du kit

**But** : Donner le programme du jour prescrit par le référent et une bibliothèque d’exercices filtrable, pour prolonger le travail fait au centre.

**Composants** : `SectionHeader`, `ExerciseCard`, `TextField`, `Chip`, `StatCard`, `Button`, `EmptyState`, `Skeleton`

### Texte

### Exercices à la maison
Préparés par votre référent pour prolonger le travail fait au centre.

### Votre programme du jour
Prescrit par {referent} le {date_prescription}
{nb_exercices} exercices · {duree} min · {faits} faits sur {nb_exercices}
Bouton « Commencer le programme »
Carte exercice : photo · {nom} · {dosage} · {materiel} · À faire ou Fait
Bouton « Marquer comme fait »

### Bibliothèque
Champ « Rechercher un exercice »
- Objectif : Mobilité · Renforcement · Étirements · Prévention · Équilibre · Respiration
- Zone : Cou · Épaules · Dos · Hanches · Genoux · Chevilles · Tout le corps
- Matériel : Sans matériel · Élastique · Tapis · Haltères · Chaise
- Niveau : Débutant · Intermédiaire · Confirmé
Pastille « Hors programme » sur les exercices non prescrits
Bouton « Demander l’avis de votre référent »

Faites uniquement les exercices validés par votre référent. Arrêtez en cas de douleur.

### Messages
- Votre référent vous proposera des exercices après votre bilan. Bouton « Réserver votre bilan d’entrée »
- Aucun exercice ne correspond à ces filtres. Bouton « Effacer les filtres »
- Programme du jour terminé. Votre référent est informé.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Contenus des exercices à fournir et valider par le centre.",
  "referent": "Johan Pereira",
  "date_prescription": "12 septembre",
  "nb_exercices": 5,
  "duree": 15,
  "faits": 2,
  "programme": [
    {
      "nom": "Chat-vache",
      "dosage": "2 × 10",
      "materiel": "Tapis",
      "statut": "fait"
    },
    {
      "nom": "Pont fessier",
      "dosage": "3 × 12",
      "materiel": "Tapis",
      "statut": "fait"
    },
    {
      "nom": "Squat à la chaise",
      "dosage": "3 × 10",
      "materiel": "Chaise",
      "statut": "a_faire"
    },
    {
      "nom": "Équilibre sur une jambe",
      "dosage": "3 × 30 s par côté",
      "materiel": "Sans matériel",
      "statut": "a_faire"
    },
    {
      "nom": "Rotation thoracique",
      "dosage": "2 × 8 par côté",
      "materiel": "Tapis",
      "statut": "a_faire"
    }
  ],
  "bibliotheque_extrait": [
    {
      "nom": "Gainage planche",
      "objectif": "Renforcement",
      "zone": "Tout le corps",
      "niveau": "Débutant"
    },
    {
      "nom": "Étirement des ischio-jambiers",
      "objectif": "Étirements",
      "zone": "Hanches",
      "niveau": "Débutant"
    },
    {
      "nom": "Respiration abdominale",
      "objectif": "Respiration",
      "zone": "Tout le corps",
      "niveau": "Débutant"
    },
    {
      "nom": "Rotation externe à l’élastique",
      "objectif": "Prévention",
      "zone": "Épaules",
      "niveau": "Intermédiaire"
    }
  ]
}
```

### Interactions

- « Commencer le programme » ouvre Séance en cours en mode maison : photos, consignes, minuteur.
- Toucher une carte ouvre la fiche exercice.
- « Marquer comme fait » coche la carte, remplit la jauge du programme, puis demande le ressenti et la douleur pendant l’exercice, de 0 à 10.
- Filtres combinables ; le nombre de résultats s’affiche sous le champ de recherche.
- « Demander l’avis de votre référent » envoie l’exercice dans Messages avec une question préremplie.

### États

- Chargement : cartes en squelette.
- Vide, aucun programme : message et bouton de réservation du bilan d’entrée.
- Vide, filtres : « Aucun exercice ne correspond à ces filtres. »
- Succès : « Programme du jour terminé. Votre référent est informé. »
- Erreur : « Impossible de charger les exercices. » avec Bouton « Réessayer ».
- Hors ligne : programme du jour et photos disponibles s’ils ont été téléchargés ; bibliothèque limitée aux exercices déjà ouverts.

<a id="fiche-exercice"></a>
## 10. Fiche exercice

**Origine** : hygie · **Écran du kit** : Planificateur d’entraînement (carte d’exercice en grand) et grandes cartes arrondies

**But** : Expliquer un exercice pas à pas avec photos (départ, fin du mouvement, erreur à éviter), respiration, dosage prescrit, points de vigilance et variantes, pour le faire seul en sécurité.

**Composants** : `IconButton`, `PhotoSteps`, `Chip`, `StatCard`, `ListRow`, `Timer`, `Button`, `ScaleInput`, `Sheet`

### Texte

Bouton icône « Revenir à la liste »
### {nom_exercice}
Puces : {objectif} · {zone} · {niveau} · {materiel}

Photos en étapes (carrousel, points de pagination) :
- Étape 1 · Position de départ
- Étape 2 · Fin du mouvement
- Étape 3 · Erreur à éviter (cadre rose)
Légende : {legende_etape}

### À quoi sert cet exercice
{benefice}

### Comment le faire
1. {consigne_1}
2. {consigne_2}
3. {consigne_3}

### Respiration
{respiration}

### Votre dosage
Fixé par {referent}
{series} séries · {reps} répétitions · repos {repos} s · {tempo}

### Points de vigilance
- {vigilance_1}
- {vigilance_2}

### Erreurs fréquentes
- {erreur_1}
- {erreur_2}

### Pour adapter
- Plus facile : {variante_facile}
- Plus difficile : {variante_difficile}

### Boutons
- Bouton « Lancer le minuteur »
- Bouton « Marquer comme fait »
- Bouton « Poser une question à votre référent »

### Après l’exercice
Comment s’est passé cet exercice ? Facile · Adapté · Difficile · Douloureux
Douleur pendant l’exercice, de 0 à 10
Votre retour est envoyé à votre référent.
Bouton « Envoyer votre retour »

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Texte et photos à fournir et valider par le centre.",
  "nom_exercice": "Pont fessier",
  "objectif": "Renforcement",
  "zone": "Hanches",
  "niveau": "Débutant",
  "materiel": "Tapis",
  "photos": [
    {
      "etape": 1,
      "type": "etape",
      "alt": "Personne allongée sur le dos, genoux pliés, pieds à plat au sol",
      "legende": "Position de départ"
    },
    {
      "etape": 2,
      "type": "etape",
      "alt": "Bassin levé, genoux, hanches et épaules alignés",
      "legende": "Fin du mouvement"
    },
    {
      "etape": 3,
      "type": "erreur",
      "alt": "Erreur à éviter : bassin monté trop haut, bas du dos creusé",
      "legende": "Erreur à éviter"
    }
  ],
  "benefice": "Renforcer les fessiers et stabiliser le bassin.",
  "consignes": [
    "Allongez-vous sur le dos, genoux pliés, pieds à plat, écartés de la largeur du bassin.",
    "Serrez les fessiers et montez le bassin jusqu’à aligner genoux, hanches et épaules.",
    "Tenez 2 secondes, puis redescendez lentement."
  ],
  "respiration": "Soufflez en montant.",
  "referent": "Johan Pereira",
  "series": 3,
  "reps": 12,
  "repos": 45,
  "tempo": "montée 2 s, tenue 2 s, descente 3 s",
  "vigilance": [
    "Gardez le bas du dos neutre, sans le creuser.",
    "Arrêtez en cas de douleur."
  ],
  "erreurs": [
    "Pousser sur la pointe des pieds.",
    "Laisser les genoux s’écarter en montant."
  ],
  "variante_facile": "Réduire l’amplitude de la montée.",
  "variante_difficile": "Faire l’exercice sur une jambe."
}
```

### Interactions

- Glisser horizontalement change de photo ; toucher une photo l’ouvre en plein écran avec zoom.
- La photo « Erreur à éviter » porte un cadre rose et une icône croix ; son texte alternatif commence par « Erreur à éviter : ».
- « Lancer le minuteur » ouvre un minuteur de série puis de repos selon le dosage.
- « Marquer comme fait » ouvre l’échelle de ressenti, puis l’échelle « Douleur pendant l’exercice, de 0 à 10 » ; « Envoyer votre retour » transmet les deux au référent.
- « Poser une question à votre référent » ouvre Messages avec la fiche jointe.
- Chaque photo a un texte alternatif lu par les lecteurs d’écran.

### États

- Chargement : photos en squelette.
- Photo indisponible : cadre pastel avec « Photo à venir ».
- Exercice hors programme : bandeau « Cet exercice ne fait pas partie de votre programme. Demandez l’avis de votre référent avant de le faire. »
- Succès : « Exercice fait. Merci pour votre retour. »
- Erreur : « Impossible d’enregistrer. » avec Bouton « Réessayer ».
- Hors ligne : fiche lisible si déjà téléchargée ; retour envoyé au retour du réseau.

<a id="rendez-vous"></a>
## 11. Prendre rendez-vous

**Origine** : hygie · **Écran du kit** : Agenda / calendrier (bande de dates) et liste de sessions colorées

**But** : Réserver une séance de sport, un soin, un bilan ou une séance de récupération, avec le bon nombre d’étapes et le bon canal pour chaque prestation (réservation directe, Doctolib, téléphone).

**Composants** : `StepProgress`, `PoleCard`, `PriceCard`, `Chip`, `Questionnaire`, `TextField`, `Calendar`, `SlotGrid`, `ProfileCard`, `BookingBar`, `Button`, `Sheet`, `EmptyState`, `Toast`

### Texte

### Prendre rendez-vous
Choisissez une prestation, puis un créneau.
Étape {etape} sur {total}

Nombre d’étapes selon la prestation :
- Séance de sport, conseil en nutrition : 4 (Type, Prestation, Créneau, Récapitulatif)
- Pressothérapie : 5 (Type, Prestation, Votre séance, Créneau, Récapitulatif)
- Bilan : 6 (Type, Prestation, Quelques questions avant votre bilan, Créneau, Préparer votre bilan, Récapitulatif)
- Kinésithérapie : 6 (Type, Prestation, Motif, Praticien, Avant de continuer sur Doctolib, Votre rendez-vous)

### Que souhaitez-vous réserver ?
- **Séance de sport** — Progresser, bouger en sécurité ou reprendre après une blessure. Bouton « Réserver une séance de sport »
- **Kinésithérapie et soins** — Kinésithérapie, étiopathie, orthoptie. Bouton « Choisir un soin »
- **Bilan** — Savoir où vous en êtes et fixer vos axes de travail. Bouton « Choisir un bilan »
- **Récupération** — Pressothérapie, massages, conseil en nutrition. Bouton « Choisir une séance de récupération »

### Prestation
**Séance de sport**
- Coaching individuel — Progresser avec un préparateur physique, selon votre forfait (Essentiel, Avancé, Performance). Bouton « Choisir le coaching individuel »
- Sport-santé en petit groupe de 4 — Bouger en sécurité avec un éducateur en activité physique adaptée. Sport sur ordonnance possible. [prix]. Bouton « Choisir le sport-santé »
- Cross training — S’entraîner en groupe de 6 personnes au plus. 60 € par mois. Bouton « Choisir un cours » ; sans abonnement : Bouton « Rejoindre le cross training »
- Reprise du sport et réathlétisation — Retrouver votre niveau après une blessure, avec un préparateur physique. [prix]. Bouton « Choisir la reprise du sport »
- Suivi à distance — Garder le rythme entre deux venues au centre. [format du suivi] · [prix]. Bouton « Choisir le suivi à distance »

Sous-étape « Votre forfait » (coaching individuel)
Forfait {forfait} · Séances restantes cette semaine : {n}
Bouton « Choisir un créneau »
Sans forfait : Vous n’avez pas encore de forfait. Le bilan d’entrée fixe vos objectifs et construit votre programme. Bouton « Réserver votre bilan d’entrée » · Bouton « Voir les forfaits »

Sous-étape « Parlez-nous de votre situation » (sport-santé)
- Avez-vous une ordonnance d’activité physique adaptée ? Oui · Non
- Si oui : Bouton « Ajouter votre ordonnance » · PDF ou photo, {taille_max} Mo au plus
- Venez-vous par la Maison Sport-Santé de Fontainebleau ? Oui · Non
- Champ « Ce que vous souhaitez travailler » (facultatif)
- Bouton « Continuer »

Sous-étape « Votre suivi à distance »
Garder le rythme entre deux venues au centre.
[format du suivi] · [prix]
Bouton « Demander le suivi à distance »
Votre demande est envoyée. Le centre vous recontacte.

**Kinésithérapie et soins**
- Kinésithérapie — Soigner une douleur, rééduquer après une blessure ou une opération, avec l’un des 10 kinésithérapeutes du centre. Rendez-vous sur Doctolib. Dépassements d’honoraires : [montants]. Bouton « Choisir votre motif »
- Étiopathie — [bénéfice à valider par le centre]. Non remboursée par l’Assurance maladie, prise en charge par certaines mutuelles. [praticien] · [durée] · [prix]. Bouton « Appeler le centre »
- Orthoptie — [bénéfice à valider par le centre]. [praticien] · [prix] · [mode de réservation]. Bouton « Appeler le centre »

Kinésithérapie · Choisir votre motif
Puces : Blessure ou douleur liée au sport · Rééducation après une blessure ou une opération · Suivi d’un adolescent · Périnée, pré et post-partum · Suivi après un cancer du sein · Drainage lymphatique · Dry needling · Téléconsultation · Autre motif

Kinésithérapie · Choisir votre praticien
Praticiens dont les spécialités correspondent au motif · Sans préférence
Carte : photo · nom · spécialités · Bouton « Choisir ce praticien »

Kinésithérapie · Avant de continuer sur Doctolib
Vous allez prendre rendez-vous avec {praticien} sur Doctolib.
Revenez ensuite ici pour ajouter ce rendez-vous à votre agenda.
Dépassements d’honoraires : [montants]
Bouton « Continuer sur Doctolib »

Kinésithérapie · Votre rendez-vous (au retour de Doctolib)
Avez-vous pris un rendez-vous ?
- Champ « Date »
- Champ « Heure »
- Praticien : {praticien} (prérempli)
- Motif : {motif} (prérempli)
- Bouton « Enregistrer ce rendez-vous »
- Lien « Je n’ai pas pris de rendez-vous »
Rendez-vous enregistré. Il apparaît dans votre agenda avec la mention « Pris sur Doctolib ».

**Bilan**
Bilans physiologiques : une heure, en trois temps, conclus par un rapport et des axes de travail.
- Bilan d’entrée — Fixer vos objectifs et construire votre programme. Offert pour un engagement de 3 mois, sinon 145 €. [durée]. Bouton « Choisir ce bilan »
- Bilan fonctionnel — Savoir comment vous bougez : mobilité, amplitudes, contrôle moteur, équilibre. 60 €. Bouton « Choisir ce bilan »
- Bilan isocinétique — Connaître votre force et l’équilibre entre vos muscles, prévenir les blessures, valider votre reprise après une blessure ou une opération des ligaments croisés. 80 €. Bouton « Choisir ce bilan »
- Bilan des forces musculaires — Repérer les asymétries entre droite et gauche. 120 €, 80 € pour un seul membre. Bouton « Choisir ce bilan »
- Sauts — Mesurer votre explosivité. 80 €. Bouton « Choisir ce bilan »
- Profil force-vitesse — Connaître votre puissance pour orienter votre entraînement. 80 €. Bouton « Choisir ce bilan »

Bilan · Quelques questions avant votre bilan
Ces réponses aident le praticien à préparer votre bilan. Elles ne remplacent pas un avis médical.
- Qu’attendez-vous de ce bilan ? (champ)
- Avez-vous une douleur en ce moment ? Oui · Non
- Avez-vous eu une blessure ou une opération ? Oui · Non ; si oui : laquelle, et quand ?
- [autres questions fournies par le centre]
Bouton « Valider vos réponses »

Bilan · Préparer votre bilan
{prestation} · {date} à {heure} · une heure
[consignes avant le bilan fournies par le centre : tenue, documents à apporter]
Bouton « Ajouter un document » (facultatif)
Bouton « Continuer »

**Récupération**
- Pressothérapie — Accompagner votre récupération par le froid, la compression, la chaleur ou leur alternance. Game Ready Med4 Elite. 20 € la séance. Questionnaire de contre-indications obligatoire avant la première séance. Bouton « Choisir la pressothérapie » ; questionnaire non validé : Bouton « Remplir le questionnaire »
- Massages bien-être avec Malika Pereira, sur rendez-vous par téléphone :
  - Deep tissue — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
  - Drainage lymphatique, méthode Renata França — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
  - Drainage lymphatique, méthode Vodder — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
  - Anti-cellulite — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
  Bouton « Appeler le 06 24 11 42 19 »
- Conseil en nutrition — Mieux manger au quotidien, en prévention et sans diagnostic. Première séance bilan, séance de suivi, forfait bilan et 4 suivis · [prix]. Bouton « Réserver une première séance »

Pressothérapie · Votre séance
- Zone : [zones disponibles avec l’appareil]
- Besoin : Récupérer après l’effort · [autres besoins à valider] · Autre
- Bouton « Continuer »

### Créneau
Bande de 7 jours · Bouton icône « Voir la semaine suivante »
Créneaux : Matin · Après-midi · Soir
Praticien : Sans préférence · {praticiens}
Cours en groupe : Il reste {places} places sur {capacite}.
Cours complet : pilule « Complet » · Bouton « Rejoindre la liste d’attente »
Le centre vous accueille du lundi au vendredi de 8 h à 20 h, et le samedi de 9 h à 13 h.

### Récapitulatif
Barre collée en bas : {prestation} · {date} à {heure} · {praticien} · {prix}
Coaching individuel : Compris dans votre forfait {forfait}.
Paiement : [mode de paiement]
Bouton « Réserver ce créneau »

### Confirmation
Votre rendez-vous est réservé.
{prestation}, {date} à {heure}.
Hygie Sport Santé et Performance, 9, rue de la Petite Vitesse, 77210 Avon.
[consignes avant la séance]
- Bouton « Ajouter à votre calendrier »
- Bouton « Voir votre agenda »
- Bouton « Voir l’itinéraire »

Liste d’attente : Vous êtes sur la liste d’attente. Nous vous prévenons si une place se libère.

### Messages
- Ce créneau vient d’être pris. Choisissez un autre créneau.
- Aucun créneau libre cette semaine. Bouton « Voir la semaine suivante » · Bouton « Appeler le centre »
- Vous avez utilisé vos {incluses} séances de la semaine. Choisissez un créneau la semaine prochaine ou changez de forfait. Bouton « Voir les forfaits »
- Réservation impossible pour le moment. Réessayez ou appelez le 01 84 74 34 20.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Les prix et descriptions des prestations sont des faits du centre ; créneaux, praticiens, forfait et places sont des exemples. Le vendredi 25 septembre 2026 est un jour d’ouverture de 8 h à 20 h.",
  "parcours": "bilan",
  "etape": 4,
  "total": 6,
  "prestation": "Bilan fonctionnel",
  "prix": "60 €",
  "date": "vendredi 25 septembre",
  "creneaux": {
    "Matin": [
      "8 h 30",
      "10 h",
      "11 h 30"
    ],
    "Après-midi": [
      "14 h",
      "15 h 30"
    ],
    "Soir": [
      "18 h 30"
    ]
  },
  "creneau_choisi": "10 h",
  "praticiens": [
    "[praticien bilans]"
  ],
  "praticien": "Sans préférence",
  "exemple_confirmation": "Exemple : Bilan fonctionnel, vendredi 25 septembre à 10 h.",
  "forfait": "Avancé",
  "incluses": 2,
  "n": 1,
  "cours_groupe": [
    {
      "prestation": "Sport-santé en petit groupe de 4",
      "creneau": "[horaires des cours]",
      "places": 2,
      "capacite": 4
    },
    {
      "prestation": "Cross training",
      "creneau": "[horaires des cours]",
      "places": 0,
      "capacite": 6,
      "etat": "Complet"
    }
  ],
  "kine": {
    "motif": "Blessure ou douleur liée au sport",
    "praticien": "Romain Brelier-Murry"
  },
  "taille_max": 10
}
```

### Interactions

- Les petites barres en haut suivent le nombre d’étapes de la prestation choisie ; Bouton icône « Revenir à l’étape précédente » à gauche.
- Type : une carte de pôle se sélectionne au toucher et ouvre l’étape Prestation filtrée.
- Coaching individuel : la sous-étape « Votre forfait » vérifie les séances restantes de la semaine avant le créneau ; sans séance restante, le message « Vous avez utilisé vos {incluses} séances de la semaine… » remplace le créneau.
- Sport-santé : « Parlez-nous de votre situation » précède le créneau ; l’ordonnance ajoutée est rangée dans Documents, catégorie Ordonnances.
- Suivi à distance : pas de créneau ; « Demander le suivi à distance » envoie une demande au centre.
- Cours en groupe complet : « Rejoindre la liste d’attente » inscrit l’utilisateur ; une notification le prévient si une place se libère.
- Kinésithérapie : « Continuer sur Doctolib » ouvre la page Doctolib du praticien dans le navigateur ; au retour dans l’application, l’étape « Votre rendez-vous » s’affiche. Sans retour, la carte « Rendez-vous kiné à enregistrer » reste 7 jours dans Aujourd’hui.
- Bilans : « Quelques questions avant votre bilan » est obligatoire ; « Préparer votre bilan » s’affiche avant le récapitulatif.
- Massages : « Appeler le 06 24 11 42 19 » lance l’appel ; au retour, une feuille propose d’enregistrer le rendez-vous (Bouton « Enregistrer ce rendez-vous »), affiché ensuite dans l’agenda comme pris par téléphone.
- Pressothérapie : si le questionnaire n’est pas validé, « Remplir le questionnaire » passe avant « Votre séance » ; si une réponse demande un avis, la réservation s’arrête : « L’équipe vous recontacte avant toute réservation. »
- Créneau : les jours sans créneau sont grisés ; toucher un créneau le sélectionne et met à jour la barre du bas.
- Le créneau est retenu 5 minutes pendant la validation ; compte à rebours discret dans la barre.
- Depuis l’agenda (« Déplacer le rendez-vous »), le planning (« Prendre un autre rendez-vous ») ou le Coach IA (« Ouvrir la réservation »), la section s’ouvre préremplie à la première étape incomplète ; l’utilisateur valide lui-même le récapitulatif.
- Depuis l’Équipe, « Prendre rendez-vous » ouvre directement l’étape « Avant de continuer sur Doctolib », praticien prérempli.

### États

- Défaut : étape Type, aucune carte sélectionnée.
- Chargement des créneaux : pilules en squelette.
- Vide : « Aucun créneau libre cette semaine. »
- Places restantes : « Il reste {places} places sur {capacite}. » (au singulier : « Il reste 1 place sur {capacite}. »)
- Complet : pilule « Complet » et Bouton « Rejoindre la liste d’attente ».
- Semaine utilisée : « Vous avez utilisé vos {incluses} séances de la semaine. Choisissez un créneau la semaine prochaine ou changez de forfait. » avec Bouton « Voir les forfaits ».
- Conflit : « Ce créneau vient d’être pris. Choisissez un autre créneau. »
- Erreur : « Réservation impossible pour le moment. Réessayez ou appelez le 01 84 74 34 20. »
- Succès : écran de confirmation, séance ajoutée à l’agenda.
- Liste d’attente : « Vous êtes sur la liste d’attente. Nous vous prévenons si une place se libère. »
- Kiné enregistré : « Rendez-vous enregistré. Il apparaît dans votre agenda avec la mention « Pris sur Doctolib ». »
- Hors ligne : réservation impossible, bouton d’appel du centre mis en avant.

<a id="equipe"></a>
## 12. L’équipe

**Origine** : hygie · **Écran du kit** : Listes à sous-titres et avatar rond du profil

**But** : Présenter les praticiens et intervenants avec leurs spécialités, et mener chacun vers le bon canal de rendez-vous.

**Composants** : `SectionHeader`, `Chip`, `ProfileCard`, `Button`, `TextField`, `EmptyState`

### Texte

### L’équipe Hygie

### Fondateur
**Johan Pereira** · étiopathe, préparateur physique
D.U. Préparation physique et réathlétisation · D.U. Sport et locomotion

### Kinésithérapeutes
Champ « Rechercher un praticien »
Filtres : Tout · Kiné du sport · Rééducation fonctionnelle · Adolescents · Ostéopathie · Dry needling · Téléconsultation · Périnée, pré et post-partum · Cancer du sein · Drainage lymphatique
- **Naomée Addra** · rééducation fonctionnelle, kiné du sport, adolescents
- **Gautier Arcache** · rééducation fonctionnelle, ostéopathie
- **Alexis Ballard** · [spécialités]
- **Pierre Becker** · dry needling
- **Théo Borragini** · [spécialités]
- **Romain Brelier-Murry** · kiné du sport
- **Thomas Crasson** · téléconsultation
- **Margot De Oliveira** · [spécialités]
- **Jérémy Escriva** · [spécialités]
- **Maya Maurer** · rééducation périnéale, pré et post-partum, cancer du sein, drainage lymphatique
Sur chaque carte : Bouton « Prendre rendez-vous »
Rendez-vous sur Doctolib. Dépassements d’honoraires : [montants]

### Récupération & bien-être
**Malika Pereira** · massages bien-être : deep tissue, drainage lymphatique Renata França, drainage lymphatique Vodder, anti-cellulite
Bouton « Appeler le 06 24 11 42 19 »

### Sport
- Préparateurs physiques : [noms des préparateurs physiques]
- Éducateurs en activité physique adaptée : [noms des éducateurs]

### Nutrition
[nom du praticien] · conseil en nutrition préventif, sans diagnostic

### Orthoptie
[nom du praticien]

### Données d’exemple

```json
{
  "exemple": false,
  "_note": "Noms et spécialités fournis par le centre. Photos : [photos des praticiens]. Les éléments entre crochets manquent."
}
```

### Interactions

- Les filtres de spécialité masquent les cartes qui ne correspondent pas.
- Toucher une carte l’agrandit : photo, spécialités, bouton de rendez-vous.
- Kinésithérapeute : « Prendre rendez-vous » ouvre Prendre rendez-vous à l’étape « Avant de continuer sur Doctolib » (étape 3 du parcours kiné), praticien prérempli ; le retour de Doctolib mène au formulaire « Votre rendez-vous ».
- « Appeler le 06 24 11 42 19 » lance l’appel.

### États

- Chargement : cartes en squelette.
- Vide après filtre : « Aucun praticien pour cette spécialité. » avec Bouton « Effacer les filtres ».
- Photo manquante : initiales dans un rond pastel.
- Hors ligne : liste lisible, boutons de rendez-vous et d’appel inactifs.

<a id="bilans"></a>
## 13. Mes bilans

**Origine** : hygie · **Écran du kit** : Statistics (grandes cartes chiffrées, courbes) et carte Calories à barres

**But** : Retrouver chaque bilan, comprendre ses résultats et ses axes de travail, et suivre l’évolution d’un bilan à l’autre.

**Composants** : `Segmented`, `ListRow`, `DateTag`, `StatCard`, `SymmetryBar`, `Button`, `Chip`, `EmptyState`, `Skeleton`

### Texte

### Vos bilans
Chaque bilan physiologique dure une heure, en trois temps. Il se conclut par un rapport et des axes de travail.
Sélecteur : Résultats · Historique

### Historique
Ligne : {type_bilan} · {date} · {praticien} · Rapport disponible, En cours de rédaction ou À venir

### Détail d’un bilan
Étiquette : {date_bilan}
**{type_bilan}**

Asymétrie droite / gauche
Barre double centrée par groupe musculaire : Gauche {valeur_gauche} · Droite {valeur_droite} · Écart {ecart} %

Évolution
Courbe depuis le bilan précédent : {variation}

Ce que cela veut dire
{interpretation_praticien}

Vos axes de travail
1. {axe_1}
2. {axe_2}
3. {axe_3}

- Bouton « Télécharger le rapport »
- Bouton « Voir les exercices associés »
- Bouton « Réserver votre bilan intermédiaire »
- Bouton « Poser une question au praticien »

Vos résultats sont interprétés par votre praticien. Le Coach IA peut vous les expliquer, sans remplacer cet échange.

### Messages
- Vous n’avez pas encore de bilan. Le bilan d’entrée fixe vos objectifs et construit votre programme. Bouton « Réserver votre bilan d’entrée »
- Votre rapport est en cours de rédaction. Vous recevrez une notification.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Résultats fictifs pour la maquette. Ne pas présenter comme des normes. Seul jeu d’exemple de référence pour toute la maquette.",
  "historique": [
    {
      "type_bilan": "Bilan des forces musculaires",
      "date": "12 septembre 2026",
      "praticien": "[praticien]",
      "statut": "Rapport disponible"
    },
    {
      "type_bilan": "Bilan fonctionnel",
      "date": "3 juin 2026",
      "praticien": "[praticien]",
      "statut": "Rapport disponible"
    },
    {
      "type_bilan": "Bilan isocinétique",
      "date": "10 octobre 2026",
      "praticien": "[praticien]",
      "statut": "À venir"
    }
  ],
  "detail": {
    "type_bilan": "Bilan des forces musculaires",
    "date_bilan": "SAMEDI 12 SEPTEMBRE",
    "mesures": [
      {
        "groupe": "Quadriceps",
        "valeur_gauche": 182,
        "valeur_droite": 205,
        "unite": "N·m",
        "ecart": 11
      },
      {
        "groupe": "Ischio-jambiers",
        "valeur_gauche": 110,
        "valeur_droite": 114,
        "unite": "N·m",
        "ecart": 4
      },
      {
        "groupe": "Mollets",
        "valeur_gauche": 96,
        "valeur_droite": 99,
        "unite": "N·m",
        "ecart": 3
      }
    ],
    "seuil_ecart_mis_en_avant": "[fixé par le praticien]",
    "variation": "écart du quadriceps passé de 18 % à 11 % depuis le 3 juin",
    "interpretation_praticien": "La force du quadriceps gauche progresse. L’écart reste à réduire avant la reprise des sauts.",
    "axes": [
      "Renforcer le quadriceps gauche",
      "Travailler l’équilibre sur une jambe",
      "Reprendre la course de façon progressive"
    ]
  }
}
```

### Interactions

- Le sélecteur bascule entre le dernier bilan et l’historique.
- Toucher une ligne de l’historique ouvre le détail.
- Toucher une barre double affiche les valeurs exactes et l’unité.
- L’écart est coloré en rose au-dessus du seuil fixé par le praticien, en menthe en dessous.
- « Voir les exercices associés » ouvre Exercices à la maison filtré sur les axes de travail.
- « Réserver votre bilan intermédiaire » ouvre Prendre rendez-vous à l’étape Prestation, catégorie Bilan.
- « Télécharger le rapport » ouvre le PDF ; il est aussi rangé dans Documents, catégorie Rapports de bilan.

### États

- Chargement : cartes en squelette.
- Vide : aucun bilan, bouton de réservation du bilan d’entrée.
- À venir : ligne en aubergine clair avec la date.
- En cours de rédaction : pastille aubergine et message de notification.
- Erreur : « Impossible d’afficher ce bilan. » avec Bouton « Réessayer ».
- Succès du téléchargement : « Rapport enregistré dans vos documents. »
- Hors ligne : derniers résultats consultés disponibles, téléchargement inactif.

<a id="suivi"></a>
## 14. Suivi personnalisé

**Origine** : hygie · **Écran du kit** : Profil (avatar rond dans un anneau rose) et cartes chiffrées de Statistics

**But** : Réunir le référent, les objectifs, le prochain bilan et le carnet quotidien (douleur, forme, sommeil) pour un accompagnement dans la durée.

**Composants** : `ProfileCard`, `StatCard`, `ScaleInput`, `BodyMap`, `Segmented`, `Chip`, `Button`, `TextField`, `SectionHeader`, `Toast`

### Texte

### Votre suivi

### Votre référent
{referent} · {fonction}
Parcours {parcours} · Forfait {forfait} · depuis le {date_debut}
- Bouton « Écrire à votre référent »
- Bouton « Prendre rendez-vous »

### Vos objectifs
Fixés ensemble lors de votre bilan.
- {objectif} — départ {valeur_depart}, aujourd’hui {valeur_actuelle} · cible {cible} · échéance {echeance}
Jauge de progression
Bouton « Voir le détail »

### Prochain bilan
{type_bilan} · {date_prochain_bilan} à {heure_prochain_bilan}
Bouton « Voir votre agenda »
Sans bilan prévu : Bilan intermédiaire à prévoir vers le {date_bilan_intermediaire}. Bouton « Réserver votre bilan intermédiaire »

### Votre carnet
Chaque jour, notez votre douleur, votre forme et votre sommeil.
- Douleur, de 0 à 10
- Zone : silhouette à toucher ; liste équivalente : Cou · Épaules · Dos · Hanches · Genoux · Chevilles · Autre
- Moment : Au repos · Pendant l’effort · Après l’effort
- Forme, de 0 à 10
- Sommeil, de 0 à 10
- Champ « Une note pour votre référent » (facultatif)
Bouton « Enregistrer votre carnet »

Courbes : Douleur · Forme · Sommeil
Sélecteur : 7 j · 30 j · 90 j

### Alerte douleur
Votre douleur est à [seuil d’alerte] ou plus depuis deux jours. Voulez-vous prévenir votre référent ?
- Bouton « Prévenir votre référent »
- Bouton « Continuer sans prévenir »

### Votre parcours en chiffres
{seances_faites} séances au centre · {taux_exercices} % des exercices à la maison faits · {nb_bilans} bilans

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Objectifs cohérents avec le bilan des forces musculaires du 12 septembre 2026.",
  "referent": "Johan Pereira",
  "fonction": "préparateur physique",
  "parcours": "Performance",
  "forfait": "Avancé",
  "date_debut": "1er juin",
  "objectifs": [
    {
      "objectif": "Reprendre la course 3 fois par semaine",
      "valeur_depart": "0 fois par semaine",
      "valeur_actuelle": "1 fois par semaine",
      "cible": "3 fois par semaine",
      "echeance": "décembre 2026",
      "progression": 33
    },
    {
      "objectif": "Réduire l’écart de force des quadriceps sous 10 %",
      "valeur_depart": "18 %",
      "valeur_actuelle": "11 %",
      "cible": "moins de 10 %",
      "echeance": "novembre 2026",
      "progression": 88
    }
  ],
  "prochain_bilan": {
    "type_bilan": "Bilan isocinétique",
    "date_prochain_bilan": "samedi 10 octobre",
    "heure_prochain_bilan": "10 h"
  },
  "carnet_7_jours": {
    "periode": "du 17 au 23 septembre",
    "douleur": [
      1,
      1,
      0,
      1,
      1,
      3,
      null
    ],
    "forme": [
      7,
      7,
      8,
      6,
      7,
      6,
      null
    ],
    "sommeil": [
      7,
      6,
      8,
      7,
      7,
      6,
      null
    ],
    "_note": "Carnet du mercredi 23 pas encore rempli."
  },
  "seuil_alerte": "[seuil d’alerte]",
  "seances_faites": 18,
  "taux_exercices": 76,
  "nb_bilans": 2
}
```

### Interactions

- Toucher un objectif ouvre son détail : historique des valeurs et prochaines étapes.
- Carnet : la douleur, la forme et le sommeil sont obligatoires ; zone et moment s’affichent quand la douleur est au-dessus de 0.
- « Enregistrer votre carnet » ajoute un point aux trois courbes ; le carnet du jour reste modifiable jusqu’à minuit.
- Le sélecteur 7 j · 30 j · 90 j recalcule les courbes.
- Quand la douleur atteint [seuil d’alerte] deux jours de suite, l’alerte propose de prévenir le référent. Aucun envoi automatique : rien ne part sans « Prévenir votre référent ».
- Le référent voit le carnet seulement si « Partager votre carnet avec votre référent » est activé dans Profil et réglages.
- « Écrire à votre référent » ouvre la conversation dans Messages et documents.
- « Voir votre agenda » fait défiler jusqu’à Agenda, sur le jour du bilan.

### États

- Chargement : cartes en squelette.
- Vide, sans référent : « Votre référent vous sera présenté après votre bilan d’entrée. » avec Bouton « Réserver votre bilan d’entrée ».
- Vide, carnet : « Votre carnet est vide. Remplissez-le chaque jour pour suivre votre douleur, votre forme et votre sommeil. »
- Alerte : carte rose avec les Boutons « Prévenir votre référent » et « Continuer sans prévenir ».
- Succès : « Carnet enregistré. » ou « Votre référent est prévenu. »
- Erreur : « Envoi impossible. » avec Bouton « Réessayer ».
- Hors ligne : saisies gardées sur l’appareil et envoyées au retour du réseau.

<a id="messages-documents"></a>
## 15. Messages et documents

**Origine** : hygie · **Écran du kit** : Conversation avec le coach IA (bulles) et réglages en liste séparée par des filets

**But** : Échanger avec les praticiens et ranger au même endroit rapports de bilan, ordonnances, comptes rendus, questionnaires, autres documents et factures.

**Composants** : `Segmented`, `ListRow`, `ChatBubble`, `ChatComposer`, `Button`, `Chip`, `EmptyState`, `StatusBanner`, `Sheet`

### Texte

### Messages et documents
Sélecteur : Messages · Documents

### Messages
Ligne de conversation : {praticien} · {extrait} · {heure} · pastille non lu
Bulles : praticien à gauche sur fond menthe, vous à droite sur fond bleu électrique
Champ « Écrire un message »
Bouton icône « Joindre un fichier » · Bouton icône « Envoyer le message »
En tête de conversation : Réponse sous [délai de réponse]. Pour le centre : 01 84 74 34 20. En cas d’urgence, appelez le 15 ou le 112.
Une question sur le centre ou votre programme ? Posez-la au Coach IA. Bouton « Parler au Coach IA »

### Documents
Catégories : Rapports de bilan · Ordonnances · Comptes rendus · Questionnaires · Autres documents · Factures [si disponibles]
Ligne document : {titre} · {date} · {taille} · {origine} (« Ajouté par le centre » ou « Ajouté par vous »)
- Bouton « Ajouter un document »
- Bouton « Photographier une ordonnance »
- Bouton « Télécharger le document »
- Bouton « Partager avec un praticien »
- Bouton « Supprimer ce document » (documents ajoutés par vous seulement)
Vos documents sont hébergés par [hébergeur de données de santé].
Pour le sport sur ordonnance, ajoutez votre ordonnance d’activité physique adaptée. Bouton « Ajouter votre ordonnance »

### Suppression
Supprimer ce document ?
{titre} sera retiré de vos documents.
- Bouton « Confirmer la suppression »
- Bouton « Garder le document »

### Messages d’état
- Aucun message pour le moment. Bouton « Écrire à votre référent »
- Aucun document pour le moment. Bouton « Ajouter un document »
- Envoi impossible. Le fichier dépasse {taille_max} Mo.
- Document ajouté.
- Document supprimé.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "conversations": [
    {
      "praticien": "Johan Pereira",
      "extrait": "Pensez à noter votre ressenti après la séance.",
      "heure": "9 h 12",
      "non_lu": true
    },
    {
      "praticien": "Romain Brelier-Murry",
      "extrait": "Votre compte rendu est dans vos documents.",
      "heure": "lundi",
      "non_lu": false
    }
  ],
  "fil": [
    {
      "auteur": "praticien",
      "nom": "Johan Pereira",
      "texte": "Comment s’est passée la reprise de la course ?",
      "heure": "8 h 55"
    },
    {
      "auteur": "vous",
      "texte": "Bien. Une légère gêne au genou droit après 20 minutes.",
      "heure": "9 h 03"
    },
    {
      "auteur": "praticien",
      "nom": "Johan Pereira",
      "texte": "Merci. On adapte la séance de ce soir. Pensez à noter votre ressenti après la séance.",
      "heure": "9 h 12"
    }
  ],
  "documents": [
    {
      "titre": "Compte rendu, kinésithérapie",
      "categorie": "Comptes rendus",
      "date": "21 septembre",
      "taille": "240 Ko",
      "origine": "Ajouté par le centre"
    },
    {
      "titre": "Rapport, bilan des forces musculaires",
      "categorie": "Rapports de bilan",
      "date": "12 septembre",
      "taille": "1,2 Mo",
      "origine": "Ajouté par le centre"
    },
    {
      "titre": "Questionnaire, pressothérapie",
      "categorie": "Questionnaires",
      "date": "10 septembre",
      "taille": "90 Ko",
      "origine": "Ajouté par le centre"
    },
    {
      "titre": "Ordonnance, kinésithérapie",
      "categorie": "Ordonnances",
      "date": "28 août",
      "taille": "320 Ko",
      "origine": "Ajouté par vous"
    }
  ],
  "taille_max": 10
}
```

### Interactions

- Le sélecteur bascule entre Messages et Documents ; la pastille de non-lus reste visible sur Messages.
- Toucher une conversation ouvre le fil ; le champ reste collé au-dessus du clavier.
- « Joindre un fichier » propose Appareil photo, Photos ou Fichiers.
- Un message non envoyé garde une icône « Renvoyer le message ».
- « Parler au Coach IA » fait défiler jusqu’à Coach IA.
- Les filtres de catégorie limitent la liste des documents ; toucher un document ouvre l’aperçu.
- « Photographier une ordonnance » ouvre l’appareil photo, puis range la photo dans Ordonnances.
- « Supprimer ce document » n’apparaît que sur les documents ajoutés par vous ; la suppression se confirme dans une feuille.
- « Partager avec un praticien » ouvre une feuille avec la liste des praticiens qui vous suivent.

### États

- Chargement : lignes en squelette.
- Vide : message et bouton d’action.
- Envoi en cours : bulle semi-transparente.
- Erreur d’envoi : bulle cerclée de rose et Bouton icône « Renvoyer le message ».
- Fichier trop lourd : « Envoi impossible. Le fichier dépasse {taille_max} Mo. »
- Succès : « Document ajouté. » ou « Document supprimé. »
- Hors ligne : messages en file d’attente, envoi au retour du réseau ; documents déjà ouverts lisibles.

<a id="recuperation"></a>
## 16. Récupération & bien-être

**Origine** : hygie · **Écran du kit** : Panneau d’abonnement coloré posé dans une grande carte et listes à sous-titres

**But** : Présenter la pressothérapie avec son questionnaire obligatoire, les massages bien-être et le conseil en nutrition, et mener vers la réservation.

**Composants** : `PoleCard`, `Card`, `Chip`, `PriceCard`, `Questionnaire`, `Checkbox`, `Button`, `Sheet`, `Toast`

### Texte

### Récupération & bien-être
Récupérer entre deux séances et mieux manger au quotidien.

### Pressothérapie
Accompagner votre récupération par le froid, la compression, la chaleur ou leur alternance.
Appareil : Game Ready Med4 Elite.
Modes : Froid · Compression · Chaleur · Alternance
20 € la séance · [durée]
Avant la première séance, un questionnaire de contre-indications est obligatoire.
Pastille d’état : Questionnaire validé · le {date_validation}
- Bouton « Réserver une séance »
- Bouton « Remplir le questionnaire » (tant que le questionnaire n’est pas rempli)

### Questionnaire de contre-indications
Répondez à chaque question. L’équipe lit vos réponses avant votre première séance.
Questions : [questions de contre-indication fournies et validées par un praticien du centre], réponse Oui ou Non
Case « Je certifie l’exactitude de mes réponses. »
Bouton « Envoyer le questionnaire »
- Aucune contre-indication : Merci. Vous pouvez réserver votre séance.
- Une réponse demande un avis : L’équipe vous recontacte avant toute réservation. [délai]
- Validité : [durée de validité du questionnaire]

### Massages bien-être
Avec Malika Pereira, sur rendez-vous par téléphone.
- Deep tissue — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
- Drainage lymphatique, méthode Renata França — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
- Drainage lymphatique, méthode Vodder — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
- Anti-cellulite — [bénéfice à valider par Malika Pereira] · [durée] · [prix]
Bouton « Appeler le 06 24 11 42 19 »

### Conseil en nutrition
Un accompagnement préventif pour mieux manger au quotidien. Il ne pose pas de diagnostic.
- Première séance bilan · [prix]
- Séance de suivi · [prix]
- Forfait bilan et 4 suivis · [prix]
Bouton « Réserver une première séance »

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Prix, appareil et prestations : faits du centre. Statut du questionnaire : exemple, cohérent avec la pressothérapie réservée aujourd’hui à 19 h 15.",
  "questionnaire_statut": "valide",
  "date_validation": "10 septembre",
  "questions": "[questions de contre-indication fournies et validées par un praticien du centre]"
}
```

### Interactions

- Les puces de mode expliquent chaque mode dans une infobulle ; elles ne se sélectionnent pas.
- « Remplir le questionnaire » ouvre une feuille ; une question par ligne, Oui ou Non ; envoi possible quand tout est rempli et la case cochée.
- Une réponse Oui passe le questionnaire en « À valider par l’équipe » ; la réservation reste fermée.
- Questionnaire validé : « Réserver une séance » ouvre Prendre rendez-vous à l’étape « Votre séance » (zone et besoin), pressothérapie choisie.
- « Appeler le 06 24 11 42 19 » lance l’appel ; au retour, une feuille propose d’enregistrer le rendez-vous dans l’agenda.
- « Réserver une première séance » ouvre Prendre rendez-vous, conseil en nutrition choisi.

### États

- Validé (état de la maquette) : pastille menthe « Questionnaire validé », « Réserver une séance » actif.
- Questionnaire non rempli : « Réserver une séance » inactif et pastille « Questionnaire requis ».
- À valider par l’équipe : pastille aubergine « En cours de lecture ».
- Erreur d’envoi : « Envoi impossible. » avec Bouton « Réessayer ».
- Hors ligne : questionnaire gardé en brouillon sur l’appareil.

<a id="nutrition"></a>
## 17. Nutrition

**Origine** : kit+hygie · **Écran du kit** : Journal nutrition et scan de code-barres

**But** : Tenir un journal alimentaire simple, scanner un code-barres, suivre l’eau, et mener vers le conseil en nutrition du centre.

**Composants** : `DateTag`, `StatCard`, `ListRow`, `IconButton`, `Button`, `ScannerView`, `Segmented`, `Sheet`, `TextField`, `EmptyState`

### Texte

### Votre journal alimentaire
Étiquette : {date_du_jour}

### Aujourd’hui
{kcal_consommees} kcal sur {repere_kcal}
Barres : Protéines {proteines} g · Glucides {glucides} g · Lipides {lipides} g

### Eau
{eau} L · Bouton icône « Ajouter un verre d’eau »

### Repas
Petit-déjeuner · Déjeuner · Collation · Dîner
Ligne repas : {repas} · {kcal} kcal · {aliments}
Bouton icône « Ajouter un aliment » sur chaque repas
- Bouton « Scanner un code-barres »
- Bouton « Rechercher un aliment »

### Scanner
Placez le code-barres dans le cadre.
Bouton « Saisir le code à la main » · Bouton icône « Allumer la lampe »
Résultat : {produit} · {marque} · pour 100 g : {kcal_100g} kcal · Protéines {p} g · Glucides {g} g · Lipides {l} g
Quantité : {quantite} g · Bouton icône « Retirer 10 g » · Bouton icône « Ajouter 10 g »
Repas : Petit-déjeuner · Déjeuner · Collation · Dîner
Bouton « Ajouter au journal »

### Besoin d’un regard extérieur ?
Le conseil en nutrition du centre est préventif et sans diagnostic.
Bouton « Découvrir le conseil en nutrition »

Les repères caloriques sont indicatifs.

### Messages
- Produit introuvable. Bouton « Ajouter le produit à la main »
- Accès à la caméra refusé. Autorisez la caméra dans les réglages de votre téléphone. Bouton « Ouvrir les réglages »
- Aucun repas noté aujourd’hui. Bouton « Ajouter un repas »
- Ajouté à votre {repas}.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "date_du_jour": "MERCREDI 23 SEPTEMBRE",
  "kcal_consommees": 1340,
  "repere_kcal": "[repère à définir avec le centre]",
  "proteines": 72,
  "glucides": 150,
  "lipides": 48,
  "eau": 1.2,
  "repas": [
    {
      "repas": "Petit-déjeuner",
      "kcal": 420,
      "aliments": "Flocons d’avoine, yaourt nature, banane"
    },
    {
      "repas": "Déjeuner",
      "kcal": 680,
      "aliments": "Riz complet, poulet, courgettes"
    },
    {
      "repas": "Collation",
      "kcal": 240,
      "aliments": "Pomme, amandes"
    }
  ],
  "scan": {
    "produit": "Yaourt nature",
    "marque": "[marque]",
    "kcal_100g": 62,
    "p": 4.3,
    "g": 5.1,
    "l": 2.8,
    "quantite": 125,
    "repas": "Collation"
  }
}
```

### Interactions

- « Scanner un code-barres » ouvre la caméra dans une feuille plein écran ; détection automatique, vibration courte à la lecture.
- Le résultat s’affiche en feuille ; quantité réglable par − et + ou au clavier.
- Glisser une ligne d’aliment vers la gauche révèle « Supprimer ».
- « Rechercher un aliment » ouvre une recherche avec les aliments récents en tête.
- « Découvrir le conseil en nutrition » fait défiler jusqu’à Récupération & bien-être.

### États

- Chargement : barres en squelette.
- Vide : « Aucun repas noté aujourd’hui. »
- Caméra refusée : message et bouton vers les réglages.
- Produit introuvable : saisie manuelle proposée.
- Succès : « Ajouté à votre {repas}. »
- Erreur : « Impossible d’ajouter cet aliment. » avec Bouton « Réessayer ».
- Hors ligne : saisie manuelle possible, scan et recherche inactifs.

<a id="coach-ia"></a>
## 18. Coach IA

**Origine** : kit+hygie · **Écran du kit** : Conversation avec un coach IA

**But** : Répondre aux questions sur le programme, les bilans et le centre, et proposer des actions : les réservations s’ouvrent préremplies et l’utilisateur les valide lui-même ; les saisies simples se confirment sur la carte.

**Composants** : `Header`, `ChatBubble`, `Chip`, `ActionCard`, `ChatComposer`, `IconButton`, `Button`, `StatusBanner`

### Texte

### Votre Coach IA
Il répond sur votre programme, vos bilans et le centre. Il peut agir pour vous dans l’application, avec votre accord.
Le Coach IA fonctionne avec un modèle Mistral hébergé en Europe. Il ne remplace ni un avis médical ni votre référent.

Bonjour {prenom}. Que voulez-vous faire aujourd’hui ?

### Suggestions
- Expliquer mon dernier bilan
- J’ai mal au genou, que faire ?
- Réserver une séance de pressothérapie
- Quels sont les horaires du centre ?
- Me proposer des exercices pour le dos

### Carte d’action
{titre_action}
{details_action}
- Réserver, déplacer ou annuler un rendez-vous : Bouton « Ouvrir la réservation ». Le parcours s’ouvre prérempli ; vous vérifiez et validez vous-même.
- Noter une douleur : Bouton « Enregistrer la douleur »
- Prévenir votre référent : Bouton « Envoyer au référent »
- Bouton « Modifier la demande »
Rien ne se fait sans votre accord.

Actions possibles : préparer une réservation, un déplacement ou une annulation ; noter une douleur dans votre carnet ; noter un repas ou de l’eau ; ouvrir un bilan ou un exercice ; envoyer un message à votre référent ; proposer un ajustement de programme, validé ensuite par votre référent.

### Champ
Champ « Écrire au Coach IA »
Bouton icône « Dicter un message » · Bouton icône « Envoyer le message »

### Limites
Pour une question médicale, parlez-en à votre référent. Bouton « Écrire à votre référent »
Douleur dans la poitrine, malaise, essoufflement inhabituel : appelez le 15 ou le 112.

### Messages
- Le Coach IA ne répond pas pour le moment. Bouton « Réessayer »
- Le Coach IA a besoin d’une connexion.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Échange fictif. Le vendredi 25 septembre 2026, le centre est ouvert de 8 h à 20 h.",
  "prenom": "Camille",
  "echange": [
    {
      "auteur": "vous",
      "texte": "Quels sont les horaires du centre ?"
    },
    {
      "auteur": "coach",
      "texte": "Le centre est ouvert du lundi au vendredi de 8 h à 20 h, et le samedi de 9 h à 13 h."
    },
    {
      "auteur": "vous",
      "texte": "J’ai un peu mal au genou droit depuis hier. Je fais ma séance ce soir ?"
    },
    {
      "auteur": "coach",
      "texte": "Merci de me le dire. De 0 à 10, quelle est votre douleur ?"
    },
    {
      "auteur": "vous",
      "texte": "Environ 3."
    },
    {
      "auteur": "coach",
      "texte": "Je vous propose de noter cette douleur dans votre carnet et de prévenir votre référent. Il vous dira s’il faut adapter la séance de ce soir. Si la douleur augmente, arrêtez l’effort."
    },
    {
      "auteur": "coach",
      "type": "action",
      "titre_action": "Noter une douleur",
      "details_action": "Genou droit · 3 sur 10 · aujourd’hui · envoi à Johan Pereira",
      "bouton": "Enregistrer la douleur"
    },
    {
      "auteur": "vous",
      "texte": "Pouvez-vous me réserver une pressothérapie vendredi soir ?"
    },
    {
      "auteur": "coach",
      "texte": "Votre questionnaire est validé. J’ai préparé la réservation. Il reste à choisir la zone, puis à valider le récapitulatif."
    },
    {
      "auteur": "coach",
      "type": "action",
      "titre_action": "Réserver une pressothérapie",
      "details_action": "Pressothérapie · vendredi 25 septembre à 18 h 30 · 20 € · zone à choisir",
      "bouton": "Ouvrir la réservation"
    }
  ]
}
```

### Interactions

- Toucher une suggestion l’envoie comme message.
- Réponse affichée au fil de l’eau avec trois points animés pendant l’attente.
- « Ouvrir la réservation » ouvre Prendre rendez-vous prérempli, à la première étape incomplète (pour cet exemple : « Votre séance », zone à choisir) ; le questionnaire préalable d’un bilan et le récapitulatif restent à valider par l’utilisateur.
- « Enregistrer la douleur » et « Envoyer au référent » s’exécutent au toucher ; la carte affiche ensuite « Fait » ou l’erreur.
- Pressothérapie sans questionnaire validé : la carte propose « Remplir le questionnaire » à la place de « Ouvrir la réservation ».
- Appui long sur une réponse : « Copier le texte » et « Signaler une réponse ».
- Les mots d’alerte (poitrine, malaise, essoufflement) affichent le bandeau d’urgence en tête de réponse.

### États

- Défaut : message d’accueil et suggestions.
- En attente : trois points animés.
- Réservation ouverte : carte en aubergine clair avec « Réservation à terminer ».
- Action confirmée : carte en menthe avec « Fait ».
- Action en échec : carte en rose avec « L’action n’a pas abouti. » et Bouton « Réessayer ».
- Erreur : « Le Coach IA ne répond pas pour le moment. »
- Hors ligne : champ inactif et « Le Coach IA a besoin d’une connexion. »

<a id="communaute"></a>
## 19. Communauté

**Origine** : kit · **Écran du kit** : Communauté

**But** : Partager ses progrès avec les autres adhérents, relever des défis et suivre un classement, sans exposer de données de santé.

**Composants** : `Segmented`, `ChatComposer`, `PostCard`, `ChallengeCard`, `LeaderboardRow`, `Avatar`, `Button`, `IconButton`, `Toggle`, `EmptyState`

### Texte

### La communauté Hygie
Sélecteur : Fil · Défis · Classement

### Fil
Champ « Partagez une séance, un progrès, une question »
Bouton « Publier »
Publication : avatar · {pseudo} · {temps} · texte · photo facultative
Bouton icône « Encourager » ({encouragements}) · Bouton icône « Commenter » ({commentaires}) · Bouton icône « Signaler la publication »
Ne partagez pas d’information médicale personnelle.

### Défis
Carte défi : {titre} · {periode} · {participants} participants · jauge {progression} %
Bouton « Rejoindre le défi » ou Bouton « Quitter le défi »

### Classement
Sélecteur : Semaine · Mois
Ligne : rang · avatar · {pseudo} · {points} points ; votre ligne mise en avant
Les points viennent des séances faites, des exercices à la maison et des défis. [règle de calcul des points]
Interrupteur « Apparaître dans le classement »

### Messages
- Aucune publication pour le moment. Bouton « Écrire une publication »
- Publication retirée. Elle ne respecte pas la charte de la communauté.
- Vous avez rejoint le défi.

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles. Membres fictifs. Semaine en cours : du lundi 21 au dimanche 27 septembre 2026.",
  "publications": [
    {
      "pseudo": "Léa M.",
      "temps": "il y a 2 h",
      "texte": "Première semaine de cross training terminée. Merci au groupe pour l’énergie.",
      "encouragements": 14,
      "commentaires": 3
    },
    {
      "pseudo": "Karim B.",
      "temps": "hier",
      "texte": "Reprise de la course validée après mon bilan. 5 km ce matin.",
      "encouragements": 22,
      "commentaires": 6
    }
  ],
  "defis": [
    {
      "titre": "8 000 pas par jour",
      "periode": "du 21 au 27 septembre",
      "participants": 37,
      "progression": 29,
      "rejoint": true
    },
    {
      "titre": "5 séances de mobilité",
      "periode": "cette semaine",
      "participants": 21,
      "progression": 40,
      "rejoint": false
    },
    {
      "titre": "1,5 L d’eau par jour",
      "periode": "14 jours",
      "participants": 29,
      "progression": 20,
      "rejoint": false
    }
  ],
  "classement": [
    {
      "rang": 1,
      "pseudo": "Sophie D.",
      "points": 420
    },
    {
      "rang": 2,
      "pseudo": "Karim B.",
      "points": 395
    },
    {
      "rang": 3,
      "pseudo": "Léa M.",
      "points": 360
    },
    {
      "rang": 8,
      "pseudo": "Vous",
      "points": 245,
      "vous": true
    }
  ]
}
```

### Interactions

- Le sélecteur bascule entre Fil, Défis et Classement.
- « Encourager » s’anime et incrémente le compteur ; un second toucher l’annule.
- « Signaler la publication » ouvre une feuille avec des motifs ; la publication est masquée pour vous.
- « Rejoindre le défi » ajoute la carte « Votre défi » dans Aujourd’hui ; « Quitter le défi » la retire.
- Le classement défile jusqu’à votre ligne à l’ouverture.
- Interrupteur désactivé : vous n’apparaissez plus, votre rang reste visible pour vous seul.

### États

- Chargement : publications en squelette.
- Vide : aucune publication, bouton d’écriture.
- Publication en cours d’envoi : carte semi-transparente.
- Succès : « Vous avez rejoint le défi. »
- Erreur : « Publication impossible. » avec Bouton « Réessayer ».
- Hors ligne : fil en cache, publication et encouragements inactifs.

<a id="offres"></a>
## 20. Forfaits et tarifs

**Origine** : kit+hygie · **Écran du kit** : Panneau d’abonnement coloré posé dans une grande carte

**But** : Afficher le forfait actuel et tous les tarifs connus du centre, forfaits pour les particuliers et formules pour les entreprises, avec un chemin clair vers l’inscription.

**Composants** : `Segmented`, `PriceCard`, `Card`, `ListRow`, `Chip`, `Button`, `Sheet`

### Texte

### Forfaits et tarifs
Sélecteur : Particuliers · Entreprises

### Votre forfait
Panneau coloré posé dans une grande carte :
Forfait {forfait} · {prix} par mois · renouvellement le {date_renouvellement}
Séances cette semaine : {utilisees} sur {incluses}
- Bouton « Changer de forfait »
- Bouton « Voir vos factures »

### Coaching individuel
- **Essentiel** · 140 € par mois : 1 séance par semaine, bilan d’entrée, programme. Bouton « Choisir Essentiel »
- **Avancé** · 250 € par mois : 2 séances par semaine, bilans intermédiaires. Bouton « Choisir Avancé »
- **Performance** · 300 € par mois : 3 séances par semaine, accès aux praticiens de santé. Bouton « Choisir Performance »
Bilan d’entrée offert pour un engagement de 3 mois. Sans cet engagement : 145 €.

### En groupe et à distance
- **Cross training** · 60 € par mois : groupe de 6 personnes au plus. Bouton « Rejoindre le cross training »
- **Sport-santé en petit groupe de 4** · [prix] : bouger en sécurité avec un éducateur en activité physique adaptée. Sport sur ordonnance, en partenariat avec la Maison Sport-Santé de Fontainebleau. Bouton « Demander une place »
- **Reprise du sport et réathlétisation** · [prix] : retrouver votre niveau après une blessure, avec un préparateur physique. Bouton « Demander le tarif »
- **Suivi à distance** · [prix] : garder le rythme entre deux venues au centre. [format du suivi]. Bouton « Demander le suivi à distance »

### À la séance
- Pressothérapie · 20 €
- Bilan fonctionnel · 60 €
- Bilan isocinétique · 80 €
- Bilan des forces musculaires · 120 € ; un seul membre : 80 €
- Sauts · 80 €
- Profil force-vitesse · 80 €
- Massages bien-être · [prix]
- Conseil en nutrition · [prix]
- Étiopathie · [prix] · non remboursée, prise en charge par certaines mutuelles
- Orthoptie · [prix]
- Kinésithérapie · [tarifs] · dépassements d’honoraires · rendez-vous sur Doctolib

### Entreprises
Formules pour le sport en entreprise et les bilans fonctionnels par les kinésithérapeutes, pour prévenir les TMS. 1 séance par semaine.
- **Essentiel** · 2 à 8 collaborateurs · 80 € par personne · [périodicité]
- **Cohésion** · 9 à 16 collaborateurs · 70 € par personne · [périodicité]
- **Performance** · 17 à 24 collaborateurs · 60 € par personne · [périodicité]
- **Impact** · 25 collaborateurs et plus · 40 € par personne · [périodicité]
Bouton « Contacter le centre »

### Mentions
[conditions d’engagement et de résiliation] · [mode de paiement] · [TTC ou HT pour les entreprises]

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Tarifs : faits du centre. Forfait actuel et compteur de séances : exemples (lundi 21 fait, mercredi 23 à venir).",
  "forfait": "Avancé",
  "prix": "250 €",
  "date_renouvellement": "1er octobre",
  "utilisees": 1,
  "incluses": 2
}
```

### Interactions

- Le sélecteur bascule entre Particuliers et Entreprises.
- Les cartes de coaching défilent à l’horizontale ; le forfait actuel porte la pastille « Votre forfait ».
- « Choisir … » ouvre une feuille de récapitulatif : contenu, prix, engagement, puis Bouton « Confirmer ce choix ».
- « Demander le tarif », « Demander une place » et « Demander le suivi à distance » envoient une demande au centre.
- « Contacter le centre » propose Bouton « Appeler le 01 84 74 34 20 » et Bouton « Écrire à contact@hygiesportsante.fr ».
- « Voir vos factures » ouvre Documents (Messages et documents) filtré sur Factures [si disponibles].

### États

- Défaut : Particuliers.
- Sans forfait : le panneau coloré devient « Vous n’avez pas encore de forfait. » avec Bouton « Choisir un forfait ».
- Prix manquant : ligne affichée avec [prix], bouton « Demander le tarif » à la place du choix.
- Succès : « Votre demande est envoyée. Le centre vous recontacte. »
- Erreur : « Demande impossible pour le moment. » avec Bouton « Réessayer ».
- Hors ligne : tarifs lisibles, boutons de choix inactifs.

<a id="centre"></a>
## 21. Le centre Hygie

**Origine** : hygie · **Écran du kit** : aucun

**But** : Expliquer la méthode et les trois pôles, et donner l’adresse, les horaires et les moyens de contact.

**Composants** : `Timeline`, `PoleCard`, `Card`, `ContactCard`, `Button`, `Chip`

### Texte

### La méthode Hygie
Trois temps, du bilan au suivi.
1. **Évaluer** : un bilan individualisé. Posture, mobilité, composition corporelle, mode de vie, sommeil, alimentation, objectifs.
2. **Bouger intelligemment** : activité physique adaptée, renforcement, mobilité, prévention, préparation physique.
3. **Accompagner dans la durée** : suivi régulier et bilans intermédiaires.

Deux parcours : Bien-être · Performance

### Trois pôles
- **Santé** : kinésithérapie, étiopathie, orthoptie. Bouton « Découvrir le pôle Santé »
- **Sport** : préparation physique individuelle, sport-santé en petit groupe, reprise du sport et réathlétisation, cross training, suivi à distance. Bouton « Découvrir le pôle Sport »
- **Récupération & bien-être** : pressothérapie, massages, conseil en nutrition. Bouton « Découvrir le pôle Récupération »

Sport sur ordonnance, en partenariat avec la Maison Sport-Santé de Fontainebleau.

### Nous trouver
Hygie Sport Santé et Performance
9, rue de la Petite Vitesse, 77210 Avon
Du lundi au vendredi : 8 h – 20 h
Samedi : 9 h – 13 h
01 84 74 34 20 · contact@hygiesportsante.fr
- Bouton « Appeler le centre »
- Bouton « Écrire au centre »
- Bouton « Voir l’itinéraire »

### Données d’exemple

```json
{
  "exemple": false,
  "_note": "Faits fournis par le centre.",
  "ouvert_maintenant": "calculé à partir des horaires"
}
```

### Interactions

- Les trois temps de la méthode s’affichent sur une timeline à rail et points.
- « Découvrir le pôle … » fait défiler vers la section correspondante (L’équipe, Prendre rendez-vous ou Récupération & bien-être).
- Une pastille indique « Ouvert » ou « Fermé » selon l’heure, calculée à partir des horaires.
- « Appeler le centre » lance l’appel ; « Écrire au centre » ouvre la messagerie e-mail ; « Voir l’itinéraire » ouvre l’application de cartes.

### États

- Défaut : contenu fixe.
- Ouvert : pastille menthe « Ouvert ».
- Fermé : pastille aubergine « Fermé ».
- Hors ligne : contenu lisible, itinéraire inactif.

<a id="profil"></a>
## 22. Profil et réglages

**Origine** : kit+hygie · **Écran du kit** : Profil (avatar rond dans un anneau rose, panneau d’abonnement coloré) et Réglages (liste séparée par des filets)

**But** : Montrer le profil, le forfait et les réglages : rappels, notifications, appareils, confidentialité des données de santé, aide et compte.

**Composants** : `ProfileCard`, `StatCard`, `PriceCard`, `ListRow`, `ReminderRow`, `Toggle`, `Button`, `Sheet`, `Toast`

### Texte

### Votre profil
{prenom} {nom} · Parcours {parcours} · Membre depuis {membre_depuis}
{poids} kg · {taille} cm · {age} ans
Bouton « Modifier votre profil »
Panneau coloré : Forfait {forfait} · Bouton « Gérer votre forfait »

### Réglages
**Compte**
- Modifier vos informations
- Changer d’adresse e-mail
- Changer de mot de passe

**Rappels**
- Rendez-vous : la veille à {heure_veille_rdv} et {delai_rdv} avant (interrupteur)
- Programme à la maison : {jours_programme} à {heure_programme} (interrupteur)
- Carnet : chaque jour à {heure_carnet} (interrupteur)
- Bilan intermédiaire : {jours_avant_bilan} jours avant (interrupteur)
- Questionnaire de pressothérapie : [moment du rappel, selon la durée de validité du questionnaire] (interrupteur)
- Canal : [canaux disponibles]
Bouton « Enregistrer vos réglages »

**Notifications**
- Messages des praticiens (interrupteur)
- Communauté (interrupteur)

**Appareils et données**
- Connecter une montre ou une application santé
- Unités : kg, cm, L

**Confidentialité**
- Partager votre carnet avec votre référent (interrupteur)
- Autoriser le Coach IA à lire votre suivi (interrupteur)
- Apparaître dans la communauté (interrupteur)
- Exporter vos données
- Lire la politique de confidentialité

**Aide**
- Contacter le centre
- Consulter les questions fréquentes
- Lire les conditions d’utilisation

- Bouton « Se déconnecter »
- Bouton « Supprimer votre compte »

### Suppression du compte
Supprimer votre compte ?
Vos données seront effacées selon [durée de conservation].
- Bouton « Confirmer la suppression »
- Bouton « Garder votre compte »

Version {version}

### Données d’exemple

```json
{
  "exemple": true,
  "_note": "Valeurs d’exemple pour la maquette. À remplacer par les données réelles.",
  "prenom": "Camille",
  "nom": "Exemple",
  "parcours": "Performance",
  "membre_depuis": "juin 2026",
  "poids": 69.4,
  "taille": 170,
  "age": 34,
  "forfait": "Avancé",
  "rappels": {
    "rendez_vous": {
      "actif": true,
      "heure_veille_rdv": "19 h",
      "delai_rdv": "2 h"
    },
    "programme_maison": {
      "actif": true,
      "jours_programme": "du lundi au vendredi",
      "heure_programme": "18 h 30"
    },
    "carnet": {
      "actif": true,
      "heure_carnet": "21 h"
    },
    "bilan_intermediaire": {
      "actif": true,
      "jours_avant_bilan": 7
    },
    "questionnaire_pressotherapie": {
      "actif": true
    },
    "canal": "[canaux disponibles]"
  },
  "reglages": {
    "messages": true,
    "communaute": false,
    "partage_carnet_referent": true,
    "coach_lit_suivi": true,
    "communaute_visible": true
  },
  "version": "0.1"
}
```

### Interactions

- L’avatar se change au toucher (appareil photo ou photos).
- « Modifier votre profil » ouvre les mesures avec la même carte de poids et la même règle de taille que « Parlons de vous ».
- « Gérer votre forfait » fait défiler jusqu’à Forfaits et tarifs.
- Rappels : toucher une ligne ouvre le choix de l’heure, des jours ou du délai ; les changements s’appliquent après « Enregistrer vos réglages ».
- Les interrupteurs de Notifications et de Confidentialité agissent tout de suite, avec un message de confirmation.
- Désactiver « Partager votre carnet avec votre référent » demande confirmation : « Votre référent ne verra plus votre carnet. Continuer ? »
- Chaque ligne à verbe ouvre sa page (informations, adresse e-mail, mot de passe, appareils, textes légaux, aide).
- « Exporter vos données » prépare un fichier et prévient quand il est prêt.
- « Supprimer votre compte » ouvre une feuille de confirmation.

### États

- Chargement : carte de profil en squelette.
- Rappels modifiés non enregistrés : Bouton « Enregistrer vos réglages » mis en avant.
- Succès : « Réglage enregistré. » ou « Vos réglages sont enregistrés. »
- Erreur : « Réglage non enregistré. » avec Bouton « Réessayer ».
- Export en cours : « Export en préparation. Vous recevrez une notification. »
- Hors ligne : réglages lisibles, modifications inactives.
