# Shadowrun, iPhone Applikation #

## Ideen ##

### Spielleiteranwendung ###

* Tools
** Würfelproben
** Fernkampf
** Nahkampf
** Zauber sprechen
** Geist Beschwören
** Kampf
*** Involvierte Charaktere (with QuickAdder from Library)
*** Initiative
*** Munition
* Datenbanken
** NPC
** Ausrüstung
** Zauber
** Cyberware
** [...]
* Gruppenverwaltung
** Charaktere
* Kampagnenverwaltung
** Gruppe, Charaktere
** Timeline
* NPC
* Tracker
** Geister (Dienste)
** Drohnen (Schaden, Kraftstoff)
** Fahrzeuge (Schaden, Kraftstoff)
* Informationen
** Timeline

### Spieleranwendung ###

* Normale Würfelproben
* Würfelszenarien
* Charakter verwalten
* Tracking
** Ausrüstung
** Munitionsverbrauch 
** Geisterdienste
** Lebensstil (Kosten)
** Fahrzeuge (Schaden, Krafstoff)

## Widgets ##

### Scrollable Choice/Picker ###

Der Picker der Standard UI Toolkits ist groß und hässlich. Eine selbst gemachte Variante muss her, etwa für die Waffenauswahl. Dem Nutzer muss klar sein, dass mehr Optionen bestehen. Ein Pfeil nach unten, oben als Hinweis ist denkbar, oder eine kleine Leiste mit Kreisen, wobei der Kreis mit der aktuellen Option ausgefüllt ist, oder die ersten Pixel der nächsten/vorherigen Option.

Interface ist klar, dass man vom Ende zum Anfang durchscrollen muss. Idealerweise kann man mit einem Doppelklick eine Optionsliste öffnen, bei der man dann normal auswählen kann.

### Optionsgruppen ###

Ein Beispiel ist etwa das Schadensniveau (L/M/S/T). 

Es gibt 2 Möglichkeiten:

- Man bietet dem Benutzer alle Möglichkeiten als Bilder an. Jede Option ist exklusiv. Wird eine aktivierte Option ausgewählt, so wird sie deaktiviert, womit dann keine Auswahl besteht.
- Man bietet dem Benutzer nur ein Bild an. Jeder Klick auf das Bild wechselt den State (im Rotationsverfahren). Bei Fehlklick kann das sehr frustrierend sein. Außerdem muss irgendwie klar sein, das hier mehrere Optionen versteckt sind. Könnte man in der deaktivierten Grafik machen (alle Optionen als Mini Grafik) 

### Options ###

Im Idealfall einfach nur ein 40x40px großes Bild mit 2 Varianten für Aus/Ein, beispielsweise ausgegraut für eine deaktivierte Option.

## Standard-Würfelproben ##

* Schütteln des iPhone zum Würfeln

* letzen Ergebnisse darstellen

* Darstellung der Ergebnisse?
** Nur die Anzahl der Erfolge?
** Wirkliche Würfel?
** Regel der Eins?s
* Wie würfeln? => Shake!
* Poolwürfel als Extr<ins></ins>aspalte?

* Einstellungsmöglichkeiten
** Für jede Probe Standardanzahl und Mindestwurf speichern
** Vielleicht direkt im Screen mit einem Edit Button oben rechts?

### Erfolgsprobe ###

Anzahl von Würfeln gegen einen Mindestwurf

Picker mit 2 Spalten:

- Anzahl Würfel
- Mindestwurf

### Offene Probe

Höchste Wert gilt

Picker mit 1 Spalten:

- Anzahl Würfel

### Vergleichende Probe ###

Picker mit 3 Spalten

- Anzahl Würfel Spieler A 
- Mindestwurf
- Anzahl Würfel Spieler B 

### Wettstreit

Entweder 2 Seiten mit je 2 spaltige Picker, aber wo dann Ergebnis darstellen

oder eine Seite mit 4 Spalten

