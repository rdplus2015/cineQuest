
# 🎬 Projet Portfolio Frontend : Site React + API de Films + AWS Cloud (S3 + CloudFront + Terraform)

## 🎯 Objectif

Développer un site web moderne et professionnel qui permet aux utilisateurs de rechercher des informations sur des films via une API externe (comme OMDb ou TMDb). Le site sera construit en React, stylisé avec Tailwind CSS, déployé sur Amazon S3 et distribué via CloudFront. L’ensemble de l’infrastructure sera provisionné avec Terraform, et le déploiement sera automatisé avec GitHub Actions et AWS CLI.

---

## 🧰 Stack technique

### Développement Frontend
- **React (avec Vite)** : pour un développement rapide et une app dynamique.
- **Tailwind CSS** : pour une mise en page rapide, responsive et professionnelle.
- **API publique de films** : OMDb ou TheMovieDB, utilisée pour la recherche et l'affichage de données cinéma.

### Infrastructure AWS
- **S3** : hébergement statique du site.
- **CloudFront** : distribution rapide et sécurisée du site via CDN.
- **ACM** : certificat SSL pour HTTPS.
- **IAM** : permissions précises pour sécuriser les ressources.
- **Terraform** : description et automatisation de toute l'infrastructure.
- **Route 53 (optionnel)** : nom de domaine personnalisé.

### Déploiement
- **AWS CLI** : déploiement manuel et test local.
- **GitHub Actions** : déploiement automatisé à chaque push sur `main`.

---

## 🧱 Organisation du projet

### Dossiers principaux
- `frontend/` : contient l'application React.
- `terraform/` : contient tous les fichiers de configuration d'infrastructure.
- `.github/workflows/` : contient les workflows CI/CD pour GitHub Actions.
- `README.md` : documentation du projet.

---

## 🚀 Fonctionnalités clés de l’application

- Champ de recherche pour trouver des films.
- Liste de résultats avec affiches, titres, synopsis, année, etc.
- Favoris enregistrés localement via `localStorage`.
- Pages de détails pour chaque film.
- Interface responsive et design propre grâce à Tailwind CSS.

---

## ⚙️ Infrastructure cloud (Terraform)

Le projet utilise Terraform pour :

- Créer un bucket S3 configuré pour hébergement statique.
- Créer une distribution CloudFront avec un certificat SSL ACM.
- Générer et attacher des IAM Policies minimales pour sécuriser les accès.
- Configurer (facultativement) Route 53 pour le domaine personnalisé.

---

## 🔐 Sécurité et IAM

Le bucket S3 est privé. L’accès public est autorisé uniquement via CloudFront.  
Les clés utilisées dans GitHub Actions sont protégées et possèdent uniquement les droits nécessaires pour :
- synchroniser le contenu React dans S3 ;
- invalider le cache de CloudFront.

---

## ⚙️ Déploiement (CI/CD)

Le projet est automatisé comme suit :

- À chaque `push` sur la branche `main`, GitHub Actions :
  - installe les dépendances,
  - build l’app React,
  - synchronise les fichiers sur S3,
  - déclenche une invalidation CloudFront.

Avant d’automatiser, on peut déployer manuellement avec AWS CLI pour tester les commandes.

---

## ✅ Résultat final

- Un site React professionnel en ligne, rapide, sécurisé, responsive.
- Déploiement automatisé (CI/CD).
- Infrastructure déclarée avec du code (IaC).
- Stack moderne mettant en avant React, AWS, DevOps et sécurité cloud.

---

## 🧠 Pourquoi ce projet a de la valeur dans un portfolio

- Montre la maîtrise de React + intégration API.
- Déploie sur AWS avec les outils pro (S3, CloudFront, ACM, IAM).
- Montre une approche DevOps sérieuse (Terraform + CI/CD).
- Prouve ta capacité à construire une stack de production simple et moderne.

---

## 📝 Étapes suggérées

1. Créer l’application React avec Vite.
2. Intégrer l’API de films et afficher les résultats.
3. Styliser avec Tailwind CSS.
4. Tester le build localement.
5. Créer l’infrastructure AWS avec Terraform.
6. Déployer une première fois manuellement avec AWS CLI.
7. Automatiser avec GitHub Actions.
8. Ajouter un domaine (optionnel).
9. Documenter le projet dans ton portfolio.

---

## 📚 Ressources utiles

- Documentation React + Vite
- Docs Tailwind CSS
- Docs Terraform AWS Provider
- Docs AWS CLI
- GitHub Actions (CI/CD)
- OMDb API / TheMovieDB API
