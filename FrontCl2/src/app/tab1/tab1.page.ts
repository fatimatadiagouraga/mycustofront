import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AccueilService } from './accueil.service';
import { ServicesService } from '../Services/services.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  comparaison : any;
  public slideOpts = {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      loop: true,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $,
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-left')
              : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-right')
              : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? 'left' : 'top'
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? 'right' : 'bottom'
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length)
              $shadowBeforeEl[0].style.opacity =
                offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length)
              $shadowAfterEl[0].style.opacity =
                -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(duration);
      },
    },
  };
  liste: any;
  image: any;
  client: any;
  panier : any;
  liste1: any;
  exist : boolean

  constructor(
    private toastController: ToastController,
    private service: AccueilService,
    private services: ServicesService,
    private alert :AlertController,
    private route:Router
  ) {}
  ngOnInit() {
    this.image = this.service.urlImg;
    //recuperer client connecter
    this.client = JSON.parse(localStorage.getItem('Info'));
    this.menujour();
    this.listPanierClt();
  }

  ajouter(id_plat: any, platpanier: any) {
    
    // this.services.deselectPlat(this.client.id_client,id_plat).subscribe(data =>{
    //   if(data){
    //     return this.presentAlert();
    //   }else{
        return this.services.ajoutpanier(id_plat, this.client.id_client, platpanier).subscribe((data) => {
          this.panier = data
          console.log(this.panier.client.id_client);
          // this.listPanierClt();
          this.presentToast('Ajouter au panier avec succès');
        });
      }
      
      
    
  
  menujour() {
    this.services.menuJour().subscribe((data) => {
      this.service.getPlatSer(data['id_menu']).subscribe((data) => {
        this.liste = data;
      });
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'warning'
    });
    toast.present();
  }

  listPanierClt(){
    this.services.panierParClient(this.client.id_client).subscribe(data =>{
      console.log(data);
    })
  }

  deselect(id_client:any,id_plat:any){
    
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Avertissement',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b style="color:#FF0000">Vous avez deja ajouter ce plat dans le panier</b>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ],
    });

    await alert.present();
  }

}
