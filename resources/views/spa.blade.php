<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @vite('resources/sass/app.scss')
    </head>
    <body class="antialiased">
        <div id="app">
           <App></App>
        </div>
        
        @vite('resources/js/main.js')
    </body>
</html>