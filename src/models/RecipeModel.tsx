import React from 'react';

export default class RecipeModel {
    get id(): string { return this._id; }
    get name(): string { return this._name; }
    get difficulty(): number { return this._difficulty; }

    constructor(private _id: string = 'pouet', private _name: string = '', private _difficulty: number = 0) {

    }
}