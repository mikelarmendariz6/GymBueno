import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaactividadesComponent } from './listaactividades.component';

describe('ListaactividadesComponent', () => {
  let component: ListaactividadesComponent;
  let fixture: ComponentFixture<ListaactividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaactividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
