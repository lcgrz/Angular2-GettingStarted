import {Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component ({
    selector: 'ai-star',
    styleUrls: ['app/shared/star.component.css'],
    templateUrl: 'app/shared/star.component.html'
})

export class StarComponent {
    numStars: number = 5;
    allStarsWidth: number = 86;
    @Input() rating: number;
    starWidth: number;   
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * this.allStarsWidth / this.numStars;      
    } 
    
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}