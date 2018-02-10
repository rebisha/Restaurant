import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
    submitted = false;
    ratings = ['Awesome', 'Very good', 'Good', 'Pretty bad', 'Complete disaster'];
    reviewForm: FormGroup;
    user = {
        name: '',
        comment: '',
        email:'',
        rating: ''
    };


    ngOnInit() {
        this.reviewForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'comment': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'rating': new FormControl('Awesome')
        });
    }

    onSubmit() {
        console.log(this.reviewForm);

        this.submitted = true;
        this.user.name = this.reviewForm.value.name;
        this.user.comment = this.reviewForm.value.comment;
        this.user.email = this.reviewForm.value.email;
        this.user.rating = this.reviewForm.value.rating; 
    }
}
