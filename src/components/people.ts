import {Component} from 'angular2/core';

interface Person {
    id: number;
    name: string;
}

@Component({
    selector: "people",
    template:`
    <h1>{{title}}</h1>
    <ul>
        <li *ngFor="#person in people"></li>
    </ul>
    `
})

export class AppComponent {
    title = "People";
    people = PEOPLE;
    
}

var PEOPLE: Person[] = [
    {id: 1, name: "Zachary Ferraro"},
    {id: 2, name: "Brenna Watry"}
]