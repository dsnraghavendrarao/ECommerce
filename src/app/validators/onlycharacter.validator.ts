import { AbstractControl } from '@angular/forms';

export function OnlyCharacter(control: AbstractControl) {
  console.log("-------------asdf")
  console.log(control.value)
  if (control.value.startsWith('r')) {
    return { validName: true };
  }
  return null;
}