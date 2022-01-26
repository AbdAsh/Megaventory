# Megaventory Task

## Introduction
In this project I have implemented the requested task that was provided to me by Megaventory.

## Tasks
<ol>
<li>
Develop a simple web application that integrates with some Megaventory entities using the Megaventory API. </li>
<li>
Use your application to insert the following entities to your account.
</li>
<li>
Create a Sales Order with Verified status, using the Client, Product and Location you inserted, and applying the Tax and Discount you inserted.
</li>
</ol>

## My Solution
<ul>
<li>
I have created a simple Web UI using VueJS and Bulma in order to fullfill the tasks needed for the 1st and 2nd points of the tasks requested.
</li>
<li>
The project consists of 5 main pages each handling a certain section of the app:
<ul>
<li>Products page to handle viewing and adding/inserting products.</li>
<li>Clients page to handle viewing and adding/inserting clients.</li>
<li>Inventory page to handle viewing and adding/inserting Inventory Locations.</li>
<li>Discounts page to handle viewing and adding/inserting discounts.</li>
<li>Taxes page to handle viewing and adding/inserting texes.</li>
</ul>
</li>
<li> Each page handles viewing the related entities and the form responsible to adding them to the account.</li>
<li> For the 3rd point of the task, for adding a sales order I was not able to perform the operation through the API as the account didn't have the required permissions, so I did it from the admin page on the site following these steps: </li>
<ol>
<li>Change the document template for Sales Invoices and add the "Tax" and "Discount" columns to the document</li>
<li>Add quantity of the product required to the warehouse that is going to be used.</li>
<li>Create a new sale order and add the client and product that I added in the 2nd task and add the discount and the tax to the product.</li>
<li>Approve (ship) the sale and choose the warehouse.</li>
</ol>
</ul>

## Relation to previous projects
&emsp;This project mainly relates to my second internship as I was deeply involved with Frontend development especially in VueJS and communicating with APIs. It was also related to another 2 projects that I had worked on; The Restaurant Management Project, as it was also mainly Frontend work, and The DBMS as that project as well required Frontend development.

## P.S
&emsp;I faced some CORS problems while developing this app and was unable to pinpoint the source of the problem, so I had to test it on a web browser with disabled security flags. [More info in this thread](https://stackoverflow.com/a/42024918/16837270)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
