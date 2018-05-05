import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FotosProvider } from '../../providers/fotos/fotos';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the FotoComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-comentario',
  templateUrl: 'foto-comentario.html',
})
export class FotoComentarioPage {
  foto: any = {};
  key: String;
  comentario = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fotosProvider: FotosProvider, public formBuilder: FormBuilder) {
    this.foto = this.navParams.data.foto;
    this.key = this.navParams.data.key;

    console.log(this.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoComentarioPage');
    this.foto.comentario.push({ comentario: this.comentario });

    this.fotosProvider.editar(this.key, this.foto);
  }

}
