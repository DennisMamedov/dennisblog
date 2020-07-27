# ?
Dit is de blog van Dennis Mamedov. Via deze repo kan ik recht naar mijn server deployen.

# Hoe voeg je een blog toe
Voeg een .md of .mdx bestand toe aan de /pages/blog/ directory. Gebruik de andere blogs als template. Daarna zal je in /lib/posts.js je blog moeten importen en toevoegen aan de array. Dit is omdat de enige babel plugin die bestond om wildcards te importen, niet goed werktte.

# Scripts
npm run dev - Test build, draait op localhost:3000. Alle veranderingen updaten live
npm run build && npm run start - Deployed de server.

# Install
Clone deze repo en run npm install.
