import {Component, OnChanges, Input, Output, EventEmitter, OnInit } from 'angular2/core';

@Component ({
    selector: 'ai-star',
    styleUrls: ['app/shared/star.component.css'],
    templateUrl: 'app/shared/star.component.html'
})

export class StarComponent implements OnInit{
    numStars: number = 5;
    allStarsWidth: number = 86;
    @Input() rating: number;
    starWidth: number;   
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        console.log("rating = " + this.rating);

        this.starWidth = this.rating * this.allStarsWidth / this.numStars;      
    } 
    
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    
    ngOnInit(): void {
        if(!this.rating)
        {
            throw new Error('rating');
        }
    }
}