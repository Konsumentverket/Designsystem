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
    cd ~/projects/flippad_web/wwwroot
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
    npx webpack
```
## Lägg till nya komponenter

TODO

