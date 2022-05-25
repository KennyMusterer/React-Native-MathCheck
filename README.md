# Installationsanleitung für React Native

Vorraussetzung: Node 14LTS oder neuer (Download: https://nodejs.org/en/download/)

1. Installieren des Expo-CommandLineInterface mit `npm install -g expo-cli`
2. Navigieren in das Verzeichnis, wo das Projekt erstellt werden soll (cd Pfad)
3. Erstellen des Projekts mit `expo init Projektname`
4. Auswählen des gewünschten Template (blank oder blank(Typescript) empfohlen)
5. Starten des Projektes mit `npm start` im Projektverzeichnis

# Nutzen eines Android-Emulators mit Expo
Um einen Intallierten Android-Emulator nutzem zu können muss vorher:
1. Der Pfad der installierten Android-SDK als Umgebungsvariable `ANDROID_HOME` hinzugefügt werden 
2. Der Unterordner `platform-tools` (im Android-SDK-Ordner) zu `PATH` hinzugefügt werden
