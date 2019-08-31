import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  distancia:any;
  tempo:any;
  velocidade:any;
  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async enviadados(){
    console.log(this.distancia);
    console.log(this.tempo);
    this.velocidade=this.distancia/this.tempo;
    console.log(this.velocidade);

    const alert = await this.alertController.create({
      header: 'Sua velocidade media é: ',
      subHeader: this.velocidade + ' km/h',
       buttons:[{
        text:'OK',
        handler:()=>{
          this.closeModal();
        }
      }]
    });

    await alert.present();
  }



  async closeModal(){
    const onClosedData:string = "Wrapped UP!";
    await this.modalController.dismiss(onClosedData);
  }

}