- Anzahl Würfel Spieler A 
- Mindestwurf für A
- Anzahl Würfel Spieler B
- Mindestwurf für B

## Szenarien: Fernkampf ##

* Was ist mit Kampfpoolwürfel?
* Button zum Reset?
* Aktuelle Würfelzahl immer sichtbar?
* Aktueller Mindestwurf immer sichtbar?
* Sprung zum Würfelscreen?

* Einstellungen
** Ausweichen (An/Aus)	
* Wie durch die Screens scrollen, mit Kringelanzeige und links/rechts wischen?

### Screen 01 - Waffentyp, Ausrüstung ###

* Waffentyp bestimmt Reichweite
* Ausrüstung senkt Grundmindestwurf oder hat Modifikator

* Wie Stärke von Projektilwaffen? Vielleicht Platz unter Waffenauswahl freihalten und bei Bedarf einblenden?

* Waffentypauswahl über Custom Picker

Exclusive Options (clicking on active choice disables choice)
* Smartlink (with smartgun) 
* Smart Goggles (with smartgun) 

Optionen
* Laser sight 
* Image magnification 
* Using a second firearm

### Screen 02 - Rückstoß und Bewegung

Waffentyp schränkt Rückstoßmodus ein, da nicht alle Waffen alle mehrere Schüsse unterstützen oder einfach hohen Rückstoß haben

Rückstoß
* Als exklusive Optionen 
* Recoil, semi-automatic, second shot as Option (On/Off)
Recoil, burst-fire & Recoil, burst-fire, second burst (zum durchklicken or as exclusive option) 
Recoil, full-auto, +1 for each additional bullet as Numbered Option (small & big representation + number)
(Recoil, heavy weapon) covered by weapon choice 

* Number of bullets instead of choice for burst fire/auto

Recoil compensation as Numbered Option (small & big representation + number)
Gyro stabilization as Numbered Option (small & big representation + number)

### Screen 3 - Entfernung / Geschwindigkeit / Deckung

Entfernung als Slider?

Attacker as stickman left
Attacker Speed (Stand/Walking/Running) 
Difficult ground (On/Off)

Attacker wounded as Exclusive Option (L/M/S/T die durchtoggeln, default ist alles aus)
Attacker in melee combat (Yes/No) 

Attacker as stickman right 
Target speed (Stationary/Normal/Running)

Cover, Partial  (Yes, No)
Multiple targets (+/- Buttons)

### Screen 04 - Sichtbarkeit

Light Level (Normal/Full Darkness/Minimal Light/Partial Light/Glare)

Mist level (None/Mist Light/Smoke Fog/Rain Heavy/Smoke/Fog/Rain) 

Thermal Smoke as Option

Aimed shot (-/+)
Called shot (Yes/No)
Blind fire (Yes/No)

Thermoptic view (none/natural/cyber)
Low Light (none/natural/cyber)

### Screen 5 - Würfelscreen

Würfelprobe Screen mit MW voreingestellt
und Fertigkeit auf 6

vielleicht mit Kampfpoolwürfel als 3. Spalte bei Würfelpicker

### Screen 6 - Ausweichprobe

normaler Würfelscreen mit voreingestellten MW mit Kampfpool

### Screen 7- Waffe und Schadensmodifikatoren

Powerniveau (voreingestellt durch Waffenart, modifiziert durch Anzahl Schuss)
Schadensniveau (voreingestellt durch Waffenart)
Anzeige von modifizierte PN und SN
Anzeigen von Called Shot

Munitionsart (Normal/APDS/Ex/Ex-Ex/Flechette/Gel/taser/Tracer)

Panzerung (Ballistische und Stoß beachten)

Hinter Barriere? Barrierenstufe als Panzerung

### Screen 8 Schadensprobe

normaler Würfelscreen mit voreingestellten MW mit Kampfpool

## Zaubern

Magiestufe
Hexerei
Kraftstufe
Zauberpoolwürfel

Macht eigentlich nur Sinn mit Zauberbibliothek
