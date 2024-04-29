import { ImagesService } from './../../services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{
  page:number = 2
  constructor(private __imagesServices:ImagesService){

  }
  images:any = [];
  isNotNull:boolean = true;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.__imagesServices.imgData.subscribe((img) =>{
      this.images = img
      if(img.length == 0){
        this.isNotNull = false
      }
      else{
        this.isNotNull = true
      }
    })
    console.log("isLoading is ",this.isLoading);
    this.__imagesServices.loading.subscribe((load) =>{
      this.isLoading = load
      // console.log(load);
    })

  }

  showMoreImages(){
    this.__imagesServices.showMore(this.page)
    this.page = this.page + 1;
  }

}
