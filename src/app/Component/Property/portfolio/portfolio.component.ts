import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { OwnedProperty } from 'src/app/Model/OwnedProperty';
import { Photo } from 'src/app/Model/Photo';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';
import { OwnedPropertyCardComponent } from './owned-property-card/owned-property-card.component';
Chart.register(...registerables);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone:true,
  imports:[CommonModule,OwnedPropertyCardComponent]
})

export class PortfolioComponent {

  private ownedPropertiesService=inject(OwnedPropertyService);

  public ownedPropertyList:OwnedProperty[]=[];
  public imageList:Photo[]=[];

  ngOnInit(): void {
    this.ownedPropertiesService.getList().subscribe(data=>{

      this.ownedPropertyList=data.sort((a,b)=>{
        return b.propertyPrice-a.propertyPrice
      });
      this.RenderChart(data);
    })
  }
public get getPropertyCount():number{
  return this.ownedPropertyList.length;
}
public get getPropertyValue():number{
  let sum=0;
  this.ownedPropertyList.forEach(o=>sum+=o.propertyPrice)
  return sum;
}
public get getPropertyTotalYield():number{
  let sum=0;
  this.ownedPropertyList.forEach(o=>sum+=o.yield);
  return sum;
}
public get getPropertyAveragePY():number{
  return this.getPropertyValue/this.getPropertyTotalYield;
}
public get getPropertyAverageYieldPercentage():number{
  return 100/this.getPropertyAveragePY*12;
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



