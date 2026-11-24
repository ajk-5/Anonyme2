# WebCraft Solutions

## Présentation

WebCraft Solutions est un portail permettant de consulter des projets et des formations. L'utilisateur peut rechercher, filtrer et consulter les détails des éléments disponibles. Il peut également remplir un formulaire d'inscription à une formation.

## Technologies utilisées

- React 18
- React Router 6
- JavaScript ES6+
- Bootstrap 5
- Vite

## Installation

Installer les dépendances :

`npm install`

Lancer le projet :

`npm run dev`

## Architecture

- `pages/` : les différentes pages du site.
- `components/` : les composants réutilisables.
- `hooks/` : le chargement des API, la recherche et les filtres.
- `utils/` : le traitement des données et la validation.
- `config/` : les adresses des API.

## Fonctionnalités

- Navigation entre les pages.
- Chargement des projets et des formations depuis deux API REST.
- Recherche en temps réel.
- Filtres dynamiques.
- Affichage des détails dans une modale.
- Formulaire d'inscription avec validation côté client.
- Gestion du chargement et des erreurs.
- Interface responsive avec Bootstrap.

## Réutilisation des composants

Les composants SearchBar, FilterBar, Modal, Card et Catalog sont partagés entre les projets et les formations afin d'éviter la duplication du code.

Le hook useFetch centralise les appels API. Le hook useSearch gère la recherche et les filtres.

## Vérification

`npm run build`

`npm run lint`

## Limite

Le formulaire est validé côté client. Les inscriptions ne sont pas enregistrées sur un serveur.