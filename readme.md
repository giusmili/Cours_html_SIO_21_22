# Cours html &amp; css
## Exemple de code correct
```html
<!DOCTYPE html><!--norme html 5-->
<html lang="fr" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="cours html et css...">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cours html</title>
        <link rel="icon" type="image/png" href="./">
        <link rel="stylesheet" type="text/css" href="./css/style.css">
    </head>

    <body>
        <header>
            <h1>Cours HTML<sup>5</sup></h1>
        </header>
        <main>
            <section>
                <h2>Html <sup>5</sup></h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>

            <section>
                <h2>Css<sub>3</sub></h2>
                <p>Lorem ipsum dolor sit amet.<br>
                    <a href="https://www.google.com/search?query=html" title="lien pour html">Cours html</a></p>
                    <img src="./asset/HTML5_logo_and_wordmark.svg" alt="logo html">
            </section>
        </main>
        <div>
            <p>suite</p>
        </div>
        <footer>
            <p>&copy; - WebPage - 2021</p>
        </footer>
    </body>

</html>
```
## Exemple de reset css
```css
    /* 
reset css
tailles, marges, padding, link

*/
html{ /* sélecteur propriété valeur */
    font-size: 62.5%;  /* 1.000rem root em 10px */
}
body{
    font: 1.6rem sans-serif; /* 16px */
    margin: 0;  
}
h1,h2,h3,h4,p,ol,ul,figure,dd{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
h1,h2,h3,h4{
    font-weight: normal;
}
```