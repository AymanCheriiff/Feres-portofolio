import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let prevBtn = document.getElementById('prev') as HTMLElement;
    let nextBtn = document.getElementById('next') as HTMLElement;
    let carrousel = document.querySelector('.carrousel') as HTMLElement;
    let items = carrousel.querySelectorAll('.list .item') as NodeListOf<HTMLElement>;
    let indicator = carrousel.querySelector('.indicators') as HTMLElement;
    let dots = indicator.querySelectorAll('.indicators ul li') as NodeListOf<HTMLElement>;

    let active: number = 0;
    let firstPosition: number = 0;
    let lastPosition: number = items.length - 1;
    let autoPlay: ReturnType<typeof setInterval> | undefined;

    const startAutoPlay = (): void => {
      if (autoPlay) {
        clearInterval(autoPlay);
      }
      autoPlay = setInterval(() => {
        nextBtn.click();
      }, 5000);
    }
    startAutoPlay();

    const setSlider = (): void => {
      let itemActiveOld: HTMLElement = carrousel.querySelector('.chosen') as HTMLElement;
      itemActiveOld.classList.remove('chosen');
      items[active].classList.add('chosen');

      let dotActiveOld: HTMLElement | null = indicator.querySelector('.indicators ul li.active');
      if (dotActiveOld) dotActiveOld.classList.remove('active');
      dots[active].classList.add('active');

      indicator.querySelector('.number')!.innerHTML = '0' + (active + 1);
      startAutoPlay();
    }
    setSlider();

    nextBtn.onclick = (): void => {
      active = active + 1 > lastPosition ? 0 : active + 1;
      carrousel.style.setProperty('--calculation', '1');
      setSlider();
    }
    prevBtn.onclick = (): void => {
      active = active - 1 < firstPosition ? lastPosition : active - 1;
      carrousel.style.setProperty('--calculation', '-1');
      setSlider();
      if (autoPlay) {
        clearInterval(autoPlay);
      }
      autoPlay = setInterval(() => {
        nextBtn.click();
      }, 5000);
    }
    dots.forEach((item, position) => {
      item.onclick = (): void => {
        active = position;
        setSlider();
      }
    })
  }


}
