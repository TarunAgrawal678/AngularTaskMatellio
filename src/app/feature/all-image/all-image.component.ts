import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from 'src/app/service/image.service';
import { Image } from 'src/app/interface/Image';

@Component({
  selector: 'app-all-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-image.component.html',
  styleUrls: ['./all-image.component.scss']
})
export class AllImageComponent implements OnInit {
  allImages:Array<Image>=[];
  comparisonImages:Array<Image>=[];
  comparisonIds:any={};
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages(){
    this.imageService.getAllImages().subscribe(data=>{
      for(let i=0;i<30;i++){
        this.allImages.push(data[i]);
      }
    })
  }
  addImageToCompare(image:Image){
    this.comparisonImages.push(image);
    this.comparisonIds[image.id]=true;
  }
  removeImageFromCompare(imageId:number){
    delete this.comparisonIds[imageId];
    let index= this.comparisonImages.findIndex(i=>i.id===imageId);
    this.comparisonImages.splice(index,1);
  }
  trackById(index:number, image:Image) {
    return image.id;
   }
}
