webpackJsonp([1],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(22);
/**
 * This file contains the about page to show the information of
 * the developers and about duely
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component used by Angular to find the corresponding HTML page
 * and to display the correct information
 */
var AboutComponent = (function () {
    function AboutComponent(translate) {
        this.translate = translate;
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-about',
            template: __webpack_require__(567),
            styles: [__webpack_require__(540)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoRedirectGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoRedirectGuard = (function () {
    function AutoRedirectGuard(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    /**
     * get the saved settings via the router.
     * If there are some it gives out true, else false
     */
    AutoRedirectGuard.prototype.canActivate = function () {
        if (!this.storage.settingsLoaded) {
            this.router.navigateByUrl('settings');
            return false;
        }
        else {
            return true;
        }
    };
    AutoRedirectGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], AutoRedirectGuard);
    return AutoRedirectGuard;
    var _a, _b;
}());

//# sourceMappingURL=auto-redirect.guard.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecurringSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__appointment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_holidays__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_holidays___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_holidays__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file contains a description of recurring appointment settings.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */








/**
 * Description of the structure of how appointments can be repeated.
 */
var RecurringSettingsComponent = (function () {
    /** constructs an appointment form filled with standart values  */
    function RecurringSettingsComponent(fb, storage, translate) {
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.hideSettings = true;
        /** the date format used in the date forms */
        this.datePattern = /\d{4}-\d{2}-\d{2}/;
        this.subscription = [];
        this.hd = new __WEBPACK_IMPORTED_MODULE_4_date_holidays__();
        this.options = new __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["b" /* DatePickerOptions */]({ initialDate: new Date(), color: this.storage.getColor() });
        this.datepickerTexts = new __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["c" /* DatePickerTexts */]();
        this.countries = this.getCountries();
        this.states = [];
        this.regions = [];
        this.statesVisible = [];
        this.regionsVisible = [];
        this.createForm();
    }
    /** checks selection and updates the form  */
    RecurringSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('SELECT YEAR').subscribe(function (result) {
            _this.datepickerTexts.selectYearText = result;
        });
        this.translate.get('CLEAR').subscribe(function (result) {
            _this.datepickerTexts.clearText = result;
        });
        this.translate.get('TODAY').subscribe(function (result) {
            _this.datepickerTexts.todayText = result;
        });
        this.translate.get(['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
            'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']).subscribe(function (result) {
            _this.datepickerTexts.monthName = Object.keys(result).map(function (key) { return result[key]; });
            _this.datepickerTexts = new __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["c" /* DatePickerTexts */](_this.datepickerTexts); // to fire ngOnChanges in DatePicker
        });
        if (!this.appointment.hasOwnProperty('recurringSettings')) {
            this.appointment.recurringSettings = {
                // Default values for form data
                frequency: 'NEVER',
                interval: 1,
                ends: 'NEVER',
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
                repByMonthly: 'MONTH',
                repByYearly: 'DAYMONTHYEAR',
                count: 1,
                untilDate: __WEBPACK_IMPORTED_MODULE_6_moment_timezone__(new Date()).add(100, 'y').format('YYYY-MM-DD'),
                exclusions: [],
            };
        }
        this.recurringSettings = this.appointment.recurringSettings;
        this.subscription[0] = this.recurringForm.controls['ends'].valueChanges.subscribe(function (end) {
            if (end === 'COUNT') {
                _this.recurringForm.controls['count'].setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
            }
            else {
                _this.recurringForm.controls['count'].setValidators([]);
            }
            _this.recurringForm.controls['count'].updateValueAndValidity();
        });
        this.subscription[1] = (this.recurringForm.valueChanges.subscribe(function (data) { return _this.endValidation(data); }));
    };
    /**  */
    RecurringSettingsComponent.prototype.ngOnDestroy = function () {
    };
    /** updates the repeats  */
    RecurringSettingsComponent.prototype.ngAfterViewChecked = function () {
        this.updateRepeatsBy();
    };
    /** get the data, checks the validaton of the reccuringsettings */
    RecurringSettingsComponent.prototype.endValidation = function (data) {
        this.appointment.valid[1] = this.recurringForm.valid;
    };
    /** gets event data, checks the end date. Checks if it is not
     * before the start date and updates it
     */
    RecurringSettingsComponent.prototype.endDateListener = function (event) {
        if (event !== undefined) {
            var date = __WEBPACK_IMPORTED_MODULE_6_moment_timezone__();
            date.set({
                year: event.year,
                month: event.month - 1,
                date: event.day
            });
            if (date.toDate().valueOf() >= this.appointment.end.valueOf()) {
                this.recurringSettings.untilDate = date.toDate();
            }
            else {
                var end = new __WEBPACK_IMPORTED_MODULE_6_moment_timezone__(this.appointment.end);
                this.enddate = new __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["d" /* DateModel */]({ day: (end.date() + 1) + '', month: (end.month() + 1) + '', year: end.year() + '',
                    formatted: end.format('YYYY-MM-DD'), momentObj: new __WEBPACK_IMPORTED_MODULE_6_moment_timezone__(end) });
            }
        }
    };
    /** Checks if there is an object recurringSetttings in the array, if not, adds it. */
    RecurringSettingsComponent.prototype.ngOnChanges = function () {
        if (this.appointment.hasOwnProperty('recurringSettings')) {
            if (!this.appointment.recurringSettings.hasOwnProperty('exclusions')) {
                this.appointment.recurringSettings.exclusions = [];
            }
            this.exclusions = this.appointment.recurringSettings.exclusions;
            this.setExclusions(this.exclusions);
        }
    };
    /**
     * used to translate values of the holiday database to an array
     * @return translatet array
     */
    RecurringSettingsComponent.prototype.objectToArray = function (obj) {
        var result = Object.keys(obj).map(function (e) {
            return [e, obj[e]];
        });
        return result;
    };
    /**
     * returns all countries of the holiday database as an array
     * @return all countries of the holiday database as an array
     */
    RecurringSettingsComponent.prototype.getCountries = function () {
        return this.objectToArray(this.hd.getCountries());
    };
    /**
     * returns all states of the holiday database as an array
     * @return all states of the holiday database as an array
     */
    RecurringSettingsComponent.prototype.getStates = function (country) {
        var states = this.hd.getStates(country);
        if (states == null || states === undefined) {
            return undefined;
        }
        return this.objectToArray(states);
    };
    /**
     * returns all regions of the holiday database as an array
     * @return all regions of the holiday database as an array
     */
    RecurringSettingsComponent.prototype.getRegions = function (country, state) {
        var regions = this.hd.getRegions(country, state);
        if (regions == null || regions === undefined) {
            return undefined;
        }
        return this.objectToArray(regions);
    };
    /**
     * sets the value for a selectbox filled with all states and grants visibility
     * @param the position of the exclusionsform (see html)
     */
    RecurringSettingsComponent.prototype.showStates = function (i) {
        var exclusions = this.recurringForm.controls['exclusions'];
        var country = exclusions.at(i).controls['holiday_countries'].value;
        this.states[i] = this.getStates(country);
        if (this.states[i] !== undefined) {
            this.statesVisible[i] = true;
            this.regionsVisible[i] = false;
            this.appointment.recurringSettings.exclusions[i].holiday_states = this.states[i][0][0];
        }
        else {
            this.statesVisible[i] = false;
            this.regionsVisible[i] = false;
            this.appointment.recurringSettings.exclusions[i].holiday_states = '';
        }
        this.showRegions(i);
    };
    /**
     * sets the value for a selectbox filled with all regions and grants visibility
     * @param the position of the exclusionsform (see html)
     */
    RecurringSettingsComponent.prototype.showRegions = function (i) {
        var exclusions = this.recurringForm.controls['exclusions'];
        var country = exclusions.at(i).controls['holiday_countries'].value;
        var state = exclusions.at(i).controls['holiday_states'].value;
        this.regions[i] = this.getRegions(country, state);
        if (this.regions[i] !== undefined) {
            this.statesVisible[i] = true;
            this.regionsVisible[i] = true;
            this.appointment.recurringSettings.exclusions[i].holiday_regions = this.regions[i][0][0];
        }
        else {
            this.regionsVisible[i] = false;
            this.appointment.recurringSettings.exclusions[i].holiday_regions = '';
        }
    };
    /**
     * This method is used to remove an exclusion
     * @param exclusion tells which exclusion has to be removed
     */
    RecurringSettingsComponent.prototype.removeExclusion = function (exclusion) {
        var index = this.exclusions.indexOf(exclusion);
        if (index > -1) {
            this.exclusions.splice(index, 1);
        }
    };
    /** creates the reccuring form */
    RecurringSettingsComponent.prototype.createForm = function () {
        this.recurringForm = this.fb.group({
            frequency: 'NEVER' || 'DAILY' || 'WEEKLY' || 'MONTHLY' || 'YEARLY',
            interval: [
                1, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1),
                ]
            ],
            ends: 'NEVER' || 'COUNT' || 'UNTIL',
            monday: Boolean,
            tuesday: Boolean,
            wednesday: Boolean,
            thursday: Boolean,
            friday: Boolean,
            saturday: Boolean,
            sunday: Boolean,
            repByMonthly: 'MONTH' || 'MONTHINV' || 'WEEK' || 'WEEKINV' || 'WORK' || 'WORKINV',
            repByYearly: 'DAYMONTHYEAR' || 'DAYMONTHYEARINV' || 'WEEKYEAR' || 'WEEKINVYEAR' || 'WORKYEAR' || 'WORKINVYEAR',
            count: Number,
            untilDate: __WEBPACK_IMPORTED_MODULE_6_moment_timezone__(new Date()).add(100, 'y'),
            exclusions: this.fb.array([]),
        });
    };
    /**
     * This method return how many days a month has.
     * @param month the month of which the amount of days is calculated
     * @param year the year of which the amount of days of a month is calculated
     * @return This method return how many days a month has.
     */
    RecurringSettingsComponent.prototype.getDaysInMonth = function (month, year) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }
        else if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
                return 29;
            }
            else {
                return 28;
            }
        }
        else {
            return 31;
        }
    };
    /**
     * This method adds an empty exclusion to the creator form.
     */
    RecurringSettingsComponent.prototype.addExclusion = function () {
        var newExclusion = {
            type: 'holidays',
            holiday_countries: this.storage.settings.country != null ? this.storage.settings.country : '',
            holiday_states: this.storage.settings.state != null ? this.storage.settings.state : '',
            holiday_regions: this.storage.settings.region != null ? this.storage.settings.region : '',
            date: __WEBPACK_IMPORTED_MODULE_6_moment_timezone__(new Date()).format('YYYY-MM-DD'),
        };
        this.recurringSettings.exclusions.push(newExclusion);
        this.setExclusions(this.recurringSettings.exclusions);
        var length = this.exclusions.length;
        this.showStates(length - 1);
        this.recurringSettings.exclusions[length - 1].holiday_states = this.storage.settings.state != null ? this.storage.settings.state : '';
        this.showRegions(length - 1);
        this.recurringSettings.exclusions[length - 1].holiday_regions =
            this.storage.settings.region != null ? this.storage.settings.region : '';
    };
    /** this method gets the event and an number.
     * sets the date
     */
    RecurringSettingsComponent.prototype.setExclusionDate = function (event, i) {
        this.exclusions[i].date = new Date();
        this.exclusions[i].date.setFullYear(event.year, event.month - 1, event.day);
    };
    /** gets all exclusion countries and the date and puts it
     * into and array
     */
    RecurringSettingsComponent.prototype.setExclusions = function (exclusions) {
        var _this = this;
        var exclusionFGs = exclusions.map(function (exclusion) { return _this.fb.group({
            type: exclusion.type,
            holiday_countries: exclusion.holiday_countries,
            holiday_states: exclusion.holiday_states,
            holiday_regions: exclusion.holiday_regions,
            date: exclusion.date,
        }); });
        var exclusionsFormArray = this.fb.array(exclusionFGs);
        this.recurringForm.setControl('exclusions', exclusionsFormArray);
    };
    /**
     * This method updates the texts in the repeats-by-section (e.g.: Instead of "weekday of year" the text reads
     * "Every third Friday of the month").
     */
    RecurringSettingsComponent.prototype.updateRepeatsBy = function () {
        var start = new Date(this.appointment.start);
        var currentDate = new Date(start.getTime());
        var day = start.getDay();
        var i;
        var weekday = new Array(7);
        var month = new Array(12);
        weekday[0] = this.translate.instant('SUNDAY');
        weekday[1] = this.translate.instant('MONDAY');
        weekday[2] = this.translate.instant('TUESDAY');
        weekday[3] = this.translate.instant('WEDNESDAY');
        weekday[4] = this.translate.instant('THURSDAY');
        weekday[5] = this.translate.instant('FRIDAY');
        weekday[6] = this.translate.instant('SATURDAY');
        month[0] = this.translate.instant('JANUARY');
        month[1] = this.translate.instant('FEBRUARY');
        month[2] = this.translate.instant('MARCH');
        month[3] = this.translate.instant('APRIL');
        month[4] = this.translate.instant('MAY');
        month[5] = this.translate.instant('JUNE');
        month[6] = this.translate.instant('JULY');
        month[7] = this.translate.instant('AUGUST');
        month[8] = this.translate.instant('SEPTEMBER');
        month[9] = this.translate.instant('OCTOBER');
        month[10] = this.translate.instant('NOVEMBER');
        month[11] = this.translate.instant('DECEMBER');
        // Monthly
        // repeat by x-th weekday of month
        currentDate.setDate(1);
        while (day !== currentDate.getDay()) {
            currentDate.setDate(currentDate.getDate() + 1);
        }
        var weeks = (start.getDate() - currentDate.getDate()) / 7 + 1;
        this.week = this.translate.instant('EVERY') + ' ';
        if (weeks === 1) {
            this.week = this.week + this.translate.instant('FIRST') + ' ';
        }
        else if (weeks === 2) {
            this.week = this.week + this.translate.instant('SECOND') + ' ';
        }
        else if (weeks === 3) {
            this.week = this.week + this.translate.instant('THIRD') + ' ';
        }
        else if (weeks === 4) {
            this.week = this.week + this.translate.instant('FOURTH') + ' ';
        }
        else {
            this.week = this.week + this.translate.instant('FIFTH') + ' ';
        }
        this.week = this.week + weekday[day] + ' ' + this.translate.instant('OF THE MONTH');
        // repeat by x-th weekday of month (count from end)
        i = this.getDaysInMonth(start.getMonth(), start.getFullYear());
        currentDate.setDate(i);
        while (day !== currentDate.getDay()) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        weeks = (currentDate.getDate() - start.getDate()) / 7 + 1;
        this.weekInv = this.translate.instant('EVERY') + ' ';
        if (weeks === 1) {
            this.weekInv = this.weekInv + this.translate.instant('LAST') + ' ';
        }
        else if (weeks === 2) {
            this.weekInv = this.weekInv + this.translate.instant('SECOND LAST') + ' ';
        }
        else if (weeks === 3) {
            this.weekInv = this.weekInv + this.translate.instant('THIRD LAST') + ' ';
        }
        else if (weeks === 4) {
            this.weekInv = this.weekInv + this.translate.instant('FOURTH LAST') + ' ';
        }
        else {
            this.weekInv = this.weekInv + this.translate.instant('FIFTH LAST') + ' ';
        }
        this.weekInv = this.weekInv + weekday[day] + ' ' + this.translate.instant('OF THE MONTH');
        // repeat by day of month
        this.month = this.translate.instant('EVERY') + ' ' + start.getDate() + '. ' + this.translate.instant('OF THE MONTH');
        // repeat by day of month (count from end)
        this.monthInv = this.translate.instant('EVERY') + ' ';
        this.monthInv = this.monthInv + this.translate.instant('LAST DAY') + ' ' + this.translate.instant('OF THE MONTH');
        // repeat by day workday
        currentDate.setDate(1);
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        var isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        var workdays = 1;
        while (currentDate.valueOf() < start.valueOf()) {
            if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                workdays++;
            }
            else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                workdays++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        this.work = this.translate.instant('EVERY') + ' ' + workdays + '. ';
        if (isWorkDay) {
            this.work = this.work + this.translate.instant('WORKDAY') + ' ';
        }
        else {
            this.work = this.work + this.translate.instant('WEEKENDDAY') + ' ';
        }
        this.work = this.work + this.translate.instant('OF THE MONTH');
        // repeat by day workday INVERTED
        currentDate.setDate(this.getDaysInMonth(start.getMonth() + 1, start.getFullYear()));
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        workdays = 1;
        while (currentDate.valueOf() > start.valueOf()) {
            if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                workdays++;
            }
            else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                workdays++;
            }
            currentDate.setDate(currentDate.getDate() - 1);
        }
        this.workInv = this.translate.instant('EVERY') + ' ';
        if (workdays !== 1) {
            this.workInv = this.workInv + '' + workdays + '. ';
        }
        if (isWorkDay) {
            this.workInv = this.workInv + this.translate.instant('LAST') + ' ' + this.translate.instant('WORKDAY') + ' ';
        }
        else {
            this.workInv = this.workInv + this.translate.instant('LAST') + ' ' + this.translate.instant('WEEKENDDAY') + ' ';
        }
        this.workInv = this.workInv + this.translate.instant('OF THE MONTH');
        // yearly
        // repeat by day and month (Every 3.2.)
        this.dayMonthYear = this.translate.instant('EVERY') + ' ' + start.getDate() + '.'
            + (start.getMonth() + 1) + '. ' + this.translate.instant('OF THE YEAR');
        // repeat by last day
        this.dayMonthYearInv = this.translate.instant('EVERY') + ' ' + this.translate.instant('LAST') + ' ' +
            this.translate.instant('DAY') + ' ' + this.translate.instant('OF') + ' ' + month[start.getMonth()];
        // repeat by weekday of year INVERTED
        this.weekInvYear = this.translate.instant('EVERY') + ' ';
        var days = this.getDaysInMonth(start.getDate(), start.getFullYear()) - start.getDate();
        var countInv = -(((days - (days % 7)) / 7) + 1);
        if (countInv === -1) {
            this.weekInvYear = this.weekInvYear + this.translate.instant('LAST') + ' ';
        }
        else if (countInv === -2) {
            this.weekInvYear = this.weekInvYear + this.translate.instant('SECOND LAST') + ' ';
        }
        else if (countInv === -3) {
            this.weekInvYear = this.weekInvYear + this.translate.instant('THIRD LAST') + ' ';
        }
        else if (countInv === -4) {
            this.weekInvYear = this.weekInvYear + this.translate.instant('FOURTH LAST') + ' ';
        }
        else if (countInv === -5) {
            this.weekInvYear = this.weekInvYear + this.translate.instant('FIFTH LAST') + ' ';
        }
        this.weekInvYear = this.weekInvYear + weekday[start.getDay()] + ' ' +
            this.translate.instant('OF') + ' ';
        this.weekInvYear = this.weekInvYear + month[start.getMonth()];
        // repeat by weekday of year
        this.weekYear = this.translate.instant('EVERY') + ' ';
        var count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
        if (count === 1) {
            this.weekYear = this.weekYear + this.translate.instant('FIRST') + ' ';
        }
        else if (count === 2) {
            this.weekYear = this.weekYear + this.translate.instant('SECOND') + ' ';
        }
        else if (count === 3) {
            this.weekYear = this.weekYear + this.translate.instant('THIRD') + ' ';
        }
        else if (count === 4) {
            this.weekYear = this.weekYear + this.translate.instant('FOURTH') + ' ';
        }
        else if (count === 5) {
            this.weekYear = this.weekYear + this.translate.instant('FIFTH') + ' ';
        }
        this.weekYear = this.weekYear + weekday[start.getDay()] + ' ' +
            this.translate.instant('OF') + ' ';
        this.weekYear = this.weekYear + month[start.getMonth()];
        // repeat by day workday
        currentDate.setDate(1);
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        workdays = 1;
        while (currentDate.valueOf() < start.valueOf()) {
            if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                workdays++;
            }
            else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                workdays++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        this.workYear = this.translate.instant('EVERY') + ' ' + workdays + '. ';
        if (isWorkDay) {
            this.workYear = this.workYear + this.translate.instant('WORKDAY') + ' ';
        }
        else {
            this.workYear = this.workYear + this.translate.instant('WEEKENDDAY') + ' ';
        }
        this.workYear = this.workYear + this.translate.instant('OF') + ' ' + month[start.getMonth()];
        // repeat by day workday INVERTED
        currentDate.setDate(this.getDaysInMonth(start.getMonth() + 1, start.getFullYear()));
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        workdays = 1;
        while (currentDate.valueOf() > start.valueOf()) {
            if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                workdays++;
            }
            else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                workdays++;
            }
            currentDate.setDate(currentDate.getDate() - 1);
        }
        this.workInvYear = this.translate.instant('EVERY') + ' ';
        if (workdays !== 1) {
            this.workInvYear = this.workInvYear + '' + workdays + '. ';
        }
        if (isWorkDay) {
            this.workInvYear = this.workInvYear + this.translate.instant('LAST') + ' ' + this.translate.instant('WORKDAY') + ' ';
        }
        else {
            this.workInvYear = this.workInvYear + this.translate.instant('LAST') + ' ' + this.translate.instant('WEEKENDDAY') + ' ';
        }
        this.workInvYear = this.workInvYear + this.translate.instant('OF') + ' ' + month[start.getMonth()];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__appointment__["Appointment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appointment__["Appointment"]) === "function" && _a || Object)
    ], RecurringSettingsComponent.prototype, "appointment", void 0);
    RecurringSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-recurring-settings',
            template: __webpack_require__(572),
            styles: [__webpack_require__(545)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], RecurringSettingsComponent);
    return RecurringSettingsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=recurring-settings.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DatesAndCollisions_CollisionDetector__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ical_generator__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ical_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ical_generator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file contains a service, which handles multiple appointments.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */





