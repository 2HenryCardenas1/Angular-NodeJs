export class Usuario {
  public codusuario: number;
  public codrol: number;
  public correo: string;
  public clave : string;

  public reclave ?: string;
  public token : string;

  constructor(cu : number,cr : number,co : string, cl : string,rcl : string){
    this.codusuario = cu;
    this.codrol = cr;
    this.correo=co;
    this.clave=cl;
    this.reclave = rcl;
    this.token = '';
  }
}
