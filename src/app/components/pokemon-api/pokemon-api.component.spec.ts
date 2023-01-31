import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'animate.css';
import { PokemonApiComponent } from './pokemon-api.component';

describe('PokemonApiComponent', () => {
  let component: PokemonApiComponent;
  let fixture: ComponentFixture<PokemonApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