/**
 * This Service holds and grants access onto multiple appointments.
 */
var AppointmentsService = (function () {
    /**
     * contructor initializes Storage
     */
    function AppointmentsService(StorageService) {
        this.StorageService = StorageService;
        this.events = [];
        this.collisions = new Array();
        // this.events = APPOINTMENTS;
    }
    /**
     * gets the appointment data and returns it as array
     */
    AppointmentsService.prototype.getAppointments = function () {
        return Promise.resolve(this.events);
    };
    /**
     * gets appointment data and returns a default appointment
     */
    AppointmentsService.prototype.addAppointment = function (appointment) {
        if (appointment != null) {
            this.events.push(appointment);
        }
        else {
            this.events.push(this.defaultAppointment());
        }
    };
    /**
     * gets the appointment data and removes it
     */
    AppointmentsService.prototype.removeAppointment = function (appointment) {
        var index = this.events.indexOf(appointment);
        if (index > -1) {
            this.events.splice(index, 1);
        }
    };
    /**
     * initializes the data for the output of the data
     */
    AppointmentsService.prototype.initializeCalendar = function () {
        var calendar = __WEBPACK_IMPORTED_MODULE_3_ical_generator__({
            domain: 'duely.tu-braunschweig.de',
            name: 'Duely',
            prodId: '//TU Braunschweig//Duely//EN',
            url: 'https://duely.tu-braunschweig.de',
            timezone: this.StorageService.settings.timeZone === 'floating' ? undefined : this.StorageService.settings.timeZone
        });
        return calendar;
    };
    /**
     * gets the data from the events , returns an ICal-String
     */
    AppointmentsService.prototype.getICalString = function () {
        var calendar = this.initializeCalendar();
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var event = _a[_i];
            this.addEventToCalendar(calendar, event);
        }
        return calendar.toString();
    };
    /**
     * creats the format for the an appointment in the formular , returns the format
     */
    AppointmentsService.prototype.defaultAppointment = function () {
        var offset = __WEBPACK_IMPORTED_MODULE_4_moment_timezone__().utcOffset();
        var start = __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["utc"]().add(offset, 'minutes').startOf('hour');
        var end = start.clone().add(1, 'hour');
        var app = {
            summary: '',
            start: start.toDate(),
            end: end.toDate(),
            description: '',
            status: 'confirmed',
            timezone: 'floating',
            recurringSettings: {
                frequency: 'NEVER',
                interval: 1,
                ends: 'NEVER',
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
                repByMonthly: 'MONTH',
                repByYearly: 'DAYMONTHYEAR',
                count: 1,
                untilDate: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["utc"]().format('YYYY-MM-DD'),
                exclusions: [],
            },
            valid: [false, true, true, true]
        };
        return app;
    };
    /** gets Month and year, gives out the numbers of days that given month has */
    AppointmentsService.prototype.getDaysInMonth = function (month, year) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }
        else if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
                return 29;
            }
            else {
                return 28;
            }
        }
        else {
            return 31;
        }
    };
    /**
     * gets the data from the events , returns an ICal-String
     */
    AppointmentsService.prototype.addEventToCalendar = function (calendar, event) {
        var start = new Date(event.start);
        var end = new Date(event.end);
        var events = [];
        // add eventss to calendar
        if (event.recurringSettings.frequency === 'NEVER') {
            // add a single non-repeating events to calendar
            events[0] = calendar.createEvent({
                start: start,
                end: end,
                stamp: new Date(),
                summary: event.summary,
                location: event.location,
                description: event.description,
                allDay: event.allDay,
                status: event.status,
                timezone: event.timezone,
                floating: event.floating
            });
        }
        else if (event.recurringSettings.frequency === 'DAILY' || (event.recurringSettings.frequency === 'MONTHLY' &&
            event.recurringSettings.repByMonthly === 'MONTH') || (event.recurringSettings.frequency === 'YEARLY' &&
            event.recurringSettings.repByYearly === 'DAYMONTHYEAR')) {
            // add a single repeating events to calendar
            events[0] = calendar.createEvent({
                start: start,
                end: end,
                stamp: new Date(),
                summary: event.summary,
                location: event.location,
                description: event.description,
                allDay: event.allDay,
                status: event.status,
                repeating: {
                    freq: event.recurringSettings.frequency,
                    count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                    interval: event.recurringSettings.interval,
                    until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                },
                timezone: event.timezone,
                floating: event.floating
            });
        }
        else if (event.recurringSettings.frequency === 'WEEKLY') {
            // add multiple (up to 7) eventss that repeat weekly to calendar
            var weekdays = [];
            weekdays[0] = event.recurringSettings.sunday;
            weekdays[1] = event.recurringSettings.monday;
            weekdays[2] = event.recurringSettings.tuesday;
            weekdays[3] = event.recurringSettings.wednesday;
            weekdays[4] = event.recurringSettings.thursday;
            weekdays[5] = event.recurringSettings.friday;
            weekdays[6] = event.recurringSettings.saturday;
            var byDayWeek = [];
            if (weekdays[0]) {
                byDayWeek[byDayWeek.length] = 'su';
            }
            if (weekdays[1]) {
                byDayWeek[byDayWeek.length] = 'mo';
            }
            if (weekdays[2]) {
                byDayWeek[byDayWeek.length] = 'tu';
            }
            if (weekdays[3]) {
                byDayWeek[byDayWeek.length] = 'we';
            }
            if (weekdays[4]) {
                byDayWeek[byDayWeek.length] = 'th';
            }
            if (weekdays[5]) {
                byDayWeek[byDayWeek.length] = 'fr';
            }
            if (weekdays[6]) {
                byDayWeek[byDayWeek.length] = 'sa';
            }
            events[0] = calendar.createEvent({
                start: event.start,
                end: event.end,
                stamp: new Date(),
                summary: event.summary,
                location: event.location,
                description: event.description,
                allDay: event.allDay,
                status: event.status,
                repeating: {
                    freq: event.recurringSettings.frequency,
                    byDay: byDayWeek,
                    count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                    interval: event.recurringSettings.interval,
                    until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                },
                timezone: event.timezone,
                floating: event.floating
            });
        }
        else if (event.recurringSettings.frequency === 'MONTHLY') {
            if (event.recurringSettings.repByMonthly === 'MONTHINV') {
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byMonthDay: [-1],
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByMonthly === 'WEEK') {
                var count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
                var weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'];
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: [weekdays[event.start.getDay()]],
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByMonthly === 'WEEKINV') {
                var days = this.getDaysInMonth(event.start.getDate(), event.start.getFullYear()) - event.start.getDate();
                var count = -(((days - (days % 7)) / 7) + 1);
                var weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'];
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: [weekdays[event.start.getDay()]],
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByMonthly === 'WORK') {
                var currentDate = new Date(start);
                currentDate.setDate(1);
                currentDate.setMonth(start.getMonth());
                currentDate.setFullYear(start.getFullYear());
                var isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
                var workdays = 1;
                while (currentDate.valueOf() < start.valueOf()) {
                    if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                        workdays++;
                    }
                    else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                        workdays++;
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                var daysArray = [];
                if (isWorkDay) {
                    daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
                }
                else {
                    daysArray = ['SA', 'SU'];
                }
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: daysArray,
                        bySetPos: workdays,
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByMonthly === 'WORKINV') {
                var currentDate = new Date(start);
                currentDate.setDate(this.getDaysInMonth(start.getMonth(), start.getFullYear()));
                currentDate.setMonth(start.getMonth());
                currentDate.setFullYear(start.getFullYear());
                var isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
                var workdays = 1;
                while (currentDate.valueOf() > start.valueOf()) {
                    if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                        workdays++;
                    }
                    else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                        workdays++;
                    }
                    currentDate.setDate(currentDate.getDate() - 1);
                }
                var daysArray = [];
                if (isWorkDay) {
                    daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
                }
                else {
                    daysArray = ['SA', 'SU'];
                }
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: daysArray,
                        bySetPos: -workdays,
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
        }
        else if (event.recurringSettings.frequency === 'YEARLY') {
            // add multiple eventss to calendar which repeat every x-th weekday day of a year (Every second friday of the year)
            if (event.recurringSettings.repByYearly === 'WEEKYEAR') {
                var count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
                var weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'];
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: [weekdays[event.start.getDay()]],
                        byMonth: [start.getMonth() + 1],
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByYearly === 'DAYMONTHYEARINV') {
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
                        byMonth: [start.getMonth() + 1],
                        bySetPos: -1,
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByYearly === 'WEEKINVYEAR') {
                var days = this.getDaysInMonth(event.start.getDate(), event.start.getFullYear()) - event.start.getDate();
                var count = -(((days - (days % 7)) / 7) + 1);
                var weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'];
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: [weekdays[event.start.getDay()]],
                        byMonth: [start.getMonth() + 1],
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByYearly === 'WORKYEAR') {
                var currentDate = new Date(start);
                currentDate.setDate(1);
                currentDate.setMonth(start.getMonth());
                currentDate.setFullYear(start.getFullYear());
                var isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
                var workdays = 1;
                while (currentDate.valueOf() < start.valueOf()) {
                    if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                        workdays++;
                    }
                    else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                        workdays++;
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                var daysArray = [];
                if (isWorkDay) {
                    daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
                }
                else {
                    daysArray = ['SA', 'SU'];
                }
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: daysArray,
                        byMonth: [start.getMonth() + 1],
                        bySetPos: workdays,
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
            else if (event.recurringSettings.repByYearly === 'WORKINVYEAR') {
                var currentDate = new Date(start);
                currentDate.setDate(this.getDaysInMonth(start.getMonth(), start.getFullYear()));
                currentDate.setMonth(start.getMonth());
                currentDate.setFullYear(start.getFullYear());
                var isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
                var workdays = 1;
                while (currentDate.valueOf() > start.valueOf()) {
                    if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                        workdays++;
                    }
                    else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
                        workdays++;
                    }
                    currentDate.setDate(currentDate.getDate() - 1);
                }
                var daysArray = [];
                if (isWorkDay) {
                    daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
                }
                else {
                    daysArray = ['SA', 'SU'];
                }
                events[0] = calendar.createEvent({
                    start: event.start,
                    end: event.end,
                    stamp: new Date(),
                    summary: event.summary,
                    location: event.location,
                    description: event.description,
                    status: event.status,
                    allDay: event.allDay,
                    repeating: {
                        freq: event.recurringSettings.frequency,
                        byDay: daysArray,
                        byMonth: [start.getMonth() + 1],
                        bySetPos: -workdays,
                        count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
                        interval: event.recurringSettings.interval,
                        until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
                    },
                    timezone: event.timezone,
                    floating: event.floating
                });
            }
        }
        // get exclusion data
        var exclusionDates = [];
        var holidayCountries = [];
        for (var _i = 0, _a = event.recurringSettings.exclusions; _i < _a.length; _i++) {
            var exclusion = _a[_i];
            if (exclusion.type === 'date') {
                exclusionDates.push(new Date(exclusion.date));
            }
            else if (exclusion.type === 'holidays') {
                holidayCountries.push({
                    country: exclusion.holiday_countries,
                    state: exclusion.holiday_states,
                    region: exclusion.holiday_regions
                });
            }
        }
        this.collisions = [];
        // write collisions to excluded dates
        for (var _b = 0, events_1 = events; _b < events_1.length; _b++) {
            var ev = events_1[_b];
            var repData = ev.repeating();
            var iCalEventData = ev.toJSON();
            if (iCalEventData.repeating !== undefined) {
                var collisionDetector = new __WEBPACK_IMPORTED_MODULE_2__DatesAndCollisions_CollisionDetector__["a" /* CollisionDetector */](holidayCountries, exclusionDates, this.StorageService.settings.language);
                var cols = collisionDetector.getCollisions(iCalEventData);
                if (this.collisions.length === 0) {
                    this.collisions = cols;
                }
                else {
                    this.collisions.concat(cols);
                }
                var exDates = new Array();
                for (var _c = 0, cols_1 = cols; _c < cols_1.length; _c++) {
                    var col = cols_1[_c];
                    exDates.push(col.date);
                }
                repData.exclude = exDates;
                ev.repeating(repData);
            }
        }
        var _loop_1 = function (i) {
            event.alarms.forEach(function (val) {
                if (val.repeat > 1) {
                    events[i].createAlarm({
                        type: val.type,
                        trigger: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__(start).clone().subtract(val.triggerDelay, val.triggerUnit).toDate(),
                        repeat: val.repeat,
                        interval: val.interval > 0 ? (val.interval * 60) : 1,
                        description: val.description,
                    });
                }
                else {
                    events[i].createAlarm({
                        type: val.type,
                        trigger: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__(start).clone().subtract(val.triggerDelay, val.triggerUnit).toDate(),
                        description: val.description,
                    });
                }
            });
        };
        // add alarm to all events
        for (var i = 0; i < events.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * gets the collision array
     *  @returns collision
     */
    AppointmentsService.prototype.getCollisions = function () {
        return this.collisions;
    };
    AppointmentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */]) === "function" && _a || Object])
    ], AppointmentsService);
    return AppointmentsService;
    var _a;
}());

