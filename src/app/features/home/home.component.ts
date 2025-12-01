import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- <div class="home">
      <h1>Welcome to Learn NgRx</h1>
      <nav>
        <ul>
          <li><a routerLink="/counter">Counter</a></li>
          <li><a routerLink="/products">Products</a></li>
          <li><a routerLink="/orders">Orders</a></li>
        </ul>
      </nav>
    </div> -->
  `,
  styles: [`
    // .home {
    //   padding: 2rem;
    //   text-align: center;
    // }
    // nav ul {
    //   list-style: none;
    //   display: flex;
    //   gap: 1rem;
    //   justify-content: center;
    //   margin-top: 2rem;
    // }
    // a {
    //   padding: 0.5rem 1rem;
    //   background: #007bff;
    //   color: white;
    //   text-decoration: none;
    //   border-radius: 4px;
    // }
    // a:hover {
    //   background: #0056b3;
    // }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
