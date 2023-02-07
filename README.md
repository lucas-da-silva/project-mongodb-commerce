# Project MongoDB Commerce

First project where I use the MongoDB database, this being a simple project, composed of queries that access a database that simulates a McDonald's menu.

All created queries are in the [challenges](./challenges/) directory.

## Queries created

[**Challenge1**](./challenges/challenge1.js): Returns the number of documents in the `products` collection;

[**Challenge2**](./challenges/challenge2.js): Returns the name and quantity of sold snacks, with sold snacks sorted in ascending order;

[**Challenge3**](./challenges/challenge3.js): Returns the name and quantity of sold snacks of the best selling snack;

[**Challenge4**](./challenges/challenge4.js): Returns only snacks that had sales greater than 50 and less than 100;

[**Challenge5**](./challenges/challenge5.js): Returns snacks that had likes equal to 36 or sales amount equal to 85;

[**Challenge6**](./challenges/challenge6.js): Returns snacks that had likes greater than 10 and less than 100;

[**Challenge7**](./challenges/challenge7.js): Returns snacks that have been sold with a quantity other than 50 and where the tags field does not exist;
 
[**Challenge8**](./challenges/challenge8.js): Deletes snacks with less than 50 likes and returns the name of snacks left in the bank;

[**Challenge9**](./challenges/challenge9.js): Returns snacks that have calories below 500;

[**Challenge10**](./challenges/challenge10.js): Returns snacks that have protein percentage greater than or equal to 30 and less than or equal to 40;

[**Challenge11**](./challenges/challenge11.js): Returns snacks that are not Big Mac or McChicken;

[**Challenge12**](./challenges/challenge12.js): Adds ketchup to ingredients for all sandwiches except McChicken, ensuring there are no duplicate ingredients;

[**Challenge13**](./challenges/challenge13.js): Adds the createdBy field to all documents, putting Ronald McDonald in the value of that field;

[**Challenge14**](./challenges/challenge14.js): Returns all snacks that have pickles in their ingredients and show only the first 3 items contained in the nutritionalValues array;

[**Challenge15**](./challenges/challenge15.js): Adds the rating field to all documents in the collection and makes the following changes to this field:

- A query that includes the evaluation field of type NumberInt, with the value 0 in all documents in the collection.

- A query that increments the value of the rating field by 5 for all beef sandwiches, tags field.

- A query that increments the value of the rating field by 3 on all poultry sandwiches.

[**Challenge16**](./challenges/challenge16.js): Adds the lastModification field with the current date only in the Big Mac sandwich;

[**Challenge17**](./challenges/challenge17.js): Returns the total quantity of products in a new collection named ProductSummary: 
- It has a query that inserts in the summaryProducts collection a document with the fields: franchise with the McDonalds value and totalProducts with the value being the total amount of products registered in the products collection.

[**Challenge18**](./challenges/challenge18.js): Include bacon at the end of the ingredients list for Big Mac and Cheese Quarter sandwiches;

[**Challenge19**](./challenges/challenge19.js): Removes the first ingredient from the Quarteirão com Queijo sandwich;

[**Challenge20**](./challenges/challenge20.js): Removes the last ingredient from the Cheddar McMelt sandwich;

[**Challenge21**](./challenges/challenge21.js): ;

[**Challenge22**](./challenges/challenge22.js): ;

[**Challenge23**](./challenges/challenge23.js): ;

[**Challenge24**](./challenges/challenge24.js): ;

[**Challenge25**](./challenges/challenge25.js): ;

[**Challenge26**](./challenges/challenge26.js): ;

[**Challenge27**](./challenges/challenge27.js): Counts how many products contain Mc in the name, without considering uppercase or lowercase letters;

[**Challenge28**](./challenges/challenge28.js): Count how many products have 4 ingredients;

[**Challenge29**](./challenges/challenge29.js): Rename field description to descriptionSite in all documents;

[**Challenge30**](./challenges/challenge30.js): Remove likes field from Big Mac item;

[**Challenge31**](./challenges/challenge31.js): Returns the name of sandwiches where the number of likes is greater than the number of sandwiches sold;

[**Challenge32**](./challenges/challenge32.js): Returns the name and sales (sold) quantity of sandwiches where the sales number is a multiple of 5;

## Stack used

**Database:** [MongoDB](https://www.mongodb.com/)