//# sourceMappingURL=appointments.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointments_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file loads the required components and services
 * as well as the Angular dependencies and environment configuration
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */






/** A class used to manage multiple appointments */
var CreatorComponent = (function () {
    /** constructs a CreatorComponent */
    function CreatorComponent(fb, appointmentsService, translate, storage) {
        this.fb = fb;
        this.appointmentsService = appointmentsService;
        this.translate = translate;
        this.storage = storage;
        this.appointments = [];
        this.visible = [true];
        this.collisions = [];
        this.timeZoneNames = __WEBPACK_IMPORTED_MODULE_3_moment_timezone__["tz"].names();
    }
    /** gets all saved appointments */
    CreatorComponent.prototype.getAppointments = function () {
        var _this = this;
        return this.appointmentsService.getAppointments().then(function (appointments) {
            _this.appointments = appointments;
            if (_this.appointments.length < 1) {
                _this.addAppointment();
            }
        });
    };
    CreatorComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    /** generates and saves a iCal file */
    CreatorComponent.prototype.generateAndSaveICAL = function () {
        // check for validity of inputs
        for (var _i = 0, _a = this.appointmentsService.events; _i < _a.length; _i++) {
            var appointment = _a[_i];
            for (var _b = 0, _c = appointment.valid; _b < _c.length; _b++) {
                var valid = _c[_b];
                if (!valid) {
                    alert(this.translate.instant('INVALID INPUTS'));
                    return;
                }
            }
        }
        this.storage.saveText(this.appointmentsService.getICalString().toString());
        this.collisions = this.appointmentsService.getCollisions();
    };
    /** adds an appointment form */
    CreatorComponent.prototype.addAppointment = function () {
        this.appointmentsService.addAppointment(null);
        this.visible[this.visible.length] = true;
    };
    /**
     * removes an appointment form
     * @param pos the position in the appointments array
     */
    CreatorComponent.prototype.removeAppointment = function (appointment, pos) {
        this.appointmentsService.removeAppointment(appointment);
        this.visible.splice(pos, 1);
    };
    CreatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-creator',
            template: __webpack_require__(573),
            styles: [__webpack_require__(546)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__appointments_service__["a" /* AppointmentsService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__appointments_service__["a" /* AppointmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appointments_service__["a" /* AppointmentsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
    ], CreatorComponent);
    return CreatorComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=creator.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(121);
/**
 * This file contains the legal notice page required
 * to show the hoster of the page and other legal information
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component used by Angular to find the corresponding HTML page
 * and to display the correct information
 */
var LegalComponent = (function () {
    function LegalComponent(http) {
        this.http = http;
        this.content = "<h1>Legal notice</h1>\n    This is the default legal notice message.\n    To add your own, please edit the 'content' variable in static/main.bundle.js!";
    }
    LegalComponent.prototype.ngOnInit = function () {
    };
    LegalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-impress',
            template: __webpack_require__(574),
            styles: [__webpack_require__(547)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LegalComponent);
    return LegalComponent;
    var _a;
}());

//# sourceMappingURL=legal.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(22);
/**
 * This file contains the about page to show the information of
 * the developers and about duely
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component used by Angular to find the corresponding HTML page
 * and to display the correct information
 */
var NotFoundComponent = (function () {
    function NotFoundComponent(translate) {
        this.translate = translate;
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-not-found',
            template: __webpack_require__(575),
            styles: [__webpack_require__(548)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
    ], NotFoundComponent);
    return NotFoundComponent;
    var _a;
}());

//# sourceMappingURL=notFound.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_holidays__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_holidays___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_holidays__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file defines the settings logic.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */







/**
 * Handles the loading and saving of the settings.
 * Additional it refreshes the selectboxes if needed.
 */
var SettingsComponent = (function () {
    /** contructs the settings and sets defaults  */
    function SettingsComponent(fb, router, storage, translate) {
        this.fb = fb;
        this.router = router;
        this.storage = storage;
        this.translate = translate;
        this.hd = new __WEBPACK_IMPORTED_MODULE_1_date_holidays__();
        this.timeZoneNames = __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["tz"].names();
    }
    /** creates fthe form */
    SettingsComponent.prototype.ngOnInit = function () {
        this.countries = this.getCountries();
        this.states = [];
        this.regions = [];
        this.statesVisible = false;
        this.regionsVisible = false;
        this.createForm();
        this.showStates();
        this.showRegions();
    };
    /**
     * This Method fills all fields in the settings form with standart values or loaded values.
     */
    SettingsComponent.prototype.createForm = function () {
        this.settingsForm = this.fb.group({
            location: this.fb.group({
                location_countries: this.storage.settings.country,
                location_states: this.storage.settings.state,
                location_regions: this.storage.settings.region
            }),
            timezone: this.storage.settings.timeZone,
            language: this.storage.settings.language,
            color: this.storage.settings.color,
            debug: this.storage.settings.debug,
        });
    };
    /** gets the language stringe
      * @return gives out the language
      */
    SettingsComponent.prototype.getFullLanguage = function (lang) {
        if (lang === 'de') {
            return 'Deutsch';
        }
        return 'English';
    };
    /**
     * used to translate values of the holiday database to an array
     * @return translatet array
     */
    SettingsComponent.prototype.objectToArray = function (obj) {
        var result = Object.keys(obj).map(function (e) {
            return [e, obj[e]];
        });
        return result;
    };
    /**
     * returns all countries of the holiday database as an array
     * @return all countries of the holiday database as an array
     */
    SettingsComponent.prototype.getCountries = function () {
        return this.objectToArray(this.hd.getCountries());
    };
    /**
     * returns all states of the holiday database as an array
     * @return all states of the holiday database as an array
     */
    SettingsComponent.prototype.getStates = function (country) {
        var states = this.hd.getStates(country);
        if (states == null || states === undefined) {
            return undefined;
        }
        return this.objectToArray(states);
    };
    /**
     * returns all regions of the holiday database as an array
     * @return all regions of the holiday database as an array
     */
    SettingsComponent.prototype.getRegions = function (country, state) {
        var regions = this.hd.getRegions(country, state);
        if (regions == null || regions === undefined) {
            return undefined;
        }
        return this.objectToArray(regions);
    };
    /**
     * sets the value for a selectbox filled with all states and grants visibility
     * @param the position of the exclusionsform (see html)
     */
    SettingsComponent.prototype.showStates = function () {
        var location = this.settingsForm.controls['location'];
        var country = location.controls['location_countries'].value;
        if (country === undefined || country === '') {
            return;
        }
        this.states = this.getStates(country);
        if (this.states !== undefined) {
            this.statesVisible = true;
            this.regionsVisible = false;
        }
        else {
            this.statesVisible = false;
            this.regionsVisible = false;
            location.controls['location_states'].setValue('');
        }
    };
    /**
     * sets the value for a selectbox filled with all regions and grants visibility
     * @param the position of the exclusionsform (see html)
     */
    SettingsComponent.prototype.showRegions = function () {
        var location = this.settingsForm.controls['location'];
        var country = location.controls['location_countries'].value;
        var state = location.controls['location_states'].value;
        if (country === undefined || state === undefined
            || country === '' || state === '') {
            return;
        }
        this.regions = this.getRegions(country, state);
        if (this.regions !== undefined) {
            this.statesVisible = true;
            this.regionsVisible = true;
        }
        else {
            this.statesVisible = true;
            this.regionsVisible = false;
            location.controls['location_regions'].setValue('');
        }
    };
    /**
     * this method is used for saving and returning back to the basepage
     */
    SettingsComponent.prototype.save = function () {
        var location = this.settingsForm.controls['location'];
        var settings = {
            color: this.settingsForm.controls['color'].value,
            language: this.settingsForm.controls['language'].value,
            timeZone: this.settingsForm.controls['timezone'].value,
            country: location.controls['location_countries'].value,
            state: location.controls['location_states'].value,
            region: location.controls['location_regions'].value,
            debug: this.settingsForm.controls['debug'].value,
        };
        this.storage.saveSettings(settings);
        this.translate.use(settings.language);
        this.goHome();
    };
    /**
     * this method is used and returning back to the basepage without saving
     */
    SettingsComponent.prototype.cancel = function () {
        if (this.storage.settings === null) {
            this.storage.saveSettings({});
        }
        this.goHome();
    };
    /**
     * this method sets the router-navigation to the basepage
     */
    SettingsComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-settings',
            template: __webpack_require__(576),
            styles: [__webpack_require__(549)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__storage_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/**
 * This file contains a mockup of the storage solutions
 * It will be replaced with the real service
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This service offers methods to store data
 * @since 0.4.0
 */
var StorageService = (function () {
    function StorageService() {
        // actual settings:
        this.settings = {
            color: 'red',
            country: '',
            state: '',
            region: '',
            timeZone: 'floating',
            language: 'en',
            debug: 'DEACTIVATED'
        };
        this.settingsLoaded = false;
        this.loadSettings();
    }
    /** gets color string from form
        @eturns color  */
    StorageService.prototype.getColor = function () {
        return this.settings.color;
    };
    /** @returns debug activated if activated */
    StorageService.prototype.getDebug = function () {
        return this.settings.debug === 'ACTIVATED';
    };
    /** loads the saved settings */
    StorageService.prototype.loadSettings = function () {
        // overwrite settings if can be found
        var settingsstr = localStorage.getItem('settings');
        if (settingsstr) {
            this.settingsLoaded = true;
            var settings = JSON.parse(settingsstr);
            if (settings.hasOwnProperty('color')) {
                this.settings.color = settings.color;
            }
            if (settings.hasOwnProperty('language')) {
                this.settings.language = settings.language;
            }
            if (settings.hasOwnProperty('timeZone')) {
                this.settings.timeZone = settings.timeZone;
            }
            if (settings.hasOwnProperty('country')) {
                this.settings.country = settings.country;
            }
            if (settings.hasOwnProperty('region')) {
                this.settings.region = settings.region;
            }
            if (settings.hasOwnProperty('state')) {
                this.settings.state = settings.state;
            }
            if (settings.hasOwnProperty('debug')) {
                this.settings.debug = settings.debug;
            }
        }
    };
    /** get settings and saved them in JSON */
    StorageService.prototype.saveSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
        this.loadSettings();
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);
/**
 * This file loads the main application module and
 * binds it to the website
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */




/**
 * enable production mode
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
    if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isElectron && 'serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionDetector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Recurrence_DailyRecurrencePattern__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Recurrence_WeeklyRecurrencePattern__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Recurrence_MonthlyRecurrencePattern__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Recurrence_YearlyRecurrencePattern__ = __webpack_require__(341);




/**
 * The class CollisionDetector.
 */
var CollisionDetector = (function () {
    /**
     * Constructor of class CollisionDetector
     * @param locations         The locations to be considered when checking for collisions with public holidays.
     * @param userExclusions    The dates that are excluded by the user.
     */
    function CollisionDetector(locations, userExclusions, language) {
        this.locations = locations;
        this.userExclusions = userExclusions;
        this.language = language;
    }
    /**
     * Get the collisions with a given event.
     * @param eventData     The data of an iCal event.
     * @return              The collisions.
     */
    CollisionDetector.prototype.getCollisions = function (eventData) {
        var collisions;
        if (eventData.repeating !== undefined) {
            switch (eventData.repeating.freq) {
                case 'DAILY': {
                    var drp = new __WEBPACK_IMPORTED_MODULE_0__Recurrence_DailyRecurrencePattern__["a" /* DailyRecurrencePattern */](this.locations, this.userExclusions, this.language);
                    collisions = drp.getCollisions(eventData);
                    break;
                }
                case 'WEEKLY': {
                    var wrp = new __WEBPACK_IMPORTED_MODULE_1__Recurrence_WeeklyRecurrencePattern__["a" /* WeeklyRecurrencePattern */](this.locations, this.userExclusions, this.language);
                    collisions = wrp.getCollisions(eventData);
                    break;
                }
                case 'MONTHLY': {
                    var mrp = new __WEBPACK_IMPORTED_MODULE_2__Recurrence_MonthlyRecurrencePattern__["a" /* MonthlyRecurrencePattern */](this.locations, this.userExclusions, this.language);
                    collisions = mrp.getCollisions(eventData);
                    break;
                }
                case 'YEARLY': {
                    var yrp = new __WEBPACK_IMPORTED_MODULE_3__Recurrence_YearlyRecurrencePattern__["a" /* YearlyRecurrencePattern */](this.locations, this.userExclusions, this.language);
                    collisions = yrp.getCollisions(eventData);
                    break;
                }
            }
        }
        return collisions;
    };
    return CollisionDetector;
}());

//# sourceMappingURL=CollisionDetector.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyRecurrencePattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The class DailyRecurrencePattern.
 */
var DailyRecurrencePattern = (function (_super) {
    __extends(DailyRecurrencePattern, _super);
    function DailyRecurrencePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if a given date matches the recurrence pattern.
     *
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    DailyRecurrencePattern.prototype.isMatch = function (eventData, date) {
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(date).isSame(eventData.start, 'days') === true) {
            return { match: true, break: false };
        }
        else {
            var diff = this.daysBetween(eventData.start, date);
            if (diff % eventData.repeating.interval === 0) {
                if (eventData.repeating.count !== undefined) {
                    if (diff / eventData.repeating.interval > eventData.repeating.count) {
                        return { match: false, break: true };
                    }
                    else {
                        return { match: true, break: false };
                    }
                }
                else {
                    return { match: true, break: false };
                }
            }
            else {
                return { match: false, break: false };
            }
        }
    };
    return DailyRecurrencePattern;
}(__WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__["a" /* RecurrencePattern */]));

//# sourceMappingURL=DailyRecurrencePattern.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyRecurrencePattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The class MonthlyRecurrencePattern.
 */
var MonthlyRecurrencePattern = (function (_super) {
    __extends(MonthlyRecurrencePattern, _super);
    function MonthlyRecurrencePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if a given date matches the recurrence pattern.
     *
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    MonthlyRecurrencePattern.prototype.isMatch = function (eventData, date) {
        if (eventData.repeating.byMonthDay !== undefined) {
            if (eventData.repeating.byMonthDay[0] === -1) {
                return this.lastDayOfMonth(eventData, date);
            }
        }
        else if (eventData.repeating.bySetPos !== undefined) {
            return this.bySetPos(eventData, date);
        }
        else if (eventData.repeating.byDay !== undefined) {
            return this.byDay(eventData, date);
        }
        else {
            return this.monthly(eventData, date);
        }
    };
    /** Check if a given last day of the Month is last days of the month
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    MonthlyRecurrencePattern.prototype.lastDayOfMonth = function (eventData, date) {
        if (+__WEBPACK_IMPORTED_MODULE_0_moment__(date).endOf('month').toDate().setHours(0, 0, 0, 0) === +__WEBPACK_IMPORTED_MODULE_0_moment__(date).toDate().setHours(0, 0, 0, 0)) {
            return this.isMatchOfInterval(eventData, date);
        }
        return { match: false, break: false };
    };
    /** Check which number the a given day has in a week
      * @return true, true if the intervall is right
      */
    MonthlyRecurrencePattern.prototype.byDay = function (eventData, date) {
        var byDayString = eventData.repeating.byDay[0].toString();
        var dayPart = byDayString.slice(-2);
        var index = byDayString.length - 2;
        var factorPart = byDayString.slice(0, index);
        var factor = Number(factorPart) === 0 ? 1 : Number(factorPart);
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(date).isoWeekday() === this.getIsoWeekday(dayPart)) {
            var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
            var counter = 0;
            var d = date;
            if (factor >= 0) {
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).subtract(1, 'week').toDate();
                    counter++;
                }
            }
            else {
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).add(1, 'week').toDate();
                    counter--;
                }
            }
            if (counter === factor) {
                return this.isMatchOfInterval(eventData, date);
            }
        }
        return { match: false, break: false };
    };
    /** Check  a given last day of the Month of it number from the last day on
        * @return true, true if the intervall is right
        */
    MonthlyRecurrencePattern.prototype.bySetPos = function (eventData, date) {
        if (this.isIn(eventData.repeating.byDay, date) === true) {
            var counter = 0;
            if (eventData.repeating.bySetPos >= 0) {
                var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
                var d = date;
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {
                        counter++;
                    }
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).subtract(1, 'day').toDate();
                }
            }
            else {
                var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
                var d = date;
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {
                        counter--;
                    }
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).add(1, 'day').toDate();
                }
            }
            if (counter === eventData.repeating.bySetPos) {
                return this.isMatchOfInterval(eventData, date);
            }
        }
        return { match: false, break: false };
    };
    /** Check if a given date intervall is the event date intervall
      * @return true, true if the intervall is right
      */
    MonthlyRecurrencePattern.prototype.monthly = function (eventData, date) {
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(date).date() === __WEBPACK_IMPORTED_MODULE_0_moment__(eventData.start).date()) {
            return this.isMatchOfInterval(eventData, date);
        }
        return { match: false, break: false };
    };
    /** Check if a given Intervall is identical
      * @return true, true if the intervall is right
      * @return true, false
      * @return false, false
      * @return false , true
      */
    MonthlyRecurrencePattern.prototype.isMatchOfInterval = function (eventData, date) {
        var diff = this.monthsBetween(eventData.start, date);
        if (diff % eventData.repeating.interval === 0) {
            if (eventData.repeating.count !== undefined) {
                if (diff / eventData.repeating.interval > eventData.repeating.count) {
                    return { match: false, break: true };
                }
                else {
                    return { match: true, break: false };
                }
            }
            else {
                return { match: true, break: false };
            }
        }
        else {
            return { match: false, break: false };
        }
    };
    /** Is given start and end date
      * @return moment of start, and the month
      */
    MonthlyRecurrencePattern.prototype.monthsBetween = function (start, end) {
        var endMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(end);
        var startMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(start).startOf('month');
        return endMoment.diff(startMoment, 'months');
    };
    return MonthlyRecurrencePattern;
}(__WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__["a" /* RecurrencePattern */]));

