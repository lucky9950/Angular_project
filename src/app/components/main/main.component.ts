import { ImagesService } from './../../services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private __imagesService: ImagesService){}

  inputValue: string = "dog"

  ngOnInit(): void {
    this.showImages()
  }
  showImages(){
    this.__imagesService.setImages(this.inputValue,1);
  }

}
