import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { OwnedProperty } from 'src/app/Model/OwnedProperty';
import { Photo } from 'src/app/Model/Photo';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';
import { OwnedPropertyCardComponent } from './owned-property-card/owned-property-card.component';
import { AddOwnedPropertyComponent } from './add-owned-property/add-owned-property.component';
import { UserService } from 'src/app/Service/user.service';
import { LocalStorageHelper } from 'src/app/API';
import { JsonResult } from 'src/app/Model/JsonResult';

Chart.register(...registerables);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone:true,
  imports:[CommonModule,OwnedPropertyCardComponent,AddOwnedPropertyComponent]
})

export class PortfolioComponent {

  public ownedPropertiesService=inject(OwnedPropertyService);
  private userService=inject(UserService);

  public imageList:Photo[]=[];
  public userID!:string;

  ngOnInit(): void {
    if(localStorage.getItem(LocalStorageHelper.tokenKey)){
      this.userService.validateToken().subscribe({next:(userID:JsonResult)=>{
        this.userID=userID.value;
        this.ownedPropertiesService.getListByUser(userID.value).subscribe(data=>{
          console.log(data)
          this.ownedPropertiesService.ownedPropertyList=data.sort((a,b)=>{
            return b.propertyPrice-a.propertyPrice
          });
          this.RenderChart(data);
        })
      },error:err=>{
        if(err.status===400){
          localStorage.removeItem(LocalStorageHelper.tokenKey);
          return;
        }
      }})
    }
  }
public get getPropertyCount():number{
  return this.ownedPropertiesService.ownedPropertyList.length;
}
public get getPropertyValue():number{
  let sum=0;
  this.ownedPropertiesService.ownedPropertyList.forEach(o=>sum+=o.propertyPrice)
  return sum;
}
public get getPropertyTotalYield():number{
  let sum=0;
  this.ownedPropertiesService.ownedPropertyList.forEach(o=>sum+=o.yield);
  return sum;
}
public get getPropertyAveragePY():number{
  return this.getPropertyTotalYield!=0 ? this.getPropertyValue/this.getPropertyTotalYield : 0;
}
public get getPropertyAverageYieldPercentage():number{
  return this.getPropertyAveragePY!=0 ? 100/this.getPropertyAveragePY*12 : 0;
}
public get getValueOverArea():number{
  if(this.getPropertyCount==0) return 0
  let areaSum=0;
  this.ownedPropertiesService.ownedPropertyList.forEach(o=>areaSum+=o.grossArea);
  return this.getPropertyValue/areaSum;
  
}
public get getYieldOverArea():number{
  if(this.getPropertyCount==0) return 0
  let areaSum=0;
  this.ownedPropertiesService.ownedPropertyList.forEach(o=>areaSum+=o.grossArea);
  return this.getPropertyTotalYield/areaSum;
}
  public RenderChart(data:OwnedProperty[]){
    let groupedProperties:{ name: string; count: number }[]=[];
      groupedProperties = data.reduce<{ name: string; count: number }[]>((acc, property) => {
        const propertyTypeName = property.propertyType.propertyTypeName;
        const existingType = acc.find(item => item.name === propertyTypeName);
        if (existingType) {
            existingType.count++;
        } else {
            acc.push({ name: propertyTypeName, count: 1 });
        }
        return acc;
    }, []);
    const myChart = new Chart("piechar", {
      type: "pie",
      data: {
        labels: groupedProperties.sort((a,b)=>b.count-a.count).map(p=>p.name),
        datasets: [{
          data: groupedProperties.map(p=>p.count),
          backgroundColor: [
            'rgba(139, 195, 74, 1)',
            `rgba(56, 142, 60, 1)`,
            `rgba(13, 71, 161, 1)`,
            `rgba(156, 39, 176, 1)`
          ],
          borderWidth: 1,
          hoverOffset:30
        }]
      },
    });
  }
}