//# sourceMappingURL=MonthlyRecurrencePattern.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyRecurrencePattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The class WeeklyRecurrencePattern.
 */
var WeeklyRecurrencePattern = (function (_super) {
    __extends(WeeklyRecurrencePattern, _super);
    function WeeklyRecurrencePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeeklyRecurrencePattern.prototype.isMatch = function (eventData, date) {
        var weekdays = eventData.repeating.byDay;
        if (this.isIn(eventData.repeating.byDay, date) === true) {
            var diff = this.weeksBetween(eventData.start, date);
            if (diff % eventData.repeating.interval === 0) {
                if (eventData.repeating.count !== undefined) {
                    if (diff / eventData.repeating.interval > eventData.repeating.count) {
                        return { match: false, break: true };
                    }
                    else {
                        return { match: true, break: false };
                    }
                }
                else {
                    return { match: true, break: false };
                }
            }
            else {
                return { match: false, break: false };
            }
        }
        return { match: false, break: false };
    };
    WeeklyRecurrencePattern.prototype.weeksBetween = function (start, end) {
        var endMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(end);
        var startMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(start).startOf('week');
        return endMoment.diff(startMoment, 'weeks');
    };
    return WeeklyRecurrencePattern;
}(__WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__["a" /* RecurrencePattern */]));

//# sourceMappingURL=WeeklyRecurrencePattern.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyRecurrencePattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The class YearlyRecurrencePattern.
 */
var YearlyRecurrencePattern = (function (_super) {
    __extends(YearlyRecurrencePattern, _super);
    function YearlyRecurrencePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if a given date matches the recurrence pattern.
     *
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    YearlyRecurrencePattern.prototype.isMatch = function (eventData, date) {
        if (eventData.repeating.byMonthDay !== undefined) {
            if (eventData.repeating.byMonthDay[0] === -1) {
                return this.lastDayOfMonth(eventData, date);
            }
        }
        else if (eventData.repeating.bySetPos !== undefined) {
            return this.bySetPos(eventData, date);
        }
        else if (eventData.repeating.byDay !== undefined) {
            return this.byDay(eventData, date);
        }
        else {
            return this.yearly(eventData, date);
        }
    };
    /** Check if a given last day of the Year is last days of the year
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    YearlyRecurrencePattern.prototype.lastDayOfMonth = function (eventData, date) {
        if (+__WEBPACK_IMPORTED_MODULE_0_moment__(date).endOf('month').toDate().setHours(0, 0, 0, 0) === +__WEBPACK_IMPORTED_MODULE_0_moment__(date).toDate().setHours(0, 0, 0, 0)) {
            return this.isMatchOfInterval(eventData, date);
        }
        return { match: false, break: false };
    };
    /** Check if a day is certain day of the year
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    YearlyRecurrencePattern.prototype.byDay = function (eventData, date) {
        var byDayString = eventData.repeating.byDay[0].toString();
        var dayPart = byDayString.slice(-2);
        var index = byDayString.length - 2;
        var factorPart = byDayString.slice(0, index);
        var factor = Number(factorPart) === 0 ? 1 : Number(factorPart);
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(date).isoWeekday() === this.getIsoWeekday(dayPart)) {
            var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
            var counter = 0;
            var d = date;
            if (factor >= 0) {
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).subtract(1, 'week').toDate();
                    counter++;
                }
            }
            else {
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).add(1, 'week').toDate();
                    counter--;
                }
            }
            if (counter === factor) {
                return this.isMatchOfInterval(eventData, date);
            }
        }
        return { match: false, break: false };
    };
    /** Check if a day has certain postion in the year
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    YearlyRecurrencePattern.prototype.bySetPos = function (eventData, date) {
        if (this.isIn(eventData.repeating.byDay, date) === true) {
            var counter = 0;
            if (eventData.repeating.bySetPos >= 0) {
                var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
                var d = date;
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {
                        counter++;
                    }
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).subtract(1, 'day').toDate();
                }
            }
            else {
                var month = __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month');
                var d = date;
                while (__WEBPACK_IMPORTED_MODULE_0_moment__(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {
                        counter--;
                    }
                    d = __WEBPACK_IMPORTED_MODULE_0_moment__(d).add(1, 'day').toDate();
                }
            }
            if (counter === eventData.repeating.bySetPos) {
                return this.isMatchOfInterval(eventData, date);
            }
        }
        return { match: false, break: false };
    };
    /** Check if the intervall is the calculated yearly
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    YearlyRecurrencePattern.prototype.yearly = function (eventData, date) {
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(date).date() === __WEBPACK_IMPORTED_MODULE_0_moment__(eventData.start).date()) {
            return this.isMatchOfInterval(eventData, date);
        }
        return { match: false, break: false };
    };
    /** Check if the intervall is the calculated intervall
      * @param eventData     The data of the event.
      * @param date          The date to check.
      */
    YearlyRecurrencePattern.prototype.isMatchOfInterval = function (eventData, date) {
        var diff = this.yearsBetween(eventData.start, date);
        if (__WEBPACK_IMPORTED_MODULE_0_moment__(eventData.start).get('month') === __WEBPACK_IMPORTED_MODULE_0_moment__(date).get('month')) {
            if (diff % eventData.repeating.interval === 0) {
                if (eventData.repeating.count !== undefined) {
                    if (diff / eventData.repeating.interval > eventData.repeating.count) {
                        return { match: false, break: true };
                    }
                    else {
                        return { match: true, break: false };
                    }
                }
                else {
                    return { match: true, break: false };
                }
            }
            else {
                return { match: false, break: false };
            }
        }
        else {
            return { match: false, break: false };
        }
    };
    /** Count the years between the start and end date
      * @param start: Date     start date
      * @param end: Date        end date.
      * @return
      */
    YearlyRecurrencePattern.prototype.yearsBetween = function (start, end) {
        var endMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(end);
        var startMoment = __WEBPACK_IMPORTED_MODULE_0_moment__(start).startOf('year');
        return endMoment.diff(startMoment, 'year');
    };
    return YearlyRecurrencePattern;
}(__WEBPACK_IMPORTED_MODULE_1__RecurrencePattern__["a" /* RecurrencePattern */]));

//# sourceMappingURL=YearlyRecurrencePattern.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creator_creator_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__legal_legal_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notFound_notFound_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auto_redirect_guard__ = __webpack_require__(123);
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'legal',
        component: __WEBPACK_IMPORTED_MODULE_4__legal_legal_component__["a" /* LegalComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__creator_creator_component__["a" /* CreatorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auto_redirect_guard__["a" /* AutoRedirectGuard */]],
        pathMatch: 'full'
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_6__notFound_notFound_component__["a" /* NotFoundComponent */]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
/**
 * @version 0.0.1
 * Routing module delegates url changes to modules
 * Assigned routes will be forwarded to main module
 */
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/**
 * This file handles the input form and the genral user interface
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @version 0.4.0
 * @since 0.2.0
 * Main component that handles the application shell
 */
var AppComponent = (function () {
    /**
     * Creates the component and imports required dependencies
     * @param storage The environment specific storage service
     */
    function AppComponent(storage, translate) {
        this.storage = storage;
        this.translate = translate;
        translate.addLangs(['de', 'en']);
        translate.setDefaultLang('en');
        translate.use(storage.settings.language);
    }
    /**
     * Adds another event form to the collection
     */
    AppComponent.prototype.addEvent = function () { };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-root',
            template: __webpack_require__(568),
            styles: [__webpack_require__(541)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__storage_storage_factory__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__legal_legal_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__creator_creator_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notFound_notFound_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__creator_appointment_form_appointment_form_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__creator_appointment_form_advanced_settings_advanced_settings_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__creator_appointment_form_recurring_settings_recurring_settings_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__creator_appointment_form_alarm_settings_alarm_settings_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auto_redirect_guard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auto_resize_directive__ = __webpack_require__(345);
/**
 * This file loads the required components and services
 * as well as the Angular dependencies and environment configuration
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























/**
 * @version 0.4.0
 * @since 0.1.0
 * used to load components and bootstrap the application
 * generated and maintained using Angular CLI
 */
// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__legal_legal_component__["a" /* LegalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__creator_creator_component__["a" /* CreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__creator_appointment_form_appointment_form_component__["a" /* AppointmentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_19__creator_appointment_form_advanced_settings_advanced_settings_component__["a" /* AdvancedSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__creator_appointment_form_recurring_settings_recurring_settings_component__["a" /* RecurringSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__creator_appointment_form_alarm_settings_alarm_settings_component__["a" /* AlarmSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__notFound_notFound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_23__auto_resize_directive__["a" /* AutoResizeDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["a" /* DatePickerModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11__storage_storage_service__["a" /* StorageService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_12__storage_storage_factory__["a" /* selectStorageService */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].isElectron ? __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* HashLocationStrategy */] : __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* PathLocationStrategy */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* APP_BASE_HREF */],
                    useValue: __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].isElectron ? '' : '/'
                },
                __WEBPACK_IMPORTED_MODULE_22__auto_redirect_guard__["a" /* AutoRedirectGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoResizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *This file handles the form layout if the window is resized
*/

var AutoResizeDirective = (function () {
    function AutoResizeDirective(el) {
        this.el = el;
    }
    AutoResizeDirective.prototype.onkeyup = function () {
        this.resize();
    };
    /**
     *the resize method sets the scrollheight, padding at the top and at the bottom
    */
    AutoResizeDirective.prototype.resize = function () {
        var scrollHeight = this.el.nativeElement.scrollHeight;
        var paddingTop = this.el.nativeElement.style.paddingTop;
        var paddingBottom = this.el.nativeElement.style.paddingBottom;
        var newHeight = scrollHeight - (paddingTop + paddingBottom);
        this.el.nativeElement.style.height = newHeight + 'px';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AutoResizeDirective.prototype, "onkeyup", null);
    AutoResizeDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
            selector: '[racAutoResize]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
    ], AutoResizeDirective);
    return AutoResizeDirective;
    var _a;
}());

//# sourceMappingURL=auto-resize.directive.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__appointment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file contains the Advanced Settings.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */







/**
 * Component to handle all settings contained in 'other' section.
 */
var AdvancedSettingsComponent = (function () {
    /** constructs a AdvancedSettingsComponent */
    function AdvancedSettingsComponent(fb, storage, translate) {
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.hideSettings = true;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.timeZoneNames = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__["tz"].names();
    }
    /** creates settings form */
    AdvancedSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.status = this.appointment.status;
        this.timezone = this.storage.settings.timeZone;
        this.appointment.timezone = this.timezone === 'floating' ? undefined : this.timezone;
        this.appointment.floating = this.timezone === 'floating' ? true : undefined;
        this.subscription.add(this.advancedForm.valueChanges.subscribe(function (data) { return _this.endValidation(data); }));
    };
    /** checks is timezone is changend if not its set floating, gets status change */
    AdvancedSettingsComponent.prototype.ngOnChanges = function () {
        this.timezone = this.appointment.floating ? 'floating' : this.appointment.timezone;
        this.status = this.appointment.status;
    };
    /** gets the data, checks if the form is valid */
    AdvancedSettingsComponent.prototype.endValidation = function (data) {
        this.appointment.valid[3] = this.advancedForm.valid;
    };
    /** sets timezone and status if changed */
    AdvancedSettingsComponent.prototype.updateAppointment = function () {
        this.appointment.status = this.status;
        this.appointment.floating = this.timezone === 'floating';
        this.appointment.timezone = this.timezone === 'floating' ? undefined : this.timezone;
    };
    /** creates the settings form */
    AdvancedSettingsComponent.prototype.createForm = function () {
        this.advancedForm = this.fb.group({
            status: this.status,
            timezone: this.timezone
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__appointment__["Appointment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__appointment__["Appointment"]) === "function" && _a || Object)
    ], AdvancedSettingsComponent.prototype, "appointment", void 0);
    AdvancedSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-advanced-settings',
            template: __webpack_require__(569),
            styles: [__webpack_require__(542)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], AdvancedSettingsComponent);
    return AdvancedSettingsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=advanced-settings.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__appointment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file contains a service, which handles multiple alarms.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */






/**
 * A service handling multiple alarms.
 */
var AlarmSettingsComponent = (function () {
    /** constructs a AdvancedSettingsComponent */
    function AlarmSettingsComponent(fb, storage, translate) {
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.subscription = [];
        this.createForm();
    }
    /** when alram values changes it validates it */
    AlarmSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription[0] = (this.alarmsForm.valueChanges.subscribe(function (data) { return _this.endValidation(data); }));
    };
    /** checks if alarm is in the object, and if not adds it */
    AlarmSettingsComponent.prototype.ngOnChanges = function () {
        if (!this.appointment.hasOwnProperty('alarms')) {
            this.appointment.alarms = [];
        }
        this.alarms = this.appointment.alarms;
        this.setAlarms(this.alarms);
    };
    /** creates the alarm form */
    AlarmSettingsComponent.prototype.createForm = function () {
        this.alarmsForm = this.fb.group({
            alarms: this.fb.array([])
        });
    };
    /** destroys the subcribtion */
    AlarmSettingsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscription; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /** gets alarm data and validates it */
    AlarmSettingsComponent.prototype.endValidation = function (data) {
        this.appointment.valid[2] = this.alarmsForm.valid;
    };
    /** creates alarm */
    AlarmSettingsComponent.prototype.addAlarm = function () {
        var newAlarm = {
            type: 'display',
            triggerDelay: 10,
            triggerUnit: 'MINUTES',
            repeat: 1,
            intervalMinutes: 5
        };
        this.recalculateTrigger(newAlarm);
        this.recalculateInterval(newAlarm);
        this.alarms.push(newAlarm);
        this.setAlarms(this.alarms);
    };
    /** removes one alarm */
    AlarmSettingsComponent.prototype.removeAlarm = function (alarm) {
        var index = this.alarms.indexOf(alarm);
        if (index > -1) {
            this.alarms.splice(index, 1);
        }
    };
    /** gets alarm data and creates an array */
    AlarmSettingsComponent.prototype.setAlarms = function (alarms) {
        var _this = this;
        var alarmFGs = alarms.map(function (alarm) { return _this.fb.group({
            type: alarm.type,
            triggerDelay: [
                alarm.triggerDelay, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ]
            ],
            triggerUnit: alarm.triggerUnit,
            repeat: [
                alarm.repeat, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ]
            ],
            intervalMinutes: alarm.interval / 60,
            description: alarm.description,
        }); });
        var alarmFormArray = this.fb.array(alarmFGs);
        var _loop_1 = function (i) {
            var xy = alarmFormArray.at(i);
            this_1.subscription[i + 1] = (xy.controls['repeat'].valueChanges.subscribe(function () {
                if (xy.controls['repeat'].value > 1) {
                    xy.controls['intervalMinutes'].setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1)]);
                }
                else {
                    xy.controls['intervalMinutes'].setValidators([]);
                }
            }));
        };
        var this_1 = this;
        for (var i = 0; i < alarmFormArray.length; i++) {
            _loop_1(i);
        }
        this.alarmsForm.setControl('alarms', alarmFormArray);
    };
    /** gets the alarm distanze and recalculates it as date */
    AlarmSettingsComponent.prototype.recalculateTrigger = function (alarm) {
        var start = new __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.appointment.start);
        alarm.trigger = start.subtract(alarm.triggerDelay, alarm.triggerUnit).toDate();
    };
    /** get alarm intervall and caculates it to minutes */
    AlarmSettingsComponent.prototype.recalculateInterval = function (alarm) {
        alarm.interval = alarm.intervalMinutes * 60;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__appointment__["Appointment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__appointment__["Appointment"]) === "function" && _a || Object)
    ], AlarmSettingsComponent.prototype, "appointment", void 0);
    AlarmSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'rac-alarm-settings',
            template: __webpack_require__(570),
            styles: [__webpack_require__(543)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__storage_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], AlarmSettingsComponent);
    return AlarmSettingsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=alarm-settings.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recurring_settings_recurring_settings_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_storage_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appointment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appointment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__appointment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appointments_service__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This file describes the logic behind the Appointment forms.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */










