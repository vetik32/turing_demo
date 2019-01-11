import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { MetaRoute } from '../../meta-routes';

import { HeaderView } from './header.view';

describe('HeaderView', () => {
  let component: HeaderView;
  let fixture: ComponentFixture<HeaderView>;
  let menuElements: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppMaterialModule],
      declarations: [HeaderView]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate menu with 2 items', () => {
    const menu: Partial<MetaRoute>[] = ['Home', 'About'].map((label) => ({ label, path: label.toLowerCase() }));
    component.menu = menu;

    fixture.detectChanges();

    menuElements = fixture.debugElement.query(By.css('.navigation-items'));

    expect(menuElements.children.length).toEqual(2);
    const menuItem1: DebugElement = menuElements.children[0].query(By.css('a'));
    const menuItem2: DebugElement = menuElements.children[1].query(By.css('a'));

    expect(menuItem1.nativeElement.getAttribute('href')).toEqual('/home');
    expect(menuItem2.nativeElement.getAttribute('href')).toEqual('/about');
  });

  it('should  have toggle sidebar icon which triggers event when clicked', (done) => {
    const tagButton: DebugElement = fixture.debugElement.query(By.css('.sidebar-toggler'));

    expect(tagButton).toBeDefined();

    component.sidenavToggle.subscribe(() => {
      expect(true).toBeTruthy();
      done();
    });

    fixture.detectChanges();

    tagButton.nativeElement.click();
  });
});
