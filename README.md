# Konsumentverkets Designsystem

Arkitektur/ Översikt:
[https://github.com/Konsumentverket/FlippadArkitektur/](https://github.com/Konsumentverket/FlippadArkitektur/)

Designsystem för Hallå konsument:
[https://konsumentverket.github.io/designsystem/sites/hallakonsument/build/](https://konsumentverket.github.io/designsystem/sites/hallakonsument/build/)

Designsystem för Microsajt:
[https://konsumentverket.github.io/designsystem/sites/microsite/build](https://konsumentverket.github.io/designsystem/sites/microsite/build)

## Kör storybooks lokalt

Navigera till \designsystem\ mappen och kör följande script:

```
    //för hk
    npm run hk-storybook

    //för microsites
    npm run micro-storybook
```

## Kör storybooks lokalt med direkt uppdatering på flippadwebb

```
    cd ~/projects/Konsumentverket.github.io
    npm link
    cd ~/projects/flippad_web/hallakonsument/wwwroot
    npm link kov-components

    # Öppna två terminaler
    # terminal 1
    cd ~/projects/Konsumentverket.github.io/designsystem
    npm run hk-storybook

    # terminal 2
    cd ~/projects/Konsumentverket.github.io/
    npm start
```

### För att återställa

```
    cd ~/projects/flippad_web
    npm uninstall --no-save kov-components && npm install
    cd ~/projects/Konsumentverket.github.io
    npm uninstall
```

## Bygg statik version av storybooks

Navigera till \designsystem\ mappen och kör följande script:

```
    //för hk
    npm run hk-build-storybook

    //för microsites
    npm run micro-build-storybook
```

## Bygg distributions filer

I projektets root katalog för föjande kommando:

```
    npm start
```

## Bit.dev

```
    bit export konsumentverket.kov-compo
```

## Lägg till ny ikon i Designsystemet

```
1. Start storybook, i vänstra menyn gå till KOmponente->Ikoner->Alla Redaktörs Ikoner, om allt är OK så borde du kunna se din ikon i listan
2. Skapa komponenten som renderar i konen (utgå från t.ex UserInjured komponenten)
3. Lägg till viewbox värden som är original bildens värden (alltså i full storlek, öppna upp SVG:n i chrome och inspektera bilden)
4. Lägg till <path> och sedan ändra namnet under id propertyn (om <path> är omsluten av <g> så ska det också wrappas på samma sätt i komponenten, likt t.ex Hairdresser komponeten, i annat fall behövs inte <g>)
5. Lägg till nytt objekt likt alla andra under IconExport.json
6. Lägg till den fysiska SVG filen i SystemIconsSVG
7. Gör en PR
```
