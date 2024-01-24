<h1>Metric-Imperial Converter</h1>

<p>This project was developed in the <a href="https://www.freecodecamp.org/learn/quality-assurance" target="_blank">freeCodeCamp's Quality Assurance course</a>.</p>
<p>In the development of this project I acquired or perfected some knowledge, such as Chai and Mocha, Chai-HTTP, APIs, Node.js and Passport, Express.js, Pug, template engine, JS assertions, unit and functional testing.</p>

<p>Deploy: <a href="https://metric-imperial-converter-t4j1.onrender.com/" target="_blank">https://metric-imperial-converter-t4j1.onrender.com</a></p>
<p>On replit: <a href="https://metric-imperial-converter.adrianwilker.repl.co/" target="_blank">https://metric-imperial-converter.adrianwilker.repl.co</a></p>

<p>It's tests are listed below:</p>

<hr/>

<p>Unit tests:</p>
<ul>
   <li><code>convertHandler</code> should correctly read a whole number input.</li>
   <li><code>convertHandler</code> should correctly read a decimal number input.</li>
   <li><code>convertHandler</code> should correctly read a fractional input.</li>
   <li><code>convertHandler</code> should correctly read a fractional input with a decimal.</li>
   <li><code>convertHandler</code> should correctly return an error on a double-fraction (i.e. <code>3/2/3</code>).</li>
   <li><code>convertHandler</code> should correctly default to a numerical input of <code>1</code> when no numerical input is provided.</li>
   <li><code>convertHandler</code> should correctly read each valid input unit.</li>
   <li><code>convertHandler</code> should correctly return an error for an invalid input unit.</li>
   <li><code>convertHandler</code> should return the correct return unit for each valid input unit.</li>
   <li><code>convertHandler</code> should correctly return the spelled-out string unit for each valid input unit.</li>
   <li><code>convertHandler</code> should correctly convert <code>gal</code> to <code>L</code>.</li>
   <li><code>convertHandler</code> should correctly convert <code>L</code> to <code>gal</code>.</li>
   <li><code>convertHandler</code> should correctly convert <code>mi</code> to <code>km</code>.</li>
   <li><code>convertHandler</code> should correctly convert <code>km</code> to <code>mi</code>.</li>
   <li><code>convertHandler</code> should correctly convert <code>lbs</code> to <code>kg</code>.</li>
   <li><code>convertHandler</code> should correctly convert <code>kg</code> to <code>lbs</code>.</li>
</ul>

<p>Functional tests:</p>
<ul>
   <li>Convert a valid input such as <code>10L</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
   <li>Convert an invalid input such as <code>32g</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
   <li>Convert an invalid number such as <code>3/7.2/4kg</code>: <code>GET</code> request to 
   <code>/api/convert</code>.</li>
<li>Convert an invalid number AND unit such as 
   <code>3/7.2/4kilomegagram</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
   <li>Convert with no number such as <code>kg</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
</ul>
