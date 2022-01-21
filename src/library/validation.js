const isValueGreaterThanZero = (value) => value > 0;

const isValueValid = (value) => isValueGreaterThanZero(value);
/* && isValueOnlyNumber */
/* && inputIncludesOnlyDotOrComma*/

export default isValueValid;

// Value = mindestens 1
// Wert darf nur eine Zahl sein
// nur Punkt & Komma erlaubt zwischen den Zahlen; 15,5 ODER 15.5