/**
 * The appointmentforms will be validated, created and initialized.
 */
var AppointmentFormComponent = (function () {
    /** constructs an appointment form filled with standart values */
    function AppointmentFormComponent(fb, translate, appointments, storage) {
        this.fb = fb;
        this.translate = translate;
        this.appointments = appointments;
        this.storage = storage;
        /** the date format used in the date forms */
        this.datePattern = /\d{4}-\d{2}-\d{2}/;
        /** the time format used in the time forms */
        this.timePattern = /((0|1)\d|2[0-3]):[0-5]\d/;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this.advancedValid = false;
        this.alarmValid = false;
        this.recurringValid = false;
        this.datepickerTexts = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["c" /* DatePickerTexts */]();
        this.createForm();
    }
    /**
     * when someone is typing it starts the validation
     */
    AppointmentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startoptions = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["b" /* DatePickerOptions */]({ initialDate: this.appointment.start, color: this.storage.getColor() });
        this.endoptions = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["b" /* DatePickerOptions */]({ initialDate: this.appointment.end, color: this.storage.getColor() });
        this.translate.get('SELECT YEAR').subscribe(function (result) {
            _this.datepickerTexts.selectYearText = result;
        });
        this.translate.get('CLEAR').subscribe(function (result) {
            _this.datepickerTexts.clearText = result;
        });
        this.translate.get('TODAY').subscribe(function (result) {
            _this.datepickerTexts.todayText = result;
        });
        this.translate.get(['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
            'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']).subscribe(function (result) {
            _this.datepickerTexts.monthName = Object.keys(result).map(function (key) { return result[key]; });
            _this.datepickerTexts = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["c" /* DatePickerTexts */](_this.datepickerTexts); // to fire ngOnChanges in DatePicker
        });
        this.subscription.add(this.appointmentForm.valueChanges.subscribe(function (data) { return _this.endValidation(data); }));
    };
    /**
     * destroys subcribtion
     */
    AppointmentFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * gets typed data, validats it with form properties
     */
    AppointmentFormComponent.prototype.endValidation = function (data) {
        this.appointment.valid[0] = this.appointmentForm.valid;
    };
    AppointmentFormComponent.prototype.validateStartTime = function () {
        var start = this.appointmentForm.controls['start'];
        // if (!start.controls['time'].valid) {
        //  this.appointmentForm.get('start.time').setValue(moment.utc(this.appointment.start).format('HH:mm'));
        // }
    };
    AppointmentFormComponent.prototype.validateStartDate = function () {
        var start = this.appointmentForm.controls['start'];
        // if (!start.controls['date'].valid) {
        //  this.appointmentForm.get('start.date').setValue(moment.utc(this.appointment.start).format('YYYY-MM-DD'));
        // }
    };
    AppointmentFormComponent.prototype.validateEndTime = function () {
        var end = this.appointmentForm.controls['end'];
        // if (!end.controls['time'].valid) {
        //  this.appointmentForm.get('end.time').setValue(moment.utc(this.appointment.end).format('HH:mm'));
        // }
    };
    AppointmentFormComponent.prototype.validateEndDate = function () {
        var end = this.appointmentForm.controls['end'];
        // if (!end.controls['date'].valid) {
        //  this.appointmentForm.get('end.date').setValue(moment.utc(this.appointment.end).format('YYYY-MM-DD'));
        // }
    };
    /** sets standart values to html forms */
    AppointmentFormComponent.prototype.createForm = function () {
        this.appointmentForm = this.fb.group({
            summary: [
                null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25)
                ]
            ],
            location: [
                null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(30)
                ]
            ],
            description: [
                null, []
            ],
            start: this.fb.group({
                date: [
                    null, []
                ],
                time: [
                    null, [
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(this.timePattern)
                    ]
                ]
            }),
            end: this.fb.group({
                date: [
                    null, []
                ],
                time: [
                    null, [
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(this.timePattern)
                    ]
                ]
            }),
            allDay: [],
        });
    };
    /** gets Month and year, gives out the numbers of days that given month has */
    AppointmentFormComponent.prototype.getDaysInMonth = function (month, year) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }
        else if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
                return 29;
            }
            else {
                return 28;
            }
        }
        else {
            return 31;
        }
    };
    /** changes EndDate if StartDate is changed */
    AppointmentFormComponent.prototype.startDateListener = function (event) {
        if (event !== undefined && this.appointment.start !== undefined) {
            var startDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
            var endDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
            var duration = endDate.diff(startDate);
            startDate.set({
                year: event.year,
                month: event.month - 1,
                date: event.day
            });
            this.appointment.start = startDate.toDate();
            this.appointment.end = startDate.clone().add(duration).toDate();
            var end = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"]().toDate();
            end.setFullYear(this.appointment.end.getFullYear(), this.appointment.end.getMonth() + 1, this.appointment.end.getDate());
            var format = end.getFullYear() + '-' + (((end.getMonth()) < 10) ? '0' : '')
                + (end.getMonth()) + '-' + (((end.getDate()) < 10) ? '0' : '') + end.getDate();
            this.enddate = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["d" /* DateModel */]({ day: end.getDate() + '', month: (end.getMonth()) + '', year: end.getFullYear() + '',
                formatted: format, momentObj: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](end) });
            this.recurring.updateRepeatsBy();
        }
    };
    /** gets enddate of of day, month , year and updates it, if it is befoe the start date */
    AppointmentFormComponent.prototype.endDateListener = function (event) {
        if (event !== undefined && this.appointment.end !== undefined) {
            this.appointment.end.setFullYear(event.year, event.month - 1, event.day);
            var appEnd = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
            var appStart = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
            if (appEnd.year() === appStart.year()
                && appEnd.month() === appStart.month()
                && appEnd.date() < appStart.date()) {
                var startDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
                var endDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
                startDate.set({
                    year: endDate.year(),
                    month: endDate.month(),
                    date: endDate.date()
                });
                this.appointment.start = startDate.toDate();
                this.startdate = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["d" /* DateModel */]({ day: startDate.date() + '', month: (startDate.month() + 1) + '', year: startDate.year() + '',
                    formatted: startDate.format('YYYY-MM-DD'), momentObj: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__(startDate) });
            }
            if (appEnd.toDate().valueOf() < appStart.toDate().valueOf()) {
                var startTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
                var endTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
                startTime.set({
                    hour: endTime.hour() >= 24 ? 23 : endTime.hour(),
                    minute: endTime.minute() >= 60 ? 59 : endTime.minute()
                });
                this.appointment.start = startTime.toDate();
                this.appointmentForm.get('start.time').setValue(startTime.format('HH:mm'));
            }
            if (this.appointment.hasOwnProperty('recurringSettings')) {
                if (this.appointment.end.valueOf() > this.appointment.recurringSettings.untilDate.valueOf()) {
                    this.appointment.recurringSettings.untilDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end).toDate(); // make a copy
                    var end = new __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
                    this.recurring.enddate = new __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["d" /* DateModel */]({ day: (end.date() + 1) + '', month: (end.month() + 1) + '', year: end.year() + '',
                        formatted: end.format('YYYY-MM-DD'), momentObj: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__(end) });
                }
            }
        }
    };
    /** if startdate changes updates recurring date */
    AppointmentFormComponent.prototype.onStartDateChange = function () {
        var startDateControl = this.appointmentForm.get('start.date');
        this.recurring.updateRepeatsBy();
    };
    /** if starttime changes updates redcurring time */
    AppointmentFormComponent.prototype.onStartTimeChange = function (value) {
        if (!value.match(/\d{2}:\d{2}/)) {
            return;
        }
        console.log(value);
        var startTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
        var endTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
        var diffHour = endTime.hour() - startTime.hour();
        var diffMinute = endTime.minute() - startTime.minute();
        var newDate = undefined;
        try {
            newDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](value, 'HH:mm');
        }
        catch (e) {
            newDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
        }
        if (!newDate.isValid()) {
            newDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
        }
        startTime.set({
            hour: newDate.hour() >= 24 ? 23 : newDate.hour(),
            minute: newDate.minute() >= 60 ? 59 : newDate.minute()
        });
        this.appointment.start = startTime.toDate();
        endTime.set({
            hour: (startTime.hour() + diffHour) >= 24 ? 23 : (startTime.hour() + diffHour),
            minute: (startTime.minute() + diffMinute) >= 60 ? 59 : (startTime.minute() + diffMinute)
        });
        // Update endTime to keep duration
        this.appointment.end = endTime.toDate();
        this.appointmentForm.get('end.time').setValue(endTime.format('HH:mm'));
    };
    /** changes nothing  */
    AppointmentFormComponent.prototype.onEndDateChange = function () {
        var endDateControl = this.appointmentForm.get('end.date');
        // dummy function, lost it's meaning
    };
    /** get end time , changes it if invalid */
    AppointmentFormComponent.prototype.onEndTimeChange = function (value) {
        if (!value.match(/\d{2}:\d{2}/)) {
            return;
        }
        var endTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end);
        var newDate = undefined;
        try {
            newDate = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](value, 'HH:mm');
        }
        catch (e) {
            newDate = this.appointment.end;
        }
        if (!newDate.isValid()) {
            newDate = this.appointment.end;
        }
        endTime.set({
            hour: newDate.hour() >= 24 ? 23 : newDate.hour(),
            minute: newDate.minute() >= 60 ? 59 : newDate.minute()
        });
        this.appointment.end = endTime.toDate();
        // Update startTime if end would be before start.
        if (this.appointment.end.valueOf() < this.appointment.start.valueOf()) {
            var startTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start);
            startTime.set({
                hour: endTime.hour() >= 24 ? 23 : endTime.hour(),
                minute: endTime.minute() >= 60 ? 59 : endTime.minute()
            });
            this.appointment.start = startTime.toDate();
            this.appointmentForm.get('start.time').setValue(startTime.format('HH:mm'));
        }
    };
    /** checks for validity of input of time and date form */
    AppointmentFormComponent.prototype.ngOnChanges = function () {
        // This is to prevent 'ExpressionChangedAfterItHasBeenCheckedError'
        this.appointmentForm.patchValue({
            allDay: this.appointment.allDay,
            start: {
                date: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start).format('YYYY-MM-DD'),
                time: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.start).format('HH:mm')
            },
            end: {
                date: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end).format('YYYY-MM-DD'),
                time: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__["utc"](this.appointment.end).format('HH:mm')
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__appointment__["Appointment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__appointment__["Appointment"]) === "function" && _a || Object)
    ], AppointmentFormComponent.prototype, "appointment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__recurring_settings_recurring_settings_component__["a" /* RecurringSettingsComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__recurring_settings_recurring_settings_component__["a" /* RecurringSettingsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__recurring_settings_recurring_settings_component__["a" /* RecurringSettingsComponent */]) === "function" && _b || Object)
    ], AppointmentFormComponent.prototype, "recurring", void 0);
    AppointmentFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* Component */])({
            selector: 'rac-appointment-form',
            template: __webpack_require__(571),
            styles: [__webpack_require__(544)]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__appointments_service__["a" /* AppointmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__appointments_service__["a" /* AppointmentsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_storage_service__["a" /* StorageService */]) === "function" && _f || Object])
    ], AppointmentFormComponent);
    return AppointmentFormComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=appointment-form.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(16);
/**
 * This file contains the storage solution for Electron
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Storage mechanism using the filesystem
 * for Electron specific persistency tasks
 */
var ElectronStorageService = (function (_super) {
    __extends(ElectronStorageService, _super);
    function ElectronStorageService() {
        return _super.call(this) || this;
    }
    /**
     * Download the file using the Node.js file system API
     * @param text The text data to be stored
     * @param filename The default file name
     * @override
     */
    ElectronStorageService.prototype.saveText = function (text, filename) {
        // remote.dialog.showSaveDialog({});
        filename = filename || 'duely.ics';
        var textFile = new File([text], filename, { type: 'text/calendar' });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](textFile, undefined, true);
    };
    ElectronStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ElectronStorageService);
    return ElectronStorageService;
}(__WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]));

//# sourceMappingURL=electron-storage.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectStorageService;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electron_storage_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_storage_service__ = __webpack_require__(351);
/**
 * This file contains a factory function that handles the storage solution
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



/**
 * Selects the appropriate storage solution based on the environment
 * @since 0.4.0
 */
function selectStorageService() {
    if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].isElectron) {
        // use the file system to store data
        return new __WEBPACK_IMPORTED_MODULE_1__electron_storage_service__["a" /* ElectronStorageService */]();
    }
    else {
        // download the files within browser
        return new __WEBPACK_IMPORTED_MODULE_2__web_storage_service__["a" /* WebStorageService */]();
    }
}
//# sourceMappingURL=storage.factory.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(16);
/**
 * This file contains the storage solution for the web
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Storage mechanism using the browser API
 * for web specific persistency tasks
 */
var WebStorageService = (function (_super) {
    __extends(WebStorageService, _super);
    function WebStorageService() {
        return _super.call(this) || this;
    }
    /**
     * Download the file using the bowser's download dialogue
     * @param text The text data to be stored
     * @param filename The downloadable file's name. Defaults to duely.ics
     * @override
     */
    WebStorageService.prototype.saveText = function (text, filename) {
        filename = filename || 'duely.ics';
        var textFile = new File([text], filename, { type: 'text/calendar' });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](textFile, undefined, true);
    };
    WebStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebStorageService);
    return WebStorageService;
}(__WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]));

