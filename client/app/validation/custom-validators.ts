/*
 * This file defines additional form validators for numeric inputs
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * A class containing curried Validator functions required for
 * parsing the structure of our forms
 */
export class CustomValidators {
  /**
   * Generates a function that checks whether the supplied
   * value is smaller than the provided maximum
   * @return Validator function
   */
  public static max(max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value <= max ? null : {'max': control.value};
    };
  }

  /**
   * Generates a function that checks whether the supplied
   * value is greater than the provided minimum
   * @return Validator function
   */
  public static min(min: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value >= min ? null : {'min': control.value};
    };
  }
}
