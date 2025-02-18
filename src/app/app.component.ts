import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { ScrollService } from './scroll.service';
import { SitemapService } from './sitemap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjectOne';
  status: boolean = false;
  public users: any = [];
  private currentUrl: string;
  isPopState: boolean = false;
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private scrollService: ScrollService,
    private sitemapService: SitemapService,
  ) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        // Save the scroll position before navigating
        const [x, y] = this.viewportScroller.getScrollPosition();
        this.scrollService.setScrollPosition(this.currentUrl, [x, y]);
        this.currentUrl = event.url;
        this.isPopState = event.navigationTrigger === 'popstate';
      }
      if (event instanceof NavigationEnd) {
        // Restore the scroll position if navigation was triggered by a back/forward action
        const position = this.scrollService.getScrollPosition(this.currentUrl);
        if (this.isPopState && position) {
          setTimeout(() => this.viewportScroller.scrollToPosition(position), 0);
        } else {
          // Scroll to top for new navigation
          setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]), 0);
        }
      }
      const routes = this.router.config.map((route) =>
        route.path ? `/${route.path}` : ''
      );
      const sitemap = this.sitemapService.generateSitemap(routes);
      console.log('sitemap:', sitemap);
    });
  }
  headerShadow: boolean = false;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 30) {
      this.headerShadow = true;
    } else {
      this.headerShadow = false;
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}