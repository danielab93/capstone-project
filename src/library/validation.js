const isValueGreaterThanZero = (value) => value > 0;

const isValueValid = (value) => isValueGreaterThanZero(value);
/* && isValueOnlyNumber */
/* && inputIncludesOnlyDotOrComma*/

export default isValueValid;

// Value = mindestens 1
// erste Zahl darf keine 0 sein
// Wert darf nur eine Zahl sein
// nur Punkt & Komma erlaubt zwischen den Zahlen; 15,55 ODER 15.55
// max. 2 Nachkommastellen