//# sourceMappingURL=web-storage.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vsop87Bearth": 67,
	"./vsop87Bearth.js": 67,
	"./vsop87Bjupiter": 135,
	"./vsop87Bjupiter.js": 135,
	"./vsop87Bmars": 136,
	"./vsop87Bmars.js": 136,
	"./vsop87Bmercury": 137,
	"./vsop87Bmercury.js": 137,
	"./vsop87Bneptune": 138,
	"./vsop87Bneptune.js": 138,
	"./vsop87Bsaturn": 139,
	"./vsop87Bsaturn.js": 139,
	"./vsop87Buranus": 140,
	"./vsop87Buranus.js": 140,
	"./vsop87Bvenus": 141,
	"./vsop87Bvenus.js": 141
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 356;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.rectangle {\n  border: 4px;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 15px; }\n\n.main {\n  margin-top: 65px;\n  background-color: #ffffff;\n  border: 2px #404040;\n  border-radius: 10px; }\n\n.pull-right {\n  margin-right: 15px; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.navbar-form {\n  width: auto;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-right: 0;\n  margin-left: 0;\n  border: none; }\n\n.hidden {\n  display: none; }\n\ndiv {\n  vertical-align: middle; }\n\nspan {\n  vertical-align: middle;\n  height: 100%;\n  line-height: height; }\n\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.checkbox {\n  font-weight: normal; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  padding-left: 15px;\n  padding-right: 0;\n  height: 100%;\n  line-height: 100%; }\n\n.logo {\n  vertical-align: top;\n  display: block;\n  margin: 0 auto;\n  width: 70%; }\n\n.logo img {\n  width: 100%; }\n\n.icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  display: block;\n  margin: 0 auto; }\n\np {\n  padding-bottom: 0;\n  padding-top: 7px; }\n\na button {\n  width: 100%; }\n  a button span {\n    text-decoration: none;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.navbar {\n  color: white;\n  position: fixed;\n  z-index: 1030; }\n  .navbar a {\n    color: white;\n    text-decoration: none; }\n\n.navbar-brand {\n  padding: 0px; }\n  .navbar-brand img {\n    display: inline;\n    height: 100%;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    width: auto; }\n\n.additional-links {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center; }\n  .additional-links a {\n    padding-left: 5px;\n    padding-right: 5px; }\n\n.navbar-form {\n  width: auto;\n  padding: 0;\n  margin-right: 0;\n  margin-left: 0;\n  border: none;\n  box-shadow: none; }\n\n.button-icon {\n  color: white;\n  margin-top: 6px; }\n\n.btn-link {\n  padding: 0;\n  font-size: 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.text-div {\n  padding-top: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.text-div {\n  padding-top: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.text-div {\n  padding-top: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.text-div {\n  padding-top: 7px;\n  padding-bottom: 7px; }\n\n.centered {\n  text-align: center; }\n\nlabel.centerd input[type=radio] {\n  width: auto;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.navbar {\n  color: white;\n  position: fixed;\n  z-index: 1030; }\n  .navbar a {\n    color: white;\n    text-decoration: none; }\n\n.navbar-brand {\n  padding: 0px; }\n  .navbar-brand img {\n    display: inline;\n    height: 100%;\n    padding: 10px;\n    width: auto; }\n\n.rectangle {\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 3px;\n  background-color: #ffffff;\n  border: 2px #404040; }\n\n.main {\n  margin-top: 58px;\n  padding: 0; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.navbar-form {\n  width: auto;\n  padding: 0px 0px 0px 0px;\n  margin-right: 0;\n  margin-left: 0;\n  border: none; }\n\n.hidden {\n  display: none; }\n\ndiv {\n  vertical-align: middle; }\n\nspan {\n  vertical-align: middle;\n  height: 100%;\n  line-height: height; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.checkbox {\n  font-weight: normal; }\n\n.centered {\n  text-align: center;\n  margin: auto; }\n\n.text-div {\n  padding-top: 6px; }\n\n.checkbox-text {\n  padding-top: 3px; }\n\nh2 {\n  margin: 2px 0 12px 5px; }\n\n.button-icon {\n  margin-top: -5px;\n  margin-left: -10px;\n  margin-right: 6px; }\n\n.btn-success {\n  background-image: none;\n  background-color: #3b973b; }\n\n.btn-primary {\n  background-image: none;\n  background-color: #337ab7; }\n\n.bottom-buttons {\n  margin-top: 15px; }\n\n.debug {\n  margin-top: 66px; }\n\n.btn-default {\n  background-image: none; }\n\n.collisions {\n  border-radius: 10px;\n  padding: 15px;\n  margin-top: 71px;\n  margin-bottom: 3px;\n  background-color: #ffffff;\n  border: 2px #404040; }\n\n.table-fixed {\n  width: 100%; }\n  .table-fixed tbody {\n    height: 200px;\n    overflow-y: auto;\n    width: 100%; }\n  .table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n    display: block; }\n  .table-fixed tbody td {\n    float: left; }\n  .table-fixed thead tr th {\n    float: left; }\n\n.appointment-header {\n  padding-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.rectangle {\n  border: 4px;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 15px; }\n\n.main {\n  margin-top: 65px;\n  background-color: #ffffff;\n  border: 2px #404040;\n  border-radius: 10px; }\n\n.pull-right {\n  margin-right: 15px; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.navbar-form {\n  width: auto;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-right: 0;\n  margin-left: 0;\n  border: none; }\n\n.hidden {\n  display: none; }\n\ndiv {\n  vertical-align: middle; }\n\nspan {\n  vertical-align: middle;\n  height: 100%;\n  line-height: height; }\n\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.checkbox {\n  font-weight: normal; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  padding-left: 15px;\n  padding-right: 0;\n  height: 100%;\n  line-height: 100%; }\n\n.logo {\n  vertical-align: top;\n  display: block;\n  margin: 0 auto;\n  width: 70%; }\n\n.logo img {\n  width: 100%; }\n\n.icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  display: block;\n  margin: 0 auto; }\n\np {\n  padding-bottom: 0;\n  padding-top: 7px; }\n\na button {\n  width: 100%; }\n  a button span {\n    text-decoration: none;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.rectangle {\n  border: 4px;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 15px; }\n\n.main {\n  margin-top: 65px;\n  background-color: #ffffff;\n  border: 2px #404040;\n  border-radius: 10px; }\n\n.pull-right {\n  margin-right: 15px; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.navbar-form {\n  width: auto;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-right: 0;\n  margin-left: 0;\n  border: none; }\n\n.hidden {\n  display: none; }\n\ndiv {\n  vertical-align: middle; }\n\nspan {\n  vertical-align: middle;\n  height: 100%;\n  line-height: height; }\n\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.checkbox {\n  font-weight: normal; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  padding-left: 15px;\n  padding-right: 0;\n  height: 100%;\n  line-height: 100%; }\n\n.logo {\n  vertical-align: top;\n  display: block;\n  margin: 0 auto;\n  width: 70%; }\n\n.logo img {\n  width: 100%; }\n\n.icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  display: block;\n  margin: 0 auto; }\n\np {\n  padding-bottom: 0;\n  padding-top: 7px; }\n\na button {\n  width: 100%; }\n  a button span {\n    text-decoration: none;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: #be1e3c !important; }\n\n.green {\n  background-color: #89a400 !important; }\n\n.blue {\n  background-color: #0080b4 !important; }\n\n.orange {\n  background-color: #fa6e00 !important; }\n\n.violet {\n  background-color: #760076 !important; }\n\n.pink {\n  background-color: #cc0099 !important; }\n\n.darkgreen {\n  background-color: #007156 !important; }\n\n.darkblue {\n  background-color: #005374 !important; }\n\n.border-red {\n  background-color: #be1e3c !important; }\n\n.border-green {\n  background-color: #89a400 !important; }\n\n.border-blue {\n  background-color: #0080b4 !important; }\n\n.border-orange {\n  background-color: #fa6e00 !important; }\n\n.border-violet {\n  background-color: #760076 !important; }\n\n.border-pink {\n  background-color: #cc0099 !important; }\n\n.border-darkgreen {\n  background-color: #007156 !important; }\n\n.border-darkblue {\n  background-color: #005374 !important; }\n\n.label-red {\n  color: #be1e3c !important; }\n\n.label-green {\n  color: #89a400 !important; }\n\n.label-blue {\n  color: #0080b4 !important; }\n\n.label-orange {\n  color: #fa6e00 !important; }\n\n.label-violet {\n  color: #760076 !important; }\n\n.label-pink {\n  color: #cc0099 !important; }\n\n.label-darkgreen {\n  color: #007156 !important; }\n\n.label-darkblue {\n  color: #005374 !important; }\n\n.button-red {\n  background-color: #be1e3c !important;\n  color: white; }\n\n.button-green {\n  background-color: #89a400 !important;\n  color: white; }\n\n.button-blue {\n  background-color: #0080b4 !important;\n  color: white; }\n\n.button-orange {\n  background-color: #fa6e00 !important;\n  color: white; }\n\n.button-violet {\n  background-color: #760076 !important;\n  color: white; }\n\n.button-pink {\n  background-color: #cc0099 !important;\n  color: white; }\n\n.button-darkgreen {\n  background-color: #007156 !important;\n  color: white; }\n\n.button-darkblue {\n  background-color: #005374 !important;\n  color: white; }\n\n.fill-red {\n  fill: #be1e3c !important !important; }\n  .fill-red svg g {\n    fill: #be1e3c !important !important; }\n    .fill-red svg g g {\n      fill: #be1e3c !important !important; }\n    .fill-red svg g path {\n      fill: #be1e3c !important !important; }\n\n.fill-green {\n  fill: #89a400 !important !important; }\n  .fill-green svg g {\n    fill: #89a400 !important !important; }\n    .fill-green svg g g {\n      fill: #89a400 !important !important; }\n    .fill-green svg g path {\n      fill: #89a400 !important !important; }\n\n.fill-blue {\n  fill: #0080b4 !important !important; }\n  .fill-blue svg g {\n    fill: #0080b4 !important !important; }\n    .fill-blue svg g g {\n      fill: #0080b4 !important !important; }\n    .fill-blue svg g path {\n      fill: #0080b4 !important !important; }\n\n.fill-orange {\n  fill: #fa6e00 !important !important; }\n  .fill-orange svg g {\n    fill: #fa6e00 !important !important; }\n    .fill-orange svg g g {\n      fill: #fa6e00 !important !important; }\n    .fill-orange svg g path {\n      fill: #fa6e00 !important !important; }\n\n.fill-violet {\n  fill: #760076 !important !important; }\n  .fill-violet svg g {\n    fill: #760076 !important !important; }\n    .fill-violet svg g g {\n      fill: #760076 !important !important; }\n    .fill-violet svg g path {\n      fill: #760076 !important !important; }\n\n.fill-pink {\n  fill: #cc0099 !important !important; }\n  .fill-pink svg g {\n    fill: #cc0099 !important !important; }\n    .fill-pink svg g g {\n      fill: #cc0099 !important !important; }\n    .fill-pink svg g path {\n      fill: #cc0099 !important !important; }\n\n.fill-darkgreen {\n  fill: #007156 !important !important; }\n  .fill-darkgreen svg g {\n    fill: #007156 !important !important; }\n    .fill-darkgreen svg g g {\n      fill: #007156 !important !important; }\n    .fill-darkgreen svg g path {\n      fill: #007156 !important !important; }\n\n.fill-darkblue {\n  fill: #005374 !important !important; }\n  .fill-darkblue svg g {\n    fill: #005374 !important !important; }\n    .fill-darkblue svg g g {\n      fill: #005374 !important !important; }\n    .fill-darkblue svg g path {\n      fill: #005374 !important !important; }\n\n.rectangle {\n  border: 4px;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 15px; }\n\n.main {\n  margin-top: 65px;\n  background-color: #ffffff;\n  border: 2px #404040;\n  border-radius: 10px; }\n\n.pull-right {\n  margin-right: 15px; }\n\nhr {\n  border-top: 1px solid #ddd; }\n\n.navbar-form {\n  width: auto;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-right: 0;\n  margin-left: 0;\n  border: none; }\n\nspan {\n  vertical-align: middle;\n  height: 100%;\n  line-height: height; }\n\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n  height: 100%;\n  line-height: 100%; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  padding-left: 15px;\n  padding-right: 0;\n  height: 100%;\n  line-height: 100%; }\n\nbutton {\n  width: 100%;\n  text-decoration: none;\n  color: black; }\n\n.form-group {\n  margin-left: 0;\n  margin-right: 0; }\n\n.nopadding {\n  padding: 0;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 190,
	"./af.js": 190,
	"./ar": 197,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 197,
	"./az": 198,
	"./az.js": 198,
	"./be": 199,
	"./be.js": 199,
	"./bg": 200,
	"./bg.js": 200,
	"./bm": 201,
	"./bm.js": 201,
	"./bn": 202,
	"./bn.js": 202,
	"./bo": 203,
	"./bo.js": 203,
	"./br": 204,
	"./br.js": 204,
	"./bs": 205,
	"./bs.js": 205,
	"./ca": 206,
	"./ca.js": 206,
	"./cs": 207,
	"./cs.js": 207,
	"./cv": 208,
	"./cv.js": 208,
	"./cy": 209,
	"./cy.js": 209,
	"./da": 210,
	"./da.js": 210,
	"./de": 213,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 213,
	"./dv": 214,
	"./dv.js": 214,
	"./el": 215,
	"./el.js": 215,
	"./en-au": 216,
	"./en-au.js": 216,
	"./en-ca": 217,
	"./en-ca.js": 217,
	"./en-gb": 218,
	"./en-gb.js": 218,
	"./en-ie": 219,
	"./en-ie.js": 219,
	"./en-il": 220,
	"./en-il.js": 220,
	"./en-nz": 221,
	"./en-nz.js": 221,
	"./eo": 222,
	"./eo.js": 222,
	"./es": 225,
	"./es-do": 223,
	"./es-do.js": 223,
	"./es-us": 224,
	"./es-us.js": 224,
	"./es.js": 225,
	"./et": 226,
	"./et.js": 226,
	"./eu": 227,
	"./eu.js": 227,
	"./fa": 228,
	"./fa.js": 228,
	"./fi": 229,
	"./fi.js": 229,
	"./fo": 230,
	"./fo.js": 230,
	"./fr": 233,
	"./fr-ca": 231,
	"./fr-ca.js": 231,
	"./fr-ch": 232,
	"./fr-ch.js": 232,
	"./fr.js": 233,
	"./fy": 234,
	"./fy.js": 234,
	"./gd": 235,
	"./gd.js": 235,
	"./gl": 236,
	"./gl.js": 236,
	"./gom-latn": 237,
	"./gom-latn.js": 237,
	"./gu": 238,
	"./gu.js": 238,
	"./he": 239,
	"./he.js": 239,
	"./hi": 240,
	"./hi.js": 240,
	"./hr": 241,
	"./hr.js": 241,
	"./hu": 242,
	"./hu.js": 242,
	"./hy-am": 243,
	"./hy-am.js": 243,
	"./id": 244,
	"./id.js": 244,
	"./is": 245,
	"./is.js": 245,
	"./it": 246,
	"./it.js": 246,
	"./ja": 247,
	"./ja.js": 247,
	"./jv": 248,
	"./jv.js": 248,
	"./ka": 249,
	"./ka.js": 249,
	"./kk": 250,
	"./kk.js": 250,
	"./km": 251,
	"./km.js": 251,
	"./kn": 252,
	"./kn.js": 252,
	"./ko": 253,
	"./ko.js": 253,
	"./ky": 254,
	"./ky.js": 254,
	"./lb": 255,
	"./lb.js": 255,
	"./lo": 256,
	"./lo.js": 256,
	"./lt": 257,
	"./lt.js": 257,
	"./lv": 258,
	"./lv.js": 258,
	"./me": 259,
	"./me.js": 259,
	"./mi": 260,
	"./mi.js": 260,
	"./mk": 261,
	"./mk.js": 261,
	"./ml": 262,
	"./ml.js": 262,
	"./mr": 263,
	"./mr.js": 263,
	"./ms": 265,
	"./ms-my": 264,
	"./ms-my.js": 264,
	"./ms.js": 265,
	"./mt": 266,
	"./mt.js": 266,
	"./my": 267,
	"./my.js": 267,
	"./nb": 268,
	"./nb.js": 268,
	"./ne": 269,
	"./ne.js": 269,
	"./nl": 271,
	"./nl-be": 270,
	"./nl-be.js": 270,
	"./nl.js": 271,
	"./nn": 272,
	"./nn.js": 272,
	"./pa-in": 273,
	"./pa-in.js": 273,
	"./pl": 274,
	"./pl.js": 274,
	"./pt": 276,
	"./pt-br": 275,
	"./pt-br.js": 275,
	"./pt.js": 276,
	"./ro": 277,
	"./ro.js": 277,
	"./ru": 278,
	"./ru.js": 278,
	"./sd": 279,
	"./sd.js": 279,
	"./se": 280,
	"./se.js": 280,
	"./si": 281,
	"./si.js": 281,
	"./sk": 282,
	"./sk.js": 282,
	"./sl": 283,
	"./sl.js": 283,
	"./sq": 284,
	"./sq.js": 284,
	"./sr": 286,
	"./sr-cyrl": 285,
	"./sr-cyrl.js": 285,
	"./sr.js": 286,
	"./ss": 287,
	"./ss.js": 287,
	"./sv": 288,
	"./sv.js": 288,
	"./sw": 289,
	"./sw.js": 289,
	"./ta": 290,
	"./ta.js": 290,
	"./te": 291,
	"./te.js": 291,
	"./tet": 292,
	"./tet.js": 292,
	"./tg": 293,
	"./tg.js": 293,
	"./th": 294,
	"./th.js": 294,
	"./tl-ph": 295,
	"./tl-ph.js": 295,
	"./tlh": 296,
	"./tlh.js": 296,
	"./tr": 297,
	"./tr.js": 297,
	"./tzl": 298,
	"./tzl.js": 298,
	"./tzm": 300,
	"./tzm-latn": 299,
	"./tzm-latn.js": 299,
	"./tzm.js": 300,
	"./ug-cn": 301,
	"./ug-cn.js": 301,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 305,
	"./uz-latn": 304,
	"./uz-latn.js": 304,
	"./uz.js": 305,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 565;

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\"><div id=\"main-rectangle\" class=\"rectangle\"><form class=\"form-horizontal\"><div class=\"logo\"><img src=\"./assets/duely.svg\"></div><hr><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'LICENSE' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><p class=\"col-xs-12\">Open Source</p><p class=\"col-xs-12\"><a href=\"https://www.mozilla.org/en-US/MPL/2.0/\" target=\"_self\">Mozilla Public License v2.0</a></p></div></div><hr><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'DEVELOPER' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><p class=\"col-xs-12\">Till Affeldt</p><p class=\"col-xs-12\">Mike Kenneth Braun</p><p class=\"col-xs-12\">Marlen Bernier</p><p class=\"col-xs-12\">Frederik Kammer</p><p class=\"col-xs-12\">Lars Richard</p></div></div><hr><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'ARCHITECTURE USED' | translate}}</label><div class=\"col-sm-10 col-xs-12 form-group\"><div class=\"col-xs-2 first\"><img src=\"./assets/tech/electron.svg\" class=\"icon\"></div><div class=\"col-xs-2 no-padding\"><img src=\"./assets/tech/node.svg\" class=\"icon\"></div><div class=\"col-xs-2 no-padding\"><img src=\"./assets/tech/javascript.svg\" class=\"icon\"></div><div class=\"col-xs-2 no-padding\"><img src=\"./assets/tech/angular.svg\" class=\"icon\"></div><div class=\"col-xs-2 no-padding\"><img src=\"./assets/tech/bootstrap.svg\" class=\"icon\"></div><div class=\"col-xs-2 no-padding\"><img src=\"./assets/tech/HTML5.svg\" class=\"icon\"></div></div></div><div class=\"form-group\"><div class=\"col-sm-2 col-xs-12\"></div><div class=\"col-sm-10 col-xs-12\"><a routerLink=\"/\"><button type=\"button\" class=\"btn btn-default\"><span>{{'BACK' | translate}}</span></button></a></div></div></form></div></div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top {{storage.getColor()}}\"><div class=\"container\"><div class=\"navbar-brand\"><a routerLink=\"/\"><img src=\"./assets/duely_only_white.svg\"></a></div><div class=\"pull-right\"><form class=\"navbar-form\"><a routerLink=\"settings\"><button type=\"button\" class=\"btn btn-link\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-cog button-icon\" aria-hidden=\"true\"></span></button></a></form></div></div></nav><main><router-outlet></router-outlet></main><div class=\"container additional-links\"><a routerLink=\"legal\" class=\"label-{{storage.getColor()}}\">{{'LEGAL NOTICE' | translate}}</a> <a routerLink=\"about\" class=\"label-{{storage.getColor()}}\">{{'ABOUT' | translate}}</a></div>"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"sepa form-group\" (click)=\"hideSettings=!hideSettings\"><label class=\"col-xs-2 control-label label-{{storage.getColor()}}\">{{\"OTHER\" | translate}}</label><div class=\"col-xs-10\"><button type=\"button\" class=\"btn btn-link btn-sm pull-right\" aria-label=\"Left Align\"><span class=\"glyphicon label-{{storage.getColor()}}\" [class.glyphicon-chevron-right]=\"hideSettings\" [class.glyphicon-chevron-down]=\"!hideSettings\" aria-hidden=\"true\"></span></button></div></div><div *ngIf=\"!hideSettings\" [formGroup]=\"advancedForm\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{\"STATUS\" | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select class=\"form-control\" formControlName=\"status\" [(ngModel)]=\"status\" (change)=\"updateAppointment()\"><option value=\"tentative\">{{\"TENTATIVE\" | translate}}</option><option value=\"confirmed\">{{\"CONFIRMED\" | translate}}</option><option value=\"cancelled\">{{\"CANCELLED\" | translate}}</option></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{\"TIMEZONE\" | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select class=\"form-control\" formControlName=\"timezone\" [(ngModel)]=\"timezone\" (change)=\"updateAppointment()\"><option value=\"floating\">{{\"FLOATING\" | translate}}</option><option *ngFor=\"let tz of timeZoneNames\" value=\"{{ tz }}\">{{ tz }}</option></select></div></div></div>"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"row form-group\"><label class=\"label-{{storage.getColor()}} control-label col-xs-2\">{{'REMINDERS' | translate}}</label><div class=\"col-xs-10\"><button data-identifier=\"add-alarm-button\" type=\"button\" class=\"btn btn-link btn-sm pull-right\" (click)=\"addAlarm()\"><span class=\"glyphicon glyphicon-plus label-{{storage.getColor()}}\"></span></button></div></div><div [formGroup]=\"alarmsForm\"><div formArrayName=\"alarms\"><div class=\"form-group row\" *ngFor=\"let alarm of alarms, let i = index\" [formGroupName]=\"i\"><label class=\"col-xs-12 col-sm-2 control-label\">{{ i + 1 }}. {{'REMINDER' | translate}}</label><div class=\"col-xs-12 col-sm-9\"><div class=\"form-group nomargin\"><div class=\"col-xs-4\"><input formControlName=\"triggerDelay\" [(ngModel)]=\"alarm.triggerDelay\" (change)=\"recalculateTrigger(alarm)\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='0');\" class=\"form-control\"></div><div class=\"col-xs-5\"><select formControlName=\"triggerUnit\" [(ngModel)]=\"alarm.triggerUnit\" (change)=\"recalculateTrigger(alarm)\" class=\"form-control\"><option value=\"MINUTES\">{{'MINUTES' | translate}}</option><option value=\"HOURS\">{{'HOURS' | translate}}</option><option value=\"DAYS\">{{'DAYS' | translate}}</option><option value=\"WEEKS\">{{'WEEKS' | translate}}</option></select></div><div class=\"col-xs-3 text-div\">{{'EARLIER' | translate}},</div></div><div class=\"form-group\"><div class=\"col-xs-4\"><input formControlName=\"repeat\" [(ngModel)]=\"alarm.repeat\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" class=\"form-control\"></div><div class=\"col-xs-2 text-div\">{{alarmsForm.controls.alarms.at(i).controls['repeat'].value === 0 ? translate.instant('TIMES') : alarmsForm.controls.alarms.at(i).controls['repeat'].value === 1 ? translate.instant('TIME COUNT') : translate.instant('TIMES, EVERY')}}</div><div class=\"col-xs-3\" [class.hidden]=\"alarmsForm.controls.alarms.at(i).controls['repeat'].value === 1\"><input formControlName=\"intervalMinutes\" [(ngModel)]=\"alarm.intervalMinutes\" (change)=\"recalculateInterval(alarm)\" type=\"number\" min=\"1\" class=\"form-control\" oninput=\"validity.valid||(value='1');\"></div><div class=\"col-xs-3 text-div\" [class.hidden]=\"alarmsForm.controls.alarms.at(i).controls['repeat'].value === 1\">{{alarmsForm.controls.alarms.at(i).controls['intervalMinutes'].value > 1 ? translate.instant('MINUTES') : translate.instant('MINUTE')}}</div></div><div class=\"form-group\"><div class=\"col-xs-2 text-div\">{{'NOTE' | translate}}:</div><div class=\"col-xs-7\"><input formControlName=\"description\" [(ngModel)]=\"alarm.description\" class=\"form-control\" type=\"text\"></div><div class=\"col-xs-3\"><select formControlName=\"type\" [(ngModel)]=\"alarm.type\" class=\"form-control\"><option value=\"audio\">{{'PLAY TONE' | translate}}</option><option value=\"display\">{{'DISPLAY' | translate}}</option></select></div></div></div><div class=\"col-xs-1 pull-right\"><button data-identifier=\"remove-alarm-button\" type=\"button\" class=\"btn btn-link btn-sm pull-right\" (click)=\"removeAlarm(alarm)\"><span class=\"glyphicon glyphicon-minus\"></span></button></div></div></div></div>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"appointmentForm\" class=\"form-horizontal\" novalidate><div class=\"form-group row\" [ngClass]=\"{ 'has-danger': appointmentForm.controls.summary.invalid && appointmentForm.controls.summary.dirty || appointmentForm.controls.summary.pristine , 'has-success': appointmentForm.controls.summary.valid && appointmentForm.controls.summary.dirty }\"><label for=\"title\" class=\"col-sm-2 col-xs-12 control-label\">{{'TITLE' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><input formControlName=\"summary\" [(ngModel)]=\"appointment.summary\" type=\"text\" class=\"form-control\" [placeholder]=\"this.translate.instant('TITLE')\"><div class=\"alert alert-warning\" *ngIf=\"appointmentForm.controls.summary.invalid && appointmentForm.controls.summary.dirty || appointmentForm.controls.summary.pristine\"><p *ngIf=\"appointmentForm.controls.summary.errors == null && !appointmentForm.controls.summary.errors.required && (appointmentForm.controls.summary.dirty || appointmentForm.controls.summary.pristine)\">{{'REQUIRED' | translate}}</p><p *ngIf=\"appointmentForm.controls.summary.errors.maxlength\">{{'REQUIRED25' | translate}}</p><p *ngIf=\"appointmentForm.controls.summary.errors != null && appointmentForm.controls.summary.errors.required\">{{'REQUIRED' | translate}}</p><p *ngIf=\"appointmentForm.controls.summary.errors != null && appointmentForm.controls.summary.errors.maxlength\">{{'REQUIRED25' | translate}}</p></div></div></div><div class=\"form-group row\" [ngClass]=\"{ 'has-danger': appointmentForm.controls.location.invalid && appointmentForm.controls.location.dirty , 'has-success': appointmentForm.controls.location.valid && appointmentForm.controls.location.dirty }\"><label for=\"location\" class=\"col-sm-2 col-xs-12 control-label\">{{'LOCATION' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><input formControlName=\"location\" [(ngModel)]=\"appointment.location\" type=\"text\" class=\"form-control\" [placeholder]=\"this.translate.instant('LOCATION')\"><div class=\"alert alert-warning\" *ngIf=\"appointmentForm.controls.location.invalid && appointmentForm.controls.location.dirty\"><p *ngIf=\"appointmentForm.controls.location.errors != null && appointmentForm.controls.location.errors.maxlength\">max. 25 letters required</p></div></div></div><div class=\"form-group row\"><label for=\"description\" class=\"col-sm-2 col-xs-12 control-label\">{{'DESCRIPTION' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><textarea formControlName=\"description\" [(ngModel)]=\"appointment.description\" class=\"form-control\" [placeholder]=\"this.translate.instant('DESCRIPTION')\" rows=\"1\" racAutoResize></textarea></div></div><hr><div formGroupName=\"start\" class=\"form-group row\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'FROM' | translate}}</label><div class=\"col-sm-5 col-xs-6\"><ng2-datepicker [options]=\"startoptions\" [texts]=\"datepickerTexts\" formControlName=\"date\" [ngModel]=\"startdate\" (ngModelChange)=\"startdate=$event; startDateListener($event)\"></ng2-datepicker></div><div class=\"col-sm-5 col-xs-6\"><input formControlName=\"time\" type=\"time\" class=\"form-control\" *ngIf=\"!appointmentForm.controls.allDay.value\" (blur)=\"validateStartTime(); onStartTimeChange($event.target.value)\"></div></div><div formGroupName=\"end\" class=\"form-group row\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'TO' | translate}}</label><div class=\"col-sm-5 col-xs-6\"><ng2-datepicker [options]=\"endoptions\" [texts]=\"datepickerTexts\" formControlName=\"date\" [ngModel]=\"enddate\" (ngModelChange)=\"enddate=$event; endDateListener($event)\"></ng2-datepicker></div><div class=\"col-sm-5 col-xs-6\"><input formControlName=\"time\" type=\"time\" class=\"form-control\" *ngIf=\"!appointmentForm.controls.allDay.value\" (blur)=\"validateEndTime(); onEndTimeChange($event.target.value)\"></div></div><div class=\"row\"><div class=\"col-xs-12 col-sm-offset-2 col-sm-10\"><ul class=\"list-inline\"><li class=\"list-inline-item\"><div class=\"form-check\"><label class=\"form-check-label\"><input formControlName=\"allDay\" [(ngModel)]=\"appointment.allDay\" type=\"checkbox\" class=\"form-check-input\"> {{'ALL-DAY' | translate}}</label></div></li></ul></div></div><hr><rac-recurring-settings [appointment]=\"appointment\"></rac-recurring-settings><hr><rac-alarm-settings [appointment]=\"appointment\"></rac-alarm-settings><hr><rac-advanced-settings [appointment]=\"appointment\"></rac-advanced-settings></form>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"sepa form-group\" (click)=\"hideSettings=!hideSettings\"><label class=\"label-{{storage.getColor()}} control-label col-xs-2\">{{'RECURRENCE' | translate}}</label><div class=\"col-xs-10\"><button type=\"button\" class=\"btn btn-link btn-sm pull-right\" data-identifier=\"expand-recurring\"><span class=\"glyphicon label-{{storage.getColor()}}\" [class.glyphicon-chevron-right]=\"hideSettings\" [class.glyphicon-chevron-down]=\"!hideSettings\" aria-hidden=\"true\"></span></button></div></div><div *ngIf=\"!hideSettings\" [formGroup]=\"recurringForm\" data-identifier=\"recurring-settings\"><div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'REPEATS' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select formControlName=\"frequency\" [(ngModel)]=\"recurringSettings.frequency\" class=\"form-control\" data-identifier=\"recurrence-selectbox\"><option value=\"NEVER\">{{'NEVER' | translate}}</option><option value=\"DAILY\">{{'DAILY' | translate}}</option><option value=\"WEEKLY\">{{'WEEKLY' | translate}}</option><option value=\"MONTHLY\">{{'MONTHLY' | translate}}</option><option value=\"YEARLY\">{{'YEARLY' | translate}}</option></select></div></div><div [ngSwitch]=\"recurringSettings.frequency\"><div *ngSwitchCase=\"'DAILY'\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'REPEATS EVERY' | translate}}</label><div class=\"col-xs-4\"><input formControlName=\"interval\" [(ngModel)]=\"recurringSettings.interval\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" class=\"form-control\"></div><div class=\"col-xs-6 text-div\">{{'DAY(S)' | translate}}</div></div></div><div *ngSwitchCase=\"'WEEKLY'\" data-identifier=\"recurring-weekly\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'REPEATS EVERY' | translate}}</label><div class=\"col-xs-4\"><input formControlName=\"interval\" [(ngModel)]=\"recurringSettings.interval\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" class=\"form-control\"></div><div class=\"col-xs-6 text-div\">{{'WEEK(S) ON' | translate}}:</div></div><div class=\"row\"><div class=\"col-sm-offset-2 col-sm-10\"><label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.monday\" formControlName=\"monday\"> {{'MONDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.tuesday\" formControlName=\"tuesday\"> {{'TUESDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.wednesday\" formControlName=\"wednesday\"> {{'WEDNESDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.thursday\" formControlName=\"thursday\"> {{'THURSDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.friday\" formControlName=\"friday\"> {{'FRIDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.saturday\" formControlName=\"saturday\"> {{'SATURDAY' | translate}}</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"recurringSettings.sunday\" formControlName=\"sunday\"> {{'SUNDAY' | translate}}</label></div></div></div><div *ngSwitchCase=\"'MONTHLY'\" data-identifier=\"recurring-monthly\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'REPEATS EVERY' | translate}}</label><div class=\"col-xs-4\"><input formControlName=\"interval\" [(ngModel)]=\"recurringSettings.interval\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" class=\"form-control\"></div><div class=\"col-xs-6 text-div\">{{'MONTH(S)' | translate}}</div></div><div class=\"row\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'PATTERN' | translate}}</label><p class=\"col-sm-10 col-xs-12 text-div\">{{'PATTERNTEXT' | translate}}</p><div class=\"col-sm-offset-2 col-sm-10\"><div class=\"form-group\"><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"MONTH\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{month}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"MONTHINV\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{monthInv}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"WEEK\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{week}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"WEEKINV\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{weekInv}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"WORK\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{work}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centerd\"><input type=\"radio\" name=\"repByMonthly\" class=\"form-control centered\" value=\"WORKINV\" formControlName=\"repByMonthly\" [(ngModel)]=\"recurringSettings.repByMonthly\">{{workInv}}</label></div></div></div></div></div><div *ngSwitchCase=\"'YEARLY'\" data-identifier=\"recurring-yearly\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'REPEATS EVERY' | translate}}</label><div class=\"col-xs-4\"><input formControlName=\"interval\" [(ngModel)]=\"recurringSettings.interval\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" class=\"form-control\"></div><div class=\"col-xs-6 text-div\">{{'YEAR(S)' | translate}}</div></div><div class=\"row\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'PATTERN' | translate}}</label><p class=\"col-sm-10 col-xs-12 text-div\">{{'PATTERNTEXT' | translate}}</p><div class=\"col-sm-offset-2 col-sm-10\"><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"DAYMONTHYEAR\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{dayMonthYear}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"DAYMONTHYEARINV\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{dayMonthYearInv}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"WEEKYEAR\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{weekYear}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"WEEKINVYEAR\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{weekInvYear}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"WORKYEAR\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{workYear}}</label></div><div class=\"col-xs-4 centered\"><label class=\"centered\"><input type=\"radio\" name=\"repByYearly\" class=\"form-control centered\" value=\"WORKINVYEAR\" formControlName=\"repByYearly\" [(ngModel)]=\"recurringSettings.repByYearly\">{{workInvYear}}</label></div></div></div></div></div></div><div *ngIf=\"recurringSettings.frequency!=='NEVER'\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'ENDS' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><div class=\"radio text-div\"><label><input formControlName=\"ends\" type=\"radio\" value=\"NEVER\" name=\"ends\" [(ngModel)]=\"recurringSettings.ends\"> {{'NEVER' | translate}}</label></div><div class=\"radio\"><div class=\"form-group\"><div class=\"col-xs-3 text-div\"><label><input formControlName=\"ends\" [(ngModel)]=\"recurringSettings.ends\" type=\"radio\" value=\"COUNT\" name=\"ends\"><p class=\"checkbox-text\">{{'NUMBER OF EVENTS' | translate}}</p></label></div><div class=\"col-xs-9\"><input formControlName=\"count\" type=\"number\" min=\"1\" oninput=\"validity.valid||(value='1');\" [(ngModel)]=\"recurringSettings.count\" class=\"form-control checkbox-text\" *ngIf=\"recurringForm.controls['ends'].value==='COUNT'\"></div></div></div><div class=\"radio\"><div class=\"form-group\"><div class=\"col-xs-3 text-div\"><label><input formControlName=\"ends\" [(ngModel)]=\"recurringSettings.ends\" type=\"radio\" value=\"UNTIL\" name=\"ends\"><p class=\"checkbox-text\">{{'UNTIL' | translate}}</p></label></div><div class=\"col-xs-9\"><ng2-datepicker [options]=\"options\" [texts]=\"datepickerTexts\" formControlName=\"untilDate\" [ngModel]=\"enddate\" (ngModelChange)=\"enddate=$event; endDateListener($event)\" *ngIf=\"recurringForm.controls['ends'].value==='UNTIL'\"></ng2-datepicker></div></div></div></div></div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-11 control-label\">{{'EXCLUSIONS' | translate}}</label><div class=\"col-xs-1 col-sm-10\"><button (click)=\"addExclusion()\" type=\"button\" class=\"btn btn-link btn-sm pull-right\" aria-label=\"Left Align\" id=\"reminderAdd\" data-identifier=\"add-exclusion-button\"><span class=\"glyphicon glyphicon-plus label-{{storage.getColor()}}\" aria-hidden=\"true\"></span></button></div><div formArrayName=\"exclusions\" class=\"col-xs-12 col-sm-10 col-sm-offset-2\"><div *ngFor=\"let exclusion of exclusions; let i = index\" [formGroupName]=\"i\" class=\"form-group\"><div class=\"col-xs-4\"><select formControlName=\"type\" class=\"form-control\" [(ngModel)]=\"exclusion.type\"><option value=\"holidays\">{{'HOLIDAYS' | translate}}</option><option value=\"date\">{{'OWN DATE' | translate}}</option></select></div><div class=\"col-xs-6\" *ngIf=\"exclusion.type==='holidays'\" data-identifier=\"holiday-settings\"><div class=\"form-group\"><select formControlName=\"holiday_countries\" class=\"form-control\" (change)=\"showStates(i)\" [(ngModel)]=\"exclusion.holiday_countries\" data-identifier=\"countries\"><option *ngFor=\"let country of countries\" value=\"{{country[0]}}\">{{country[1]}}</option></select></div><div class=\"form-group\"><select formControlName=\"holiday_states\" class=\"form-control\" (change)=\"showRegions(i)\" [(ngModel)]=\"exclusion.holiday_states\" data-identifier=\"states\" *ngIf=\"statesVisible[i] === true\"><option *ngFor=\"let state of states[i]\" value=\"{{state[0]}}\">{{state[1]}}</option></select></div><div class=\"form-group\"><select formControlName=\"holiday_regions\" class=\"form-control\" *ngIf=\"regionsVisible[i] === true\" [(ngModel)]=\"exclusion.holiday_regions\" data-identifier=\"regions\"><option *ngFor=\"let region of regions[i]\" value=\"{{region[0]}}\">{{region[1]}}</option></select></div></div><div class=\"col-xs-6\" *ngIf=\"exclusion.type==='date'\"><ng2-datepicker [options]=\"options\" [texts]=\"datepickerTexts\" formControlName=\"date\" (ngModelChange)=\"setExclusionDate($event, i)\"></ng2-datepicker></div><div class=\"col-xs-2\"><button (click)=\"removeExclusion(exclusion)\" type=\"button\" class=\"btn btn-link btn-sm pull-right\" aria-label=\"Left Align\" data-identifier=\"remove-exclusion-button\"><span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span></button></div></div></div></div></div></div>"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\"><div><ul class=\"list-unstyled\"><li *ngFor=\"let appointment of appointments, let last=last, let index=index\" class=\"rectangle\"><div class=\"form-group container appointment-header\"><div class=\"col-xs-7\" (click)=\"this.visible[index] = !this.visible[index]\"><h2>{{\"APPOINTMENT\" | translate}} {{ index + 1 }}</h2></div><div class=\"col-xs-5 appointment-header\" (click)=\"this.visible[index] = !this.visible[index]\"><button data-identifier=\"remove-appointment-btn\" class=\"btn btn-default pull-right\" (click)=\"removeAppointment(appointment, index)\" *ngIf=\"appointments.length > 1\"><span class=\"glyphicon glyphicon-minus label-red\"></span></button> <button class=\"btn btn-link pull-right\" data-identifier=\"hide-full-appointment-form\"><span class=\"glyphicon label-{{storage.getColor()}}\" [class.glyphicon-chevron-down]=\"this.visible[index]\" [class.glyphicon-chevron-right]=\"!this.visible[index]\" aria-hidden=\"true\"></span></button></div></div><rac-appointment-form [appointment]=\"appointment\" *ngIf=\"this.visible[index]\"></rac-appointment-form></li><li class=\"bottom-buttons\"><button type=\"button\" id=\"add-appointment-btn\" class=\"btn btn-primary col-xs-6 btn-lg\" (click)=\"addAppointment()\"><span class=\"glyphicon glyphicon-plus button-icon\"></span>{{\"ADD APPOINTMENT\" | translate}}</button> <button type=\"button\" id=\"generate-ical-btn\" class=\"btn btn-success col-xs-6 btn-lg\" (click)=\"generateAndSaveICAL()\"><span class=\"glyphicon glyphicon-floppy-save button-icon\"></span>{{\"SAVE CALENDAR DATA\" | translate}}</button></li></ul><div *ngIf=\"collisions.length > 0\" class=\"collisions\"><h2>{{\"COLLISIONS\" | translate}}</h2><table class=\"table table-fixed\"><thead><tr><th class=\"col-xs-6\">{{\"DATE\" | translate}}</th><th class=\"col-xs-6\">{{\"REASON\" | translate}}</th></tr></thead><tbody><tr *ngFor=\"let collision of collisions\"><td class=\"col-xs-6\">{{ collision.date.toString().slice(4, 15) }}</td><td class=\"col-xs-6\">{{ collision.reason }}</td></tr></tbody></table></div></div><div *ngIf=\"storage.getDebug()\" class=\"rectangle debug\"><h3>DEBUG-OUTPUT</h3><pre>\n      {{ appointments | json }}\n    </pre></div></div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\"><div id=\"main-rectangle\" class=\"rectangle\"><div [innerHTML]=\"content\"></div></div></div>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\"><div id=\"main-rectangle\" class=\"rectangle\"><form class=\"form-horizontal\"><div class=\"form-group\"><h1>{{'ERROR' | translate}} 404:</h1></div><div class=\"form-group\"><h2 class=\"pull-right\">{{'404MESSAGE' | translate}}</h2></div><div class=\"form-group\"><h3>{{'BACK' | translate}}:</h3></div><div class=\"logo\"><a routerLink=\"/\"><img src=\"./assets/duely.svg\"></a></div></form></div></div>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\"><div id=\"main-rectangle\" class=\"rectangle\"><form (submit)=\"save()\" [formGroup]=\"settingsForm\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'TIMEZONE' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select formControlName=\"timezone\" class=\"form-control\"><option value=\"floating\">{{'FLOATING' | translate }}</option><option *ngFor=\"let tz of timeZoneNames\" value=\"{{ tz }}\">{{ tz }}</option></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'LANGUAGE' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select formControlName=\"language\" class=\"form-control\"><option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{getFullLanguage(lang)}}</option></select></div></div><div formGroupName=\"location\"><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'LOCATION' | translate}}</label><div class=\"col-sm-10 col-xs-12 form-group nopadding\"><div [class.col-xs-12]=\"statesVisible === false && regionsVisible === false\" [class.col-xs-6]=\"statesVisible === true && regionsVisible === false\" [class.col-xs-4]=\"statesVisible === true && regionsVisible === true\"><select formControlName=\"location_countries\" class=\"form-control\" (change)=\"showStates()\"><option *ngFor=\"let country of countries\" value=\"{{country[0]}}\">{{country[1]}}</option></select></div><div [class.col-xs-6]=\"regionsVisible === false\" [class.col-xs-4]=\"regionsVisible === true\" *ngIf=\"statesVisible === true\"><select formControlName=\"location_states\" class=\"form-control\" (change)=\"showRegions()\"><option *ngFor=\"let state of states\" value=\"{{state[0]}}\">{{state[1]}}</option></select></div><div class=\"col-xs-4\" *ngIf=\"regionsVisible === true\"><select formControlName=\"location_regions\" class=\"form-control\"><option *ngFor=\"let region of regions\" value=\"{{region[0]}}\">{{region[1]}}</option></select></div></div></div></div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'COLOR SCHEME' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select formControlName=\"color\" class=\"form-control\"><option value=\"red\">{{'RED' | translate}}</option><option value=\"blue\">{{'BLUE' | translate}}</option><option value=\"green\">{{'GREEN' | translate}}</option><option value=\"orange\">{{'ORANGE' | translate}}</option><option value=\"violet\">{{'VIOLET' | translate}}</option><option value=\"pink\">{{'PINK' | translate}}</option><option value=\"darkgreen\">{{'DARK GREEN' | translate}}</option><option value=\"darkblue\">{{'DARK BLUE' | translate}}</option></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 col-xs-12 control-label\">{{'DEBUG MODE' | translate}}</label><div class=\"col-sm-10 col-xs-12\"><select formControlName=\"debug\" class=\"form-control\"><option value=\"ACTIVATED\">{{'ACTIVATED' | translate}}</option><option value=\"DEACTIVATED\">{{'DEACTIVATED' | translate}}</option></select></div></div><div class=\"form-group\"><div class=\"col-sm-2 col-xs-12\"></div><div class=\"col-sm-5 col-xs-6\"><button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">{{'BACK' | translate}}</button></div><div class=\"col-sm-5 col-xs-6\"><button type=\"submit\" class=\"btn btn-default\">{{'SAVE AND EXIT' | translate}}</button></div></div></form></div></div>"

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(332);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecurrencePattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_holidays__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_holidays___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_holidays__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_timezone__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_timezone__);


