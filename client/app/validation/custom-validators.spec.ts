/*
 * This file defines unit tests for the additional form validators
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { TestBed, async } from '@angular/core/testing';
import { FormControl, ValidatorFn } from '@angular/forms';

import { CustomValidators } from './custom-validators';

describe('CustomValidators', () => {
  const testValue = 10;

  it('should return functions', async(() => {
    const max: ValidatorFn = CustomValidators.max(testValue);
    const min: ValidatorFn = CustomValidators.min(testValue);
    expect(CustomValidators.max).not.toThrow();
    expect(CustomValidators.min).not.toThrow();
    expect(typeof max).toEqual('function');
    expect(typeof min).toEqual('function');
  }));

  it('should pass numbers less than or equal to maximum', async(() => {
    const max: ValidatorFn = CustomValidators.max(testValue);
    const control: FormControl = new FormControl(testValue - 1);
    expect(max(control)).toBeNull();
    control.setValue(testValue);
    expect(max(control)).toBeNull();
  }));

  it('should reject numbers greater than the maximum', async(() => {
    const max: ValidatorFn = CustomValidators.max(testValue);
    const control: FormControl = new FormControl(testValue + 1);
    expect(max(control)).toEqual({max: testValue + 1});
  }));

  it('should pass numbers greater than or equal to minimum', async(() => {
    const min: ValidatorFn = CustomValidators.min(testValue);
    const control: FormControl = new FormControl(testValue + 1);
    expect(min(control)).toBeNull();
    control.setValue(testValue);
    expect(min(control)).toBeNull();
  }));

  it('should reject numbers less than the minimum', async(() => {
    const min: ValidatorFn = CustomValidators.min(testValue);
    const control: FormControl = new FormControl(testValue - 1);
    expect(min(control)).toEqual({min: testValue - 1});
  }));
});
