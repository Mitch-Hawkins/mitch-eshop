# Pedal Planet eshop Project

## Demo & Snippets

- Hosted Link: https://65bf9fcbb90990664b794c6c--endearing-kleicha-7a9070.netlify.app

- A demonstration of the home screen, including list of products and the carousel
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.49.13 pm.png>)

- A view from the favourites page, with some favourites marked by the user
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.49.30 pm.png>)

- A representation of the product page, with more information about the selected product as well as a variant selector
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.49.37 pm.png>)

- The cart system, with stacked quantities and correct price calculations.
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.49.56 pm.png>)

---

## Requirements / Purpose

- This project is designed to reinforce React learnings and make sure that I am comfortable with most aspect of the framework.
  With this project, the plan is to practice how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

At a minimum the e-shop website should have two pages:

- Home Page

  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows a user to add to cart and select product variants.

- All products should be stored in Firestore:

  - Store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

- Using Firestore and react create, a cart system. Create a cart page in the react app Add logic to prevent users from adding items to cart that are no longer in stock. Will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

---

## Build Steps

The Database is hosted on google firestore, and should be able to be accessed by the front end app until 15/04/2024

Clone the repository, and from the directory, run the following commands

```
npm install
```

```
npm run dev
```

---

## Design Goals / Approach

- I wanted the website to appear as much like a professional music store website as possible, featuring a dyanmic carousel with rotating images of products that the website would sell.
- I wanted to implement the fully functioning cart system (minus real world transactions) including adding to cart and removing from cart, correct calculations and stackings of items and prices. This is all stored in local storage, so that the cart listings are remembered on future website visits

---

## Features

- As mentioned, a working carousel of images as the centrepiece of the homepage, using custom scss animations to slide between them manually
- A working favourites system for all products that is saved in local storage similarly, but seperately from the cart system.
- Potential for certain products to have variants of the main product in the form of Pedal mods (Example: Blues Driver) with dynamically switching product pages and product images.
- All product data stored and gathered from the Google Firestore Databse. As the cart and favourites are stored on the websites local storage, each different user will have a seperate favourites and cart section, much like in a real world example

---

## Known issues

- As per Google Firestore security requirements, constant updating of the security rules are required to ensure that the database is constantly accessible by the front end website.
- Styling is a little basic at the moment, but meets the needs of the project just fine.
- Product list is only six pedals long at the moment, with only two of them having variants. Much more pedals can be added to the database for a more engaging and lifelike experience

---

## Future Goals

- Better overall styling for the website, as right now it is a little basic
- Clickable images in the carousel, and for the size and amount of images in the carousel to be dynamic and avaialble to be updated.

---

## Struggles

- Implementation of the animations for the carousel was a nightmare. Each transition from each slide has it's own forwards and backwards CSS class. This is far too much and too 'brute force'. It works and looks pleasant from a user perspective however.

---
