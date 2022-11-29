import { Component } from '@angular/core';
import { Routes, CanActivate } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ActivateGuard } from './activate.guard';

export const Approutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, CanActivate: [ActivateGuard] },
];