var RecurrencePattern = (function () {
    function RecurrencePattern(locations, userExclusions, language) {
        this.locations = locations;
        this.userExclusions = userExclusions;
        this.language = language;
    }
    RecurrencePattern.prototype.getCollisions = function (eventData) {
        var collisions = [];
        // check public holidays
        if (this.locations !== undefined) {
            var hd = new __WEBPACK_IMPORTED_MODULE_0_date_holidays__();
            var year = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(eventData.start).year();
            var until = (eventData.repeating.until === undefined)
                ? new Date('2080-12-31') : eventData.repeating.until;
            var untilYear = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(until).year();
            while (year <= untilYear) {
                var holidays = new Array();
                for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
                    var location = _a[_i];
                    hd.init(location.country, location.state, location.region);
                    hd.setLanguages([this.language]);
                    var holidaysOfYear = hd.getHolidays(year);
                    for (var _b = 0, holidaysOfYear_1 = holidaysOfYear; _b < holidaysOfYear_1.length; _b++) {
                        var hol = holidaysOfYear_1[_b];
                        if (hol.type === 'public') {
                            holidays.push(hol);
                        }
                    }
                }
                if (this.locations.length > 1) {
                    holidays.sort(function (holiday1, holiday2) { return holiday1.start - holiday2.start; });
                    holidays = this.removeDuplicates(holidays, 'date');
                }
                for (var _c = 0, holidays_1 = holidays; _c < holidays_1.length; _c++) {
                    var holiday = holidays_1[_c];
                    if (holiday.type === 'public'
                        && __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(holiday.date).isBefore(eventData.start, 'days') === false
                        && __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(holiday.date).isAfter(until, 'days') === false) {
                        var d = holiday.start;
                        var length = this.daysBetween(eventData.start, eventData.end);
                        for (var i = 0; i < length; i++) {
                            var isMatchResult = this.isMatch(eventData, d);
                            if (isMatchResult.match === true) {
                                var pushDate = holiday.start;
                                var h = eventData.start.getHours();
                                var m = eventData.start.getMinutes();
                                var s = eventData.start.getSeconds();
                                var ms = eventData.start.getMilliseconds();
                                pushDate.setHours(h, m, s, ms);
                                if (collisions.length > 0) {
                                    if (__WEBPACK_IMPORTED_MODULE_1_moment_timezone__(collisions[collisions.length - 1].date).isSame(new Date(holiday.date), 'days') === false) {
                                        collisions.push({ date: pushDate, reason: holiday.name });
                                    }
                                }
                                else {
                                    collisions.push({ date: pushDate, reason: holiday.name });
                                }
                            }
                            if (isMatchResult.break === true) {
                                return collisions;
                            }
                            d = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(d).subtract(1, 'days').toDate();
                        }
                    }
                }
                year++;
            }
        }
        // check dates excluded by user
        if (this.userExclusions !== undefined) {
            var until = (eventData.repeating.until === undefined)
                ? new Date('2080-12-31') : eventData.repeating.until;
            for (var _d = 0, _e = this.userExclusions; _d < _e.length; _d++) {
                var exDate = _e[_d];
                if (+until >= +this.dateWithoutTime(exDate) && +exDate >= +this.dateWithoutTime(eventData.start)) {
                    var d = exDate;
                    var h = eventData.start.getHours();
                    var m = eventData.start.getMinutes();
                    var s = eventData.start.getSeconds();
                    var ms = eventData.start.getMilliseconds();
                    d.setHours(h, m, s, ms);
                    var length = this.daysBetween(eventData.start, eventData.end);
                    for (var i = 0; i < length; i++) {
                        var isMatchResult = this.isMatch(eventData, this.dateWithoutTime(d));
                        var reason = this.language === 'de' ? 'vom Benutzer ausgeschlossen' : 'excluded by user';
                        if (isMatchResult.match === true) {
                            if (collisions.length > 0) {
                                if (__WEBPACK_IMPORTED_MODULE_1_moment_timezone__(collisions[collisions.length - 1].date).isSame(__WEBPACK_IMPORTED_MODULE_1_moment_timezone__(d).add(i, 'days').toDate(), 'days')
                                    === false) {
                                    collisions.push({ date: __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(d).add(i, 'days').toDate(), reason: reason });
                                }
                            }
                            else {
                                collisions.push({ date: __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(d).add(i, 'days').toDate(), reason: reason });
                            }
                        }
                        if (isMatchResult.break === true) {
                            return collisions;
                        }
                        d = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(d).subtract(1, 'days').toDate();
                    }
                }
            }
        }
        return collisions;
    };
    /**
     * Remove duplicates from array.
     * @param originalArray  array.
     * @return      trimmed array.
     */
    RecurrencePattern.prototype.removeDuplicates = function (originalArray, objKey) {
        var trimmedArray = new Array();
        var values = new Array();
        var value;
        for (var i = 0; i < originalArray.length; i++) {
            value = originalArray[i][objKey];
            if (values.indexOf(value) === -1) {
                trimmedArray.push(originalArray[i]);
                values.push(value);
            }
        }
        return trimmedArray;
    };
    /**
     * Calculates amount of days between two dates.
     * @param start : date  A start date.
     * @param end : date  A ende date.
     * @return      number of days.
     */
    RecurrencePattern.prototype.daysBetween = function (start, end) {
        var a = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(start);
        var b = __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(end);
        return b.diff(a, 'days') + 1;
    };
    /**
     * Remove the time from a date.
     * @param date  A date.
     * @return      The date without time.
     */
    RecurrencePattern.prototype.dateWithoutTime = function (date) {
        date.setHours(0, 0, 0, 0);
        return date;
    };
    /**
     * Convert weekday abbreviation to iso weekday.
     * @param weekday   The abbreviation of the weekday.
     * @return          The iso weekday.
     */
    RecurrencePattern.prototype.getIsoWeekday = function (weekday) {
        var isoWeekday;
        switch (weekday) {
            case 'MO': {
                isoWeekday = 1;
                break;
            }
            case 'TU': {
                isoWeekday = 2;
                break;
            }
            case 'WE': {
                isoWeekday = 3;
                break;
            }
            case 'TH': {
                isoWeekday = 4;
                break;
            }
            case 'FR': {
                isoWeekday = 5;
                break;
            }
            case 'SA': {
                isoWeekday = 6;
                break;
            }
            case 'SU': {
                isoWeekday = 7;
                break;
            }
        }
        return isoWeekday;
    };
    /**
     * Checks if day in week
     * @param weekdays   The String of the weekday.
     * @return          true
     * @return          false
     */
    RecurrencePattern.prototype.isIn = function (weekdays, date) {
        var isoWeekdays = new Array();
        for (var _i = 0, weekdays_1 = weekdays; _i < weekdays_1.length; _i++) {
            var weekday = weekdays_1[_i];
            if (this.getIsoWeekday(weekday) === __WEBPACK_IMPORTED_MODULE_1_moment_timezone__(date).isoWeekday()) {
                return true;
            }
        }
        return false;
    };
    return RecurrencePattern;
}());

//# sourceMappingURL=RecurrencePattern.js.map

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

/**
 * sets the types for the form
 */
//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * This files contains environment specific identifiers
 * that enable environment detection from within the code
 */
/**
 * Server specific environment identifiers
 */
var environment = {
    production: false,
    isElectron: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[638]);
//# sourceMappingURL=main.bundle.js.map