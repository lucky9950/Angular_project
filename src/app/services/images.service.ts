import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  private dataSubject = new BehaviorSubject<any[]>([]);
  imgData = this.dataSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading = this.loadingSubject.asObservable();

  input:string = '';

  accessKey:string = 'IH0d1QLAS8W0H2KcoAnYrw0c7-ToQvnxZrw-v6Kk6RE';
  getImages(page:number):Observable<any>{
    return this.http.get(`https://api.unsplash.com/search/photos?page=${page}&query=${this.input}&client_id=${this.accessKey}`)
  }


  setImages(data:string,page:number){
    this.loadingSubject.next(false)
    this.input = data;
    this.getImages(page).subscribe((img)=>{
      this.dataSubject.next(img.results)
    })
    this.loadingSubject.next(true)
  }

  showMore(page:number){
    this.getImages(page).subscribe((img)=>{
      const currentData = this.dataSubject.value;
      currentData.push(...img.results)
      this.dataSubject.next(currentData);
      })
  }

}
