import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './Gallery/gallery.component';
import { WasteWaterAndSewageComponent } from './services-and-technology/waste-water-and-sewage/waste-water-and-sewage.component';
import { SolidWasteManagementComponent } from './services-and-technology/solid-waste-management/solid-waste-management.component';
import { WaterTreatmentSystemsComponent } from './services-and-technology/water-treatment-systems/water-treatment-systems.component';
import { ProductsAndSparePartsSupplyComponent } from './services-and-technology/products-and-spare-part-supply/products-and-spare-parts-supply.component';
import { EnvironmentalConsultingServiceComponent } from './services-and-technology/environmental-consulting-service/environmental-consulting-service.component';
import { AnnualMaintainanceComponent } from './services-and-technology/annual-maintainance/annual-maintainance.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-watag-technologies-water-solutions', component: AboutComponent },
  { path: 'services-wastewater-management-treatment', component: ServicesAndTechnologyComponent },
  { path: 'contact-watag-technologies', component: ContactComponent },
  { path: 'gallery-wastewater-sewage-water-treatment', component: GalleryComponent },
  { path: 'wastewater-and-sewage-treatment-watag-technologies', component: WasteWaterAndSewageComponent },
  { path: 'water-treatment-systems-solutions-watag-technologies', component: WaterTreatmentSystemsComponent },
  { path: 'solid-waste-management-solutions-watag-technologies', component: SolidWasteManagementComponent },
  { path: 'product-and-spare-parts-supply-solutions-watag-technologies', component: ProductsAndSparePartsSupplyComponent },
  { path: 'environmental-consulting-solutions-watag-technologies', component: EnvironmentalConsultingServiceComponent },
  { path: 'annual-maintenance-wastewater-sewage-watag-technologies', component: AnnualMaintainanceComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
