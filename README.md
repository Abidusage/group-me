- GroupMe – Messagerie instantanée moderne
GroupMe est une application de messagerie de groupe conçue pour offrir une expérience fluide, sécurisée et instantanée aux utilisateurs africains. Développée avec Ionic React en frontend et Django REST Framework en backend, elle combine performance, design moderne et robustesse technique.

 Fonctionnalités principales
 Authentification JWT avec affichage dynamique du profil utilisateur

Inscription et connexion avec validation en temps réel et messages d’erreur stylisés

Messagerie de groupe avec input stable, scroll fluide et gestion des erreurs

Modèle utilisateur enrichi (bio, rôle) pour une personnalisation future

Navigation fluide entre les pages d’inscription et de connexion

Tests multi-utilisateurs pour garantir l’isolation des sessions et la fiabilité

 Objectifs
GroupMe vise à :

Offrir une expérience utilisateur instantanée et intuitive

Soutenir les institutions éducatives et commerciales africaines dans leur transformation numérique

Créer une base solide pour des fonctionnalités en temps réel (WebSocket, notifications, etc.)

Garantir une sécurité et une fiabilité maximales dans les échanges

Technologies utilisées
Frontend	Backend	Authentification	UI/UX
Ionic React	Django REST	JWT	CSS Modules, Responsive Design
Installation
bash
# Backend
cd backend/
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd frontend/
npm install
npm start
🤝 Contribuer
Ce projet est en constante évolution. Les contributions sont les bienvenues pour améliorer l’UX, ajouter des fonctionnalités ou renforcer la sécurité.
