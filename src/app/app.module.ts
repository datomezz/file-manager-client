import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthComponent } from './auth/auth.component';
import { FilesComponent } from './files/files.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule } from "@angular/material/tabs";
import { SideMenuComponent } from './side-menu/side-menu.component';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { FileItemComponent } from './files/file-item/file-item.component';
import { FileFilterComponent } from './files/file-filter/file-filter.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FileUploadComponent } from './files/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FilesComponent,
    SideMenuComponent,
    FileItemComponent,
    FileFilterComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
