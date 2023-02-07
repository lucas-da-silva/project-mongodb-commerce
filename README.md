# Project MongoDB Commerce

First project where I use the MongoDB database, this being a simple project, composed of queries that access a database that simulates a McDonald's menu.

All created queries are in the [challenges](./challenges/) directory.

## Queries created

[**Challenge1**](./challenges/challenge1.js): Returns the number of documents in the `products` collection;

[**Challenge2**](./challenges/challenge2.js): Returns the name and quantity of sold snacks, with `sold` snacks sorted in ascending order;

[**Challenge3**](./challenges/challenge3.js): Returns the name and quantity of sold snacks of the best selling snack;

[**Challenge4**](./challenges/challenge4.js): Returns only snacks that had sales greater than `50` and less than `100`;

[**Challenge5**](./challenges/challenge5.js): Returns snacks that had `likes` equal to `36` or sales amount equal `to` 85;

[**Challenge6**](./challenges/challenge6.js): Returns snacks that had `likes` greater than `10` and less than `100`;

[**Challenge7**](./challenges/challenge7.js): Returns snacks that have been `sold` with a quantity other than `50` and where the `tags` field does not exist;
 
[**Challenge8**](./challenges/challenge8.js): Deletes snacks with less than `50 likes` and returns the `name` of snacks left in the bank;

[**Challenge9**](./challenges/challenge9.js): Returns snacks that have `calories` below `500`;

[**Challenge10**](./challenges/challenge10.js): Returns snacks that have `protein` percentage greater than or equal to `30` and less than or equal to `40`;

[**Challenge11**](./challenges/challenge11.js): Returns snacks that are not `Big Mac` or `McChicken`;

[**Challenge12**](./challenges/challenge12.js): Adds `ketchup` to `ingredients` for all sandwiches except `McChicken`, ensuring there are no duplicate `ingredients`;

[**Challenge13**](./challenges/challenge13.js): Adds the `createdBy` field to all documents, putting `Ronald McDonald` in the value of that field;

[**Challenge14**](./challenges/challenge14.js): Returns all snacks that have pickles in their ingredients and show only the first `3` items contained in the `nutritionalValues` array;

[**Challenge15**](./challenges/challenge15.js): Adds the `rating` field to all documents in the collection and makes the following changes to this field:

- A query that includes the `rating` field of type `NumberInt`, with the value `0` in all documents in the collection;

- A query that increments the value of the `rating` field by `5` for all `beef` sandwiches, tags field;

- A query that increments the value of the `rating` field by `3` on all `birds` sandwiches.

[**Challenge16**](./challenges/challenge16.js): Adds the `lastModification` field with the current date only in the `Big Mac` sandwich;

[**Challenge17**](./challenges/challenge17.js): Returns the total quantity of products in a new collection named `productSummary`:

- It has a query that inserts in the `productSummary` collection a document with the fields: `franchise` with the `McDonalds` value and `totalProducts` with the value being the total amount of products registered in the `products` collection.

[**Challenge18**](./challenges/challenge18.js): Include `bacon` at the end of the `ingredients` list for `Big Mac` and `Cheese Quarter` sandwiches;

[**Challenge19**](./challenges/challenge19.js): Removes `onion` item from all sandwiches;

[**Challenge20**](./challenges/challenge20.js): Removes the first `ingredient` from the `Quarter with Cheese` sandwich;

[**Challenge21**](./challenges/challenge21.js): Removes the last `ingredient` from the `Cheddar McMelt` sandwich;

[**Challenge22**](./challenges/challenge22.js): Adds the amount of sandwich sales by day of the week:

- A query that adds a `salesPerDay` field to all sandwiches. Being an array with seven positions, represented by `0`. The first item in the array represents sales on Sunday, the second item represents sales on Monday, and so on until reaching the last item, which represents sales on Saturday;

- A query that increases `Big Mac` sales on Wednesdays by `60`;

- A query that increases sales of all `beef` sandwiches on **Saturdays** by `120`.

[**Challenge23**](./challenges/challenge23.js): Insert the `combo` and `tasty` values into the `tags` array of all sandwiches and sort the values in ascending alphabetical order (A to Z):
- The tag values that are ordered.

[**Challenge24**](./challenges/challenge24.js): Sorts in all documents the values of the `nutricionalValues` array by the `percentage` field in descending order;

[**Challenge25**](./challenges/challenge25.js): Adds the value `too much sodium` to the end of the `tags` *array* in products where the `sodium percentage` is greater than or equal to `40`;

[**Challenge26**](./challenges/challenge26.js): Adds the `contains sodium` value to the end of the `tags` *array* on products where the `sodium percentage` is greater than `20` and less than `40`;

[**Challenge27**](./challenges/challenge27.js): Counts how many products contain `Mc` in the name, without considering uppercase or lowercase letters;

[**Challenge28**](./challenges/challenge28.js): Count how many products have `4` ingredients;

[**Challenge29**](./challenges/challenge29.js): Rename field `description` to `descriptionWebsite` in all documents;

[**Challenge30**](./challenges/challenge30.js): Remove `likes` field from `Big Mac` item;

[**Challenge31**](./challenges/challenge31.js): Returns the `name` of sandwiches where the number of `likes` is greater than the number of sandwiches `sold`;

[**Challenge32**](./challenges/challenge32.js): Returns the `name` and sales (`sold`) quantity of sandwiches where the sales number is a multiple of `5`;

## Stack used

**Database:** [MongoDB](https://www.mongodb.com/)

