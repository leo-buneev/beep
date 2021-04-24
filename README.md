# Beeper

A handy tool to start beeping right from jour javascript!

## Installation

Add following tag inside `<head>` of your html file:

```
<script src="https://cdn.jsdelivr.net/gh/leo-buneev/beep@master/beep4.js"></script>
```

## Usage

After this library is installed, you'll have access to the `Beeper` module. It provided two functions - `beep` and `play`

### Beeper.beep(frequency, duration, volume)

Plays single beep. 

Arguments:

 - frequency = frequency in Hz (1 - 5000). _Optional. Default: 520_
 - duration = duration of beep in ms. _Optional. Default: 200_
 - volume = volume ob beep in percents. _Optional. Default: 100_

Examples:
```
Beeper.beep() // beep with default settings
Beeper.beep(300) // beep with frequency 300
Beeper.beep(400, 1000) // beep with fr. 300 for 1 second
Beeper.beep(500, 500, 30) // beep with fr. 500 for 0.5 seconds with 30% volume
```

### Beeper.play(sequence)

Playse sequence of beeps - this way you can create entire songs!

Arguments:

 - series = array of arrays of length up to 3, that correspond to arguments of function `beep`. _Required_

Note: if you set frequency to `null`, it will play "silence" for set amount of milliseconds.

Examples:
```
Beeper.play([ [500, 100], [300, 200] ]) // beep on fq 500 for 100 ms, then on fq 300 for 200 ms
Beeper.play([ [500, 100], [null, 100], [300, 200] ]) // beep on fq 500 for 100 ms, then wait for 100ms, then on fq 300 for 200 ms

// Play super mario theme:
Beeper.play([ [660, 100], [660, 100], [null, 100], [660, 100], [null, 100], [510, 100], [660, 100], [null, 100], [770, 100], [null, 400], [380, 100] ])
```
