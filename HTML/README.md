# HTML Basics Knowledge 

This is my first HTML Knowledge Course .
<br>
It Course shows how to use :
1. **Headings (h1-h6)** , a **Paragraph** , and a **Link**.

This README.md explains the code step by step so that any beginner can understand.

## Files 
<a target="_blank" href="/web-development/HTML/index.html">index.html</a>-> Main HTML file
<br>
**README.md**  -> Explanation of this project 
<br>
## Code Explanation (Line by Line)
<!DOCTYPE html>

```html
<!DOCTYPE html>
```
Tells the browser this is an HTML5 document

```html
<html lang="en">
```
Root element of the page.
<br>
lang="en" means the language is English.

```html
<head>
```
Contains information about the page (not visible directly)

```html
<meta charset="UTF-8">
```
Supports all characters (English,Hindi)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Makes the page mobile-friendly
<br>
Width = device width
<br>
Zoom  = 100% (no auto zoom)

```html
<title>Heading paragraph and links</title>
```
Title of the page. Shown on the browser tab.

```html
<body>
```
Contains all the visible content of the page.

```html
<h1> ... <h6>
```
Headings from biggest (h1) to smallest (h6).

```html
<p> ... </p>
```
A paragraph for normal text.

```html
<a target="_blank" href="https://www.google.com/">Open Google</a>
```
A link(anchor tag).
<br>
href="..."= link address
<br>
target="_blank" = opens in new tab

# HTML Example :- Images, Tables & Lists
1. Image Tag `<img>` :-
   <br>
 ``` html
   <img height="230" src="image.png" alt="Train image">
```
`<img>` -> used to show an image
<br>
`src="image.png"` -> the location/name of the image file.
<br>
`height="230"` -> image height in pixels.
<br>
`alt="Train image"` -> text shown if the image is missing.

2. Table
```html
<table>
   ...
</table>

```
`<table>` -> makes a table.
<br>
`<caption>` -> heading/title of the table
<br>
(a) Table Head `<thead>`:
```html
<thead>
  <tr>
    <th>Name</th>
    <th>Designation</th>
    <th>Fav Language</th>
  </tr>
</thead>
```
`<tr>` -> table row.
<br>
`<th>` -> table heading cell (bold & centered)
<br>
`<thead>` -> top/header part of the table

(b) Table Body `<tbody>`:

```html
<tbody>
  <tr>
    <td>Harry</td>
    <td>Programmer</td>
    <td>JavaScript</td>
  </tr>
  <tr>
    <td colspan="2">Sam</td>
    <td rowspan="2">Java</td>
  </tr>
  <tr>
    <td colspan="2">Sam</td>
  </tr>
</tbody>

```
`<td>` -> tablel data
<br>
`colspan="2"` -> merge 2 columns.
<br>
`rowspan="2"` -> merge 2 rows
<br>
`<tbody>` -> main content of the table.

(c) Table Footer `<tfoot>` :
```html
<tfoot>
  <tr>
    <td colspan="2">Sam</td>
    <td rowspan="2">foot</td>
  </tr>
</tfoot>

```
`<tfoot>` -> bottom/footer part of the table.

3. Unordered List `<ul>`:
 ```html
<ul type="square">
  <li>Harry</li>
  <li>Rohan</li>
  <li>Shubham</li>
</ul>

   ```
`<ul>` -> unordered list (bullet points).
<br>
`type="square"` -> bullet shape (circle , square , disc).
<br>
`<li>` -> list item.

4. Ordered List `<ol>`:
```html
<ol type="A">
   <li>Harry</li>
   <li>Rohan</li>
   <li>Shubham</li>
</ol>

```
`<ol>` -> ordered list (numbering or alphabets).
<br>
`type="A"` :- order style(1,A,a,l,i).
<br>
`li` :- list item.

# Tags Used in This Course
1. `<!DOCTYPE html>` -> Defines document type as HTML5
2. `<html> `-> Root element of HTML page.
3. `<head>` -> Information about the page (metadata , title, etc.).
4. `<meta>` -> Extra information:
   <br>
   `charset="UTF-8"`-> character encoding
   <br>
   `viewport`-> responsive design
5. `<title>`-> Page title (shown in tab)
6. `<body>`-> All visible content
7. `<h1> to <h6>`-> Headings, from largest to smallest
8. `<p>`-> Paragraph text.
9. `<a>`-> Anchor tag (link).Attributes:
   <br>
    `href`-> link address
   <br>
    `target`-> where to open (new tab,same tab, etc.)







