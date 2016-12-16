import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare function toValue(value: string[]): any | any[];
export interface NouiFormatter {
    to(value: any): any;
    from(value: any): any;
}
export declare class DefaultFormatter implements NouiFormatter {
    to(value: any): any;
    from(value: any): any;
}
export declare class NouisliderComponent implements ControlValueAccessor, OnInit {
    private el;
    slider: any;
    handles: any[];
    disabled: boolean;
    behaviour: string;
    connect: boolean[];
    limit: number;
    min: number;
    max: number;
    step: number;
    format: NouiFormatter;
    pageSteps: number;
    config: any;
    ngModel: number | number[];
    keyboard: boolean;
    onKeydown: any;
    formControl: FormControl;
    tooltips: Array<any>;
    change: EventEmitter<any>;
    update: EventEmitter<any>;
    slide: EventEmitter<any>;
    set: EventEmitter<any>;
    start: EventEmitter<any>;
    end: EventEmitter<any>;
    private value;
    private onChange;
    private onTouched;
    constructor(el: ElementRef);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
    private defaultKeyHandler;
}
export declare class NouisliderModule {
}
