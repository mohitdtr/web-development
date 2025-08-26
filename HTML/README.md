# HTML Basics Knowledge 

This is my first HTML Knowledge Course .
<br>
It Course shows how to use HTML Code in Website.

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
- Tells the browser this is an HTML5 document

```html
<html lang="en">
```
- Root element of the page.
- lang="en" means the language is English.

```html
<head>
```
- Contains information about the page (not visible directly)

```html
<meta charset="UTF-8">
```
- Supports all characters (English,Hindi)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Makes the page mobile-friendly
- Width = device width
- Zoom  = 100% (no auto zoom)

```html
<title>Heading paragraph and links</title>
```
- Title of the page. Shown on the browser tab.

```html
<body>
```
- Contains all the visible content of the page.

```html
<h1> ... <h6>
```
- Headings from biggest (h1) to smallest (h6).

```html
<p> ... </p>
```
- A paragraph for normal text.

```html
<a target="_blank" href="https://www.google.com/">Open Google</a>
```
- A link(anchor tag).
  - `href="..."` -> link address.
  - `target="_blank"` -> opens in new tab.

# Images, Tables & Lists
1. Image Tag `<img>` :-
   <br>
 ``` html
   <img height="230" src="image.png" alt="Train image">
```
- `<img>` -> used to show an image
- `src="image.png"` -> the location/name of the image file.
- `height="230"` -> image height in pixels.
- `alt="Train image"` -> text shown if the image is missing.

2. Table
```html
<table>
   ...
</table>

```
- `<table>` -> makes a table.
- `<caption>` -> heading/title of the table.
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
- `<tr>` -> table row.
- `<th>` -> table heading cell (bold & centered).
- `<thead>` -> top/header part of the table

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
- `<td>` -> tablel data.
- `colspan="2"` -> merge 2 columns.
- `rowspan="2"` -> merge 2 rows.
- `<tbody>` -> main content of the table.

(c) Table Footer `<tfoot>` :
```html
<tfoot>
  <tr>
    <td colspan="2">Sam</td>
    <td rowspan="2">foot</td>
  </tr>
</tfoot>

```
- `<tfoot>` -> bottom/footer part of the table.

3. Unordered List `<ul>`:
 ```html
<ul type="square">
  <li>Harry</li>
  <li>Rohan</li>
  <li>Shubham</li>
</ul>

   ```
- `<ul>` -> unordered list (bullet points).
- `type="square"` -> bullet shape (circle , square , disc).
- `<li>` -> list item.

4. Ordered List `<ol>`:
```html
<ol type="A">
   <li>Harry</li>
   <li>Rohan</li>
   <li>Shubham</li>
</ol>

```
- `<ol>` -> ordered list (numbering or alphabets).
- `type="A"` :- order style(1,A,a,l,i).
- `li` :- list item.


# Form HTML Code
```html
<form action="post"
```
Normally we write `method="post"` , but here only `action="post"` is written. (`action` usually means where the form will send data)

```html
<div>
    <label for="username">Enter your Username</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" autofocus>
</div>

```
- `<div>` tag : Used to group HTML elements together and apply style or layout and It is a container used for grouping elements.
- `<label>` : Text shown for input.
- `for="username"` : Connects label with input box.
- `<input type="text">` : Makes a text field.
- `placeholder` : Shows light text inside box until user types.
- `autofocus` : Cursor will directly come here when page loads.

```html
<div>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
</div>

```

This block makes gender selection using radio buttons.

- `type="radio"` : Lets user select only one option from group.
- `name="gender"` : Same name means both are part of one group.
- User can choose Male or Female.

```html
<div>
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Subscribe to newsletter</label>
</div>

```
This block makes a checkbox.
<ul>
   <li>Checkbox lets user select Yes/No option.</li>
   <li>Here it is for Subscribe to newsletter. </li>
</ul>

```html
<div>
    <label for="comment">Enter your comment</label>
    <br>
    <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
</div>

```
This block creates a textarea (milti-line box).
- `textarea` lets user write long text.
- `rows="4"` : 4 line tall.
- `cols="50"` : 50 characters wide.

```html
<div>
    <select name="fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
    </select>
</div>

```
This block makes a dropdown menu.
- `<select>` : Creates dropdown.
- `<option>` : Each item iin dropdown (Apple,Banana,Cherry).
- User can pick one fruit.

```html
</form>
```
- This closes the form.

# ID & Class
```html
 <div id="firstdiv" class="red bg-yellow">First</div>
    <div id="seconddiv">Second</div>
    <span class="red"></span>
```
- `id` attribute : Used to give a unique name to an element.
- `class` attribute : Used to group elememts for styling with CSS.
- `<span>` tag : An inline container, used for styling or marking part of text / content inside a line.

# Video , audio and media
```html
<video src="video.mp4" height="255" controls loop muted poster="download.jpg"></video>
```
- `<video>` tag : Used to show a video on the webpage.
<h2>Attributes : </h2>

- `src` -> video file location.
- `height` -> video height.
- `controls` -> shows play/pause buttons.
- `loop` -> repeats video automatically.
- `muted` -> plays without sound.
- `poster` -> image shown before video plays.

```html
<audio src="sachin.mp3" controls autoplay loop muted></audio>
```
`<audio>` tag : Used to play audio/music on the webpage
<br>
<h2>Attributes : </h2>

- `src` -> audio file location.
- `controls` -> shows audio player.
- `autoplay` -> starts playing automatically.
- `loop` -> repeats audio.
- `muted` -> plays without sound.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/tVzUXW6siu0?start=739" allowfullscreen></iframe>

```
- `<iframe>` tag : Used to embed another webpage or video. 
<br>
<h2>Attributes : </h2>

- `src` -> URL  of page/video.
- `width` & `height` -> size of frame.
- `allowfullscreen` -> allws full screen


# Semantic Tags
Semantic tags are those HTML tags that clearly describe their meaning to both the browser and the developer.
<br>
They make the code easier to read and improve SEO (Search Engine Optimization).

```html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <ul>
    <li>Home</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>
</nav>

<main>
  <article>
    <h2>About Semantic Tags</h2>
    <p>Semantic tags provide meaning to the content.</p>
  </article>
</main>

<footer>
  © 2025 My Website
</footer>
```

<h2>Common Semantic Tags : </h2>

- `<header>` → Defines the top section of a page (like logo, title, or navigation).  
- `<nav>` → Defines a navigation section (menu or links).  
- `<main>` → Represents the main content area of the page.  
- `<section>` → Defines a specific section of content (like a chapter or topic).  
- `<article>` → Represents an independent piece of content (like a blog post, news article).  
- `<aside>` → Defines side content (like a sidebar, ads, or related links).  
- `<footer>` → Defines the bottom section (like copyright, contact info).  
- `<figure>` → Used for self-contained media (images, diagrams).  
- `<figcaption>` → Caption for `<figure>`.  
- `<mark>` → Highlights text.  
- `<time>` → Represents a date or time. 








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









